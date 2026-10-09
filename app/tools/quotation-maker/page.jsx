import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import FreeBadges from '@/components/tools/FreeBadges'
import ShareTool from '@/components/tools/ShareTool'
import QuotationMaker from '@/components/tools/QuotationMaker'
import { SITE, pageMeta } from '@/lib/seo'

const URL = `${SITE}/tools/quotation-maker`

export const metadata = pageMeta({
  title: 'Free Quotation Maker – Create a Quotation Format Online (PDF)',
  description: 'Make a professional quotation or estimate in a minute: items, GST, discount, validity and terms. Free, no sign-in or sign-up. Print or save as PDF.',
  alternates: { canonical: URL },
})

const faqs = [
  ['Is this quotation maker free?', 'Yes. It is completely free with no limits. You don’t need to sign in or sign up, and everything you type stays in your browser.'],
  ['What is the difference between a quotation and an invoice?', 'A quotation is an offer sent before the work, showing the expected price and terms. An invoice is a bill sent after the sale. Once your quote is accepted, you can create a GST invoice with the free GST Invoice Generator.'],
  ['Should I add GST to a quotation?', 'If you are GST-registered, showing GST in the quotation tells the customer the full amount upfront. Tick “Add GST” and choose the rate for each item.'],
  ['How long should a quotation be valid?', 'Commonly 7 to 30 days, depending on how quickly your material costs change. Set the “Valid until” date accordingly.'],
  ['How do I save the quotation as a PDF?', 'Click “Print / Save as PDF” and choose “Save as PDF” as the printer, then share it on WhatsApp or email.'],
]

export default function Page() {
  return (
    <main className="prod bg-[#f4f1ec] text-[#111] antialiased">
      <JsonLd data={[
        { '@context': 'https://schema.org', '@type': 'WebApplication', name: 'Quotation Maker', url: URL, applicationCategory: 'BusinessApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' }, author: { '@type': 'Person', name: 'Manish Chauhan', url: SITE } },
        { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
      ]} />

      <section className="!py-12 md:!py-20 print:!py-0">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="print:hidden">
            <p className="text-[15px] font-semibold text-[#ff5a1f]">Free tool</p>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">Quotation Maker</h1>
            <p className="mt-5 max-w-2xl text-xl leading-relaxed text-[#444]">Send a professional quotation in a minute, with items, GST, discount, validity and terms. Completely free: no sign-in, no sign-up, no limits.</p>
            <FreeBadges className="mt-6" />
            <ShareTool className="mt-5" url={URL} title="Free Quotation Maker" message="Free quotation maker: items, GST, discount and terms in a minute, no sign-up." />
          </div>
          <div className="mt-10 print:mt-0"><QuotationMaker /></div>
          <p className="mt-8 text-[#555] print:hidden">Quote accepted? Create the bill with the free <Link href="/tools/gst-invoice-generator" className="font-semibold text-[#111] underline decoration-[#ff5a1f] decoration-2 underline-offset-4">GST Invoice Generator</Link>.</p>
        </div>
      </section>

      <section className="!py-14 md:!py-20 bg-[#111] print:hidden">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 sm:px-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#ff5a1f]">For busy businesses</p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-extrabold text-white md:text-4xl">Sending quotes and bills every day? Automate it.</h2>
            <p className="mt-3 max-w-xl text-lg text-[#b9b5ad]">Quotes that turn into invoices in one click, follow-up reminders on WhatsApp, and every customer in one place.</p>
          </div>
          <Link href="/services/business-automation" className="shrink-0 rounded-full bg-[#ff5a1f] px-7 py-3.5 font-semibold text-white hover:bg-white hover:text-[#111]">See business automation</Link>
        </div>
      </section>

      <section className="!py-14 md:!py-20 print:hidden">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">Quotations: common questions</h2>
          <div className="mt-8 max-w-4xl divide-y divide-black/15 border-y border-black/15">
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
