import { SITE, serviceList, serviceAreas } from '@/lib/seo'
import { productList } from '@/lib/products'
import { productPlans, quoteRates, starterPack, setupFees, inr, pilot, STARTER_OFFER_ENDS_LABEL } from '@/lib/pricing'
import { newBlogPosts } from '@/lib/blogPosts'
import { getExperienceText } from '@/utils/experience'

// /llms.txt: a plain-text summary of the site for AI assistants and answer engines (llmstxt.org format).
// Built from the same data as the pages, so prices and services never go out of date.
export const dynamic = 'force-static'

const TOOLS = [
  ['Rent Receipt Generator', '/tools/rent-receipt-generator', 'Monthly rent receipts for HRA, with landlord PAN and amount in words. Also in Hindi.'],
  ['GST Invoice Generator', '/tools/gst-invoice-generator', 'GST tax invoice with automatic CGST/SGST or IGST, HSN/SAC codes and totals, saved as PDF.'],
  ['Salary Slip Generator', '/tools/salary-slip-generator', 'Payslip with PF, ESI, TDS, loss of pay and net pay in words. Also in Hindi.'],
  ['Quotation Maker', '/tools/quotation-maker', 'Quotation with items, GST, discount, validity and terms. Also in Hindi.'],
  ['Website Cost Calculator', '/tools/website-cost-calculator', 'Instant price estimate for a website, online store or web app in India.'],
]

export function GET() {
  const type = (id) => quoteRates.types.find((t) => t.id === id)
  const lines = [
    '# Manish Chauhan',
    '',
    `> Full stack web developer in India with ${getExperienceText()} of experience. Builds websites, web apps and simple business software for small businesses, and works as a white-label developer for design and marketing agencies. Based in Haryana, India; works with clients anywhere in India and abroad, online.`,
    '',
    '## Key facts',
    `- Name: Manish Chauhan. Website: ${SITE}. Email: manish@themanishchauhan.in. WhatsApp/phone: +91 70150 66237.`,
    `- Experience: ${getExperienceText()} building websites and web platforms, mostly as part of the Clear Digital team, for companies such as Splunk, Cohesity, Socure, Sift and Digimarc.`,
    '- Skills: Next.js, React, Node.js, WordPress, Drupal, Contentful, Tailwind CSS, MUI, Bootstrap, technical SEO, business automation.',
    '- Payment: UPI or bank transfer. Free demo or free quote before any work.',
    '',
    '## Website prices (starting prices, India)',
    `- Starter website (up to 3 pages, WhatsApp button, Google listing): ${inr(starterPack.price)}${starterPack.offerActive ? ` introductory price until ${STARTER_OFFER_ENDS_LABEL}, regular ${inr(starterPack.regularPrice)}` : ''}. Ready in 1–2 weeks.`,
    `- Landing page: from ${inr(type('landing').base)}`,
    `- Business website (about 5 pages): from ${inr(type('business').base)}`,
    `- Online store with payments: from ${inr(type('ecommerce').base)}`,
    `- Custom web app: from ${inr(type('webapp').base)}`,
    `- Business automation: from ${inr(type('automation').base)}`,
    `- Website maintenance: ${inr(quoteRates.maintenancePerMonth)} per month`,
    '- Domain and hosting are paid separately.',
    `- Full pricing: ${SITE}/pricing · Instant estimate: ${SITE}/tools/website-cost-calculator`,
    '',
    '## Software products (monthly plans)',
    ...productList.map((p) => {
      const plans = productPlans[p.slug] || []
      const from = plans.length ? `from ${inr(Math.min(...plans.map((x) => x.price)))}/month` : ''
      return `- [${p.name}](${SITE}/${p.slug}): ${p.tag}. ${p.summary} Plans ${from}${setupFees[p.slug] ? `, one-time setup ${inr(setupFees[p.slug])}` : ''}.`
    }),
    `- [AppointmentOS](${SITE}/appointmentos) (pilot): missed-call WhatsApp booking and reminders. Free for ${pilot.freeLabel}, then ${inr(pilot.priceAfter)}/month; WhatsApp and phone-number charges are paid by the business.`,
    '',
    '## Services',
    ...serviceList.map((s) => `- [${s.name}](${SITE}/services/${s.slug}): for ${s.businesses}.`),
    `- [Freelance developer for agencies](${SITE}/agencies): white-label Next.js, React and WordPress development for design and marketing agencies in the US, UK and Europe.`,
    '',
    '## Free tools (no sign-up, data stays in the browser)',
    ...TOOLS.map(([n, h, d]) => `- [${n}](${SITE}${h}): ${d}`),
    '',
    '## Guides',
    ...newBlogPosts.map((p) => `- [${p.title}](${SITE}/blog/${p.id}): ${p.quickAnswer || p.excerpt}`),
    '',
    '## Where',
    `Online for businesses anywhere in India. Towns already served include ${serviceAreas.flatMap(([, list]) => list).join(', ')}.`,
    '',
    '## Also',
    '- AI and coding classes for school students (Classes 6–12), live online: https://learn.themanishchauhan.in',
    `- About: ${SITE}/about · Work: ${SITE}/projects · Contact: ${SITE}/contacts`,
    '',
  ]
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
