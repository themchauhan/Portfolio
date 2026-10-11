"use client"
import { useMemo, useState } from "react";
import { amountInWords } from "@/lib/amountInWords";
import { track } from "@/lib/analytics";

const inr = (n) => new Intl.NumberFormat("en-IN").format(Number(n) || 0);
const dateLabel = (d) => d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });

const now = new Date();
const fyStart = now.getMonth() >= 3 ? now.getFullYear() : now.getFullYear() - 1; // Indian FY starts in April
const initial = {
  tenant: "",
  houseNo: "",
  address: "",
  rent: "",
  from: `${fyStart}-04`,
  to: `${fyStart + 1}-03`,
  mode: "Bank transfer",
  split: "monthly", // "monthly" = one receipt per month, "single" = one receipt for the whole period
  landlord: "",
  landlordAddress: "",
  landlordPan: "",
};

// Months between two "YYYY-MM" values, inclusive (max 24).
function monthsBetween(from, to) {
  const [fy, fm] = from.split("-").map(Number);
  const [ty, tm] = to.split("-").map(Number);
  if (!fy || !ty) return [];
  const list = [];
  let y = fy, m = fm;
  while ((y < ty || (y === ty && m <= tm)) && list.length < 24) {
    list.push({ start: new Date(y, m - 1, 1), end: new Date(y, m, 0) });
    m++; if (m > 12) { m = 1; y++; }
  }
  return list;
}

// One receipt in the standard "Receipt of House Rent" format.
function Receipt({ no, f, amount, start, end, date }) {
  const stamp = f.mode === "Cash" && amount > 5000;
  const blank = (v) => <span className={`border-b border-black/60 px-0.5 font-semibold ${String(v).length < 22 ? "whitespace-nowrap" : ""}`}>{v}</span>;
  return (
    <article className="mx-auto w-full max-w-[760px] break-inside-avoid border border-black/15 bg-white px-8 py-10 font-serif text-[16px] leading-[2.1] text-black shadow-sm md:px-14 md:py-14 print:max-w-none print:border-0 print:px-4 print:py-6 print:shadow-none print:break-after-page">
      <div className="flex items-start justify-between text-sm">
        <span>Receipt No. {no}</span>
        <span>Date: {dateLabel(date)}</span>
      </div>
      <h3 className="mt-6 text-center text-xl font-bold tracking-wide underline-offset-4">RECEIPT OF HOUSE RENT</h3>

      <p className="mt-8 text-justify">
        Hereby, I acknowledge that I have received a sum of Rs. {blank(inr(amount))} (Rupees {blank(`${amountInWords(amount)} only`)}) from {blank(f.tenant)} towards the rent @ Rs. {blank(inr(f.rent))} per month from {blank(dateLabel(start))} to {blank(dateLabel(end))} in respect of House No. {blank(f.houseNo || "—")} situated at {blank(f.address)}, paid by {blank(f.mode)}.
      </p>

      <div className="mt-14 flex items-end justify-between gap-6">
        <p>Date: {dateLabel(date)}</p>
        <div className="text-right">
          {stamp && <div className="mb-3 ml-auto flex h-16 w-16 items-center justify-center border border-dashed border-black/50 text-[11px] leading-tight text-black/60">Revenue<br />Stamp</div>}
          <p className="mt-10">Signature of the House Owner</p>
        </div>
      </div>

      <dl className="ml-auto mt-10 max-w-sm space-y-1">
        <div className="flex gap-2"><dt className="shrink-0">Name of Owner:</dt><dd className="flex-1 border-b border-black/60 font-semibold">{f.landlord}</dd></div>
        <div className="flex gap-2"><dt className="shrink-0">Address of Owner:</dt><dd className="flex-1 border-b border-black/60 font-semibold">{f.landlordAddress || " "}</dd></div>
        <div className="flex gap-2"><dt className="shrink-0">PAN No of Owner:</dt><dd className="flex-1 border-b border-black/60 font-semibold">{f.landlordPan || " "}</dd></div>
      </dl>
    </article>
  );
}

// Form text in English and simple Hindi. The receipt itself stays in English (accepted by every employer).
const TEXT = {
  en: {
    tenantProperty: "Tenant & property", tenant: "Tenant name", houseNo: "House / flat no.", address: "Property address (situated at)",
    rent: "Rent", monthlyRent: "Monthly rent (₹)", mode: "Payment mode", modes: { "Bank transfer": "Bank transfer", UPI: "UPI", Cheque: "Cheque", Cash: "Cash" },
    from: "From month", to: "To month", receipts: "Receipts", perMonth: (n) => `One per month (${n})`, single: "One for the whole period",
    owner: "House owner (landlord)", ownerName: "Name of owner", ownerPan: "PAN of owner", panReq: "(required: rent over ₹1 lakh/year)", optional: "(optional)", ownerAddress: "Address of owner",
    summary: (n, total) => <>{n} months · total rent <strong className="text-[#111]">₹{total}</strong></>,
    generate: (n) => `Generate receipt${n > 1 ? "s" : ""}`, privacy: "Everything stays in your browser. Nothing you type is sent or saved.",
    missing: (pan) => `Please fill in all required fields${pan ? ", including a valid owner PAN" : ""}.`,
    count: (n) => <><strong>{n}</strong> receipt{n > 1 ? "s" : ""} · one per A4 page when printed</>, print: "Print / Save as PDF",
    stamp: "Cash receipts above ₹5,000 need a revenue stamp, signed by the owner across the stamp. A box is printed for it.",
  },
  hi: {
    tenantProperty: "किरायेदार और प्रॉपर्टी", tenant: "किरायेदार का नाम", houseNo: "मकान / फ्लैट नंबर", address: "प्रॉपर्टी का पता",
    rent: "किराया", monthlyRent: "महीने का किराया (₹)", mode: "पेमेंट कैसे किया", modes: { "Bank transfer": "बैंक ट्रांसफ़र", UPI: "UPI", Cheque: "चेक", Cash: "कैश" },
    from: "किस महीने से", to: "किस महीने तक", receipts: "रसीदें", perMonth: (n) => `हर महीने की अलग (${n})`, single: "पूरे समय की एक रसीद",
    owner: "मकान मालिक", ownerName: "मकान मालिक का नाम", ownerPan: "मकान मालिक का PAN", panReq: "(ज़रूरी: साल का किराया ₹1 लाख से ज़्यादा)", optional: "(अगर हो तो)", ownerAddress: "मकान मालिक का पता",
    summary: (n, total) => <>{n} महीने · कुल किराया <strong className="text-[#111]">₹{total}</strong></>,
    generate: () => "रसीद बनाएँ", privacy: "आप जो भी लिखेंगे, वो आपके फ़ोन या कंप्यूटर में ही रहेगा। कहीं भेजा या सेव नहीं होता।",
    missing: (pan) => `सभी ज़रूरी जानकारी भरें${pan ? ", मकान मालिक का सही PAN भी" : ""}।`,
    count: (n) => <><strong>{n}</strong> रसीद · प्रिंट करने पर हर रसीद अलग A4 पेज पर</>, print: "प्रिंट करें / PDF सेव करें",
    stamp: "कैश में ₹5,000 से ज़्यादा की रसीद पर रेवेन्यू स्टैम्प लगाकर मकान मालिक उस पर साइन करें। इसके लिए जगह छोड़ी गई है।",
  },
};

export default function RentReceiptGenerator({ lang = "en" }) {
  const t = TEXT[lang] || TEXT.en;
  const [f, setF] = useState(initial);
  const [shown, setShown] = useState(false);
  const set = (e) => setF({ ...f, [e.target.name]: e.target.value });

  const months = useMemo(() => monthsBetween(f.from, f.to), [f.from, f.to]);
  const rent = Number(f.rent) || 0;
  const receipts = useMemo(() => {
    if (!months.length) return [];
    if (f.split === "single") {
      const start = months[0].start, end = months.at(-1).end;
      return [{ key: "all", amount: rent * months.length, start, end, date: end }];
    }
    return months.map((m) => ({ key: m.start.toISOString(), amount: rent, start: m.start, end: m.end, date: m.end }));
  }, [months, rent, f.split]);

  const total = rent * months.length;
  const needsPan = rent * 12 > 100000;
  const ready = f.tenant && f.landlord && f.address && rent > 0 && months.length > 0 && (!needsPan || f.landlordPan.length === 10);

  const field = "mt-1.5 w-full rounded-md border border-black/20 bg-white px-4 py-3 outline-none focus:border-[#ff5a1f] focus:ring-2 focus:ring-[#ff5a1f]/20";
  const label = "block text-sm font-medium";

  return (
    <div>
      <form
        onSubmit={(e) => { e.preventDefault(); setShown(true); if (ready) track("generate_rent_receipt", { receipt_count: receipts.length, receipt_type: f.split, payment_mode: f.mode, lang }); setTimeout(() => document.getElementById("receipts")?.scrollIntoView({ behavior: "smooth" }), 50); }}
        className="space-y-8 rounded-2xl bg-white p-6 shadow-sm md:p-8 print:hidden"
      >
        <fieldset className="grid gap-5 md:grid-cols-2">
          <legend className="mb-1 font-display text-lg font-extrabold">{t.tenantProperty}</legend>
          <label className={label}>{t.tenant}<input name="tenant" value={f.tenant} onChange={set} required className={field} placeholder="Rahul Sharma" /></label>
          <label className={label}>{t.houseNo}<input name="houseNo" value={f.houseNo} onChange={set} className={field} placeholder="B-204" /></label>
          <label className={`${label} md:col-span-2`}>{t.address}<input name="address" value={f.address} onChange={set} required className={field} placeholder="Model Town, Rewari, Haryana 123401" /></label>
        </fieldset>

        <fieldset className="grid gap-5 md:grid-cols-2">
          <legend className="mb-1 font-display text-lg font-extrabold">{t.rent}</legend>
          <label className={label}>{t.monthlyRent}<input name="rent" type="number" min="1" value={f.rent} onChange={set} required className={field} placeholder="12000" /></label>
          <label className={label}>{t.mode}
            <select name="mode" value={f.mode} onChange={set} className={field}>
              {Object.entries(t.modes).map(([v, l]) => <option key={v} value={v}>{l}</option>)}
            </select>
          </label>
          <label className={label}>{t.from}<input name="from" type="month" value={f.from} onChange={set} required className={field} /></label>
          <label className={label}>{t.to}<input name="to" type="month" value={f.to} onChange={set} required className={field} /></label>
          <div className="md:col-span-2">
            <p className="text-sm font-medium">{t.receipts}</p>
            <div className="mt-2 flex flex-wrap gap-3">
              {[["monthly", t.perMonth(months.length)], ["single", t.single]].map(([v, txt]) => (
                <label key={v} className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-semibold ${f.split === v ? "border-[#111] bg-[#111] text-white" : "border-black/25"}`}>
                  <input type="radio" name="split" value={v} checked={f.split === v} onChange={set} className="sr-only" />{txt}
                </label>
              ))}
            </div>
          </div>
        </fieldset>

        <fieldset className="grid gap-5 md:grid-cols-2">
          <legend className="mb-1 font-display text-lg font-extrabold">{t.owner}</legend>
          <label className={label}>{t.ownerName}<input name="landlord" value={f.landlord} onChange={set} required className={field} placeholder="Suresh Yadav" /></label>
          <label className={label}>{t.ownerPan} <span className="font-normal text-[#777]">{needsPan ? t.panReq : t.optional}</span>
            <input name="landlordPan" value={f.landlordPan} onChange={(e) => setF({ ...f, landlordPan: e.target.value.toUpperCase().replace(/\s/g, "") })} required={needsPan} minLength={needsPan ? 10 : undefined} maxLength={10} pattern="[A-Z]{5}[0-9]{4}[A-Z]" title="PAN format: ABCDE1234F" className={field} placeholder="ABCDE1234F" />
          </label>
          <label className={`${label} md:col-span-2`}>{t.ownerAddress}<input name="landlordAddress" value={f.landlordAddress} onChange={set} className={field} placeholder="House 5, Civil Lines, Rewari" /></label>
        </fieldset>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-black/10 pt-6">
          <p className="text-sm text-[#555]">{t.summary(months.length, inr(total))}</p>
          <button type="submit" className="rounded-full bg-[#111] px-7 py-3.5 font-semibold text-white hover:bg-[#ff5a1f]">{t.generate(receipts.length)}</button>
        </div>
        <p className="text-sm text-[#777]">{t.privacy}</p>
      </form>

      {shown && !ready && <p className="mt-6 text-rose-600 print:hidden">{t.missing(needsPan)}</p>}

      {shown && ready && (
        <section id="receipts" className="!py-0 mt-10">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4 print:hidden">
            <p className="text-lg">{t.count(receipts.length)}</p>
            <button onClick={() => { track("print_rent_receipt", { receipt_count: receipts.length, receipt_type: f.split, lang }); window.print(); }} className="rounded-full bg-[#ff5a1f] px-6 py-3 font-semibold text-white hover:bg-[#111]">{t.print}</button>
          </div>
          {f.mode === "Cash" && receipts.some((r) => r.amount > 5000) && (
            <p className="mb-6 border-l-4 border-[#ff5a1f] bg-white p-4 text-sm print:hidden">{t.stamp}</p>
          )}
          <div className="space-y-6 print:space-y-0">
            {receipts.map((r, i) => (
              <Receipt key={r.key} no={String(i + 1).padStart(2, "0")} f={f} amount={r.amount} start={r.start} end={r.end} date={r.date} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
