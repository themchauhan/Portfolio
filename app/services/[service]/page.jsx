import Link from 'next/link'
import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'
import { products } from '@/lib/products'
import { SITE, services, serviceList, cityList, pathFor } from '@/lib/seo'

export const dynamicParams = false

export function generateStaticParams() {
  return serviceList.map((s) => ({ service: s.slug }))
}

export function generateMetadata({ params }) {
  const s = services[params.service]
  if (!s) return {}
  const description = `${s.name} for ${s.businesses} across Haryana, Rajasthan, Chandigarh and Punjab: Rewari, Narnaul, Gurgaon, Bhiwani, Jaipur, Neemrana, Bhiwadi, Ambala, Chandigarh, Mohali and nearby towns.`
  return { title: s.name, description, alternates: { canonical: `${SITE}/services/${s.slug}` } }
}

export default function Page({ params }) {
  const s = services[params.service]
  if (!s) notFound()
  const product = s.product ? products[s.product] : null

  return (
    <main className="prod bg-[#f4f1ec] text-[#111] antialiased">
      <Nav />
      <PageHero eyebrow="Services" title={s.name}>
        For {s.businesses}. Replace {s.pain} with simple software, set up and supported by me.
      </PageHero>

      <section className="!py-0 pb-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {s.benefits.map(([t, d]) => (
              <li key={t} className="border-t-4 border-[#111] bg-white p-6">
                <h2 className="font-display text-xl font-extrabold">{t}</h2>
                <p className="mt-2 text-[#555]">{d}</p>
              </li>
            ))}
          </ul>
          {product && (
            <p className="mt-8 text-lg">Powered by <Link href={`/${product.slug}`} className="font-semibold underline decoration-[#ff5a1f] decoration-2 underline-offset-4">{product.name}</Link>: {product.summary}</p>
          )}
        </div>
      </section>

      <section className="!py-14 md:!py-20 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">Where I work</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {cityList.map((c) => (
              <li key={c.slug}>
                <Link href={pathFor(s.slug, c.slug)} className="block rounded-lg border border-black/20 px-4 py-3 font-medium hover:border-[#ff5a1f] hover:text-[#ff5a1f]">
                  {s.short} in {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title={`Need ${s.keyword}? Let's talk.`} />
      <Footer />
    </main>
  )
}
