import { GoogleGenAI, ApiError } from '@google/genai'
import { NextResponse } from 'next/server'
import { clinic } from '@/lib/clinicDemo'
import { limited, clientIp, validMessages, todayLine } from '@/lib/aiLimit'

// The clinic AI receptionist demo, on Google's Gemini API free tier.
// Needs GEMINI_API_KEY (from Google AI Studio, no card needed); set it on Vercel.
// GEMINI_MODEL is optional, to switch models without a code change.
// This site never stores or logs what a visitor types (Google may use free-tier chats; the page says so).
export const dynamic = 'force-dynamic'
export const maxDuration = 60

const MODEL = process.env.GEMINI_MODEL || 'gemini-3.6-flash'

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

export async function POST(req) {
  if (!process.env.GEMINI_API_KEY) {
    return NextResponse.json({ error: 'offline' }, { status: 503 })
  }

  if (limited(clientIp(req))) {
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
