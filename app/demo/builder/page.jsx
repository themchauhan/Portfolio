import { notFound } from 'next/navigation'
import DemoBuilder from '@/components/DemoBuilder'
import { demoTypes } from '@/lib/demoTypes'
import { SITE } from '@/lib/seo'

// Local-only page for making per-business demos. 404 on the live site.
export const dynamic = 'force-dynamic'
export const metadata = { title: 'Demo builder', robots: { index: false, follow: false } }

export default function Page() {
  if (process.env.NODE_ENV !== 'development') notFound()
  const types = Object.entries(demoTypes).map(([key, t]) => ({ key, label: t.label, icon: t.icon, noun: t.noun, suggestions: t.suggestions }))
  return (
    <main className="prod bg-[#f4f1ec] text-[#111] antialiased">
      <section className="!py-10 md:!py-14">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-[15px] font-semibold text-[#0f766e]">Only on your computer</p>
          <h1 className="mt-2 font-display text-4xl font-extrabold tracking-tight">Demo builder</h1>
          <p className="mt-3 max-w-2xl text-lg text-[#444]">Make an AI receptionist demo for one business, then push to put its link live.</p>
          <DemoBuilder types={types} site={SITE} />
        </div>
      </section>
    </main>
  )
}
