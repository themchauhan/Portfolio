import Link from 'next/link'
import { notFound } from 'next/navigation'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'
import { SITE, cities, cityList, serviceList, pathFor, stateOf, placeName, pageMeta } from '@/lib/seo'

export const dynamicParams = false

export function generateStaticParams() {
  return cityList.map((c) => ({ city: c.slug }))
}

export function generateMetadata({ params }) {
  const c = cities[params.city]
  if (!c) return {}
  return pageMeta({
    title: `Business Automation & Software in ${c.name}`,
    description: `Cafe POS, clinic, rent, hostel/PG and hotel software, plus business automation for businesses in ${placeName(c)}. Free demo.`,
    alternates: { canonical: `${SITE}/locations/${c.slug}` },
  })
}

export default function Page({ params }) {
  const c = cities[params.city]
  if (!c) notFound()
  const nearby = c.nearby.map((slug) => cities[slug]).filter(Boolean)

  return (
    <main className="prod bg-[#f4f1ec] text-[#111] antialiased">
      <PageHero eyebrow={placeName(c)} title={`Business automation and software in ${c.name}.`}>
        {c.context} Pick a service below to see what I can set up for your business.
      </PageHero>

      <section className="!py-0 pb-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 md:grid-cols-2 lg:grid-cols-3">
          {serviceList.map((s) => (
            <Link key={s.slug} href={pathFor(s.slug, c.slug)} className="group border-t-4 border-[#111] bg-white p-7 hover:border-[#ff5a1f]">
              <h2 className="font-display text-xl font-extrabold group-hover:text-[#ff5a1f]">{s.name} in {c.name}</h2>
              <p className="mt-3 text-[#555]">For {s.businesses}.</p>
              <p className="mt-5 font-semibold text-[#ff5a1f]">Learn more →</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="!py-14 md:!py-20 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="font-display text-2xl font-extrabold">Also serving nearby</h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {nearby.map((n) => (
              <li key={n.slug}><Link href={`/locations/${n.slug}`} className="inline-block rounded-full border border-black/25 px-5 py-2 font-semibold hover:border-[#ff5a1f]">{n.name}</Link></li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title={`Run a business in ${c.name}? Let's talk.`} />
    </main>
  )
}
