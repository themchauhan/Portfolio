"use client"
import { useMemo, useState } from "react";
import { amountInWords } from "@/lib/amountInWords";
import { track } from "@/lib/analytics";

const money = (n) => new Intl.NumberFormat("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n || 0);
const r2 = (n) => Math.round((n + Number.EPSILON) * 100) / 100;
const uid = () => Math.random().toString(36).slice(2);
const row = (label, amount = "") => ({ id: uid(), label, amount });

const now = new Date();
const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
const nice = (v) => (v ? new Date(v).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) : "");
const monthValue = `${lastMonth.getFullYear()}-${String(lastMonth.getMonth() + 1).padStart(2, "0")}`;

// EPF: 12% of Basic, on a wage ceiling of ₹15,000 (max ₹1,800). ESI: 0.75% if gross ≤ ₹21,000.
const PF_RATE = 0.12, PF_CEILING = 15000, ESI_RATE = 0.0075, ESI_LIMIT = 21000;

export default function SalarySlipGenerator() {
  const [company, setCompany] = useState({ name: "", address: "", logo: "" });
  const [emp, setEmp] = useState({ name: "", id: "", designation: "", department: "", pan: "", uan: "", bank: "", doj: "" });
  const [month, setMonth] = useState(monthValue);
  const [payDate, setPayDate] = useState(new Date(now.getFullYear(), now.getMonth(), 1).toISOString().slice(0, 10));
  const [days, setDays] = useState({ working: "30", paid: "30" });
  const [earnings, setEarnings] = useState([row("Basic Salary"), row("House Rent Allowance (HRA)"), row("Conveyance Allowance"), row("Special Allowance")]);
  const [deductions, setDeductions] = useState([row("Provident Fund (PF)"), row("Professional Tax"), row("Income Tax (TDS)")]);
  const [shown, setShown] = useState(false);

  const working = Number(days.working) || 0;
  const paid = Math.min(Number(days.paid) || 0, working);
  const factor = working > 0 ? paid / working : 0; // loss-of-pay proration

  const calc = useMemo(() => {
    const e = earnings.map((x) => ({ ...x, earned: r2((Number(x.amount) || 0) * factor) }));
    const d = deductions.map((x) => ({ ...x, value: r2(Number(x.amount) || 0) }));
    const gross = r2(e.reduce((s, x) => s + x.earned, 0));
    const totalDed = r2(d.reduce((s, x) => s + x.value, 0));
    return { e, d, gross, totalDed, net: Math.round(gross - totalDed) }; // net pay rounded to the rupee
  }, [earnings, deductions, factor]);

  const basicEarned = calc.e.find((x) => /basic/i.test(x.label))?.earned || 0;
  const setRow = (list, setList, id, key, value) => setList(list.map((x) => (x.id === id ? { ...x, [key]: value } : x)));
  const upsertDeduction = (match, label, amount) => {
    const found = deductions.find((x) => match.test(x.label));
    setDeductions(found ? deductions.map((x) => (x.id === found.id ? { ...x, amount: String(amount) } : x)) : [...deductions, row(label, String(amount))]);
  };
  const autoPF = () => upsertDeduction(/provident|\bpf\b/i, "Provident Fund (PF)", Math.round(Math.min(basicEarned, PF_CEILING) * PF_RATE));
  const autoESI = () => upsertDeduction(/\besi\b|state insurance/i, "ESI", calc.gross <= ESI_LIMIT ? Math.ceil(calc.gross * ESI_RATE) : 0);

  const onLogo = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) { alert("Please choose a logo under 2 MB."); return; }
    const reader = new FileReader();
    reader.onload = () => setCompany((c) => ({ ...c, logo: String(reader.result) }));
    reader.readAsDataURL(file);
  };

  const monthLabel = (() => { const [y, m] = month.split("-").map(Number); return y ? new Date(y, m - 1, 1).toLocaleDateString("en-IN", { month: "long", year: "numeric" }) : ""; })();
  const ready = company.name && emp.name && calc.gross > 0 && working > 0;

  const field = "mt-1.5 w-full rounded-md border border-black/20 bg-white px-3 py-2.5 outline-none focus:border-[#ff5a1f] focus:ring-2 focus:ring-[#ff5a1f]/20";
  const label = "block text-sm font-medium";

  const Rows = ({ title, list, setList, addLabel }) => (
    <fieldset>
      <legend className="font-display text-lg font-extrabold">{title} <span className="font-sans text-sm font-normal text-[#777]">(monthly amounts)</span></legend>
      <div className="mt-3 space-y-2">
        {list.map((x) => (
          <div key={x.id} className="flex gap-2">
            <input aria-label={`${title} name`} value={x.label} onChange={(e) => setRow(list, setList, x.id, "label", e.target.value)} className={`${field} mt-0 flex-[2]`} />
            <input aria-label={`${x.label} amount`} type="number" min="0" step="any" value={x.amount} onChange={(e) => setRow(list, setList, x.id, "amount", e.target.value)} className={`${field} mt-0 flex-1`} placeholder="₹" />
            <button type="button" onClick={() => setList(list.filter((y) => y.id !== x.id))} className="px-2 text-sm text-[#999] hover:text-rose-600" aria-label={`Remove ${x.label}`}>✕</button>
          </div>
        ))}
      </div>
      <button type="button" onClick={() => setList([...list, row("")])} className="mt-2 text-sm font-semibold text-[#ff5a1f] hover:underline">+ {addLabel}</button>
    </fieldset>
  );

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault(); setShown(true);
          if (ready) track("generate_salary_slip", { earning_rows: calc.e.filter((x) => x.earned > 0).length, deduction_rows: calc.d.filter((x) => x.value > 0).length, has_lop: paid < working });
          setTimeout(() => document.getElementById("payslip")?.scrollIntoView({ behavior: "smooth" }), 50);
        }}
        className="space-y-8 rounded-2xl bg-white p-6 shadow-sm md:p-8 print:hidden"
      >
        <div className="grid gap-8 md:grid-cols-2">
          <fieldset className="space-y-3">
            <legend className="font-display text-lg font-extrabold">Company</legend>
            <label className={label}>Company name<input value={company.name} onChange={(e) => setCompany({ ...company, name: e.target.value })} required className={field} placeholder="Acme Traders Pvt Ltd" /></label>
            <div>
              <p className={label}>Company logo <span className="font-normal text-[#777]">(optional, stays on your device)</span></p>
              <div className="mt-1.5 flex items-center gap-3">
                {company.logo && <img src={company.logo} alt="" className="h-12 w-12 rounded border border-black/10 object-contain" />}
                <label className="cursor-pointer rounded-full border border-black/20 px-4 py-2 text-sm font-semibold hover:border-[#111]">
                  {company.logo ? "Change logo" : "Upload logo"}
                  <input type="file" accept="image/png,image/jpeg,image/webp,image/svg+xml" onChange={onLogo} className="sr-only" />
                </label>
                {company.logo && <button type="button" onClick={() => setCompany({ ...company, logo: "" })} className="text-sm text-[#777] hover:text-rose-600">Remove</button>}
              </div>
            </div>
            <label className={label}>Address<textarea rows={2} value={company.address} onChange={(e) => setCompany({ ...company, address: e.target.value })} className={field} placeholder="Sector 4, Rewari, Haryana" /></label>
            <div className="grid grid-cols-2 gap-3">
              <label className={label}>Pay month<input type="month" value={month} onChange={(e) => setMonth(e.target.value)} className={field} /></label>
              <label className={label}>Pay date<input type="date" value={payDate} onChange={(e) => setPayDate(e.target.value)} className={field} /></label>
              <label className={label}>Working days<input type="number" min="1" max="31" value={days.working} onChange={(e) => setDays({ ...days, working: e.target.value })} className={field} /></label>
              <label className={label}>Paid days<input type="number" min="0" max="31" value={days.paid} onChange={(e) => setDays({ ...days, paid: e.target.value })} className={field} /></label>
            </div>
            {paid < working && <p className="text-sm text-[#c2410c]">{r2(working - paid)} day(s) loss of pay: earnings are reduced proportionally.</p>}
          </fieldset>

          <fieldset className="grid grid-cols-2 gap-3">
            <legend className="mb-1 font-display text-lg font-extrabold">Employee</legend>
            <label className={`${label} col-span-2`}>Employee name<input value={emp.name} onChange={(e) => setEmp({ ...emp, name: e.target.value })} required className={field} placeholder="Priya Sharma" /></label>
            <label className={label}>Employee ID<input value={emp.id} onChange={(e) => setEmp({ ...emp, id: e.target.value })} className={field} /></label>
            <label className={label}>Designation<input value={emp.designation} onChange={(e) => setEmp({ ...emp, designation: e.target.value })} className={field} /></label>
            <label className={label}>Department<input value={emp.department} onChange={(e) => setEmp({ ...emp, department: e.target.value })} className={field} /></label>
            <label className={label}>Date of joining<input type="date" value={emp.doj} onChange={(e) => setEmp({ ...emp, doj: e.target.value })} className={field} /></label>
            <label className={label}>PAN <span className="font-normal text-[#777]">(optional)</span><input value={emp.pan} maxLength={10} onChange={(e) => setEmp({ ...emp, pan: e.target.value.toUpperCase() })} className={field} /></label>
            <label className={label}>UAN <span className="font-normal text-[#777]">(optional)</span><input value={emp.uan} onChange={(e) => setEmp({ ...emp, uan: e.target.value })} className={field} /></label>
            <label className={`${label} col-span-2`}>Bank account <span className="font-normal text-[#777]">(optional, last 4 digits is enough)</span><input value={emp.bank} onChange={(e) => setEmp({ ...emp, bank: e.target.value })} className={field} placeholder="XXXX1234" /></label>
          </fieldset>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {Rows({ title: "Earnings", list: earnings, setList: setEarnings, addLabel: "Add earning" })}
          <div>
            {Rows({ title: "Deductions", list: deductions, setList: setDeductions, addLabel: "Add deduction" })}
            <div className="mt-4 flex flex-wrap gap-2">
              <button type="button" onClick={autoPF} className="rounded-full border border-black/20 px-4 py-2 text-sm font-semibold hover:border-[#111]">Auto PF (12% of Basic)</button>
              <button type="button" onClick={autoESI} className="rounded-full border border-black/20 px-4 py-2 text-sm font-semibold hover:border-[#111]">Auto ESI (0.75%)</button>
            </div>
            <p className="mt-2 text-xs text-[#777]">PF uses Basic up to ₹15,000 (max ₹1,800). ESI applies only if gross is ₹21,000 or less. Professional tax varies by state.</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-black/10 pt-6">
          <p className="text-sm text-[#555]">Gross ₹{money(calc.gross)} − Deductions ₹{money(calc.totalDed)} = <strong className="text-[#111]">Net ₹{money(calc.net)}</strong></p>
          <button type="submit" className="rounded-full bg-[#111] px-7 py-3.5 font-semibold text-white hover:bg-[#ff5a1f]">Create salary slip</button>
        </div>
        <p className="text-sm text-[#777]">Everything stays in your browser. Nothing you type is sent or saved.</p>
      </form>

      {shown && !ready && <p className="mt-6 text-rose-600 print:hidden">Add the company name, employee name, working days and at least one earning.</p>}

      {shown && ready && (
        <section id="payslip" className="!py-0 mt-10">
          <div className="mb-6 flex justify-end print:hidden">
            <button onClick={() => { track("print_salary_slip", { has_lop: paid < working, has_logo: !!company.logo }); window.print(); }} className="rounded-full bg-[#ff5a1f] px-6 py-3 font-semibold text-white hover:bg-[#111]">Print / Save as PDF</button>
          </div>
          <article className="mx-auto max-w-[860px] rounded-xl border border-black/15 bg-white p-6 text-sm text-[#222] md:p-10 print:max-w-none print:rounded-none print:border-0 print:p-0">
            {/* Header */}
            <header className="flex flex-wrap items-start justify-between gap-4 border-b-2 border-[#111] pb-5">
              <div className="flex items-center gap-4">
                {company.logo && <img src={company.logo} alt={`${company.name} logo`} className="h-14 max-w-[140px] object-contain" />}
                <div>
                  <p className="font-display text-2xl font-extrabold text-[#111]">{company.name}</p>
                  {company.address && <p className="mt-0.5 whitespace-pre-line text-[#555]">{company.address}</p>}
                </div>
              </div>
              <div className="text-right">
                <p className="font-display text-xl font-extrabold uppercase tracking-wide text-[#111]">Salary Slip</p>
                <p className="mt-0.5 font-semibold text-[#ff5a1f]">{monthLabel}</p>
              </div>
            </header>

            {/* Employee summary + net pay card */}
            <div className="mt-6 grid gap-6 md:grid-cols-[1.4fr_1fr] print:grid-cols-[1.4fr_1fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#ff5a1f]">Employee details</p>
                <dl className="mt-3 space-y-1.5">
                  {[["Employee name", emp.name], ["Employee ID", emp.id], ["Designation", emp.designation], ["Department", emp.department],
                    ["Date of joining", nice(emp.doj)], ["Pay period", monthLabel], ["Pay date", nice(payDate)], ["PAN", emp.pan], ["UAN", emp.uan], ["Bank account", emp.bank]]
                    .filter(([, v]) => v)
                    .map(([k, v]) => <div key={k} className="grid grid-cols-[130px_1fr] gap-2"><dt className="text-[#666]">{k}</dt><dd className="font-semibold text-[#111]">{v}</dd></div>)}
                </dl>
              </div>
              <div className="h-fit overflow-hidden rounded-xl bg-[#111] text-white print:border-2 print:border-black print:bg-white print:text-black">
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#ff5a1f]">Net pay</p>
                  <p className="mt-1 font-display text-3xl font-extrabold">₹{money(calc.net)}</p>
                </div>
                <dl className="space-y-2 border-t border-white/15 p-5 text-[#d8d4cc] print:border-black/30 print:text-[#444]">
                  <div className="flex justify-between"><dt>Working days</dt><dd className="font-semibold text-white print:text-black">{working}</dd></div>
                  <div className="flex justify-between"><dt>Paid days</dt><dd className="font-semibold text-white print:text-black">{paid}</dd></div>
                  <div className="flex justify-between"><dt>Loss of pay (LOP) days</dt><dd className="font-semibold text-white print:text-black">{r2(working - paid)}</dd></div>
                </dl>
              </div>
            </div>

            {/* Earnings / deductions */}
            <div className="mt-8 grid overflow-hidden rounded-xl border border-black/15 md:grid-cols-2 print:grid-cols-2">
              {[["Earnings", calc.e.filter((x) => x.label || x.earned).map((x) => [x.id, x.label, x.earned]), "Gross Earnings", calc.gross],
                ["Deductions", calc.d.filter((x) => x.label || x.value).map((x) => [x.id, x.label, x.value]), "Total Deductions", calc.totalDed]]
                .map(([title, rows, totalLabel, total], idx) => (
                  <div key={title} className={`flex flex-col ${idx === 0 ? "md:border-r md:border-white/20 print:border-r print:border-black/15" : "border-t border-black/10 md:border-t-0 print:border-t-0"}`}>
                    <div className="flex justify-between bg-[#111] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white print:border-b-2 print:border-black print:bg-white print:text-black"><span>{title}</span><span>Amount</span></div>
                    <div className="flex-1 px-5 py-2">
                      {rows.map(([id, l, v]) => <div key={id} className="flex justify-between py-1.5"><span>{l}</span><span className="font-semibold">₹{money(v)}</span></div>)}
                    </div>
                    <div className="flex justify-between border-t border-black/15 bg-black/[0.04] px-5 py-3 font-bold text-[#111]"><span>{totalLabel}</span><span>₹{money(total)}</span></div>
                  </div>
                ))}
            </div>

            {/* Net payable */}
            <div className="mt-6 flex items-center justify-between rounded-xl border-2 border-[#ff5a1f] px-5 py-4">
              <div>
                <p className="font-bold uppercase tracking-wide text-[#111]">Net pay</p>
                <p className="text-[#666]">Gross earnings − total deductions</p>
              </div>
              <p className="font-display text-2xl font-extrabold text-[#111]">₹{money(calc.net)}</p>
            </div>
            <p className="mt-5 text-right text-[#555]">Amount in words: <span className="font-semibold text-[#111]">Rupees {amountInWords(calc.net)} only</span></p>

            <div className="mt-12 flex justify-between border-t border-black/10 pt-10 text-[#555]">
              <p className="border-t border-black/40 px-6 pt-1">Employee signature</p>
              <p className="border-t border-black/40 px-6 pt-1">Authorised signatory</p>
            </div>
            <p className="mt-6 text-center text-xs text-[#888]">This is a computer-generated payslip.</p>
          </article>
        </section>
      )}
    </div>
  );
}
