import Link from 'next/link'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'
import AiReceptionistBand from '@/components/AiReceptionistBand'
import { SITE, serviceList, pageMeta } from '@/lib/seo'
import PageSeo from '@/components/PageSeo'
import { pageFaqs } from '@/lib/pageFaqs'

export const metadata = pageMeta({
  title: 'Software & Automation Services for Small Businesses',
  description: 'Website design, cafe POS, clinic management, rent, hostel and PG, hotel software and business automation for small businesses anywhere in India. Set up and supported online.',
  alternates: { canonical: `${SITE}/services` },
})

export default function Page() {
  return (
    <main className="prod bg-[#f4f1ec] text-[#111] antialiased">
      <PageHero eyebrow="Services" title="Software and automation for local businesses.">
        Cafés, clinics, rentals, hostels, hotels and offices anywhere in India: replace paperwork with software that is set up and supported for you.
      </PageHero>

      <section className="!pt-0 !pb-6">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Link href="/ai-integration" className="group flex flex-col justify-between gap-4 border-t-4 border-[#ff5a1f] bg-[#111] p-7 text-white md:flex-row md:items-center md:p-9">
            <div>
              <p className="text-sm font-semibold text-[#ff5a1f]">Main focus</p>
              <h2 className="mt-2 font-display text-3xl font-extrabold">AI Integration</h2>
              <p className="mt-2 max-w-2xl text-[#b9b5ad]">AI receptionists on your website and WhatsApp, instant lead replies, bills and forms read into Excel, and assistants trained on your own documents.</p>
            </div>
            <p className="shrink-0 font-semibold text-[#ff5a1f]">See AI integration →</p>
          </Link>
        </div>
      </section>

      <section className="!pt-0 !pb-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 md:grid-cols-2 lg:grid-cols-3">
          {serviceList.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="group flex flex-col justify-between border-t-4 border-[#111] bg-white p-7 hover:border-[#ff5a1f]">
              <div>
                <h2 className="font-display text-2xl font-extrabold group-hover:text-[#ff5a1f]">{s.name}</h2>
                <p className="mt-3 text-[#555]">For {s.businesses}.</p>
              </div>
              <p className="mt-6 font-semibold text-[#ff5a1f]">View service →</p>
            </Link>
          ))}
        </div>
      </section>

      <AiReceptionistBand page="services" bg="bg-white" />

      <PageSeo type="CollectionPage" name="Software and automation services for small businesses" path="/services" crumbs={[['Services', '/services']]} faqs={pageFaqs.services()} />
      <CtaBand title="Not sure what you need? Let's talk." />
    </main>
  )
}
