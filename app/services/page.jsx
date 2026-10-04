import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'
import { SITE, serviceList, cityList } from '@/lib/seo'

export const metadata = {
  title: 'Automation & Software Services in Haryana, Jaipur, Chandigarh & Mohali',
  description: 'Cafe POS, clinic management, rent, hostel and PG, hotel software and business automation for Rewari, Narnaul, Mahendergarh, Gurgaon, Pataudi, Bhiwani, Jaipur, Neemrana, Bhiwadi, Ambala, Chandigarh, Mohali and nearby towns.',
  alternates: { canonical: `${SITE}/services` },
}

export default function Page() {
  return (
    <main className="prod bg-[#f4f1ec] text-[#111] antialiased">
      <Nav />
      <PageHero eyebrow="Services" title="Software and automation for local businesses.">
        Cafés, clinics, rentals, hostels, hotels and offices across Haryana, Rajasthan, Chandigarh and Mohali: replace paperwork with software that is set up and supported for you.
      </PageHero>

      <section className="!py-0 pb-16">
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

      <section className="!py-14 md:!py-20 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">Areas I serve</h2>
          <ul className="mt-8 flex flex-wrap gap-3">
            {cityList.map((c) => (
              <li key={c.slug}><Link href={`/locations/${c.slug}`} className="inline-block rounded-full border border-black/25 px-5 py-2 font-semibold hover:border-[#ff5a1f] hover:text-[#ff5a1f]">{c.name}</Link></li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title="Not sure what you need? Let's talk." />
      <Footer />
    </main>
  )
}
