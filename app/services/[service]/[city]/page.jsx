import Link from 'next/link'
import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import ContactForm from '@/components/products/ContactForm'
import { products } from '@/lib/products'
import { SITE, services, cities, serviceList, cityList, pathFor, stateOf, placeName } from '@/lib/seo'

export const dynamicParams = false

export function generateStaticParams() {
  return serviceList.flatMap((s) => cityList.map((c) => ({ service: s.slug, city: c.slug })))
}

export function generateMetadata({ params }) {
  const s = services[params.service]
  const c = cities[params.city]
  if (!s || !c) return {}
  const title = `${s.name} in ${c.name}`
  const description = `${s.name} for ${s.businesses} in ${c.name}${c.alt ? ` (${c.alt})` : ''}${stateOf(c) ? `, ${stateOf(c)}` : ''}. Replace ${s.pain} with simple software. Free demo and fixed-price quote.`
  const url = `${SITE}${pathFor(s.slug, c.slug)}`
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: 'website' },
  }
}

const steps = [
  ['Free call', '20 minutes. You show me how things work today.'],
  ['Clear plan and quote', 'A plain-language plan with a fixed price.'],
  ['Setup and training', 'I configure everything and train your team on a video call or in person on request.'],
  ['Go live and support', 'Ongoing support whenever you need a change.'],
]

export default function Page({ params }) {
  const s = services[params.service]
  const c = cities[params.city]
  if (!s || !c) notFound()

  const product = s.product ? products[s.product] : null
  const url = `${SITE}${pathFor(s.slug, c.slug)}`
  const faqs = s.faqs(c.name)
  const otherServices = serviceList.filter((x) => x.slug !== s.slug)
  const nearby = c.nearby.map((slug) => cities[slug]).filter(Boolean)

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `${s.name} in ${c.name}`,
      serviceType: s.name,
      description: `${s.name} for ${s.businesses} in ${placeName(c)}.`,
      url,
      areaServed: { '@type': 'City', name: c.name, containedInPlace: { '@type': 'AdministrativeArea', name: `${stateOf(c) || 'Chandigarh'}, India` } },
      provider: { '@type': 'Person', name: 'Manish Chauhan', url: SITE },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE}/services` },
        { '@type': 'ListItem', position: 3, name: s.name, item: `${SITE}/services/${s.slug}` },
        { '@type': 'ListItem', position: 4, name: c.name, item: url },
      ],
    },
  ]

  return (
    <main className="prod bg-[#f4f1ec] text-[#111] antialiased">
      <Nav />
      <JsonLd data={jsonLd} />

      {/* Hero */}
      <section className="!py-14 md:!py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <nav aria-label="Breadcrumb" className="text-sm text-[#777]">
            <Link href="/services" className="hover:text-[#111]">Services</Link> /{' '}
            <Link href={`/services/${s.slug}`} className="hover:text-[#111]">{s.short}</Link> / {c.name}
          </nav>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-extrabold leading-[1.03] tracking-tight md:text-6xl xl:text-7xl">
            {s.name} in <span className="underline decoration-[#ff5a1f] decoration-[6px] underline-offset-[10px]">{c.name}</span>
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-[#444]">
            {c.context} If your {s.businesses} still run on {s.pain}, simple software can save hours every week and cut mistakes. I set it up for businesses in {c.name}{c.alt ? ` (${c.alt})` : ''} and nearby towns.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#contact" className="rounded-full bg-[#111] px-7 py-3.5 font-semibold text-white hover:bg-[#ff5a1f]">Get a free demo</a>
            {product && <Link href={`/${product.slug}`} className="rounded-full border-2 border-[#111] px-7 py-3 font-semibold hover:bg-[#111] hover:text-white">See {product.name}</Link>}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="!py-16 md:!py-24 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-5xl">What you get in {c.name}</h2>
          <div className="mt-12 grid gap-px overflow-hidden border border-black/15 bg-black/15 sm:grid-cols-2 lg:grid-cols-3">
            {s.benefits.map(([t, d], i) => (
              <div key={t} className="bg-white p-7">
                <p className="font-display text-sm font-bold text-[#ff5a1f]">0{i + 1}</p>
                <h3 className="mt-4 font-display text-xl font-extrabold">{t}</h3>
                <p className="mt-2 text-[#555]">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product callout */}
      <section className="!py-14 md:!py-20 bg-[#111]">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 sm:px-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#ff5a1f]">{product ? 'Ready-made product' : 'Built for you'}</p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold text-white md:text-4xl">
              {product ? `${product.name}: ${product.headline}` : `${s.short} built around how your business works.`}
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-[#b9b5ad]">
              {product ? product.summary : 'Tell me how you work today and I will build a focused first version, with a fixed price agreed upfront.'}
            </p>
          </div>
          <Link href={product ? `/${product.slug}` : '/contacts'} className="shrink-0 rounded-full bg-[#ff5a1f] px-7 py-3.5 font-semibold text-white hover:bg-white hover:text-[#111]">
            {product ? `Explore ${product.name}` : 'Talk to me'}
          </Link>
        </div>
      </section>

      {/* Process */}
      <section className="!py-16 md:!py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-5xl">How it works</h2>
          <ol className="mt-12 grid gap-10 md:grid-cols-4">
            {steps.map(([t, d], i) => (
              <li key={t} className="border-t-4 border-[#111] pt-5">
                <p className="font-display text-sm font-bold text-[#ff5a1f]">Step {i + 1}</p>
                <h3 className="mt-2 font-display text-xl font-extrabold">{t}</h3>
                <p className="mt-2 text-[#555]">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="!py-16 md:!py-24 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-5xl">Questions from {c.name}</h2>
          <div className="mt-10 max-w-3xl divide-y divide-black/15 border-y border-black/15">
            {faqs.map(([q, a]) => (
              <details key={q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">{q}<span className="text-2xl text-[#ff5a1f] transition group-open:rotate-45">+</span></summary>
                <p className="mt-3 text-[#555]">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="!py-14 md:!py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-extrabold">More services in {c.name}</h2>
            <ul className="mt-5 space-y-2">
              {otherServices.map((x) => (
                <li key={x.slug}><Link href={pathFor(x.slug, c.slug)} className="font-medium underline decoration-[#ff5a1f] decoration-2 underline-offset-4 hover:text-[#ff5a1f]">{x.name} in {c.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-extrabold">{s.short} in nearby towns</h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {nearby.map((n) => (
                <li key={n.slug}><Link href={pathFor(s.slug, n.slug)} className="inline-block rounded-full border border-black/25 px-4 py-2 text-sm font-semibold hover:border-[#111]">{n.name}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="!py-16 md:!py-24 bg-[#ff5a1f]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-[#111] md:text-5xl">Get {s.keyword} for your business in {c.name}.</h2>
            <p className="mt-5 max-w-md text-xl text-[#111]/80">Free 20-minute call. Fixed-price quote. Reply within one working day.</p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-xl md:p-8"><ContactForm product={`${s.short} - ${c.name}`} /></div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
