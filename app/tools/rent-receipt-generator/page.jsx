import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import FreeBadges from '@/components/tools/FreeBadges'
import ShareTool from '@/components/tools/ShareTool'
import RentReceiptGenerator from '@/components/tools/RentReceiptGenerator'
import { SITE, pageMeta } from '@/lib/seo'
import ToolOfferActions from '@/components/tools/ToolOfferActions'
import PageSeo from '@/components/PageSeo'
import ToolGuide from '@/components/ToolGuide'
import FaqList from '@/components/FaqList'

const URL = `${SITE}/tools/rent-receipt-generator`

export const metadata = pageMeta({
  title: 'Free Rent Receipt Generator for HRA (Print or PDF)',
  description: 'Create monthly rent receipts for HRA claims in seconds. Free, no sign-in or sign-up. Add landlord PAN, print or save as PDF.',
  alternates: { canonical: URL, languages: { 'en-IN': URL, 'hi-IN': `${SITE}/hi/tools/rent-receipt-generator` } },
})

const faqs = [
  ['Is this rent receipt generator free?', 'Yes. It is completely free with no limits. You don’t need to sign in, sign up or create an account, and everything you type stays in your browser.'],
  ['When is the landlord PAN required?', 'If the annual rent you pay is more than ₹1,00,000, your employer will usually ask for the landlord’s PAN to accept your HRA claim.'],
  ['Do rent receipts need a revenue stamp?', 'Receipts for cash payments above ₹5,000 usually need a revenue stamp signed by the landlord. Bank, UPI and cheque payments generally do not.'],
  ['How do I save the receipts as a PDF?', 'Click “Print / Save as PDF” and choose “Save as PDF” as the printer. Then get the receipts signed by your landlord.'],
  ['Can landlords use this?', 'Yes. Landlords and PG owners can issue receipts here. To manage many tenants, dues and reminders automatically, try RentCorp.'],
]

export default function Page() {
  return (
    <main className="prod bg-[#f4f1ec] text-[#111] antialiased">
      <JsonLd data={[
        { '@context': 'https://schema.org', '@type': 'WebApplication', name: 'Rent Receipt Generator', url: URL, applicationCategory: 'FinanceApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' }, author: { '@type': 'Person', name: 'Manish Chauhan', url: SITE } },
        { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
      ]} />

      <section className="!py-12 md:!py-20 print:!py-0">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="print:hidden">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-[15px] font-semibold text-[#ff5a1f]">Free tool</p>
              <Link href="/hi/tools/rent-receipt-generator" hrefLang="hi" className="text-sm font-semibold underline decoration-[#ff5a1f] underline-offset-4">हिंदी में देखें</Link>
            </div>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">Rent Receipt Generator</h1>
            <p className="mt-5 max-w-2xl text-xl leading-relaxed text-[#444]">Make rent receipts for your HRA claim in under a minute. Completely free: no sign-in, no sign-up, no limits. Just fill in the details and print.</p>
            <FreeBadges className="mt-6" />
            <ShareTool className="mt-5" url={URL} title="Free Rent Receipt Generator" message="Free rent receipt generator for HRA: make all 12 receipts in a minute, no sign-up." />
          </div>
          <div className="mt-10 print:mt-0">
            <RentReceiptGenerator />
          </div>
        </div>
      </section>

      <div className="print:hidden">
        <ToolGuide
          title="Rent receipt format for HRA"
          intro="A rent receipt for HRA needs the tenant's and landlord's names, the rented property's full address, the rent amount in figures and words, the rent period, the date and mode of payment, and the landlord's signature. Add the landlord's PAN if yearly rent is more than ₹1,00,000, and a revenue stamp only for cash payments above ₹5,000. This free rent receipt generator fills all of it in and makes all 12 monthly receipts at once."
          pointsTitle="Rules employers check"
          points={[['Landlord PAN', 'Needed when rent is more than ₹1,00,000 a year (about ₹8,334 a month or more)'], ['Revenue stamp', 'Only for cash payments above ₹5,000; not needed for UPI, bank transfer or cheque'], ['Old tax regime only', 'The HRA exemption is not available under the new tax regime'], ['Monthly or yearly', 'One receipt per month, or one for the whole period: check what your employer prefers']]}
          note="Sample wording: “Received a sum of Rs. 12,000 (Rupees Twelve Thousand only) from [tenant] towards the rent of [address] for the month of April 2026, paid by UPI.” Signed by the house owner, with PAN where needed."
        />
      </div>
      <section className="!py-14 md:!py-20 bg-[#111] print:hidden">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 px-5 sm:px-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#ff5a1f]">For landlords &amp; PG owners</p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-extrabold text-white md:text-4xl">Collect rent from many tenants? Automate it.</h2>
            <p className="mt-3 max-w-xl text-lg text-[#b9b5ad]">RentCorp tracks every tenant, generates receipts, sends reminders and shows who is overdue.</p>
          </div>
          <ToolOfferActions tool="rent" href="/rentcorp" label="See RentCorp" />
        </div>
      </section>

      <section className="!py-14 md:!py-20 print:hidden">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">Rent receipts for HRA: common questions</h2>
          <FaqList items={faqs} className="mt-8" />
          <p className="mt-6 text-sm text-[#777]">This tool helps you prepare receipts. Check your employer&apos;s HRA rules for exact requirements.</p>
        </div>
      </section>

      <PageSeo type="WebPage" name="Rent Receipt Generator" path="/tools/rent-receipt-generator" crumbs={[['Free tools', '/tools'], ['Rent Receipt Generator', '/tools/rent-receipt-generator']]} />
    </main>
  )
}
