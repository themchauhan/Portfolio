import Link from 'next/link'
import PageHero from '@/components/PageHero'
import FreeBadges from '@/components/tools/FreeBadges'
import { SITE, pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'Free Business Tools: Rent Receipts, GST Invoices',
  description: 'Free online tools for Indian businesses and employees: rent receipt generator for HRA and GST invoice generator. No sign-in or sign-up needed.',
  alternates: { canonical: `${SITE}/tools` },
})

const tools = [
  ['/tools/rent-receipt-generator', 'Rent Receipt Generator', 'Monthly rent receipts for your HRA claim, with landlord PAN and amount in words.', 'For employees, landlords and PG owners'],
  ['/tools/gst-invoice-generator', 'GST Invoice Generator', 'A GST tax invoice with automatic CGST/SGST or IGST, HSN codes and totals.', 'For cafés, shops and freelancers'],
]

export default function Page() {
  return (
    <main className="prod bg-[#f4f1ec] text-[#111] antialiased">
      <PageHero eyebrow="Free tools" title="Small tools that save real time.">
        Completely free to use. No sign-in, no sign-up, no limits, and everything stays in your browser.
      </PageHero>
      <div className="mx-auto -mt-6 mb-12 max-w-7xl px-5 sm:px-8 md:-mt-12"><FreeBadges /></div>
      <section className="!py-0 pb-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 md:grid-cols-2">
          {tools.map(([href, name, desc, who]) => (
            <Link key={href} href={href} className="group border-t-4 border-[#111] bg-white p-8 hover:border-[#ff5a1f]">
              <p className="text-sm font-semibold text-[#ff5a1f]">{who}</p>
              <h2 className="mt-2 font-display text-3xl font-extrabold group-hover:text-[#ff5a1f]">{name}</h2>
              <p className="mt-3 text-lg text-[#555]">{desc}</p>
              <p className="mt-6 font-semibold text-[#ff5a1f]">Open tool →</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
