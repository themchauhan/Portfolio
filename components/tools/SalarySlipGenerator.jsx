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
const monthValue = `${lastMonth.getFullYear()}-${String(lastMonth.getMonth() + 1).padStart(2, "0")}`;

// EPF: 12% of Basic, on a wage ceiling of ₹15,000 (max ₹1,800). ESI: 0.75% if gross ≤ ₹21,000.
const PF_RATE = 0.12, PF_CEILING = 15000, ESI_RATE = 0.0075, ESI_LIMIT = 21000;

export default function SalarySlipGenerator() {
  const [company, setCompany] = useState({ name: "", address: "" });
  const [emp, setEmp] = useState({ name: "", id: "", designation: "", department: "", pan: "", uan: "", bank: "", doj: "" });
  const [month, setMonth] = useState(monthValue);
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
            <label className={label}>Address<textarea rows={2} value={company.address} onChange={(e) => setCompany({ ...company, address: e.target.value })} className={field} placeholder="Sector 4, Rewari, Haryana" /></label>
            <div className="grid grid-cols-2 gap-3">
              <label className={label}>Pay month<input type="month" value={month} onChange={(e) => setMonth(e.target.value)} className={field} /></label>
              <div />
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
            <button onClick={() => { track("print_salary_slip", { has_lop: paid < working }); window.print(); }} className="rounded-full bg-[#ff5a1f] px-6 py-3 font-semibold text-white hover:bg-[#111]">Print / Save as PDF</button>
          </div>
          <article className="mx-auto max-w-[820px] border border-black/20 bg-white p-6 text-sm text-black md:p-10 print:max-w-none print:border-0 print:p-0">
            <header className="border-b-2 border-black pb-4 text-center">
              <p className="font-display text-2xl font-extrabold">{company.name}</p>
              {company.address && <p className="mt-1 whitespace-pre-line text-[#444]">{company.address}</p>}
              <p className="mt-3 font-semibold uppercase tracking-wide">Salary slip for {monthLabel}</p>
            </header>

            <dl className="mt-5 grid grid-cols-2 gap-x-8 gap-y-1.5">
              {[["Employee name", emp.name], ["Employee ID", emp.id], ["Designation", emp.designation], ["Department", emp.department],
                ["Date of joining", emp.doj && new Date(emp.doj).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })],
                ["PAN", emp.pan], ["UAN", emp.uan], ["Bank account", emp.bank], ["Working days", working], ["Paid days", paid]]
                .filter(([, v]) => v !== "" && v !== undefined && v !== null)
                .map(([k, v]) => <div key={k} className="flex gap-2"><dt className="w-32 shrink-0 text-[#555]">{k}</dt><dd className="font-semibold">{v}</dd></div>)}
            </dl>

            <div className="mt-6 grid grid-cols-2 border border-black/30">
              <table className="w-full border-r border-black/30">
                <thead><tr className="border-b border-black/30 bg-black/5"><th className="p-2 text-left">Earnings</th><th className="p-2 text-right">Amount (₹)</th></tr></thead>
                <tbody>{calc.e.filter((x) => x.label || x.earned).map((x) => <tr key={x.id}><td className="p-2">{x.label}</td><td className="p-2 text-right">{money(x.earned)}</td></tr>)}</tbody>
              </table>
              <table className="w-full">
                <thead><tr className="border-b border-black/30 bg-black/5"><th className="p-2 text-left">Deductions</th><th className="p-2 text-right">Amount (₹)</th></tr></thead>
                <tbody>{calc.d.filter((x) => x.label || x.value).map((x) => <tr key={x.id}><td className="p-2">{x.label}</td><td className="p-2 text-right">{money(x.value)}</td></tr>)}</tbody>
              </table>
              <div className="flex justify-between border-r border-t border-black/30 p-2 font-bold"><span>Gross earnings</span><span>{money(calc.gross)}</span></div>
              <div className="flex justify-between border-t border-black/30 p-2 font-bold"><span>Total deductions</span><span>{money(calc.totalDed)}</span></div>
            </div>

            <div className="mt-5 flex flex-wrap items-baseline justify-between gap-2 rounded bg-black/5 p-4">
              <p className="text-base font-bold">Net pay: ₹{money(calc.net)}</p>
              <p className="text-[#444]">Rupees {amountInWords(calc.net)} only</p>
            </div>

            <div className="mt-14 flex justify-between text-[#555]">
              <p className="border-t border-black/40 px-6 pt-1">Employee signature</p>
              <p className="border-t border-black/40 px-6 pt-1">Authorised signatory</p>
            </div>
            <p className="mt-6 text-center text-xs text-[#888]">This is a computer-generated salary slip.</p>
          </article>
        </section>
      )}
    </div>
  );
}
