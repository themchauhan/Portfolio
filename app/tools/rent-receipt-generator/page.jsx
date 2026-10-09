import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import FreeBadges from '@/components/tools/FreeBadges'
import ShareTool from '@/components/tools/ShareTool'
import RentReceiptGenerator from '@/components/tools/RentReceiptGenerator'
import { SITE, pageMeta } from '@/lib/seo'

const URL = `${SITE}/tools/rent-receipt-generator`

export const metadata = pageMeta({
  title: 'Free Rent Receipt Generator for HRA (Print or PDF)',
  description: 'Create monthly rent receipts for HRA claims in seconds. Free, no sign-in or sign-up. Add landlord PAN, print or save as PDF.',
  alternates: { canonical: URL },
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
            <p className="text-[15px] font-semibold text-[#ff5a1f]">Free tool</p>
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

      <section className="!py-14 md:!py-20 bg-[#111] print:hidden">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 px-5 sm:px-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#ff5a1f]">For landlords &amp; PG owners</p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-extrabold text-white md:text-4xl">Collect rent from many tenants? Automate it.</h2>
            <p className="mt-3 max-w-xl text-lg text-[#b9b5ad]">RentCorp tracks every tenant, generates receipts, sends reminders and shows who is overdue.</p>
          </div>
          <Link href="/rentcorp" className="shrink-0 rounded-full bg-[#ff5a1f] px-7 py-3.5 font-semibold text-white hover:bg-white hover:text-[#111]">See RentCorp</Link>
        </div>
      </section>

      <section className="!py-14 md:!py-20 print:hidden">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">Rent receipts for HRA: common questions</h2>
          <div className="mt-8 divide-y divide-black/15 border-y border-black/15">
            {faqs.map(([q, a]) => (
              <details key={q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">{q}<span className="text-2xl text-[#ff5a1f] transition group-open:rotate-45">+</span></summary>
                <p className="mt-3 text-[#555]">{a}</p>
              </details>
            ))}
          </div>
          <p className="mt-6 text-sm text-[#777]">This tool helps you prepare receipts. Check your employer&apos;s HRA rules for exact requirements.</p>
        </div>
      </section>

    </main>
  )
}
