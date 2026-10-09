import JsonLd from '@/components/JsonLd'
import FreeBadges from '@/components/tools/FreeBadges'
import ShareTool from '@/components/tools/ShareTool'
import QuoteEstimator from '@/components/QuoteEstimator'
import { SITE, pageMeta } from '@/lib/seo'

const URL = `${SITE}/tools/website-cost-calculator`

export const metadata = pageMeta({
  title: 'Website Cost Calculator India: Estimate Your Website Price',
  description: 'How much does a website cost in India? Pick pages and features to get an instant estimate for a business website, online store or web app. Free.',
  alternates: { canonical: URL },
})

const faqs = [
  ['How much does a business website cost in India?', 'A simple 5-page business website typically starts around ₹15,000. The final cost depends on pages, features like booking or payments, content writing and how fast you need it.'],
  ['Is the estimate a final price?', 'No. It is an estimate to help you plan. Send your selection and you will get a fixed quotation after a quick review of your requirements.'],
  ['What affects website cost the most?', 'The type of site (landing page, business site, online store or web app), the number of pages, and features such as payments, user logins, booking systems and integrations.'],
  ['Do I need monthly maintenance?', 'It is optional. Maintenance covers updates, backups, small changes and support, so your site stays secure and up to date.'],
]

export default function Page() {
  return (
    <main className="prod bg-[#f4f1ec] text-[#111] antialiased">
      <JsonLd data={[
        { '@context': 'https://schema.org', '@type': 'WebApplication', name: 'Website Cost Calculator', url: URL, applicationCategory: 'BusinessApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' }, author: { '@type': 'Person', name: 'Manish Chauhan', url: SITE } },
        { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
      ]} />
      <section className="!py-12 md:!py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-[15px] font-semibold text-[#ff5a1f]">Free tool</p>
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">Website Cost Calculator</h1>
          <p className="mt-5 max-w-2xl text-xl leading-relaxed text-[#444]">How much will your website cost? Pick what you need and get an instant estimate in rupees. No sign-in, no sign-up.</p>
          <FreeBadges className="mt-6" />
            <ShareTool className="mt-5" url={URL} title="Website Cost Calculator" message="How much does a website cost in India? Free calculator, instant estimate." />
          <div className="mt-10"><QuoteEstimator /></div>
        </div>
      </section>
      <section className="!py-14 md:!py-20 bg-white">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">Website cost: common questions</h2>
          <div className="mt-8 divide-y divide-black/15 border-y border-black/15">
            {faqs.map(([q, a]) => (
              <details key={q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">{q}<span className="text-2xl text-[#ff5a1f] transition group-open:rotate-45">+</span></summary>
                <p className="mt-3 text-[#555]">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
