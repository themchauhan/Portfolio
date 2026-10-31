import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'
import { pageMeta } from '@/lib/seo'
import { featuredClients, clientGroups, clientCount } from '@/lib/clients'

export const metadata = pageMeta({
  title: 'Work',
  description: `Websites and web platforms built for ${clientCount}+ companies, including Splunk, Cohesity, Socure, Sift, Digimarc, Bitdefender and Thales.`,
  alternates: { canonical: 'https://themanishchauhan.in/projects' },
})

export default function Page() {
  return (
    <main className="prod bg-[#f4f1ec] text-[#111] antialiased">
      <PageHero eyebrow="Work" title="Sites and platforms I've built.">
        Marketing websites and web platforms for {clientCount}+ companies in cybersecurity, data, healthcare, fintech and industry, built mostly as part of the Clear Digital team.
      </PageHero>

      <section className="!py-16 md:!py-24 bg-[#111] text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {/* Featured: one line of big names */}
          <p className="text-sm font-semibold uppercase tracking-widest text-[#ff5a1f]">Featured</p>
          <ul className="mt-6 grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
            {featuredClients.map((c, n) => (
              <li key={c.name} className={`group flex min-h-[10rem] flex-col justify-between rounded-2xl border border-white/15 p-5 transition-colors hover:border-[#ff5a1f] md:min-h-[13rem] md:p-7 ${n === 0 ? 'col-span-2 bg-[#ff5a1f] border-[#ff5a1f] hover:border-white' : 'bg-white/[0.04]'}`}>
                <span className={`inline-flex w-fit max-w-full items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold md:gap-2 md:px-3 md:text-[13px] md:tracking-wide ${n === 0 ? 'bg-black/15 text-white' : 'bg-white/[0.07] text-white/70 group-hover:text-white'}`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${n === 0 ? 'bg-white' : 'bg-[#ff5a1f]'}`} />
                  {c.site}
                </span>
                <div>
                  <p className="font-display text-2xl font-extrabold leading-tight tracking-tight md:text-4xl">{c.name}</p>
                  <p className={`mt-2 text-sm md:text-base ${n === 0 ? 'text-white/90' : 'text-white/55'}`}>{c.industry}</p>
                  {n === 0 && <p className="mt-3 max-w-md text-sm text-white/90 md:text-[15px]">The agency where I&apos;ve built most of this work, from design hand-off to launch.</p>}
                </div>
              </li>
            ))}
          </ul>

          {/* Index by industry */}
          <div className="mt-14 border-t border-white">
            {clientGroups.map((g) => (
              <div key={g.title} className="grid gap-6 border-b border-white/15 py-8 lg:grid-cols-[16rem_1fr] lg:gap-10">
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-widest text-[#ff5a1f]">{g.title}</h2>
                  <p className="mt-1 text-sm text-white/40">{g.clients.length} companies</p>
                </div>
                <ul className="grid grid-cols-2 gap-x-6 gap-y-5 md:gap-x-8 xl:grid-cols-3">
                  {g.clients.map((c) => (
                    <li key={c.name}>
                      <p className="font-display text-xl font-extrabold leading-tight tracking-tight md:text-2xl">{c.name}</p>
                      {c.industry && <p className="mt-1 text-[13px] leading-snug text-white/50 md:text-sm">{c.industry}</p>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-white/40">Company names are shown to describe past work. All trademarks belong to their owners.</p>
        </div>
      </section>

      <CtaBand title="Have a project in mind? Let's talk." />
    </main>
  )
}
