import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import TrackedLink from '@/components/TrackedLink'
import { SITE } from '@/lib/seo'
import { waLink } from '@/lib/pricing'
import { aiCourses, aiFees } from '@/lib/aiCourses'

const inr = (n) => `₹${n.toLocaleString('en-IN')}`

export const AI_COURSES_URL = { en: `${SITE}/ai-courses`, hi: `${SITE}/hi/ai-courses` }

export default function AiCoursesPage({ lang = 'en' }) {
  const t = aiCourses[lang]
  const url = AI_COURSES_URL[lang]
  const otherPath = lang === 'en' ? '/hi/ai-courses' : '/ai-courses'
  const demo = waLink(t.whatsapp)

  const DemoButton = ({ position, className }) => (
    <TrackedLink href={demo} target="_blank" rel="noopener noreferrer" event="demo_book_click" params={{ page: 'ai-courses', lang, position }} className={className}>
      {t.demoCta}
    </TrackedLink>
  )

  return (
    <main className="prod bg-[#f4f1ec] text-[#111] antialiased">
      <JsonLd data={[
        ...t.courses.map((c, i) => ({
          '@context': 'https://schema.org',
          '@type': 'Course',
          name: `${c.name} (${c.level})`,
          description: c.points.slice(0, 3).join('. '),
          inLanguage: lang,
          url,
          provider: { '@type': 'Person', name: 'Manish Chauhan', url: SITE },
          offers: (i === 0 ? aiFees.junior : aiFees.senior).map((price, n) => ({ '@type': 'Offer', name: t.levels[n][0], price: String(price), priceCurrency: 'INR', category: 'Paid' })),
        })),
        { '@context': 'https://schema.org', '@type': 'FAQPage', inLanguage: lang, mainEntity: t.faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
      ]} />

      {/* Hero */}
      <section className="!py-14 md:!py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-[15px] font-semibold text-[#ff5a1f]">{t.eyebrow}</p>
            <Link href={otherPath} hrefLang={lang === 'en' ? 'hi' : 'en'} className="text-sm font-semibold underline decoration-[#ff5a1f] underline-offset-4">{t.switchLabel}</Link>
          </div>
          <p className="mt-6 inline-block rounded-full bg-[#ff5a1f] px-5 py-2 text-sm font-semibold text-white md:text-base">{t.offer}</p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl xl:text-7xl">{t.title}</h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-[#444]">{t.intro}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <DemoButton position="hero" className="rounded-full bg-[#111] px-8 py-4 text-lg font-semibold text-white hover:bg-[#ff5a1f]" />
            <a href="#courses" className="rounded-full border border-black/30 px-8 py-4 text-lg font-semibold hover:border-[#ff5a1f] hover:text-[#ff5a1f]">{t.coursesCta}</a>
          </div>
          <ul className="mt-10 flex flex-wrap gap-2">
            {t.badges.map((b) => <li key={b} className="rounded-full border border-black/20 bg-white px-4 py-1.5 text-sm font-medium text-[#444]">{b}</li>)}
          </ul>
        </div>
      </section>

      {/* Why */}
      <section className="!py-14 md:!py-20 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">{t.whyTitle}</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {t.why.map(([title, text]) => (
              <div key={title} className="border-t-4 border-[#111] bg-[#f4f1ec] p-7">
                <h3 className="font-display text-2xl font-extrabold">{title}</h3>
                <p className="mt-3 text-[#555]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="!py-14 md:!py-24 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">{t.coursesTitle}</h2>
          <p className="mt-3 max-w-3xl text-lg text-[#555]">{t.coursesIntro}</p>
          <div className="mt-10 space-y-8">
            {t.courses.map((c, i) => {
              const dark = i === 1
              return (
                <div key={c.name} className={`rounded-3xl p-7 md:p-10 ${dark ? 'bg-[#111] text-white' : 'bg-white'}`}>
                  <div className="flex flex-wrap items-end justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-widest text-[#ff5a1f]">{c.level}</p>
                      <h3 className="mt-2 font-display text-3xl font-extrabold md:text-4xl">{c.name}</h3>
                      <p className={`mt-2 text-sm ${dark ? 'text-[#b9b5ad]' : 'text-[#777]'}`}>{c.meta}</p>
                    </div>
                    <p className={`max-w-md border-l-2 border-[#ff5a1f] pl-3 font-semibold ${dark ? 'text-white' : 'text-[#111]'}`}>{c.takeaway}</p>
                  </div>
                  <ol className="mt-8 grid gap-5 lg:grid-cols-3">
                    {c.syllabus.map((lvl, n) => (
                      <li key={lvl.name} className={`rounded-2xl p-5 ${dark ? 'bg-white/5 ring-1 ring-white/10' : 'bg-[#f4f1ec]'} ${n === 2 ? 'ring-2 !ring-[#ff5a1f]' : ''}`}>
                        <p className="text-xs font-semibold uppercase tracking-widest text-[#ff5a1f]">{lvl.name}</p>
                        <h4 className="mt-1 font-display text-xl font-extrabold">{lvl.title}</h4>
                        <ol className="mt-4 space-y-2">
                          {lvl.weeks.map((w, k) => (
                            <li key={w} className={`flex gap-3 text-[15px] leading-snug ${dark ? 'text-[#d8d4cc]' : 'text-[#444]'}`}>
                              <span className="w-16 shrink-0 text-xs font-semibold text-[#ff5a1f] pt-0.5">{t.weekLabel} {k + 1}</span>
                              <span>{w}</span>
                            </li>
                          ))}
                        </ol>
                      </li>
                    ))}
                  </ol>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Fees */}
      <section id="fees" className="!py-14 md:!py-20 bg-white scroll-mt-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">{t.feesTitle}</h2>
          <p className="mt-3 max-w-3xl text-lg text-[#555]">{t.feesIntro}</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {t.levels.map(([name, desc], i) => (
              <div key={name} className={`flex flex-col rounded-3xl p-7 ${i === 2 ? 'border-2 border-[#ff5a1f] bg-[#fff6f2]' : 'border border-black/15 bg-[#f4f1ec]'}`}>
                <p className="text-sm font-semibold uppercase tracking-widest text-[#ff5a1f]">{name}</p>
                <p className="mt-2 text-[#444]">{desc}</p>
                <p className="mt-1 text-sm text-[#777]">{t.duration}</p>
                <dl className="mt-6 divide-y divide-black/10 border-t border-black/10">
                  {[[t.juniorLabel, aiFees.junior[i]], [t.seniorLabel, aiFees.senior[i]]].map(([label, fee]) => (
                    <div key={label} className="flex items-baseline justify-between py-3">
                      <dt className="font-medium text-[#444]">{label}</dt>
                      <dd className="font-display text-2xl font-extrabold">{inr(fee)}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[#555]">{t.feesNote}</p>
        </div>
      </section>

      {/* How it works */}
      <section className="!py-14 md:!py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">{t.stepsTitle}</h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-4">
            {t.steps.map(([title, text], i) => (
              <li key={title}>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#111] font-display font-extrabold text-white">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-4 font-display text-xl font-extrabold">{title}</h3>
                <p className="mt-2 text-[#555]">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Teacher */}
      <section className="!py-14 md:!py-20 bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2">
          <div className="relative aspect-[3/2] overflow-hidden rounded-3xl">
            <Image src="/manish-desk.jpg" alt={t.deskAlt} fill sizes="(min-width:1024px) 600px, 92vw" className="object-cover" />
          </div>
          <div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">{t.teacherTitle}</h2>
            <p className="mt-5 text-lg leading-relaxed text-[#444]">{t.teacher}</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="!py-14 md:!py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">{t.faqTitle}</h2>
          <div className="mt-8 divide-y divide-black/15 border-y border-black/15">
            {t.faqs.map(([q, a]) => (
              <details key={q} name="faq" className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-xl font-extrabold group-open:text-[#ff5a1f]">{q}<span className="shrink-0 text-2xl text-[#ff5a1f] transition group-open:rotate-45">+</span></summary>
                <p className="mt-3 text-[#555]">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="!py-16 md:!py-24 bg-[#ff5a1f]">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 sm:px-8 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-[#111] md:text-5xl">{t.finalTitle}</h2>
            <p className="mt-3 text-lg text-[#111]/80">{t.finalText}</p>
          </div>
          <DemoButton position="footer" className="shrink-0 rounded-full bg-[#111] px-8 py-4 text-lg font-semibold text-white hover:bg-white hover:text-[#111]" />
        </div>
      </section>
    </main>
  )
}
