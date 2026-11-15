"use client"
import { useEffect, useState } from "react"

const EMPTY = { slug: "", name: "", type: "hotel", area: "", owner: "", details: "", suggestions: "" }
const slugify = (s) => s.toLowerCase().normalize("NFKD").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 60)

function messageFor(demo, type, site) {
  const hi = demo.owner ? `Namaste ${demo.owner} ji` : "Namaste"
  return `${hi}, I'm Manish. I set up AI receptionists for businesses.

I made a free demo for ${demo.name}: it answers your customers about ${type?.noun || "your services"} in seconds, in Hindi or English, even at night, and sends you every booking.

Try it like a customer: ${site}/demo/${demo.slug}

If you like it, I can set it up on your WhatsApp and website. – Manish Chauhan`
}

const input = "mt-1 w-full rounded-lg border border-black/15 bg-white px-3 py-2.5 text-[15px] outline-none focus:border-teal-600"
const label = "block text-sm font-semibold text-[#333]"

export default function DemoBuilder({ types, site }) {
  const [form, setForm] = useState(EMPTY)
  const [slugTouched, setSlugTouched] = useState(false)
  const [url, setUrl] = useState("")
  const [demos, setDemos] = useState([])
  const [status, setStatus] = useState("")
  const [busy, setBusy] = useState("")
  const [copied, setCopied] = useState("")
  const typeByKey = Object.fromEntries(types.map((t) => [t.key, t]))
  const type = typeByKey[form.type]

  async function refresh() {
    const r = await fetch("/api/demo-builder")
    if (r.ok) setDemos((await r.json()).demos)
  }
  useEffect(() => { refresh() }, [])

  const set = (k) => (e) => {
    const v = e.target.value
    setForm((f) => ({ ...f, [k]: v, ...(k === "name" && !slugTouched ? { slug: slugify(v) } : {}) }))
  }

  async function post(payload) {
    const r = await fetch("/api/demo-builder", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) })
    const data = await r.json().catch(() => ({}))
    if (!r.ok) throw new Error(data.error || "Something went wrong.")
    return data
  }

  async function draft() {
    setBusy("draft"); setStatus("")
    try {
      const { details } = await post({ action: "draft", url })
      setForm((f) => ({ ...f, details: f.details ? `${f.details}\n\n${details}` : details }))
      setStatus("Drafted from the website. Check every line, remove anything wrong, and add prices and timings if missing.")
    } catch (e) { setStatus(e.message) } finally { setBusy("") }
  }

  async function save(e) {
    e.preventDefault()
    setBusy("save"); setStatus("")
    try {
      const suggestions = form.suggestions.split("\n").map((s) => s.trim()).filter(Boolean)
      const { demo } = await post({ action: "save", demo: { ...form, suggestions } })
      setStatus(`Saved. Test it at /demo/${demo.slug}, then push to make the live link work.`)
      await refresh()
    } catch (e) { setStatus(e.message) } finally { setBusy("") }
  }

  async function remove(slug) {
    if (!confirm(`Delete the demo for ${slug}? Its link stops working after your next push.`)) return
    await post({ action: "delete", slug })
    await refresh()
  }

  function edit(d) {
    setForm({ ...EMPTY, ...d, suggestions: (d.suggestions || []).join("\n") })
    setSlugTouched(true)
    setStatus(`Editing ${d.name}. Save to update it.`)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  async function copy(text, key) {
    await navigator.clipboard.writeText(text)
    setCopied(key)
    setTimeout(() => setCopied(""), 2000)
  }

  return (
    <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.3fr),minmax(0,1fr)]">
      <form onSubmit={save} className="space-y-5 rounded-2xl bg-white p-6 shadow-sm md:p-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className={label}>Business name
            <input className={input} value={form.name} onChange={set("name")} placeholder="Hotel Shiv Palace" required />
          </label>
          <label className={label}>Type of business
            <select className={input} value={form.type} onChange={set("type")}>
              {types.map((t) => <option key={t.key} value={t.key}>{t.icon} {t.label}</option>)}
            </select>
          </label>
          <label className={label}>Area or city <span className="font-normal text-[#777]">(optional)</span>
            <input className={input} value={form.area} onChange={set("area")} placeholder="Near bus stand, Jaipur" />
          </label>
          <label className={label}>Owner&apos;s first name <span className="font-normal text-[#777]">(optional)</span>
            <input className={input} value={form.owner} onChange={set("owner")} placeholder="Rajesh" />
          </label>
        </div>

        <label className={label}>Link
          <div className="mt-1 flex items-center rounded-lg border border-black/15 bg-[#f7f7f7] text-[15px] focus-within:border-teal-600">
            <span className="shrink-0 pl-3 text-[#777]">/demo/</span>
            <input className="min-w-0 flex-1 rounded-r-lg bg-white px-2 py-2.5 outline-none" value={form.slug} onChange={(e) => { setSlugTouched(true); setForm((f) => ({ ...f, slug: slugify(e.target.value) })) }} placeholder="hotel-shiv-palace" required />
          </div>
        </label>

        <div className="rounded-xl border border-dashed border-teal-700/40 bg-[#f0fdfa] p-4">
          <p className={label}>Draft details from their website <span className="font-normal text-[#777]">(optional)</span></p>
          <div className="mt-2 flex gap-2">
            <input className="min-w-0 flex-1 rounded-lg border border-black/15 bg-white px-3 py-2 text-[15px] outline-none focus:border-teal-600" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://their-website.com" />
            <button type="button" onClick={draft} disabled={!url || busy} className="shrink-0 rounded-lg bg-teal-700 px-4 py-2 text-sm font-semibold text-white disabled:opacity-40">{busy === "draft" ? "Reading…" : "Draft"}</button>
          </div>
          <p className="mt-2 text-xs text-[#666]">Google Maps and Instagram links don&apos;t work here: copy the details from them and paste below.</p>
        </div>

        <label className={label}>Business details (the AI uses only this)
          <textarea className={`${input} min-h-[260px] font-mono text-[14px]`} value={form.details} onChange={set("details")} required
            placeholder={"Timings: 9 am – 9 pm, all days\nRooms: Standard ₹1,800, Deluxe ₹2,800 (with breakfast)\nCheck-in 12 noon, check-out 11 am\nParking: free\nPayment: cash, UPI, card\nAddress: …"} />
          <span className="mt-1 block text-xs font-normal text-[#666]">Prices, timings, services, rules and location. From Google Maps, their website, Justdial or a menu photo. Only real facts: the AI will say anything missing needs the team to confirm.</span>
        </label>

        <label className={label}>Suggested questions <span className="font-normal text-[#777]">(optional, one per line, up to 4)</span>
          <textarea className={`${input} min-h-[100px]`} value={form.suggestions} onChange={set("suggestions")} placeholder={type?.suggestions.join("\n")} />
        </label>

        <div className="flex flex-wrap items-center gap-3">
          <button type="submit" disabled={!!busy} className="rounded-full bg-[#111] px-6 py-3 font-semibold text-white hover:bg-[#0f766e] disabled:opacity-40">{busy === "save" ? "Saving…" : "Save demo"}</button>
          <button type="button" onClick={() => { setForm(EMPTY); setSlugTouched(false); setUrl(""); setStatus("") }} className="rounded-full border border-black/20 px-5 py-3 font-semibold">New</button>
          {status && <p className="text-sm text-[#333]">{status}</p>}
        </div>
      </form>

      <div>
        <h2 className="font-display text-2xl font-extrabold">Your demos ({demos.length})</h2>
        <p className="mt-1 text-sm text-[#666]">New or changed demos go live after you push.</p>
        <ul className="mt-5 space-y-4">
          {demos.map((d) => {
            const t = typeByKey[d.type]
            const msg = messageFor(d, t, site)
            return (
              <li key={d.slug} className="rounded-2xl bg-white p-5 shadow-sm">
                <p className="font-display text-lg font-extrabold">{t?.icon} {d.name}</p>
                <p className="text-sm text-[#666]">{t?.label}{d.area ? ` · ${d.area}` : ""} · {d.created}</p>
                <p className="mt-2 break-all text-sm text-[#0f766e]">{site}/demo/{d.slug}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-sm font-semibold">
                  <a href={`/demo/${d.slug}`} target="_blank" rel="noreferrer" className="rounded-full bg-teal-700 px-3 py-1.5 text-white">Test</a>
                  <button type="button" onClick={() => copy(msg, d.slug)} className="rounded-full border border-teal-700/40 px-3 py-1.5 text-teal-800">{copied === d.slug ? "Copied ✓" : "Copy WhatsApp message"}</button>
                  <button type="button" onClick={() => copy(`${site}/demo/${d.slug}`, `${d.slug}-link`)} className="rounded-full border border-black/15 px-3 py-1.5">{copied === `${d.slug}-link` ? "Copied ✓" : "Copy link"}</button>
                  <button type="button" onClick={() => edit(d)} className="rounded-full border border-black/15 px-3 py-1.5">Edit</button>
                  <button type="button" onClick={() => remove(d.slug)} className="rounded-full px-3 py-1.5 text-red-700">Delete</button>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
