"use client"
import { useEffect, useRef, useState } from "react"
import { track } from "@/lib/analytics"
import { waLink } from "@/lib/pricing"
import { clinic, suggestions } from "@/lib/clinicDemo"

const GREETING = `Hello! I'm the AI receptionist at ${clinic.name}. I can tell you about our doctors, timings and fees, or book an appointment. Ask in English or Hindi.`

const ERRORS = {
  offline: "The live demo is offline right now. Message Manish on WhatsApp and he'll show it to you.",
  busy: "The demo is busy. Please try again in a few minutes.",
  failed: "Something went wrong. Please try again.",
}

export default function ClinicAssistantDemo() {
  const [messages, setMessages] = useState([]) // {role, content} sent to the API
  const [booking, setBooking] = useState(null)
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const listRef = useRef(null)

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" })
  }, [messages, loading, error])

  const full = messages.length >= 16

  async function send(text) {
    const content = text.trim().slice(0, 600)
    if (!content || loading || full) return
    const next = [...messages, { role: "user", content }]
    setMessages(next)
    setInput("")
    setError("")
    setLoading(true)
    if (messages.length === 0) track("clinic_demo_start", { first_message: suggestions.includes(content) ? "suggestion" : "typed" })
    try {
      const res = await fetch("/api/clinic-assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || !data.reply) {
        setError(ERRORS[data.error] || ERRORS.failed)
        setMessages(messages) // drop the unanswered message so the user can resend
        setInput(content)
        return
      }
      setMessages([...next, { role: "assistant", content: data.reply }])
      if (data.booking?.ready) {
        setBooking(data.booking)
        track("clinic_demo_booking")
      }
    } catch {
      setError(ERRORS.failed)
      setMessages(messages)
      setInput(content)
    } finally {
      setLoading(false)
    }
  }

  function reset() {
    setMessages([])
    setBooking(null)
    setError("")
    setInput("")
  }

  return (
    <div className="flex h-[520px] max-h-[80vh] sm:h-[600px] flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
      <div className="flex items-center justify-between gap-3 bg-teal-700 px-4 py-3 text-white">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-lg" aria-hidden>🏥</span>
          <div>
            <p className="font-semibold leading-tight">{clinic.name}</p>
            <p className="text-xs text-teal-100">AI receptionist · usually replies in seconds</p>
          </div>
        </div>
        {messages.length > 0 && (
          <button type="button" onClick={reset} className="rounded-md px-2 py-1 text-xs text-teal-100 hover:bg-white/10">
            Start again
          </button>
        )}
      </div>

      <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto bg-[#efeae2] px-4 py-4" aria-live="polite">
        <Bubble role="assistant">{GREETING}</Bubble>
        {messages.map((m, i) => (
          <Bubble key={i} role={m.role}>{m.content}</Bubble>
        ))}
        {loading && (
          <div className="flex">
            <div className="rounded-2xl rounded-tl-sm bg-white px-4 py-3 shadow-sm">
              <span className="sr-only">Typing</span>
              <span className="inline-flex gap-1" aria-hidden>
                {[0, 150, 300].map((d) => (
                  <span key={d} className="h-2 w-2 animate-bounce rounded-full bg-gray-400" style={{ animationDelay: `${d}ms` }} />
                ))}
              </span>
            </div>
          </div>
        )}
        {booking && (
          <div className="rounded-xl border border-teal-600/30 bg-teal-50 p-3 text-sm">
            <p className="font-semibold text-teal-800">📋 Sent to reception (what the clinic would see)</p>
            <dl className="mt-2 grid grid-cols-[auto,1fr] gap-x-3 gap-y-0.5 text-gray-700">
              {[["Patient", booking.name], ["Mobile", booking.mobile], ["Doctor", booking.doctor], ["When", [booking.date, booking.time].filter(Boolean).join(", ")], ["Reason", booking.reason]]
                .filter(([, v]) => v)
                .map(([k, v]) => (
                  <div key={k} className="contents">
                    <dt className="text-gray-500">{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
            </dl>
          </div>
        )}
        {error && (
          <p className="rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-900">
            {error}{" "}
            {error === ERRORS.offline && (
              <a className="font-semibold underline" href={waLink("Hi Manish, I'd like to see the clinic AI receptionist demo.")} target="_blank" rel="noopener noreferrer">
                Open WhatsApp
              </a>
            )}
          </p>
        )}
      </div>

      {messages.length === 0 && (
        <div className="flex gap-2 overflow-x-auto border-t border-black/5 bg-white px-3 py-2">
          {suggestions.map((s) => (
            <button key={s} type="button" onClick={() => send(s)} className="shrink-0 rounded-full border border-teal-700/30 px-3 py-1.5 text-sm text-teal-800 hover:bg-teal-50">
              {s}
            </button>
          ))}
        </div>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault()
          send(input)
        }}
        className="flex items-center gap-2 border-t border-black/10 bg-white p-3"
      >
        <label htmlFor="clinic-demo-input" className="sr-only">Your message</label>
        <input
          id="clinic-demo-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          maxLength={600}
          disabled={full}
          placeholder={full ? "Demo limit reached. Tap Start again." : "Type a message…"}
          autoComplete="off"
          className="min-w-0 flex-1 rounded-full border border-black/15 px-4 py-2.5 text-[15px] outline-none focus:border-teal-600"
        />
        <button
          type="submit"
          disabled={loading || !input.trim() || full}
          className="rounded-full bg-teal-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-teal-800 disabled:opacity-40"
        >
          Send
        </button>
      </form>
    </div>
  )
}

function Bubble({ role, children }) {
  const mine = role === "user"
  return (
    <div className={`flex ${mine ? "justify-end" : ""}`}>
      <p
        className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-[15px] leading-relaxed shadow-sm ${
          mine ? "rounded-tr-sm bg-[#d9fdd3] text-gray-900" : "rounded-tl-sm bg-white text-gray-900"
        }`}
      >
        {children}
      </p>
    </div>
  )
}
