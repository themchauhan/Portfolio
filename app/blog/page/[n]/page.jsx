import { notFound, permanentRedirect } from 'next/navigation'
import BlogList from '@/components/BlogList'
import { pageMeta } from '@/lib/seo'
import { pageCount } from '@/lib/blogList'

// /blog/page/2, /blog/page/3, ... (page 1 lives at /blog)
export const dynamicParams = false

export function generateStaticParams() {
  return Array.from({ length: Math.max(0, pageCount - 1) }, (_, i) => ({ n: String(i + 2) }))
}

export function generateMetadata({ params }) {
  const n = Number(params.n)
  return pageMeta({
    title: `Blog: Guides for Small Businesses in India (Page ${n})`,
    description: `Page ${n} of practical guides on rent receipts, salary slips, GST invoices, quotations, website costs and web development.`,
    alternates: { canonical: `https://themanishchauhan.in/blog/page/${n}` },
  })
}

export default function Page({ params }) {
  const n = Number(params.n)
  if (n === 1) permanentRedirect('/blog')
  if (!Number.isInteger(n) || n < 2 || n > pageCount) notFound()
  return <BlogList page={n} />
}
