import BlogList from '@/components/BlogList'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'Blog: Guides for Small Businesses in India',
  description: 'Practical guides on rent receipts, salary slips, GST invoices, quotations, website costs and PG management, with free tools and quick answers.',
  alternates: { canonical: 'https://themanishchauhan.in/blog' },
})

export default function BlogPage() {
  return <BlogList page={1} />
}
