// FAQ accordion with a "+" toggle. Uses <details>, so every answer stays in the page HTML even when
// closed: search engines and AI tools read it, and the browser's find-in-page opens the right item.
export default function FaqList({ items, className = '' }) {
  return (
    <div className={`divide-y divide-black/15 border-y border-black/15 ${className}`}>
      {items.map(([q, a]) => (
        <details key={q} name="faq" className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg font-extrabold text-[#111] group-open:text-[#ff5a1f] md:text-xl [&::-webkit-details-marker]:hidden">
            {q}
            <span aria-hidden="true" className="shrink-0 text-2xl leading-none text-[#ff5a1f] transition group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 max-w-4xl leading-relaxed text-[#555]">{a}</p>
        </details>
      ))}
    </div>
  )
}
