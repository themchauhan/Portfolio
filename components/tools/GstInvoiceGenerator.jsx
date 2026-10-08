"use client"
import { useMemo, useState } from "react";
import { amountInWords } from "@/lib/amountInWords";

// GST state codes (first two digits of a GSTIN).
const STATES = [
  ["01", "Jammu & Kashmir"], ["02", "Himachal Pradesh"], ["03", "Punjab"], ["04", "Chandigarh"], ["05", "Uttarakhand"],
  ["06", "Haryana"], ["07", "Delhi"], ["08", "Rajasthan"], ["09", "Uttar Pradesh"], ["10", "Bihar"], ["11", "Sikkim"],
  ["12", "Arunachal Pradesh"], ["13", "Nagaland"], ["14", "Manipur"], ["15", "Mizoram"], ["16", "Tripura"], ["17", "Meghalaya"],
  ["18", "Assam"], ["19", "West Bengal"], ["20", "Jharkhand"], ["21", "Odisha"], ["22", "Chhattisgarh"], ["23", "Madhya Pradesh"],
  ["24", "Gujarat"], ["26", "Dadra & Nagar Haveli and Daman & Diu"], ["27", "Maharashtra"], ["29", "Karnataka"], ["30", "Goa"],
  ["31", "Lakshadweep"], ["32", "Kerala"], ["33", "Tamil Nadu"], ["34", "Puducherry"], ["35", "Andaman & Nicobar Islands"],
  ["36", "Telangana"], ["37", "Andhra Pradesh"], ["38", "Ladakh"],
];
const GSTIN_RE = /^\d{2}[A-Z]{5}\d{4}[A-Z][1-9A-Z]Z[0-9A-Z]$/;

const money = (n) => new Intl.NumberFormat("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n || 0);
const r2 = (n) => Math.round((n + Number.EPSILON) * 100) / 100;
const today = new Date().toISOString().slice(0, 10);
const newItem = () => ({ id: Math.random().toString(36).slice(2), desc: "", hsn: "", qty: "1", rate: "", gst: "18" });

export default function GstInvoiceGenerator() {
  const [seller, setSeller] = useState({ name: "", address: "", gstin: "", state: "06" });
  const [buyer, setBuyer] = useState({ name: "", address: "", gstin: "", state: "06" });
  const [meta, setMeta] = useState({ number: "INV-001", date: today });
  const [items, setItems] = useState([newItem()]);
  const [shown, setShown] = useState(false);

  // A valid GSTIN tells us the state, so pick it automatically.
  const withGstin = (obj, set) => (e) => {
    const gstin = e.target.value.toUpperCase().replace(/\s/g, "");
    const code = gstin.slice(0, 2);
    set({ ...obj, gstin, ...(STATES.some(([c]) => c === code) ? { state: code } : {}) });
  };
  const setItem = (id, key, value) => setItems(items.map((it) => (it.id === id ? { ...it, [key]: value } : it)));

  const interState = seller.state !== buyer.state;
  const calc = useMemo(() => {
    const lines = items.map((it) => {
      const taxable = r2((Number(it.qty) || 0) * (Number(it.rate) || 0));
      const tax = r2((taxable * (Number(it.gst) || 0)) / 100);
      return { ...it, taxable, tax };
    });
    const taxable = r2(lines.reduce((s, l) => s + l.taxable, 0));
    const tax = r2(lines.reduce((s, l) => s + l.tax, 0));
    const exact = r2(taxable + tax);
    const total = Math.round(exact);
    return { lines, taxable, tax, roundOff: r2(total - exact), total };
  }, [items]);

  const stateName = (code) => STATES.find(([c]) => c === code)?.[1] || "";
  const badGstin = (g) => g && !GSTIN_RE.test(g);
  const ready = seller.name && buyer.name && calc.lines.some((l) => l.desc && l.taxable > 0);

  const field = "mt-1.5 w-full rounded-md border border-black/20 bg-white px-3 py-2.5 outline-none focus:border-[#ff5a1f] focus:ring-2 focus:ring-[#ff5a1f]/20";
  const Party = ({ title, v, set }) => (
    <fieldset className="space-y-3">
      <legend className="font-display text-lg font-extrabold">{title}</legend>
      <label className="block text-sm font-medium">Name<input value={v.name} onChange={(e) => set({ ...v, name: e.target.value })} className={field} required /></label>
      <label className="block text-sm font-medium">Address<textarea rows={2} value={v.address} onChange={(e) => set({ ...v, address: e.target.value })} className={field} /></label>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block text-sm font-medium">GSTIN <span className="font-normal text-[#777]">(optional)</span>
          <input value={v.gstin} onChange={withGstin(v, set)} maxLength={15} className={field} placeholder="06ABCDE1234F1Z5" />
          {badGstin(v.gstin) && <span className="mt-1 block text-xs text-rose-600">This doesn&apos;t look like a valid GSTIN.</span>}
        </label>
        <label className="block text-sm font-medium">State
          <select value={v.state} onChange={(e) => set({ ...v, state: e.target.value })} className={field}>
            {STATES.map(([c, n]) => <option key={c} value={c}>{n}</option>)}
          </select>
        </label>
      </div>
    </fieldset>
  );

  return (
    <div>
      <form
        onSubmit={(e) => { e.preventDefault(); setShown(true); setTimeout(() => document.getElementById("invoice")?.scrollIntoView({ behavior: "smooth" }), 50); }}
        className="space-y-8 rounded-2xl bg-white p-6 shadow-sm md:p-8 print:hidden"
      >
        <div className="grid gap-8 md:grid-cols-2">
          {Party({ title: "Your business (seller)", v: seller, set: setSeller })}
          {Party({ title: "Bill to (buyer)", v: buyer, set: setBuyer })}
        </div>

        <div className="grid gap-3 sm:grid-cols-2 md:w-1/2">
          <label className="block text-sm font-medium">Invoice number<input value={meta.number} onChange={(e) => setMeta({ ...meta, number: e.target.value })} className={field} /></label>
          <label className="block text-sm font-medium">Invoice date<input type="date" value={meta.date} onChange={(e) => setMeta({ ...meta, date: e.target.value })} className={field} /></label>
        </div>

        <div>
          <p className="font-display text-lg font-extrabold">Items</p>
          <datalist id="gst-rates"><option value="0" /><option value="3" /><option value="5" /><option value="18" /><option value="40" /></datalist>
          <div className="mt-3 space-y-3">
            {items.map((it, i) => (
              <div key={it.id} className="grid grid-cols-2 gap-2 rounded-lg border border-black/10 p-3 sm:grid-cols-[2fr_1fr_0.7fr_1fr_0.8fr_auto] sm:items-end">
                <label className="col-span-2 block text-xs font-medium sm:col-span-1">Description<input value={it.desc} onChange={(e) => setItem(it.id, "desc", e.target.value)} className={field} placeholder={i === 0 ? "Cold coffee" : ""} /></label>
                <label className="block text-xs font-medium">HSN/SAC<input value={it.hsn} onChange={(e) => setItem(it.id, "hsn", e.target.value)} className={field} /></label>
                <label className="block text-xs font-medium">Qty<input type="number" min="0" step="any" value={it.qty} onChange={(e) => setItem(it.id, "qty", e.target.value)} className={field} /></label>
                <label className="block text-xs font-medium">Rate (₹)<input type="number" min="0" step="any" value={it.rate} onChange={(e) => setItem(it.id, "rate", e.target.value)} className={field} /></label>
                <label className="block text-xs font-medium">GST %<input type="number" min="0" step="any" list="gst-rates" value={it.gst} onChange={(e) => setItem(it.id, "gst", e.target.value)} className={field} /></label>
                <button type="button" onClick={() => setItems(items.length > 1 ? items.filter((x) => x.id !== it.id) : items)} className="col-span-2 rounded-md px-3 py-2.5 text-sm text-[#777] hover:text-rose-600 sm:col-span-1" aria-label="Remove item">Remove</button>
              </div>
            ))}
          </div>
          <button type="button" onClick={() => setItems([...items, newItem()])} className="mt-3 text-sm font-semibold text-[#ff5a1f] hover:underline">+ Add item</button>
          <p className="mt-2 text-xs text-[#777]">Main GST rates since 22 Sept 2025: 0%, 5%, 18% and 40%. Restaurant food is usually 5%. Check the rate for your item.</p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-black/10 pt-6">
          <p className="text-sm text-[#555]">{interState ? "Different states: IGST applies." : "Same state: CGST + SGST apply."} Total <strong className="text-[#111]">₹{money(calc.total)}</strong></p>
          <button type="submit" className="rounded-full bg-[#111] px-7 py-3.5 font-semibold text-white hover:bg-[#ff5a1f]">Create invoice</button>
        </div>
        <p className="text-sm text-[#777]">Everything stays in your browser. Nothing you type is sent or saved.</p>
      </form>

      {shown && !ready && <p className="mt-6 text-rose-600 print:hidden">Add seller and buyer names and at least one item with a rate.</p>}

      {shown && ready && (
        <section id="invoice" className="!py-0 mt-10">
          <div className="mb-6 flex justify-end print:hidden">
            <button onClick={() => window.print()} className="rounded-full bg-[#ff5a1f] px-6 py-3 font-semibold text-white hover:bg-[#111]">Print / Save as PDF</button>
          </div>
          <div className="rounded-lg border border-black/20 bg-white p-6 text-sm text-[#111] md:p-10 print:rounded-none print:border-0 print:p-0">
            <div className="flex flex-wrap items-start justify-between gap-4 border-b-2 border-[#111] pb-4">
              <div>
                <p className="font-display text-2xl font-extrabold">{seller.name}</p>
                {seller.address && <p className="mt-1 whitespace-pre-line text-[#444]">{seller.address}</p>}
                {seller.gstin && <p className="mt-1">GSTIN: <strong>{seller.gstin}</strong></p>}
                <p className="text-[#444]">State: {stateName(seller.state)} ({seller.state})</p>
              </div>
              <div className="text-right">
                <p className="font-display text-2xl font-extrabold">TAX INVOICE</p>
                <p className="mt-1">No: <strong>{meta.number}</strong></p>
                <p>Date: {new Date(meta.date).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}</p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#777]">Bill to</p>
              <p className="mt-1 font-semibold">{buyer.name}</p>
              {buyer.address && <p className="whitespace-pre-line text-[#444]">{buyer.address}</p>}
              {buyer.gstin && <p>GSTIN: <strong>{buyer.gstin}</strong></p>}
              <p className="text-[#444]">Place of supply: {stateName(buyer.state)} ({buyer.state})</p>
            </div>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left">
                <thead>
                  <tr className="border-y border-black/30 text-xs uppercase tracking-wide text-[#555]">
                    <th className="py-2 pr-2">#</th><th className="py-2 pr-2">Item</th><th className="py-2 pr-2">HSN/SAC</th>
                    <th className="py-2 pr-2 text-right">Qty</th><th className="py-2 pr-2 text-right">Rate</th>
                    <th className="py-2 pr-2 text-right">Taxable</th><th className="py-2 pr-2 text-right">GST</th>
                  </tr>
                </thead>
                <tbody>
                  {calc.lines.filter((l) => l.desc || l.taxable).map((l, i) => (
                    <tr key={l.id} className="border-b border-black/10">
                      <td className="py-2 pr-2">{i + 1}</td><td className="py-2 pr-2">{l.desc}</td><td className="py-2 pr-2">{l.hsn}</td>
                      <td className="py-2 pr-2 text-right">{l.qty}</td><td className="py-2 pr-2 text-right">{money(Number(l.rate))}</td>
                      <td className="py-2 pr-2 text-right">{money(l.taxable)}</td><td className="py-2 pr-2 text-right">{Number(l.gst) || 0}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 ml-auto max-w-xs space-y-1.5">
              <div className="flex justify-between"><span>Taxable value</span><span>₹{money(calc.taxable)}</span></div>
              {interState ? (
                <div className="flex justify-between"><span>IGST</span><span>₹{money(calc.tax)}</span></div>
              ) : (
                <>
                  <div className="flex justify-between"><span>CGST</span><span>₹{money(r2(calc.tax / 2))}</span></div>
                  <div className="flex justify-between"><span>SGST</span><span>₹{money(r2(calc.tax - r2(calc.tax / 2)))}</span></div>
                </>
              )}
              {calc.roundOff !== 0 && <div className="flex justify-between text-[#555]"><span>Round off</span><span>{calc.roundOff > 0 ? "+" : ""}{money(calc.roundOff)}</span></div>}
              <div className="flex justify-between border-t-2 border-[#111] pt-2 text-base font-bold"><span>Total</span><span>₹{money(calc.total)}</span></div>
            </div>
            <p className="mt-4 text-[#444]">Amount in words: <strong>Rupees {amountInWords(calc.total)} only</strong></p>

            <div className="mt-12 flex justify-end">
              <div className="text-center">
                <p className="font-semibold">For {seller.name}</p>
                <p className="mt-12 border-t border-black/40 px-8 pt-1 text-[#555]">Authorised signatory</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
