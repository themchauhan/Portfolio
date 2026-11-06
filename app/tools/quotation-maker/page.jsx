import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import FreeBadges from '@/components/tools/FreeBadges'
import ShareTool from '@/components/tools/ShareTool'
import QuotationMaker from '@/components/tools/QuotationMaker'
import { SITE, pageMeta } from '@/lib/seo'
import ToolOfferActions from '@/components/tools/ToolOfferActions'
import PageSeo from '@/components/PageSeo'
import ToolGuide from '@/components/ToolGuide'
import FaqList from '@/components/FaqList'

const URL = `${SITE}/tools/quotation-maker`

export const metadata = pageMeta({
  title: 'Free Quotation Maker – Create a Quotation Format Online (PDF)',
  description: 'Make a professional quotation or estimate in a minute: items, GST, discount, validity and terms. Free, no sign-in or sign-up. Print or save as PDF.',
  alternates: { canonical: URL, languages: { 'en-IN': URL, 'hi-IN': `${SITE}/hi/tools/quotation-maker` } },
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
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-[15px] font-semibold text-[#ff5a1f]">Free tool</p>
              <Link href="/hi/tools/quotation-maker" hrefLang="hi" className="text-sm font-semibold underline decoration-[#ff5a1f] underline-offset-4">हिंदी में देखें</Link>
            </div>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">Quotation Maker</h1>
            <p className="mt-5 max-w-2xl text-xl leading-relaxed text-[#444]">Send a professional quotation in a minute, with items, GST, discount, validity and terms. Completely free: no sign-in, no sign-up, no limits.</p>
            <FreeBadges className="mt-6" />
            <ShareTool className="mt-5" url={URL} title="Free Quotation Maker" message="Free quotation maker: items, GST, discount and terms in a minute, no sign-up." />
          </div>
          <div className="mt-10 print:mt-0"><QuotationMaker /></div>
          <p className="mt-8 text-[#555] print:hidden">Quote accepted? Create the bill with the free <Link href="/tools/gst-invoice-generator" className="font-semibold text-[#111] underline decoration-[#ff5a1f] decoration-2 underline-offset-4">GST Invoice Generator</Link>. New to quotations? Read <Link href="/blog/how-to-make-a-quotation" className="font-semibold text-[#111] underline decoration-[#ff5a1f] decoration-2 underline-offset-4">how to make a quotation</Link>.</p>
        </div>
      </section>

      <div className="print:hidden">
        <ToolGuide
          title="Quotation format: what to include, with a sample"
          intro="An online quotation maker for small businesses: a quotation should show your business details (and GSTIN if registered), the customer's details, a quotation number and date, a 'valid until' date, each item with quantity, unit and rate, any discount, GST (CGST + SGST or IGST) calculated after the discount, the total in figures and words, payment and delivery terms, and a signature. Most quotations are valid for 7 to 30 days."
          table={{ head: ['#', 'Item / work', 'Qty', 'Rate (₹)', 'Amount (₹)'], rows: [['1', 'Modular kitchen, L-shape', '1 job', '1,45,000', '1,45,000'], ['2', 'Sliding wardrobe, laminate finish', '2 pcs', '38,000', '76,000'], ['3', 'Installation and transport', '1 job', '5,000', '5,000'], ['Total', 'Subtotal (before discount and GST)', '', '', '2,26,000']] }}
          note="Below the subtotal, show the discount, then GST, then the final total. If you are not GST-registered, do not add GST or a GSTIN."
        />
      </div>
      <section className="!py-14 md:!py-20 bg-[#111] print:hidden">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 sm:px-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#ff5a1f]">For busy businesses</p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-extrabold text-white md:text-4xl">Sending quotes and bills every day? Automate it.</h2>
            <p className="mt-3 max-w-xl text-lg text-[#b9b5ad]">Quotes that turn into invoices in one click, follow-up reminders on WhatsApp, and every customer in one place.</p>
          </div>
          <ToolOfferActions tool="quotation" href="/services/business-automation" label="See business automation" />
        </div>
      </section>

      <section className="!py-14 md:!py-20 print:hidden">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">Quotations: common questions</h2>
          <FaqList items={faqs} className="mt-8" />
        </div>
      </section>
      <PageSeo type="WebPage" name="Quotation Maker" path="/tools/quotation-maker" crumbs={[['Free tools', '/tools'], ['Quotation Maker', '/tools/quotation-maker']]} />
    </main>
  )
}
