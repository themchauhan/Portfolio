"use client"
import { useState } from "react";

const empty = { name: "", email: "", company: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: `SriJanX enquiry${form.company ? ` - ${form.company}` : ""}`,
          message: `Company: ${form.company || "-"}\n\n${form.message}`,
        }),
      });
      if (!res.ok) throw new Error("failed");
      setForm(empty);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const field =
    "w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm text-slate-700">
          Your name
          <input className={`${field} mt-1.5`} name="name" value={form.name} onChange={onChange} required placeholder="Manish Chauhan" />
        </label>
        <label className="block text-sm text-slate-700">
          Work email
          <input className={`${field} mt-1.5`} type="email" name="email" value={form.email} onChange={onChange} required placeholder="Sri:janx@company.com" />
        </label>
      </div>
      <label className="block text-sm text-slate-700">
        Company <span className="text-slate-400">(optional)</span>
        <input className={`${field} mt-1.5`} name="company" value={form.company} onChange={onChange} placeholder="Sri:janX" />
      </label>
      <label className="block text-sm text-slate-700">
        What paperwork is slowing you down?
        <textarea
          className={`${field} mt-1.5 min-h-[130px] resize-y`}
          name="message"
          value={form.message}
          onChange={onChange}
          required
          placeholder="e.g. We type 200 supplier invoices into Excel every week..."
        />
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-md bg-blue-700 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-800 disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Get my free automation plan"}
      </button>
      <div aria-live="polite" className="min-h-[1.5rem] text-sm">
        {status === "success" && <p className="text-emerald-600">Thanks! I&apos;ll reply within one working day.</p>}
        {status === "error" && <p className="text-rose-600">Something went wrong. Please try again or email me directly.</p>}
      </div>
    </form>
  );
}
