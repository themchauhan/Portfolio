import Link from 'next/link'
import { notFound } from 'next/navigation'
import PageHero from '@/components/PageHero'
import JsonLd from '@/components/JsonLd'
import TrackedLink from '@/components/TrackedLink'
import ContactForm from '@/components/products/ContactForm'
import { products } from '@/lib/products'
import { SITE, services, serviceList, serviceAreas, pageMeta } from '@/lib/seo'
import { townPageFor } from '@/lib/townPages'
import FaqList from '@/components/FaqList'

export const dynamicParams = false

export function generateStaticParams() {
  return serviceList.map((s) => ({ service: s.slug }))
}

export function generateMetadata({ params }) {
  const s = services[params.service]
  if (!s) return {}
  const description = `${s.name} for ${s.businesses}, anywhere in India. Set up and supported online. ${s.metaTail || 'Free demo.'}`
  return pageMeta({ title: s.name, description, alternates: { canonical: `${SITE}/services/${s.slug}` } })
}

const steps = [
  ['Free call', '20 minutes. You show me how things work today.'],
  ['Clear plan and quote', 'A plain-language plan with a fixed price.'],
  ['Setup and training', 'I configure everything and train your team on a video call or in person on request.'],
  ['Go live and support', 'Ongoing support whenever you need a change.'],
]

// One page per service, for businesses anywhere in India; towns are listed as examples (old per-town pages redirect here).
export default function Page({ params }) {
  const s = services[params.service]
  if (!s) notFound()
  const product = s.product ? products[s.product] : null
  const url = `${SITE}/services/${s.slug}`
  const faqs = s.faqs('your town')
  const otherServices = serviceList.filter((x) => x.slug !== s.slug)
  const towns = serviceAreas.flatMap(([, list]) => list)

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: s.name,
      serviceType: s.name,
      description: `${s.name} for ${s.businesses}.`,
      url,
      areaServed: towns.map((t) => ({ '@type': 'City', name: t.replace(/ \(.*\)$/, '') })),
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
        { '@type': 'ListItem', position: 3, name: s.name, item: url },
      ],
    },
  ]

  return (
    <main className="prod bg-[#f4f1ec] text-[#111] antialiased">
      <JsonLd data={jsonLd} />

      <PageHero eyebrow={<Link href="/services" className="hover:underline">← All services</Link>} title={s.name}>
        {s.heroText || <>For {s.businesses}. Replace {s.pain} with simple software, set up and supported by me.</>}
      </PageHero>

      <section className="!pt-0 !pb-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap gap-4">
            <TrackedLink event="product_demo_click" params={{ service: s.slug, position: 'service_hero' }} href="#contact" className="rounded-full bg-[#111] px-7 py-3.5 font-semibold text-white hover:bg-[#ff5a1f]">{s.cta || 'Get a free demo'}</TrackedLink>
            {product && <Link href={`/${product.slug}`} className="rounded-full border-2 border-[#111] px-7 py-3 font-semibold hover:bg-[#111] hover:text-white">See {product.name}</Link>}
          </div>
          <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {s.benefits.map(([t, d]) => (
              <li key={t} className="border-t-4 border-[#111] bg-white p-6">
                <h2 className="font-display text-xl font-extrabold">{t}</h2>
                <p className="mt-2 text-[#555]">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Product callout */}
      <section className="!py-14 md:!py-20 bg-[#111]">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 sm:px-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#ff5a1f]">{product ? 'Ready-made product' : s.callout?.eyebrow || 'Built for you'}</p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold text-white md:text-4xl">
              {product ? `${product.name}: ${product.headline}` : s.callout?.title || `${s.short} built around how your business works.`}
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-[#b9b5ad]">
              {product ? product.summary : s.callout?.text || 'Tell me how you work today and I will build a focused first version, with a fixed price agreed upfront.'}
            </p>
          </div>
          <Link href={product ? `/${product.slug}` : s.callout?.href || '/contacts'} className="shrink-0 rounded-full bg-[#ff5a1f] px-7 py-3.5 font-semibold text-white hover:bg-white hover:text-[#111]">
            {product ? `Explore ${product.name}` : s.callout?.label || 'Talk to me'}
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

      {/* Where I work */}
      <section className="!py-16 md:!py-24 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-5xl">Where I work</h2>
          <p className="mt-5 max-w-3xl text-lg text-[#444]">Anywhere in India. Setup, training and support happen online, so your town doesn&apos;t matter. I already work with businesses in and around these towns, and can visit in person on request:</p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {serviceAreas.map(([state, list]) => (
              <div key={state}>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-[#ff5a1f]">{state}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {list.map((t) => {
                    const slug = t.split(' (')[0].toLowerCase().replace(/ /g, '-')
                    return townPageFor(s.slug, slug)
                      ? <li key={t}><Link href={`/services/${s.slug}/${slug}`} className="inline-block rounded-full border border-[#ff5a1f] bg-[#fff6f2] px-4 py-1.5 text-sm font-semibold hover:bg-[#ff5a1f] hover:text-white">{t} →</Link></li>
                      : <li key={t} className="rounded-full border border-black/20 px-4 py-1.5 text-sm font-medium">{t}</li>
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="!py-16 md:!py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-5xl">Questions</h2>
          <FaqList items={faqs} className="mt-10" />
          <h2 className="mt-16 font-display text-2xl font-extrabold">Other services</h2>
          <ul className="mt-5 flex flex-wrap gap-3">
            {otherServices.map((x) => (
              <li key={x.slug}><Link href={`/services/${x.slug}`} className="inline-block rounded-full border border-black/25 px-5 py-2 font-semibold hover:border-[#ff5a1f] hover:text-[#ff5a1f]">{x.name}</Link></li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="!py-16 md:!py-24 bg-[#ff5a1f] scroll-mt-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-[#111] md:text-5xl">Tell me about your business.</h2>
            <p className="mt-5 max-w-md text-xl text-[#111]/80">Free 20-minute call. Fixed-price quote. Reply within one working day.</p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-xl md:p-8"><ContactForm product={s.short} /></div>
        </div>
      </section>
    </main>
  )
}
