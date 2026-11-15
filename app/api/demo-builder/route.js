import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { GoogleGenAI } from '@google/genai'
import { NextResponse } from 'next/server'
import { RESERVED_SLUGS, SLUG_RE } from '@/lib/demos'
import { demoTypeKeys } from '@/lib/demoTypes'

// Local-only API for the demo builder (/demo/builder): saves demos to data/demos.json and drafts
// business details from a website. Returns 404 anywhere except `npm run dev` on your own computer.
export const dynamic = 'force-dynamic'

const FILE = path.join(process.cwd(), 'data', 'demos.json')
const devOnly = () => process.env.NODE_ENV !== 'development'
const notFound = () => NextResponse.json({ error: 'not_found' }, { status: 404 })

async function load() {
  return JSON.parse(await readFile(FILE, 'utf8'))
}
async function save(demos) {
  await writeFile(FILE, `${JSON.stringify(demos, null, 2)}\n`)
}

const clean = (v, max) => (typeof v === 'string' ? v.trim().slice(0, max) : '')

export async function GET() {
  if (devOnly()) return notFound()
  return NextResponse.json({ demos: Object.values(await load()) })
}

export async function POST(req) {
  if (devOnly()) return notFound()
  const body = await req.json().catch(() => ({}))

  if (body.action === 'save') {
    const d = body.demo || {}
    const demo = {
      slug: clean(d.slug, 60).toLowerCase(),
      name: clean(d.name, 80),
      type: demoTypeKeys.includes(d.type) ? d.type : 'other',
      area: clean(d.area, 100),
      owner: clean(d.owner, 40),
      details: clean(d.details, 8000),
      suggestions: (Array.isArray(d.suggestions) ? d.suggestions : []).map((s) => clean(s, 80)).filter(Boolean).slice(0, 4),
      created: new Date().toISOString().slice(0, 10),
    }
    if (!SLUG_RE.test(demo.slug) || demo.slug.length < 3 || RESERVED_SLUGS.includes(demo.slug)) return NextResponse.json({ error: 'Use a link name of 3+ letters, numbers and dashes, like hotel-shiv-palace.' }, { status: 400 })
    if (!demo.name || demo.details.length < 40) return NextResponse.json({ error: 'Add the business name and at least a few lines of details.' }, { status: 400 })
    const demos = await load()
    if (demos[demo.slug]?.created) demo.created = demos[demo.slug].created
    demos[demo.slug] = demo
    await save(demos)
    return NextResponse.json({ ok: true, demo })
  }

  if (body.action === 'delete') {
    const demos = await load()
    delete demos[body.slug]
    await save(demos)
    return NextResponse.json({ ok: true })
  }

  if (body.action === 'draft') {
    if (!process.env.GEMINI_API_KEY) return NextResponse.json({ error: 'Add GEMINI_API_KEY to .env.local to draft details automatically.' }, { status: 400 })
    let url
    try {
      url = new URL(body.url)
      if (!['http:', 'https:'].includes(url.protocol)) throw new Error()
    } catch {
      return NextResponse.json({ error: 'Paste a full website address, starting with https://' }, { status: 400 })
    }
    let html
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (demo builder)' }, signal: AbortSignal.timeout(15000), redirect: 'follow' })
      html = await res.text()
    } catch {
      return NextResponse.json({ error: "Couldn't open that website. Copy the details from it and paste them instead." }, { status: 400 })
    }
    const text = html
      .replace(/<(script|style|noscript|svg)[\s\S]*?<\/\1>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 20000)
    if (text.length < 200) return NextResponse.json({ error: 'That page has almost no text (it may load with JavaScript). Paste the details instead.' }, { status: 400 })

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })
    try {
      const r = await ai.models.generateContent({
        model: process.env.GEMINI_MODEL || 'gemini-3.6-flash',
        contents: [{ role: 'user', parts: [{ text: `Website text:\n\n${text}` }] }],
        config: {
          systemInstruction: 'From this business website text, write the facts a receptionist would need, as short plain-text lines grouped under simple headings (Timings, Services and prices, Rooms/Menu/Courses/Doctors as relevant, Policies, Location and contact). Use only facts that are clearly stated in the text. Do not invent or estimate anything. No markdown symbols except "-" for list items.',
          maxOutputTokens: 3000,
        },
      })
      return NextResponse.json({ details: (r.text || '').trim() })
    } catch (err) {
      return NextResponse.json({ error: `The AI couldn't draft it (${err?.status || 'error'}). Paste the details instead.` }, { status: 502 })
    }
  }

  return NextResponse.json({ error: 'bad_request' }, { status: 400 })
}
