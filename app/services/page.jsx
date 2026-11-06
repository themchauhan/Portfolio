import Link from 'next/link'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'
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

      <PageSeo type="CollectionPage" name="Software and automation services for small businesses" path="/services" crumbs={[['Services', '/services']]} faqs={pageFaqs.services()} />
      <CtaBand title="Not sure what you need? Let's talk." />
    </main>
  )
}
