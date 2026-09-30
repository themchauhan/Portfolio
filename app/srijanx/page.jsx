import Link from "next/link";
import ContactForm from "@/components/srijanx/ContactForm";

export const metadata = {
  title: { absolute: "SriJanX - Paperwork Automation for Businesses" },
  description:
    "SriJanX turns paper-based, manual office work into automated digital workflows. Invoices, forms, registers, reports - done in minutes, not days.",
  alternates: { canonical: "https://themanishchauhan.in/srijanx" },
};

const EMAIL = "mani7015066@gmail.com";

const automations = [
  ["🧾", "Invoice & bill processing", "Invoices are read automatically and pushed to your sheet or accounting tool."],
  ["📝", "Digital forms & approvals", "Replace printed forms and signatures with online forms and approval chains."],
  ["📒", "Registers to dashboards", "Stock, attendance and sales registers become live tables and reports."],
  ["💬", "Email & WhatsApp workflows", "Reminders, confirmations and follow-ups sent the moment something happens."],
  ["📊", "Automatic reports", "Daily, weekly or monthly reports delivered to your inbox on schedule."],
  ["🔗", "Tool integrations", "Make Excel, Google Sheets, Tally, CRMs and websites talk to each other."],
];

const benefits = [
  ["Save hours every week", "Data is captured once and reused everywhere, so nobody retypes it."],
  ["Fewer mistakes", "Machines don't mis-key numbers. Every entry has a clear trail."],
  ["Faster approvals", "Requests reach the right person instantly and never get stuck."],
  ["Nothing gets lost", "Every document is stored, searchable and backed up."],
  ["Works with your tools", "No forced switch. I build around Excel, Sheets and what you already use."],
  ["Start small, grow later", "Automate one process first and expand once you see the results."],
];

const tiers = [
  ["Single workflow", "One process automated end to end, such as invoice entry or an approval form.", "1-2 weeks"],
  ["Department", "A set of connected workflows for accounts, HR, sales or operations.", "2-4 weeks"],
  ["Full business suite", "Forms, data, reports and alerts across the whole business in one system.", "4-8 weeks"],
  ["Custom solution", "Something unusual? We'll design a tailor-made automation for it.", "On request"],
];

const steps = [
  ["1", "Discovery call", "20 minutes. You show me the paperwork that slows your team down."],
  ["2", "Clear plan & quote", "A plain-language plan with time saved and a fixed price."],
  ["3", "Build & test", "I build it and test on your real documents with you involved."],
  ["4", "Go live & support", "Team walkthrough, then ongoing support whenever you need it."],
];

const industries = [
  ["Trading & distribution", "Bills, challans, payment reminders"],
  ["Education", "Admissions, fee receipts, attendance"],
  ["Healthcare", "Patient forms, reports, appointments"],
  ["Manufacturing", "Job cards, stock, quality checks"],
  ["Real estate", "Lead capture, agreements, follow-ups"],
  ["Accounting & CA firms", "Document collection, data entry, trackers"],
  ["Retail & e-commerce", "Orders, returns, inventory sync"],
  ["Logistics", "Delivery proofs, trip sheets, billing"],
];

const faqs = [
  ["I'm not technical. Can I still use this?", "Yes. You keep working the way you like; I handle the technical side and keep the result simple for your team."],
  ["How long does a project take?", "Most small automations go live in 1 to 3 weeks. Bigger workflows take longer, and I'll tell you upfront."],
  ["What does it cost?", "Every project gets a fixed quote after the first call, so there are no surprise bills."],
  ["Is my business data safe?", "Your data stays in tools you own and control. I use the minimum access needed and can sign an NDA."],
  ["What if something breaks later?", "Every project includes a support period, and optional monthly support is available after that."],
];

const Blade = ({ id, bg = "bg-white", title, sub, children }) => (
  <section id={id} className={`${bg} !py-14 md:!py-20`}>
    <div className="mx-auto max-w-6xl px-5">
      {title && (
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">{title}</h2>
          <div className="mt-3 h-1 w-14 bg-orange-500" />
          {sub && <p className="mt-5 text-lg text-slate-600">{sub}</p>}
        </div>
      )}
      {children}
    </div>
  </section>
);

export default function Page() {
  return (
    <main className="sjx bg-white text-slate-800 antialiased">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link href="/srijanx" className="text-2xl font-extrabold tracking-tight text-blue-900">
            Sri<span className="text-orange-500">Jan</span>X
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
            <a href="#automations" className="hover:text-blue-700">What We Automate</a>
            <a href="#why" className="hover:text-blue-700">Why Automate</a>
            <a href="#industries" className="hover:text-blue-700">Industries</a>
            <a href="#faq" className="hover:text-blue-700">FAQ</a>
            <Link href="/" className="hover:text-blue-700">Portfolio</Link>
          </nav>
          <a href="#contact" className="rounded-md bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-800">Get a Quote</a>
        </div>
      </header>

      {/* Hero */}
      <div className="bg-blue-950 bg-[linear-gradient(135deg,#0b1f4d_0%,#143a8a_100%)]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-28">
          <div className="max-w-2xl border-l-4 border-orange-500 bg-blue-950/70 p-7 text-white md:p-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-orange-400">Custom automation solutions</p>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight md:text-5xl">Turn paperwork into automated workflows.</h1>
            <p className="mt-5 text-lg text-blue-100">
              SriJanX helps businesses replace manual, paper-based processes with simple digital automation, so your team spends time on growth instead of data entry.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="rounded-md bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600">Get a Free Plan</a>
              <a href="#automations" className="rounded-md border border-white/40 px-6 py-3 font-semibold text-white hover:bg-white/10">See What We Automate</a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="border-b border-slate-200 bg-slate-50">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-8 text-center md:grid-cols-4">
          {[["Up to 80%", "less manual entry"], ["1-3 weeks", "typical go-live"], ["Fixed price", "no surprise bills"], ["Free", "discovery call"]].map(([a, b]) => (
            <div key={b}><dt className="text-2xl font-bold text-blue-900">{a}</dt><dd className="text-sm text-slate-500">{b}</dd></div>
          ))}
        </dl>
      </div>

      {/* Automations */}
      <Blade id="automations" title="What We Automate" sub="Pick the paperwork that hurts most. We start there.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {automations.map(([icon, t, d]) => (
            <div key={t} className="border border-slate-200 border-t-4 border-t-blue-700 bg-white p-6 shadow-sm">
              <div className="text-3xl">{icon}</div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">{t}</h3>
              <p className="mt-2 text-slate-600">{d}</p>
            </div>
          ))}
        </div>
      </Blade>

      {/* Why */}
      <Blade id="why" bg="bg-slate-50" title="Why Automate Your Paperwork?">
        <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(([t, d]) => (
            <div key={t} className="flex gap-4">
              <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">✓</span>
              <div>
                <h3 className="font-bold text-slate-900">{t}</h3>
                <p className="mt-1 text-slate-600">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </Blade>

      {/* Tiers */}
      <Blade title="Ways We Can Work Together" sub="Every project gets a fixed quote after a free call.">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tiers.map(([t, d, time]) => (
            <div key={t} className="flex flex-col border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-bold text-blue-900">{t}</h3>
              <p className="mt-3 flex-1 text-slate-600">{d}</p>
              <p className="mt-5 border-t border-slate-200 pt-4 text-sm font-semibold text-slate-500">Typical timeline: <span className="text-slate-900">{time}</span></p>
            </div>
          ))}
        </div>
      </Blade>

      {/* Process */}
      <Blade bg="bg-blue-950" title={null}>
        <h2 className="text-3xl font-bold text-white md:text-4xl">How It Works</h2>
        <div className="mt-3 mb-10 h-1 w-14 bg-orange-500" />
        <ol className="grid gap-8 md:grid-cols-4">
          {steps.map(([n, t, d]) => (
            <li key={n}>
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-xl font-bold text-white">{n}</span>
              <h3 className="mt-4 text-lg font-bold text-white">{t}</h3>
              <p className="mt-2 text-blue-100">{d}</p>
            </li>
          ))}
        </ol>
      </Blade>

      {/* Industries */}
      <Blade id="industries" title="Industries We Serve" sub="If your team works with registers, printouts, PDFs or WhatsApp forwards, there's something to automate.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map(([t, d]) => (
            <div key={t} className="border-l-4 border-orange-500 bg-slate-50 p-5">
              <h3 className="font-bold text-slate-900">{t}</h3>
              <p className="mt-1 text-sm text-slate-600">{d}</p>
            </div>
          ))}
        </div>
      </Blade>

      {/* CTA band */}
      <div className="bg-orange-500">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 px-5 py-10 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold text-white md:text-3xl">Ready to get rid of manual data entry?</h2>
            <p className="mt-1 text-orange-50">Tell us one task your team hates. We&apos;ll reply within one working day.</p>
          </div>
          <a href="#contact" className="rounded-md bg-white px-7 py-3 font-semibold text-orange-600 hover:bg-orange-50">Contact Us Today</a>
        </div>
      </div>

      {/* FAQ */}
      <Blade id="faq" title="Frequently Asked Questions">
        <div className="max-w-3xl divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map(([q, a]) => (
            <details key={q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
                {q}<span className="text-2xl text-orange-500 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-slate-600">{a}</p>
            </details>
          ))}
        </div>
      </Blade>

      {/* Contact */}
      <Blade id="contact" bg="bg-slate-100">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Contact Us Today</h2>
            <div className="mt-3 h-1 w-14 bg-orange-500" />
            <p className="mt-5 text-lg text-slate-600">
              Share what&apos;s slowing your team down and get a free automation plan. No pressure, no jargon.
            </p>
            <ul className="mt-6 space-y-3 text-slate-700">
              {["Free 20-minute discovery call", "Fixed-price quote in plain language", "NDA available on request"].map((t) => (
                <li key={t} className="flex gap-3"><span className="font-bold text-orange-500">✓</span>{t}</li>
              ))}
            </ul>
            <p className="mt-8 text-slate-600">Prefer email? <a className="font-semibold text-blue-700 underline" href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
          </div>
          <div className="bg-white p-6 shadow-sm md:p-8"><ContactForm /></div>
        </div>
      </Blade>

      {/* Footer */}
      <footer className="bg-blue-950 py-8 text-sm text-blue-200">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 sm:flex-row">
          <p>© {new Date().getFullYear()} SriJanX. Paperwork, automated.</p>
          <Link href="/" className="hover:text-white">A venture by Manish Chauhan →</Link>
        </div>
      </footer>
    </main>
  );
}
