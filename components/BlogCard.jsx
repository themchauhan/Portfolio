import Link from 'next/link'

// Blog card: dark top (topic, number, title) that turns orange on hover, then an "In short" preview.
// Used on the blog list and in "Keep reading" under each post.
export default function BlogCard({ post, n }) {
  return (
    <Link href={`/blog/${post.id}`} className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/10 transition duration-300 hover:-translate-y-1.5 hover:shadow-xl">
      <div className="relative bg-[#111] p-6 text-white transition-colors duration-300 group-hover:bg-[#ff5a1f] md:min-h-[12rem] md:p-7">
        <div className="flex items-start justify-between gap-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#ff5a1f] transition-colors group-hover:text-[#111]">{post.category}</span>
          {n != null && <span className="font-display text-4xl font-extrabold leading-none text-white/15 transition-colors group-hover:text-[#111]/25">{String(n).padStart(2, '0')}</span>}
        </div>
        <h3 className="mt-4 font-display text-xl font-extrabold leading-snug tracking-tight">{post.title}</h3>
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#ff5a1f]">In short</p>
        <p className="mb-6 mt-2 line-clamp-4 text-[15px] leading-relaxed text-[#444]">{post.quickAnswer || post.excerpt}</p>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-sm text-[#888]">{post.readTime}</span>
          <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ff5a1f] text-lg text-white transition duration-300 group-hover:-rotate-45 group-hover:bg-[#111]">→</span>
        </div>
      </div>
    </Link>
  )
}
