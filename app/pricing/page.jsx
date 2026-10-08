import Link from 'next/link'
import PageHero from '@/components/PageHero'
import PlanCards from '@/components/PlanCards'
import { products } from '@/lib/products'
import QuoteEstimator from '@/components/QuoteEstimator'
import { productPlans, PRICING_NOTE, waLink } from '@/lib/pricing'
import { SITE, pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'Pricing: ClinicOs, RentCorp, CafeCorp & Website Cost Estimator',
  description: 'Monthly plans for ClinicOs, RentCorp and CafeCorp, plus an instant cost estimator for websites, web apps and automation. Free demo first.',
  alternates: { canonical: `${SITE}/pricing` },
})

const faqs = [
  ['Is there a free demo?', 'Yes. Every plan starts with a free 20-minute demo so you can see the software working for your business before paying.'],
  ['Are prices fixed?', 'Monthly product plans are fixed. For websites and custom work, the estimator gives a range; after reviewing your requirements I send a fixed quotation, with no surprise bills.'],
  ['Can I change plans later?', 'Yes. You can move up or down a plan as your business grows.'],
  ['How do I pay?', 'UPI, bank transfer or card. GST invoices are provided.'],
]

export default function Page() {
  return (
    <main className="prod bg-[#f4f1ec] text-[#111] antialiased">
      <PageHero eyebrow="Pricing" title="Simple prices. No surprises.">
        {PRICING_NOTE} Questions? Message me on WhatsApp and get an answer the same day.
      </PageHero>

      {/* Jump links */}
      <nav aria-label="Pricing sections" className="mx-auto -mt-6 mb-4 flex max-w-7xl flex-wrap gap-2.5 px-5 sm:px-8 md:-mt-12">
        {['clinicos', 'rentcorp', 'cafecorp'].map((k) => (
          <a key={k} href={`#${k}`} className="rounded-full border border-black/25 bg-white px-5 py-2 text-sm font-semibold hover:border-[#111]">{products[k].name}</a>
        ))}
        <a href="#freelance" className="rounded-full border border-black/25 bg-white px-5 py-2 text-sm font-semibold hover:border-[#111]">Websites &amp; custom work</a>
      </nav>

      {['clinicos', 'rentcorp', 'cafecorp'].map((k, i) => (
        <section key={k} id={k} className={`!py-14 md:!py-20 scroll-mt-20 ${i % 2 ? 'bg-white' : ''}`}>
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-[#ff5a1f]">{products[k].tag}</p>
                <h2 className="mt-2 font-display text-4xl font-extrabold tracking-tight">{products[k].name}</h2>
              </div>
              <Link href={`/${k}`} className="shrink-0 font-semibold underline decoration-[#ff5a1f] decoration-2 underline-offset-8 hover:text-[#ff5a1f]">See all features →</Link>
            </div>
            <PlanCards plans={productPlans[k]} productName={products[k].name} />
          </div>
        </section>
      ))}

      <section id="freelance" className="!py-14 md:!py-20 scroll-mt-20 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#ff5a1f]">Websites &amp; custom work</p>
          <h2 className="mt-2 font-display text-4xl font-extrabold tracking-tight">Estimate your project</h2>
          <p className="mb-10 mt-4 max-w-2xl text-lg text-[#555]">Every website is different, so pick what you need and see an estimate. Send it to me and I&apos;ll review it and reply with a fixed quotation.</p>
          <QuoteEstimator />
        </div>
      </section>

      <section className="!py-14 md:!py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">Pricing questions</h2>
          <div className="mt-8 divide-y divide-black/15 border-y border-black/15">
            {faqs.map(([q, a]) => (
              <details key={q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">{q}<span className="text-2xl text-[#ff5a1f] transition group-open:rotate-45">+</span></summary>
                <p className="mt-3 text-[#555]">{a}</p>
              </details>
            ))}
          </div>
          <a href={waLink('Hi Manish, I have a question about your pricing.')} target="_blank" rel="noopener noreferrer" className="mt-10 inline-block rounded-full bg-[#25D366] px-7 py-3.5 font-semibold text-white hover:bg-[#1ebe5b]">Ask on WhatsApp</a>
        </div>
      </section>
    </main>
  )
}
