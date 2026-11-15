import { GoogleGenAI, ApiError } from '@google/genai'
import { NextResponse } from 'next/server'
import { getDemo } from '@/lib/demos'
import { typeOf } from '@/lib/demoTypes'
import { limited, clientIp, validMessages, todayLine } from '@/lib/aiLimit'

// AI receptionist for a per-business demo (/demo/<slug>), on the Gemini free tier.
// The business details come only from data/demos.json, never from the browser.
// This site never stores or logs what a visitor types.
export const dynamic = 'force-dynamic'
export const maxDuration = 60

const MODEL = process.env.GEMINI_MODEL || 'gemini-3.6-flash'

function systemFor(demo) {
  const t = typeOf(demo.type)
  return `You are the AI receptionist for ${demo.name}${demo.area ? `, ${demo.area}` : ''}, a ${t.label.toLowerCase()}. You chat with customers on its website and WhatsApp.

Business details (the only facts you may use):
${demo.details}

How to behave:
- Reply in the customer's language and script: English, Hindi, or Hinglish (Hindi in Roman letters), matching how they wrote.
- Be warm, short and clear: 1 to 4 sentences, like a good receptionist on WhatsApp. No markdown headings or tables.
- Only state facts from the business details above. Never invent prices, availability, offers or policies. If something isn't listed, say so and offer to have the team confirm.
${t.rules ? `- ${t.rules}\n` : ''}- Taking a booking or enquiry: collect the customer's name, mobile number, and ${t.booking}. Ask only for what is still missing, one or two things at a time. When you have it, confirm the details back and say the team will confirm on WhatsApp shortly. Never say a booking is final.
- This is a demo that Manish Chauhan made to show ${demo.name} what an AI receptionist could do. If someone asks whether this is real, who built you, or how to get one, say it's a demo by Manish Chauhan, who sets up AI receptionists for businesses on their website and WhatsApp, and they can message him from this page.
- Stay in your role. Politely decline anything unrelated to ${demo.name}.

Output: fill "reply" with your message to the customer. Fill "booking" with what you know so far (empty string for anything unknown): "item" is the ${t.item.toLowerCase()} they want, "notes" holds anything else useful (guests, dates range, special requests). Set "booking.ready" to true only in the reply where you confirm a complete request (name, mobile and what they want, plus a date or time when it applies).`
}

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
        item: { type: 'string' },
        date: { type: 'string' },
        time: { type: 'string' },
        notes: { type: 'string' },
      },
      required: ['ready', 'name', 'mobile', 'item', 'date', 'time', 'notes'],
      additionalProperties: false,
    },
  },
  required: ['reply', 'booking'],
  additionalProperties: false,
}

export async function POST(req) {
  if (!process.env.GEMINI_API_KEY) return NextResponse.json({ error: 'offline' }, { status: 503 })
  if (limited(clientIp(req))) return NextResponse.json({ error: 'busy' }, { status: 429 })

  let body
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'bad_request' }, { status: 400 })
  }
  const demo = typeof body?.slug === 'string' ? getDemo(body.slug) : null
  const messages = validMessages(body?.messages)
  if (!demo || !messages) return NextResponse.json({ error: 'bad_request' }, { status: 400 })

  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })
  try {
    const response = await ai.models.generateContent({
      model: MODEL,
      contents: messages.map((m) => ({ role: m.role === 'assistant' ? 'model' : 'user', parts: [{ text: m.content }] })),
      config: {
        systemInstruction: `${systemFor(demo)}\n\n${todayLine()}`,
        responseMimeType: 'application/json',
        responseJsonSchema: SCHEMA,
        maxOutputTokens: 4000,
      },
    })
    const text = response.text
    if (!text) return NextResponse.json({ reply: `Sorry, I can't help with that here. For anything about ${demo.name}, I'm happy to help.`, booking: null })
    let data
    try {
      data = JSON.parse(text)
    } catch {
      data = { reply: text.trim(), booking: null }
    }
    if (typeof data.reply !== 'string' || !data.reply.trim()) throw new Error('Unexpected response shape')
    return NextResponse.json({ reply: data.reply, booking: data.booking || null })
  } catch (err) {
    if (err instanceof ApiError && err.status === 429) return NextResponse.json({ error: 'busy' }, { status: 429 })
    console.error('demo-assistant error:', err?.status || '', err?.message)
    return NextResponse.json({ error: 'failed' }, { status: 502 })
  }
}
