import { SITE, serviceList, cityList, pathFor } from '@/lib/seo'

const blogSlugs = [
  'ai-powered-seo-nextjs',
  'nextjs-maintenance-best-practices',
  'ai-content-optimization-websites',
  'website-speed-optimization-ai',
  'ai-user-experience-personalization',
]

export default function sitemap() {
  const now = new Date()
  const entry = (path, changeFrequency, priority) => ({ url: `${SITE}${path}`, lastModified: now, changeFrequency, priority })

  return [
    entry('', 'weekly', 1),
    entry('/about', 'monthly', 0.8),
    entry('/projects', 'monthly', 0.8),
    entry('/products', 'monthly', 0.9),
    ...['clinicos', 'rentcorp', 'cafecorp'].map((p) => entry(`/${p}`, 'monthly', 0.9)),
    entry('/services', 'monthly', 0.9),
    ...serviceList.map((s) => entry(`/services/${s.slug}`, 'monthly', 0.8)),
    ...serviceList.flatMap((s) => cityList.map((c) => entry(pathFor(s.slug, c.slug), 'monthly', 0.7))),
    ...cityList.map((c) => entry(`/locations/${c.slug}`, 'monthly', 0.7)),
    entry('/tools', 'monthly', 0.8),
    entry('/tools/rent-receipt-generator', 'monthly', 0.9),
    entry('/tools/gst-invoice-generator', 'monthly', 0.9),
    entry('/academics', 'yearly', 0.5),
    entry('/blog', 'weekly', 0.7),
    ...blogSlugs.map((s) => entry(`/blog/${s}`, 'monthly', 0.6)),
    entry('/resources', 'daily', 0.5),
    entry('/contacts', 'monthly', 0.7),
  ]
}
