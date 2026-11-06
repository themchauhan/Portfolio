import JsonLd from '@/components/JsonLd'
import FreeBadges from '@/components/tools/FreeBadges'
import ShareTool from '@/components/tools/ShareTool'
import QuoteEstimator from '@/components/QuoteEstimator'
import StarterPack from '@/components/StarterPack'
import { SITE, pageMeta } from '@/lib/seo'
import { starterPriceText, quoteRates, inr, starterPack, STARTER_OFFER_ENDS_LABEL } from '@/lib/pricing'
import ToolGuide from '@/components/ToolGuide'
import PageSeo from '@/components/PageSeo'
import FaqList from '@/components/FaqList'

const URL = `${SITE}/tools/website-cost-calculator`

export const metadata = pageMeta({
  title: 'Website Cost Calculator India 2026: Website Price List & Instant Estimate',
  description: 'How much does a website cost in India in 2026? See the website price list (from ₹4,999) and get an instant estimate for a business website, online store or web app. Free calculator.',
  alternates: { canonical: URL },
})

const type = (id) => quoteRates.types.find((t) => t.id === id)
const feature = (id) => quoteRates.features.find((f) => f.id === id)
const priceList = {
  head: ['Type of website', 'Starting price', 'What you get'],
  rows: [
    ['Landing page', inr(type('landing').base), 'One page for a product, offer or event, with an enquiry form'],
    ['Starter website', `${inr(starterPack.price)}${starterPack.offerActive ? ` (offer until ${STARTER_OFFER_ENDS_LABEL})` : ''}`, 'Up to 3 pages, WhatsApp button, Google Maps and Google Business Profile'],
    ['Business website', inr(type('business').base), 'About 5 pages (home, about, services, gallery, contact), WhatsApp and basic SEO'],
    ['Online store', inr(type('ecommerce').base), 'Product pages, cart and online payments (UPI, cards)'],
    ['Custom web app', inr(type('webapp').base), 'Logins, dashboards, portals or internal tools'],
    ['Business automation', inr(type('automation').base), 'Replaces a paperwork or Excel process with simple software'],
    ['Maintenance', `${inr(quoteRates.maintenancePerMonth)}/month`, 'Updates, backups, security checks and small changes'],
  ],
}
const addOns = [
  ['Extra page', `${inr(quoteRates.extraPage)} per page`],
  ...['cms', 'blog', 'booking', 'payments', 'login', 'multilang', 'branding', 'integration'].map((id) => [feature(id).name, inr(feature(id).price)]),
  [feature('content').name.replace(' (per page)', ''), `${inr(feature('content').price)} per page`],
]

const faqs = [
  ['How much does a business website cost in India?', `A simple starter website for a shop (up to 3 pages, WhatsApp button and Google listing) is ${starterPriceText()}. A 5-page business website with WhatsApp chat and basic SEO included starts around ₹15,000. The final cost depends on pages, features like booking or payments, content writing and how fast you need it.`],
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
          <div className="mt-10"><StarterPack page="website-cost-calculator" /></div>
          <h2 className="mt-14 font-display text-2xl font-extrabold tracking-tight md:text-3xl">Need something else? Build your own estimate</h2>
          <div className="mt-6"><QuoteEstimator /></div>
        </div>
      </section>
      <ToolGuide
        title="Website price list in India (2026)"
        intro={`How much does a website cost in India? A one-page landing page starts at ${inr(type('landing').base)}, a business website of about 5 pages at ${inr(type('business').base)}, an online store at ${inr(type('ecommerce').base)} and a custom web app at ${inr(type('webapp').base)}. These are my starting prices as a freelance developer; domain and hosting are paid separately. Use the calculator above for an estimate based on your pages and features.`}
        table={priceList}
        pointsTitle="Add-on prices"
        points={addOns.map(([n, p]) => [`${n}: ${p}`])}
        note="Prices are starting prices for small and medium businesses. Agencies and freelancers price differently; you get a fixed quote after a short call."
      />
      <section className="!py-14 md:!py-20 bg-[#f4f1ec]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">Website cost: common questions</h2>
          <FaqList items={faqs} className="mt-8" />
        </div>
      </section>
      <PageSeo type="WebPage" name="Website Cost Calculator" path="/tools/website-cost-calculator" crumbs={[['Free tools', '/tools'], ['Website Cost Calculator', '/tools/website-cost-calculator']]} />
    </main>
  )
}
