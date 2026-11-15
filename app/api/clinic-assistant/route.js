import { GoogleGenAI, ApiError } from '@google/genai'
import { NextResponse } from 'next/server'
import { clinic } from '@/lib/clinicDemo'

// The clinic AI receptionist demo, on Google's Gemini API free tier.
// Needs GEMINI_API_KEY (from Google AI Studio, no card needed); set it on Vercel.
// GEMINI_MODEL is optional, to switch models without a code change.
// This site never stores or logs what a visitor types (Google may use free-tier chats; the page says so).
export const dynamic = 'force-dynamic'
export const maxDuration = 60

const MODEL = process.env.GEMINI_MODEL || 'gemini-3.6-flash'
const MAX_TURNS = 16 // messages kept per conversation
const MAX_CHARS = 600 // per message

// Best-effort abuse limits (per server instance), so one visitor can't use up the free daily quota.
const PER_IP = { limit: 20, windowMs: 10 * 60 * 1000 }
const DAILY_LIMIT = 400
const hits = new Map()
let day = { date: '', count: 0 }

function limited(ip) {
  const now = Date.now()
  const today = new Date().toISOString().slice(0, 10)
  if (day.date !== today) day = { date: today, count: 0 }
  if (day.count >= DAILY_LIMIT) return true
  const recent = (hits.get(ip) || []).filter((t) => now - t < PER_IP.windowMs)
  if (recent.length >= PER_IP.limit) return true
  recent.push(now)
  hits.set(ip, recent)
  day.count++
  return false
}

const doctorLines = clinic.doctors
  .map((d) => `- ${d.name}, ${d.role}. ${d.days}, ${d.times}. Consultation fee ₹${d.fee}.`)
  .join('\n')

const SYSTEM = `You are the AI receptionist for ${clinic.name}, ${clinic.area}. You chat with patients on the clinic's website and WhatsApp.

Clinic details (the only facts you may use):
Opening hours: ${clinic.hours}
Doctors:
${doctorLines}
Services:
${clinic.services.map((s) => `- ${s}`).join('\n')}
Policies:
${clinic.policies.map((s) => `- ${s}`).join('\n')}
${clinic.phoneNote}.

How to behave:
- Reply in the patient's language and script: English, Hindi, or Hinglish (Hindi in Roman letters), matching how they wrote.
- Be warm, short and clear: 1 to 4 sentences, like a good receptionist on WhatsApp. No markdown headings or tables.
- Only state facts from the clinic details above. If something isn't listed (for example a specialist the clinic doesn't have, or an exact price that isn't given), say so and offer to have the reception team confirm.
- Never diagnose, never suggest medicines or doses, and never interpret symptoms or reports. For health questions, suggest the right doctor here and offer a booking. If anything sounds urgent (chest pain, breathing difficulty, heavy bleeding, unconsciousness, seizure, high fever in an infant under 3 months, severe injury), tell them to call 112 or go to the nearest emergency department now, before anything else.
- Booking an appointment: collect the patient's name, mobile number, which doctor (or the reason, so you can pick the doctor), and preferred date and time within that doctor's timings. Ask only for what is still missing, one or two things at a time. When you have all of it, confirm the details back and say the reception team will confirm the exact slot on WhatsApp shortly.
- This is a live demo on Manish Chauhan's website. If someone asks who built you, or whether their clinic can have this, say Manish builds AI receptionists like this for clinics and businesses, set up with their own details, on their website and WhatsApp, and they can message him from this page.
- Stay in your role. Politely decline anything unrelated to the clinic.

Output: fill "reply" with your message to the patient. Fill "booking" with what you know so far (empty string for anything unknown). Set "booking.ready" to true only in the reply where you confirm a complete booking (name, mobile, doctor, date and time all known).`

const SCHEMA = {
  type: 'object',
  properties: {
    reply: { type: 'string' },
    booking: {
      type: 'object',
      properties: {
        ready: { type: 'boolean' },
        name: { type: 'string' },
        mobile: { type: 'string' },
        doctor: { type: 'string' },
        date: { type: 'string' },
        time: { type: 'string' },
        reason: { type: 'string' },
      },
      required: ['ready', 'name', 'mobile', 'doctor', 'date', 'time', 'reason'],
      additionalProperties: false,
    },
  },
  required: ['reply', 'booking'],
  additionalProperties: false,
}

function validMessages(messages) {
  if (!Array.isArray(messages) || messages.length === 0 || messages.length > MAX_TURNS) return null
  const clean = []
  for (let i = 0; i < messages.length; i++) {
    const m = messages[i]
    const role = i % 2 === 0 ? 'user' : 'assistant'
    if (!m || m.role !== role || typeof m.content !== 'string') return null
    const content = m.content.trim().slice(0, MAX_CHARS)
    if (!content) return null
    clean.push({ role, content })
  }
  return clean.at(-1).role === 'user' ? clean : null
}

function todayLine() {
  const now = new Date()
  const fmt = (opts) => now.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', ...opts })
  return `Today is ${fmt({ weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}, and the time is ${fmt({ hour: 'numeric', minute: '2-digit' })} (India).`
}

export async function POST(req) {
  if (!process.env.GEMINI_API_KEY) {
    return NextResponse.json({ error: 'offline' }, { status: 503 })
  }

  const ip = (req.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'unknown'
  if (limited(ip)) {
    return NextResponse.json({ error: 'busy' }, { status: 429 })
  }

  let body
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'bad_request' }, { status: 400 })
  }
  const messages = validMessages(body?.messages)
  if (!messages) return NextResponse.json({ error: 'bad_request' }, { status: 400 })

  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })
  try {
    const response = await ai.models.generateContent({
      model: MODEL,
      contents: messages.map((m) => ({ role: m.role === 'assistant' ? 'model' : 'user', parts: [{ text: m.content }] })),
      config: {
        systemInstruction: `${SYSTEM}\n\n${todayLine()}`,
        responseMimeType: 'application/json',
        responseJsonSchema: SCHEMA,
        maxOutputTokens: 4000,
      },
    })
    const text = response.text
    if (!text) {
      // Blocked by a safety filter, or an empty reply
      return NextResponse.json({ reply: "Sorry, I can't help with that here. For anything about the clinic, I'm happy to help.", booking: null })
    }
    let data
    try {
      data = JSON.parse(text)
    } catch {
      data = { reply: text.trim(), booking: null } // plain text instead of JSON: still show the reply
    }
    if (typeof data.reply !== 'string' || !data.reply.trim()) throw new Error('Unexpected response shape')
    return NextResponse.json({ reply: data.reply, booking: data.booking || null })
  } catch (err) {
    // 429: the free tier's per-minute or per-day limit is used up
    if (err instanceof ApiError && err.status === 429) return NextResponse.json({ error: 'busy' }, { status: 429 })
    console.error('clinic-assistant error:', err?.status || '', err?.message)
    return NextResponse.json({ error: 'failed' }, { status: 502 })
  }
}
