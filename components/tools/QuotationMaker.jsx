"use client"
import { useMemo, useState } from "react";
import { amountInWords } from "@/lib/amountInWords";
import { track } from "@/lib/analytics";

const money = (n) => new Intl.NumberFormat("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n || 0);
const r2 = (n) => Math.round((n + Number.EPSILON) * 100) / 100;
const uid = () => Math.random().toString(36).slice(2);
const newItem = () => ({ id: uid(), desc: "", qty: "1", unit: "", rate: "", gst: "18" });
const isoDate = (d) => d.toISOString().slice(0, 10);
const nice = (s) => (s ? new Date(s).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) : "");

const today = new Date();
const DEFAULT_TERMS = "1. Prices are valid until the date mentioned above.\n2. 50% advance to confirm the order, balance on delivery.\n3. Delivery timeline as discussed after confirmation.";

export default function QuotationMaker() {
  const [from, setFrom] = useState({ name: "", address: "", phone: "", email: "", gstin: "" });
  const [to, setTo] = useState({ name: "", address: "", phone: "" });
  const [meta, setMeta] = useState({ number: "QT-001", date: isoDate(today), valid: isoDate(new Date(today.getTime() + 15 * 864e5)) });
  const [items, setItems] = useState([newItem()]);
  const [gstOn, setGstOn] = useState(false);
  const [interState, setInterState] = useState(false);
  const [discount, setDiscount] = useState({ value: "", type: "%" });
  const [terms, setTerms] = useState(DEFAULT_TERMS);
  const [shown, setShown] = useState(false);

  const setItem = (id, key, value) => setItems(items.map((it) => (it.id === id ? { ...it, [key]: value } : it)));

  const calc = useMemo(() => {
    const lines = items.map((it) => ({ ...it, amount: r2((Number(it.qty) || 0) * (Number(it.rate) || 0)) }));
    const subtotal = r2(lines.reduce((s, l) => s + l.amount, 0));
    const dv = Number(discount.value) || 0;
    const disc = r2(Math.min(subtotal, discount.type === "%" ? (subtotal * dv) / 100 : dv));
    const ratio = subtotal > 0 ? (subtotal - disc) / subtotal : 0; // discount spread across items before tax
    const tax = gstOn ? r2(lines.reduce((s, l) => s + l.amount * ratio * ((Number(l.gst) || 0) / 100), 0)) : 0;
    const exact = r2(subtotal - disc + tax);
    const total = Math.round(exact);
    return { lines, subtotal, disc, tax, roundOff: r2(total - exact), total };
  }, [items, discount, gstOn]);

  const ready = from.name && to.name && calc.lines.some((l) => l.desc && l.amount > 0);
  const field = "mt-1.5 w-full rounded-md border border-black/20 bg-white px-3 py-2.5 outline-none focus:border-[#ff5a1f] focus:ring-2 focus:ring-[#ff5a1f]/20";
  const label = "block text-sm font-medium";

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault(); setShown(true);
          if (ready) track("generate_quotation", { item_count: calc.lines.filter((l) => l.amount > 0).length, gst: gstOn, discount: calc.disc > 0 });
          setTimeout(() => document.getElementById("quotation")?.scrollIntoView({ behavior: "smooth" }), 50);
        }}
        className="space-y-8 rounded-2xl bg-white p-6 shadow-sm md:p-8 print:hidden"
      >
        <div className="grid gap-8 md:grid-cols-2">
          <fieldset className="space-y-3">
            <legend className="font-display text-lg font-extrabold">From (your business)</legend>
            <label className={label}>Business name<input value={from.name} onChange={(e) => setFrom({ ...from, name: e.target.value })} required className={field} placeholder="Sharma Interiors" /></label>
            <label className={label}>Address<textarea rows={2} value={from.address} onChange={(e) => setFrom({ ...from, address: e.target.value })} className={field} /></label>
            <div className="grid grid-cols-2 gap-3">
              <label className={label}>Phone<input value={from.phone} onChange={(e) => setFrom({ ...from, phone: e.target.value })} className={field} /></label>
              <label className={label}>Email<input type="email" value={from.email} onChange={(e) => setFrom({ ...from, email: e.target.value })} className={field} /></label>
            </div>
            <label className={label}>GSTIN <span className="font-normal text-[#777]">(optional)</span><input value={from.gstin} maxLength={15} onChange={(e) => setFrom({ ...from, gstin: e.target.value.toUpperCase().replace(/\s/g, "") })} className={field} /></label>
          </fieldset>
          <fieldset className="space-y-3">
            <legend className="font-display text-lg font-extrabold">Quotation for (customer)</legend>
            <label className={label}>Customer name<input value={to.name} onChange={(e) => setTo({ ...to, name: e.target.value })} required className={field} placeholder="Mr. Rakesh Gupta" /></label>
            <label className={label}>Address<textarea rows={2} value={to.address} onChange={(e) => setTo({ ...to, address: e.target.value })} className={field} /></label>
            <label className={label}>Phone<input value={to.phone} onChange={(e) => setTo({ ...to, phone: e.target.value })} className={field} /></label>
            <div className="grid grid-cols-3 gap-3">
              <label className={label}>Quote no.<input value={meta.number} onChange={(e) => setMeta({ ...meta, number: e.target.value })} className={field} /></label>
              <label className={label}>Date<input type="date" value={meta.date} onChange={(e) => setMeta({ ...meta, date: e.target.value })} className={field} /></label>
              <label className={label}>Valid until<input type="date" value={meta.valid} onChange={(e) => setMeta({ ...meta, valid: e.target.value })} className={field} /></label>
            </div>
          </fieldset>
        </div>

        <div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="font-display text-lg font-extrabold">Items</p>
            <div className="flex flex-wrap gap-5 text-sm font-medium">
              <label className="flex items-center gap-2"><input type="checkbox" checked={gstOn} onChange={(e) => setGstOn(e.target.checked)} className="h-4 w-4 accent-[#ff5a1f]" />Add GST</label>
              {gstOn && <label className="flex items-center gap-2"><input type="checkbox" checked={interState} onChange={(e) => setInterState(e.target.checked)} className="h-4 w-4 accent-[#ff5a1f]" />Customer in another state (IGST)</label>}
            </div>
          </div>
          <div className="mt-3 space-y-3">
            {items.map((it, i) => (
              <div key={it.id} className={`grid grid-cols-2 gap-2 rounded-lg border border-black/10 p-3 sm:items-end ${gstOn ? "sm:grid-cols-[2.2fr_0.7fr_0.8fr_1fr_0.7fr_auto]" : "sm:grid-cols-[2.2fr_0.7fr_0.8fr_1fr_auto]"}`}>
                <label className="col-span-2 block text-xs font-medium sm:col-span-1">Item / work<input value={it.desc} onChange={(e) => setItem(it.id, "desc", e.target.value)} className={field} placeholder={i === 0 ? "Modular kitchen cabinets" : ""} /></label>
                <label className="block text-xs font-medium">Qty<input type="number" min="0" step="any" value={it.qty} onChange={(e) => setItem(it.id, "qty", e.target.value)} className={field} /></label>
                <label className="block text-xs font-medium">Unit<input value={it.unit} onChange={(e) => setItem(it.id, "unit", e.target.value)} className={field} placeholder="pcs, sq ft" /></label>
                <label className="block text-xs font-medium">Rate (₹)<input type="number" min="0" step="any" value={it.rate} onChange={(e) => setItem(it.id, "rate", e.target.value)} className={field} /></label>
                {gstOn && <label className="block text-xs font-medium">GST %<input type="number" min="0" step="any" list="quote-gst" value={it.gst} onChange={(e) => setItem(it.id, "gst", e.target.value)} className={field} /></label>}
                <button type="button" onClick={() => setItems(items.length > 1 ? items.filter((x) => x.id !== it.id) : items)} className="col-span-2 rounded-md px-3 py-2.5 text-sm text-[#777] hover:text-rose-600 sm:col-span-1" aria-label="Remove item">Remove</button>
              </div>
            ))}
          </div>
          <datalist id="quote-gst"><option value="0" /><option value="5" /><option value="18" /><option value="40" /></datalist>
          <button type="button" onClick={() => setItems([...items, newItem()])} className="mt-3 text-sm font-semibold text-[#ff5a1f] hover:underline">+ Add item</button>
        </div>

        <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-sm font-medium">Discount <span className="font-normal text-[#777]">(optional)</span></p>
            <div className="mt-1.5 flex gap-2">
              <input type="number" min="0" step="any" value={discount.value} onChange={(e) => setDiscount({ ...discount, value: e.target.value })} className={`${field} mt-0`} aria-label="Discount" />
              <select value={discount.type} onChange={(e) => setDiscount({ ...discount, type: e.target.value })} className={`${field} mt-0 w-24`} aria-label="Discount type"><option value="%">%</option><option value="₹">₹</option></select>
            </div>
          </div>
          <label className={label}>Terms &amp; conditions<textarea rows={3} value={terms} onChange={(e) => setTerms(e.target.value)} className={field} /></label>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-black/10 pt-6">
          <p className="text-sm text-[#555]">Total <strong className="text-[#111]">₹{money(calc.total)}</strong>{gstOn ? " incl. GST" : ""}</p>
          <button type="submit" className="rounded-full bg-[#111] px-7 py-3.5 font-semibold text-white hover:bg-[#ff5a1f]">Create quotation</button>
        </div>
        <p className="text-sm text-[#777]">Everything stays in your browser. Nothing you type is sent or saved.</p>
      </form>

      {shown && !ready && <p className="mt-6 text-rose-600 print:hidden">Add your business name, the customer name and at least one item with a rate.</p>}

      {shown && ready && (
        <section id="quotation" className="!py-0 mt-10">
          <div className="mb-6 flex justify-end print:hidden">
            <button onClick={() => { track("print_quotation", { gst: gstOn }); window.print(); }} className="rounded-full bg-[#ff5a1f] px-6 py-3 font-semibold text-white hover:bg-[#111]">Print / Save as PDF</button>
          </div>
          <article className="mx-auto max-w-[860px] border border-black/20 bg-white p-6 text-sm text-black md:p-10 print:max-w-none print:border-0 print:p-0">
            <div className="flex flex-wrap items-start justify-between gap-4 border-b-2 border-black pb-4">
              <div>
                <p className="font-display text-2xl font-extrabold">{from.name}</p>
                {from.address && <p className="mt-1 whitespace-pre-line text-[#444]">{from.address}</p>}
                <p className="text-[#444]">{[from.phone, from.email].filter(Boolean).join(" · ")}</p>
                {from.gstin && <p>GSTIN: <strong>{from.gstin}</strong></p>}
              </div>
              <div className="text-right">
                <p className="font-display text-2xl font-extrabold">QUOTATION</p>
                <p className="mt-1">No: <strong>{meta.number}</strong></p>
                <p>Date: {nice(meta.date)}</p>
                {meta.valid && <p>Valid until: <strong>{nice(meta.valid)}</strong></p>}
              </div>
            </div>

            <div className="mt-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#777]">Quotation for</p>
              <p className="mt-1 font-semibold">{to.name}</p>
              {to.address && <p className="whitespace-pre-line text-[#444]">{to.address}</p>}
              {to.phone && <p className="text-[#444]">{to.phone}</p>}
            </div>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[520px] border-collapse text-left">
                <thead>
                  <tr className="border-y border-black/30 text-xs uppercase tracking-wide text-[#555]">
                    <th className="py-2 pr-2">#</th><th className="py-2 pr-2">Item / work</th><th className="py-2 pr-2 text-right">Qty</th>
                    <th className="py-2 pr-2 text-right">Rate</th>{gstOn && <th className="py-2 pr-2 text-right">GST</th>}<th className="py-2 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {calc.lines.filter((l) => l.desc || l.amount).map((l, i) => (
                    <tr key={l.id} className="border-b border-black/10">
                      <td className="py-2 pr-2">{i + 1}</td><td className="py-2 pr-2">{l.desc}</td>
                      <td className="py-2 pr-2 text-right">{l.qty} {l.unit}</td><td className="py-2 pr-2 text-right">{money(Number(l.rate))}</td>
                      {gstOn && <td className="py-2 pr-2 text-right">{Number(l.gst) || 0}%</td>}<td className="py-2 text-right">{money(l.amount)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="ml-auto mt-6 max-w-xs space-y-1.5">
              <div className="flex justify-between"><span>Subtotal</span><span>₹{money(calc.subtotal)}</span></div>
              {calc.disc > 0 && <div className="flex justify-between"><span>Discount{discount.type === "%" ? ` (${discount.value}%)` : ""}</span><span>− ₹{money(calc.disc)}</span></div>}
              {gstOn && (interState
                ? <div className="flex justify-between"><span>IGST</span><span>₹{money(calc.tax)}</span></div>
                : <>
                    <div className="flex justify-between"><span>CGST</span><span>₹{money(r2(calc.tax / 2))}</span></div>
                    <div className="flex justify-between"><span>SGST</span><span>₹{money(r2(calc.tax - r2(calc.tax / 2)))}</span></div>
                  </>)}
              {calc.roundOff !== 0 && <div className="flex justify-between text-[#555]"><span>Round off</span><span>{calc.roundOff > 0 ? "+" : ""}{money(calc.roundOff)}</span></div>}
              <div className="flex justify-between border-t-2 border-black pt-2 text-base font-bold"><span>Total</span><span>₹{money(calc.total)}</span></div>
            </div>
            <p className="mt-4 text-[#444]">Amount in words: <strong>Rupees {amountInWords(calc.total)} only</strong></p>

            {terms.trim() && (
              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#777]">Terms &amp; conditions</p>
                <p className="mt-1 whitespace-pre-line text-[#444]">{terms}</p>
              </div>
            )}

            <div className="mt-12 flex justify-end">
              <div className="text-center">
                <p className="font-semibold">For {from.name}</p>
                <p className="mt-12 border-t border-black/40 px-8 pt-1 text-[#555]">Authorised signatory</p>
              </div>
            </div>
          </article>
        </section>
      )}
    </div>
  );
}
