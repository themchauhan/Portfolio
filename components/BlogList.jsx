import Link from 'next/link'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'
import PageSeo from '@/components/PageSeo'
import BlogCard from '@/components/BlogCard'
import { pageFaqs } from '@/lib/pageFaqs'
import { PER_PAGE, pageCount, pagePath, postsForPage } from '@/lib/blogList'

// One page of the blog list (9 cards) with numbered pagination. Page 1 is /blog, then /blog/page/2, ...
export default function BlogList({ page = 1 }) {
  const posts = postsForPage(page)
  const btn = 'flex h-11 min-w-[2.75rem] items-center justify-center rounded-full px-4 font-semibold'
  return (
    <main className="prod bg-[#f4f1ec] text-[#111] antialiased">
      <PageHero eyebrow={page > 1 ? `Blog · Page ${page} of ${pageCount}` : 'Blog'} title="Notes on the web.">
        Practical guides for small businesses and employees: rent receipts, salary slips, GST invoices, websites and more.
      </PageHero>
      <section className="!pt-0 !pb-16 md:!pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => <BlogCard key={post.id} post={post} n={(page - 1) * PER_PAGE + i + 1} />)}
          </div>

          {pageCount > 1 && (
            <nav aria-label="Blog pages" className="mt-12 flex flex-wrap items-center justify-center gap-2">
              {page > 1
                ? <Link href={pagePath(page - 1)} rel="prev" className={`${btn} border border-black/20 bg-white hover:border-[#111]`}>← Newer</Link>
                : <span className={`${btn} border border-black/10 text-[#bbb]`}>← Newer</span>}
              {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
                n === page
                  ? <span key={n} aria-current="page" className={`${btn} bg-[#111] text-white`}>{n}</span>
                  : <Link key={n} href={pagePath(n)} className={`${btn} border border-black/20 bg-white hover:border-[#ff5a1f] hover:text-[#ff5a1f]`}>{n}</Link>
              ))}
              {page < pageCount
                ? <Link href={pagePath(page + 1)} rel="next" className={`${btn} bg-[#ff5a1f] text-white hover:bg-[#111]`}>Older →</Link>
                : <span className={`${btn} border border-black/10 text-[#bbb]`}>Older →</span>}
            </nav>
          )}
        </div>
      </section>
      <PageSeo
        type="Blog"
        name={page > 1 ? `Blog: guides for small businesses in India (page ${page})` : 'Blog: guides for small businesses in India'}
        path={pagePath(page)}
        crumbs={page > 1 ? [['Blog', '/blog'], [`Page ${page}`, pagePath(page)]] : [['Blog', '/blog']]}
        faqs={page === 1 ? pageFaqs.blog() : undefined}
      />
      <CtaBand title="Need help with your website?" />
    </main>
  )
}
