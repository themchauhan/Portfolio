import TrackedLink from '@/components/TrackedLink'
import { starterPack as S, inr, waLink } from '@/lib/pricing'

// Highlighted entry offer for small shops. Used on the website cost calculator and pricing pages.
export default function StarterPack({ page = 'unknown' }) {
  return (
    <div className="grid gap-8 overflow-hidden rounded-3xl bg-[#111] p-7 text-white md:p-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
      <div>
        <div className="flex flex-wrap gap-2">
          {S.offerActive && <p className="inline-block rounded-full bg-[#ff5a1f] px-3 py-1 text-xs font-semibold uppercase tracking-widest">{S.offerLabel}</p>}
          <p className="inline-block rounded-full border border-white/30 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/80">Best for shops & small businesses</p>
        </div>
        <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight md:text-4xl">{S.name}</h2>
        <p className="mt-3 text-lg text-[#d8d4cc]">{S.tagline}</p>
        <p className="mt-6 font-display text-5xl font-extrabold">
          {S.offerActive && <span className="mr-3 align-middle font-sans text-2xl font-semibold text-[#8d8982] line-through decoration-[#ff5a1f] decoration-2">{inr(S.regularPrice)}</span>}
          {inr(S.price)}
          <span className="ml-2 align-middle font-sans text-base font-medium text-[#b9b5ad]">one-time</span>
        </p>
        <TrackedLink
          href={waLink(`Hi Manish, I'm interested in the ${S.name} (${inr(S.price)}). My business: `)}
          target="_blank"
          rel="noopener noreferrer"
          event="starter_pack_click"
          params={{ page }}
          className="mt-6 inline-block rounded-full bg-[#25D366] px-7 py-3.5 font-semibold text-white hover:bg-[#1ebe5b]"
        >
          Get the Starter Pack on WhatsApp
        </TrackedLink>
      </div>
      <div>
        <ul className="space-y-3">
          {S.includes.map((item) => (
            <li key={item} className="flex gap-3 text-[#e9e5de]">
              <svg aria-hidden="true" viewBox="0 0 20 20" className="mt-1.5 h-4 w-4 shrink-0 fill-[#ff5a1f]"><path d="M7.6 14.2 3.4 10l1.4-1.4 2.8 2.8 7.6-7.6L16.6 5z" /></svg>
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-5 text-sm text-[#8d8982]">{S.note}</p>
      </div>
    </div>
  )
}
