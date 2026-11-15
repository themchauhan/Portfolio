// Best-effort abuse limits for the AI demos (per server instance), so one visitor can't use up
// the Gemini free daily quota. Shared by every demo route, because they share one API key.
const PER_IP = { limit: 20, windowMs: 10 * 60 * 1000 }
const DAILY_LIMIT = 400
const hits = new Map()
let day = { date: '', count: 0 }

export function limited(ip) {
  const now = Date.now()
  const today = new Date().toISOString().slice(0, 10)
  if (day.date !== today) {
    day = { date: today, count: 0 }
    hits.clear()
  }
  if (day.count >= DAILY_LIMIT) return true
  const recent = (hits.get(ip) || []).filter((t) => now - t < PER_IP.windowMs)
  if (recent.length >= PER_IP.limit) return true
  recent.push(now)
  hits.set(ip, recent)
  day.count++
  return false
}

export const clientIp = (req) => (req.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'unknown'

// Chat history from the browser: alternating user/assistant turns, ending with the user's.
export function validMessages(messages, { maxTurns = 16, maxChars = 600 } = {}) {
  if (!Array.isArray(messages) || messages.length === 0 || messages.length > maxTurns) return null
  const clean = []
  for (let i = 0; i < messages.length; i++) {
    const m = messages[i]
    const role = i % 2 === 0 ? 'user' : 'assistant'
    if (!m || m.role !== role || typeof m.content !== 'string') return null
    const content = m.content.trim().slice(0, maxChars)
    if (!content) return null
    clean.push({ role, content })
  }
  return clean.at(-1).role === 'user' ? clean : null
}

export function todayLine() {
  const now = new Date()
  const fmt = (opts) => now.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', ...opts })
  return `Today is ${fmt({ weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}, and the time is ${fmt({ hour: 'numeric', minute: '2-digit' })} (India).`
}
