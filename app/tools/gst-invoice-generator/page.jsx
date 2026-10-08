import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import FreeBadges from '@/components/tools/FreeBadges'
import GstInvoiceGenerator from '@/components/tools/GstInvoiceGenerator'
import { SITE, pageMeta } from '@/lib/seo'

const URL = `${SITE}/tools/gst-invoice-generator`

export const metadata = pageMeta({
  title: 'Free GST Invoice Generator (CGST, SGST, IGST) – Print or PDF',
  description: 'Create a GST tax invoice in a minute. Auto CGST/SGST or IGST, HSN codes, amount in words. Free, no sign-in or sign-up.',
  alternates: { canonical: URL },
})

const faqs = [
  ['Is this GST invoice generator free?', 'Yes. It is completely free with no limits. You don’t need to sign in, sign up or create an account, and everything you type stays in your browser.'],
  ['When is CGST + SGST charged and when is IGST charged?', 'If the seller and the place of supply (buyer’s state) are in the same state, CGST and SGST are charged, each at half the GST rate. If they are in different states, IGST is charged at the full rate. The tool picks this automatically.'],
  ['What are the current GST rates?', 'Since 22 September 2025, the main GST rates are 0%, 5%, 18% and 40%. Restaurant food is usually 5%. Always confirm the rate for your specific item or service.'],
  ['What must a GST tax invoice include?', 'Typically the supplier’s name, address and GSTIN, invoice number and date, buyer details, HSN/SAC codes, taxable value, GST rate and amount, place of supply and a signature.'],
  ['How do I save the invoice as a PDF?', 'Click “Print / Save as PDF” and choose “Save as PDF” as the printer.'],
]

export default function Page() {
  return (
    <main className="prod bg-[#f4f1ec] text-[#111] antialiased">
      <div className="print:hidden"><Nav /></div>
      <JsonLd data={[
        { '@context': 'https://schema.org', '@type': 'WebApplication', name: 'GST Invoice Generator', url: URL, applicationCategory: 'BusinessApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' }, author: { '@type': 'Person', name: 'Manish Chauhan', url: SITE } },
        { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
      ]} />

      <section className="!py-12 md:!py-20 print:!py-0">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="print:hidden">
            <p className="text-[15px] font-semibold text-[#ff5a1f]">Free tool</p>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">GST Invoice Generator</h1>
            <p className="mt-5 max-w-2xl text-xl leading-relaxed text-[#444]">Make a proper GST tax invoice in a minute. CGST/SGST or IGST is worked out for you. Completely free: no sign-in, no sign-up, no limits.</p>
            <FreeBadges className="mt-6" />
          </div>
          <div className="mt-10 print:mt-0"><GstInvoiceGenerator /></div>
        </div>
      </section>

      <section className="!py-14 md:!py-20 bg-[#111] print:hidden">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 sm:px-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#ff5a1f]">For cafés &amp; restaurants</p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-extrabold text-white md:text-4xl">Billing customers all day? Automate it.</h2>
            <p className="mt-3 max-w-xl text-lg text-[#b9b5ad]">CafeCorp does GST billing, table orders, kitchen display and daily sales reports in one simple POS.</p>
          </div>
          <Link href="/cafecorp" className="shrink-0 rounded-full bg-[#ff5a1f] px-7 py-3.5 font-semibold text-white hover:bg-white hover:text-[#111]">See CafeCorp</Link>
        </div>
      </section>

      <section className="!py-14 md:!py-20 print:hidden">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">GST invoices: common questions</h2>
          <div className="mt-8 max-w-4xl divide-y divide-black/15 border-y border-black/15">
            {faqs.map(([q, a]) => (
              <details key={q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">{q}<span className="text-2xl text-[#ff5a1f] transition group-open:rotate-45">+</span></summary>
                <p className="mt-3 text-[#555]">{a}</p>
              </details>
            ))}
          </div>
          <p className="mt-6 text-sm text-[#777]">This tool helps you prepare invoices. Confirm GST rates and invoice rules with your accountant.</p>
        </div>
      </section>

      <div className="print:hidden"><Footer /></div>
    </main>
  )
}
