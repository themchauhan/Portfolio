"use client"
import { useMemo, useState } from "react";
import { amountInWords } from "@/lib/amountInWords";

const inr = (n) => new Intl.NumberFormat("en-IN").format(Number(n) || 0);
const monthLabel = (d) => d.toLocaleDateString("en-IN", { month: "long", year: "numeric" });
const dateLabel = (d) => d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });

const now = new Date();
const fyStart = now.getMonth() >= 3 ? now.getFullYear() : now.getFullYear() - 1; // Indian FY starts in April
const initial = {
  tenant: "",
  landlord: "",
  landlordPan: "",
  address: "",
  rent: "",
  from: `${fyStart}-04`,
  to: `${fyStart + 1}-03`,
  mode: "Bank transfer",
};

export default function RentReceiptGenerator() {
  const [f, setF] = useState(initial);
  const [shown, setShown] = useState(false);
  const set = (e) => setF({ ...f, [e.target.name]: e.target.value });

  const receipts = useMemo(() => {
    const [fy, fm] = f.from.split("-").map(Number);
    const [ty, tm] = f.to.split("-").map(Number);
    if (!fy || !ty) return [];
    const list = [];
    let y = fy, m = fm;
    while ((y < ty || (y === ty && m <= tm)) && list.length < 24) {
      const lastDay = new Date(y, m, 0); // last day of month m
      list.push({ month: monthLabel(new Date(y, m - 1, 1)), date: dateLabel(lastDay), key: `${y}-${m}` });
      m++; if (m > 12) { m = 1; y++; }
    }
    return list;
  }, [f.from, f.to]);

  const annual = (Number(f.rent) || 0) * receipts.length;
  const needsPan = (Number(f.rent) || 0) * 12 > 100000;
  const ready = f.tenant && f.landlord && f.address && Number(f.rent) > 0 && receipts.length > 0;

  const field = "mt-1.5 w-full rounded-md border border-black/20 bg-white px-4 py-3 outline-none focus:border-[#ff5a1f] focus:ring-2 focus:ring-[#ff5a1f]/20";

  return (
    <div>
      <form
        onSubmit={(e) => { e.preventDefault(); setShown(true); setTimeout(() => document.getElementById("receipts")?.scrollIntoView({ behavior: "smooth" }), 50); }}
        className="grid gap-5 rounded-2xl bg-white p-6 shadow-sm md:grid-cols-2 md:p-8 print:hidden"
      >
        <label className="block text-sm font-medium">Tenant name
          <input name="tenant" value={f.tenant} onChange={set} required className={field} placeholder="Rahul Sharma" />
        </label>
        <label className="block text-sm font-medium">Landlord name
          <input name="landlord" value={f.landlord} onChange={set} required className={field} placeholder="Suresh Yadav" />
        </label>
        <label className="block text-sm font-medium md:col-span-2">Rented property address
          <input name="address" value={f.address} onChange={set} required className={field} placeholder="House 12, Model Town, Rewari, Haryana" />
        </label>
        <label className="block text-sm font-medium">Monthly rent (₹)
          <input name="rent" type="number" min="1" value={f.rent} onChange={set} required className={field} placeholder="12000" />
        </label>
        <label className="block text-sm font-medium">Landlord PAN <span className="font-normal text-[#777]">{needsPan ? "(required: rent over ₹1 lakh/year)" : "(optional)"}</span>
          <input name="landlordPan" value={f.landlordPan} onChange={(e) => setF({ ...f, landlordPan: e.target.value.toUpperCase() })} required={needsPan} maxLength={10} className={field} placeholder="ABCDE1234F" />
        </label>
        <label className="block text-sm font-medium">From month
          <input name="from" type="month" value={f.from} onChange={set} required className={field} />
        </label>
        <label className="block text-sm font-medium">To month
          <input name="to" type="month" value={f.to} onChange={set} required className={field} />
        </label>
        <label className="block text-sm font-medium">Payment mode
          <select name="mode" value={f.mode} onChange={set} className={field}>
            <option>Bank transfer</option><option>UPI</option><option>Cheque</option><option>Cash</option>
          </select>
        </label>
        <div className="flex items-end">
          <button type="submit" className="w-full rounded-full bg-[#111] px-6 py-3.5 font-semibold text-white hover:bg-[#ff5a1f]">
            Generate {receipts.length || ""} receipts
          </button>
        </div>
        <p className="text-sm text-[#777] md:col-span-2">Everything stays in your browser. Nothing you type is sent or saved.</p>
      </form>

      {shown && ready && (
        <section id="receipts" className="!py-0 mt-10">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4 print:hidden">
            <p className="text-lg"><strong>{receipts.length}</strong> receipts · Total rent <strong>₹{inr(annual)}</strong></p>
            <button onClick={() => window.print()} className="rounded-full bg-[#ff5a1f] px-6 py-3 font-semibold text-white hover:bg-[#111]">Print / Save as PDF</button>
          </div>
          {f.mode === "Cash" && Number(f.rent) > 5000 && (
            <p className="mb-6 border-l-4 border-[#ff5a1f] bg-white p-4 text-sm print:hidden">Cash payments above ₹5,000 usually need a revenue stamp signed by the landlord on each receipt.</p>
          )}
          <div className="grid gap-5 md:grid-cols-2 print:block">
            {receipts.map((r) => (
              <div key={r.key} className="break-inside-avoid rounded-lg border-2 border-dashed border-black/25 bg-white p-6 text-[15px] leading-relaxed print:mb-6 print:rounded-none">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-xl font-extrabold">Rent Receipt</h3>
                  <span className="text-sm text-[#555]">Date: {r.date}</span>
                </div>
                <p className="mt-4">
                  Received a sum of <strong>₹{inr(f.rent)}</strong> (Rupees {amountInWords(f.rent)} only) from <strong>{f.tenant}</strong> towards the rent of the property at <strong>{f.address}</strong> for the month of <strong>{r.month}</strong>, paid by {f.mode.toLowerCase()}.
                </p>
                <div className="mt-6 flex items-end justify-between gap-4 text-sm">
                  <div>
                    <p className="font-semibold">{f.landlord}</p>
                    <p className="text-[#555]">Landlord{f.landlordPan ? ` · PAN: ${f.landlordPan}` : ""}</p>
                  </div>
                  <div className="text-right">
                    {f.mode === "Cash" && Number(f.rent) > 5000 && <div className="mb-2 ml-auto h-12 w-12 border border-dashed border-black/40 text-[10px] leading-[48px] text-center text-[#777]">Stamp</div>}
                    <p className="border-t border-black/40 pt-1 text-[#555]">Signature</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
      {shown && !ready && <p className="mt-6 text-rose-600 print:hidden">Please fill in all required fields.</p>}
    </div>
  );
}
