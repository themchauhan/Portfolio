import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import FreeBadges from '@/components/tools/FreeBadges'
import SalarySlipGenerator from '@/components/tools/SalarySlipGenerator'
import { SITE, pageMeta } from '@/lib/seo'

const URL = `${SITE}/tools/salary-slip-generator`

export const metadata = pageMeta({
  title: 'Free Payslip / Salary Slip Generator India (PF, ESI) – PDF',
  description: 'Free payslip generator for India: add your logo, earnings, PF, ESI, TDS and loss of pay. Net pay in words. No sign-in or sign-up. Print or PDF.',
  alternates: { canonical: URL },
})

const faqs = [
  ['Is this salary slip generator free?', 'Yes. It is completely free with no limits. You don’t need to sign in or sign up, and everything you type stays in your browser.'],
  ['What should a salary slip include?', 'Typically the company name, employee details, pay month, working and paid days, each earning (Basic, HRA, allowances), each deduction (PF, professional tax, TDS, ESI), gross earnings, total deductions and net pay.'],
  ['How is PF calculated?', 'Employee PF is usually 12% of Basic (plus DA). Many employers calculate it on a wage ceiling of ₹15,000, which makes the maximum ₹1,800 a month. Use the “Auto PF” button for this.'],
  ['When does ESI apply?', 'Employee ESI of 0.75% generally applies when gross monthly wages are ₹21,000 or less. The “Auto ESI” button applies this rule.'],
  ['How is loss of pay (LOP) handled?', 'Enter working days and paid days. If paid days are fewer, each earning is reduced in proportion, and the slip shows both figures.'],
]

export default function Page() {
  return (
    <main className="prod bg-[#f4f1ec] text-[#111] antialiased">
      <JsonLd data={[
        { '@context': 'https://schema.org', '@type': 'WebApplication', name: 'Salary Slip Generator', url: URL, applicationCategory: 'BusinessApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' }, author: { '@type': 'Person', name: 'Manish Chauhan', url: SITE } },
        { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
      ]} />

      <section className="!py-12 md:!py-20 print:!py-0">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="print:hidden">
            <p className="text-[15px] font-semibold text-[#ff5a1f]">Free tool</p>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">Salary Slip Generator <span className="block text-2xl text-[#555] md:text-3xl">Free payslip maker with PF &amp; ESI</span></h1>
            <p className="mt-5 max-w-2xl text-xl leading-relaxed text-[#444]">Make a professional payslip with your company logo in a minute, with PF, ESI, TDS and loss of pay worked out. Completely free: no sign-in, no sign-up, no limits.</p>
            <FreeBadges className="mt-6" />
          </div>
          <div className="mt-10 print:mt-0"><SalarySlipGenerator /></div>
        </div>
      </section>

      <section className="!py-14 md:!py-20 bg-[#111] print:hidden">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 sm:px-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#ff5a1f]">For employers</p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-extrabold text-white md:text-4xl">Making slips for every employee, every month? Automate it.</h2>
            <p className="mt-3 max-w-xl text-lg text-[#b9b5ad]">I can set up payroll automation: attendance in, salary slips out, emailed to staff automatically.</p>
          </div>
          <Link href="/services/business-automation" className="shrink-0 rounded-full bg-[#ff5a1f] px-7 py-3.5 font-semibold text-white hover:bg-white hover:text-[#111]">Automate payroll</Link>
        </div>
      </section>

      <section className="!py-14 md:!py-20 bg-white print:hidden">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">How to make a salary slip (payslip) online</h2>
          <ol className="mt-8 grid gap-6 md:grid-cols-4">
            {[
              ['Add company details', 'Company name, address and logo. The logo stays on your device.'],
              ['Add employee details', 'Name, ID, designation, PAN, UAN and bank account (last 4 digits is enough).'],
              ['Enter salary', 'Basic, HRA and allowances, then use Auto PF and Auto ESI for deductions. Set paid days for leave without pay.'],
              ['Print or save as PDF', 'Check the payslip, then print it or save it as a PDF to share on WhatsApp or email.'],
            ].map(([t, d], i) => (
              <li key={t} className="border-t-4 border-[#111] pt-4">
                <p className="font-display text-sm font-bold text-[#ff5a1f]">Step {i + 1}</p>
                <h3 className="mt-2 font-display text-lg font-extrabold">{t}</h3>
                <p className="mt-1 text-[#555]">{d}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-3xl text-[#555]">A salary slip, also called a payslip or pay stub, is a monthly document an employer gives to each employee. It shows gross earnings, every deduction and the final net pay, and employees often need it for loans, credit cards, visas and job changes.</p>
        </div>
      </section>

      <section className="!py-14 md:!py-20 print:hidden">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">Salary slips: common questions</h2>
          <div className="mt-8 max-w-4xl divide-y divide-black/15 border-y border-black/15">
            {faqs.map(([q, a]) => (
              <details key={q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">{q}<span className="text-2xl text-[#ff5a1f] transition group-open:rotate-45">+</span></summary>
                <p className="mt-3 text-[#555]">{a}</p>
              </details>
            ))}
          </div>
          <p className="mt-6 text-sm text-[#777]">This tool helps you prepare salary slips. Check PF, ESI, professional tax and TDS rules with your accountant.</p>
        </div>
      </section>
    </main>
  )
}
