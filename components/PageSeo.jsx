import JsonLd from '@/components/JsonLd'
import { SITE } from '@/lib/seo'
import FaqList from '@/components/FaqList'

// Page-level structured data for every page: what the page is (WebPage, AboutPage, ContactPage, ...),
// its breadcrumb trail and, when `faqs` are given, a visible FAQ section with matching FAQPage markup.
// `hideFaq`: the page already shows these FAQs itself, so only add the markup.
export default function PageSeo({ type = 'WebPage', name, path = '', description, crumbs = [], faqs, faqTitle = 'Frequently asked questions', bg = 'bg-white', hideFaq = false }) {
  const url = `${SITE}${path}`
  const trail = [['Home', ''], ...crumbs]
  const data = [
    {
      '@context': 'https://schema.org',
      '@type': type,
      name,
      url,
      ...(description ? { description } : {}),
      inLanguage: 'en-IN',
      isPartOf: { '@type': 'WebSite', name: 'Manish Chauhan', url: SITE },
      about: { '@type': 'Person', name: 'Manish Chauhan', url: SITE },
    },
    ...(path ? [{
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: trail.map(([n, p], i) => ({ '@type': 'ListItem', position: i + 1, name: n, item: `${SITE}${p}` })),
    }] : []),
    ...(faqs?.length ? [{
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
    }] : []),
  ]

  return (
    <>
      <JsonLd data={data} />
      {faqs?.length > 0 && !hideFaq && (
        <section className={`!py-14 md:!py-20 ${bg}`}>
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">{faqTitle}</h2>
            <FaqList items={faqs} className="mt-8" />
          </div>
        </section>
      )}
    </>
  )
}
