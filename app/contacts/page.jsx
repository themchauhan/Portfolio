import PageHero from '@/components/PageHero'
import ContactForm from '@/components/products/ContactForm'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'Contact',
  description: 'Get in touch with Manish Chauhan for websites, web apps and automation projects.',
  alternates: { canonical: 'https://themanishchauhan.in/contacts' },
})

export default function Page() {
  return (
    <main className="prod bg-[#f4f1ec] text-[#111] antialiased">
      <PageHero eyebrow="Contact" title="Tell me what you want to build.">
        Share a few details and I&apos;ll reply within one working day.
      </PageHero>
      <section className="!py-0 pb-16 md:pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#777]">Email</p>
              <a href="mailto:mani7015066@gmail.com" className="mt-2 block font-display text-2xl font-extrabold underline decoration-[#ff5a1f] decoration-2 underline-offset-4">mani7015066@gmail.com</a>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#777]">Phone</p>
              <a href="tel:+917015066237" className="mt-2 block font-display text-2xl font-extrabold">+91 70150 66237</a>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#777]">Elsewhere</p>
              <p className="mt-2 flex gap-6 text-lg font-medium">
                <a href="https://www.linkedin.com/in/themchauhan" target="_blank" rel="noopener noreferrer" className="underline decoration-[#ff5a1f] decoration-2 underline-offset-4">LinkedIn</a>
              </p>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-xl md:p-8"><ContactForm product="Website" /></div>
        </div>
      </section>
    </main>
  )
}
