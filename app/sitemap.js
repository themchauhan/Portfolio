import { SITE, serviceList } from '@/lib/seo'
import { townPageKeys } from '@/lib/townPages'
import { pageCount } from '@/lib/blogList'
import { newBlogPosts } from '@/lib/blogPosts'

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
    entry('/agencies', 'monthly', 0.8),
    entry('/products', 'monthly', 0.9),
    ...['clinicos', 'rentcorp', 'cafecorp'].map((p) => entry(`/${p}`, 'monthly', 0.9)),
    entry('/appointmentos', 'monthly', 0.8),
    entry('/pricing', 'monthly', 0.9),
    entry('/services', 'monthly', 0.9),
    ...serviceList.map((s) => entry(`/services/${s.slug}`, 'monthly', 0.8)),
    ...townPageKeys.map((k) => entry(`/services/${k}`, 'monthly', 0.7)),
    entry('/tools', 'monthly', 0.8),
    entry('/tools/rent-receipt-generator', 'monthly', 0.9),
    entry('/tools/gst-invoice-generator', 'monthly', 0.9),
    entry('/tools/salary-slip-generator', 'monthly', 0.9),
    entry('/hi/tools/rent-receipt-generator', 'monthly', 0.8),
    entry('/hi/tools/salary-slip-generator', 'monthly', 0.8),
    entry('/tools/quotation-maker', 'monthly', 0.9),
    entry('/hi/tools/quotation-maker', 'monthly', 0.8),
    entry('/tools/website-cost-calculator', 'monthly', 0.8),
    entry('/academics', 'yearly', 0.5),
    entry('/blog', 'weekly', 0.7),
    ...Array.from({ length: Math.max(0, pageCount - 1) }, (_, i) => entry(`/blog/page/${i + 2}`, 'weekly', 0.5)),
    ...newBlogPosts.map((p) => entry(`/blog/${p.id}`, 'monthly', 0.8)),
    ...blogSlugs.map((s) => entry(`/blog/${s}`, 'monthly', 0.6)),
    entry('/contacts', 'monthly', 0.7),
  ]
}
