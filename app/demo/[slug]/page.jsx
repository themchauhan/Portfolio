import { notFound } from 'next/navigation'
import Link from 'next/link'
import BusinessDemoChat from '@/components/BusinessDemoChat'
import TrackedLink from '@/components/TrackedLink'
import { demoSlugs, getDemo, greetingFor, suggestionsFor } from '@/lib/demos'
import { typeOf } from '@/lib/demoTypes'
import { waLink } from '@/lib/pricing'

// A personalised AI receptionist demo, made for one business as a pitch. Not indexed by search engines.
export const dynamicParams = false

export function generateStaticParams() {
  return demoSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }) {
  const demo = getDemo(params.slug)
  if (!demo) return {}
  return {
    title: `AI receptionist demo for ${demo.name}`,
    description: `A live demo of an AI receptionist for ${demo.name}, made by Manish Chauhan.`,
    robots: { index: false, follow: false },
  }
}

export default function Page({ params }) {
  const demo = getDemo(params.slug)
  if (!demo) notFound()
  const t = typeOf(demo.type)
  const wa = waLink(`Hi Manish, I tried the AI receptionist demo for ${demo.name}. I'd like to know more: `)

  return (
    <main className="prod bg-[#f4f1ec] text-[#111] antialiased">
      <section className="!py-10 md:!py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)] gap-8 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr),minmax(0,440px)] lg:grid-rows-[auto,1fr] lg:gap-x-10 lg:gap-y-0">
          <div>
            <p className="text-[15px] font-semibold text-[#0f766e]">Made for {demo.name}</p>
            <h1 className="mt-3 font-display text-3xl font-extrabold leading-[1.1] tracking-tight md:text-5xl">
              {demo.owner ? `${demo.owner} ji, ` : ''}this is your AI receptionist.
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#444]">
              It answers customers about {t.noun} in seconds, in English or Hindi, day and night, and sends every booking to your team. Try it like a customer would.
            </p>
          </div>
          <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <BusinessDemoChat slug={demo.slug} name={demo.name} icon={t.icon} item={t.item} greeting={greetingFor(demo)} suggestions={suggestionsFor(demo)} />
          </div>
          <div>
            <ul className="space-y-2 text-[#444] lg:mt-6">
              <li>✓ Ask in Hindi or Hinglish, the way customers type</li>
              <li>✓ Ask something that isn’t in your details, and see it pass the question to your team</li>
              <li>✓ Make a booking, and see exactly what your team would receive</li>
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <TrackedLink href={wa} target="_blank" rel="noopener noreferrer" event="clinic_demo_enquiry" params={{ demo: demo.slug, position: 'business_demo' }} className="rounded-full bg-[#0f766e] px-6 py-3 font-semibold text-white hover:bg-[#115e59]">
                I want this on my WhatsApp
              </TrackedLink>
              <Link href="/ai-integration" className="rounded-full border border-black/20 px-6 py-3 font-semibold hover:bg-white">How it works</Link>
            </div>
            <div className="mt-8 max-w-xl rounded-2xl border border-black/10 bg-white p-5 text-[15px] leading-relaxed text-[#555]">
              <p className="font-semibold text-[#111]">About this demo</p>
              <p className="mt-1">
                Manish Chauhan made this demo for {demo.name} from publicly available information, to show what an AI receptionist could do. It isn’t connected to {demo.name}, and some details may be incomplete or out of date. Your real assistant would use only the details you approve, on your own website and WhatsApp number.
              </p>
              <p className="mt-2">Please don’t enter real names, numbers or personal details here.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
