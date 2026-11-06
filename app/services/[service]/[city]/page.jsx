import Link from 'next/link'
import { notFound, permanentRedirect } from 'next/navigation'
import JsonLd from '@/components/JsonLd'
import TrackedLink from '@/components/TrackedLink'
import ContactForm from '@/components/products/ContactForm'
import { products } from '@/lib/products'
import { SITE, services, pageMeta } from '@/lib/seo'
import { townPageFor, townPageKeys } from '@/lib/townPages'
import FaqList from '@/components/FaqList'

// Only the town pages listed in lib/townPages.js exist; any other town URL redirects to the service page.
export const dynamicParams = true

export function generateStaticParams() {
  return townPageKeys.map((k) => { const [service, city] = k.split('/'); return { service, city } })
}

export function generateMetadata({ params }) {
  const s = services[params.service]
  const tp = townPageFor(params.service, params.city)
  if (!s || !tp) return {}
  const url = `${SITE}/services/${s.slug}/${params.city}`
  return pageMeta({
    title: `${s.name} in ${tp.town}`,
    description: tp.intro.split('. ').slice(0, 2).join('. ').slice(0, 155),
    alternates: { canonical: url },
  })
}

const steps = [
  ['Free call', '20 minutes. You show me how things work today.'],
  ['Clear plan and quote', 'A plain-language plan with a fixed price.'],
  ['Setup and training', 'I set everything up and train your team on a video call, or in person on request.'],
  ['Go live and support', 'Ongoing support whenever you need a change.'],
]

export default function Page({ params }) {
  const s = services[params.service]
  if (!s) notFound()
  const tp = townPageFor(params.service, params.city)
  if (!tp) permanentRedirect(`/services/${s.slug}`)

  const product = s.product ? products[s.product] : null
  const url = `${SITE}/services/${s.slug}/${params.city}`
  const others = townPageKeys.filter((k) => k !== `${s.slug}/${params.city}`)

  const jsonLd = [
    {
      '@context': 'https://schema.org', '@type': 'Service', name: `${s.name} in ${tp.town}`, serviceType: s.name, url,
      description: tp.intro, areaServed: { '@type': 'City', name: tp.town },
      provider: { '@type': 'Person', name: 'Manish Chauhan', url: SITE },
    },
    {
      '@context': 'https://schema.org', '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE}/services` },
        { '@type': 'ListItem', position: 3, name: s.name, item: `${SITE}/services/${s.slug}` },
        { '@type': 'ListItem', position: 4, name: tp.town, item: url },
      ],
    },
    {
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: tp.faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
    },
  ]

  return (
    <main className="prod bg-[#f4f1ec] text-[#111] antialiased">
      <JsonLd data={jsonLd} />

      <section className="!py-14 md:!py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <nav aria-label="Breadcrumb" className="text-sm text-[#777]">
            <Link href="/services" className="hover:text-[#111]">Services</Link> /{' '}
            <Link href={`/services/${s.slug}`} className="hover:text-[#111]">{s.short}</Link> / {tp.town}
          </nav>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            {s.name} in <span className="underline decoration-[#ff5a1f] decoration-[6px] underline-offset-[10px]">{tp.town}</span>
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[#444] md:text-xl">{tp.intro}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <TrackedLink event="product_demo_click" params={{ service: s.slug, city: params.city, position: 'town_hero' }} href="#contact" className="rounded-full bg-[#111] px-7 py-3.5 font-semibold text-white hover:bg-[#ff5a1f]">{s.cta || 'Get a free demo'}</TrackedLink>
            {product && <Link href={`/${product.slug}`} className="rounded-full border-2 border-[#111] px-7 py-3 font-semibold hover:bg-[#111] hover:text-white">See {product.name}</Link>}
          </div>
        </div>
      </section>

      <section className="!py-14 md:!py-20 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">What you get in {tp.town}</h2>
          <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {tp.points.map(([t, d]) => (
              <li key={t} className="border-t-4 border-[#111] bg-[#f4f1ec] p-6">
                <h3 className="font-display text-xl font-extrabold">{t}</h3>
                <p className="mt-2 text-[#555]">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="!py-14 md:!py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">How it works</h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-4">
            {steps.map(([t, d], i) => (
              <li key={t} className="border-t-4 border-[#111] pt-5">
                <p className="text-sm font-semibold text-[#ff5a1f]">Step {i + 1}</p>
                <h3 className="mt-2 font-display text-xl font-extrabold">{t}</h3>
                <p className="mt-2 text-[#555]">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="!py-14 md:!py-20 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">Questions from {tp.town}</h2>
          <FaqList items={tp.faqs} className="mt-8" />
          <p className="mt-8 text-[#555]">
            Not in {tp.town}? <Link href={`/services/${s.slug}`} className="font-semibold text-[#111] underline decoration-[#ff5a1f] decoration-2 underline-offset-4">{s.name}</Link> is available for businesses anywhere in India.
            {others.length > 0 && <> Also see: {others.map((k, i) => { const [sv, c] = k.split('/'); const o = townPageFor(sv, c); return <span key={k}>{i > 0 && ', '}<Link href={`/services/${k}`} className="underline">{services[sv].short} in {o.town}</Link></span> })}.</>}
          </p>
        </div>
      </section>

      <section id="contact" className="!py-16 md:!py-24 bg-[#ff5a1f] scroll-mt-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-[#111] md:text-5xl">Get a free demo for your business in {tp.town}.</h2>
            <p className="mt-5 max-w-md text-xl text-[#111]/80">Free 20-minute call. Fixed-price quote. Reply within one working day.</p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-xl md:p-8"><ContactForm product={`${s.short} - ${tp.town}`} /></div>
        </div>
      </section>
    </main>
  )
}
