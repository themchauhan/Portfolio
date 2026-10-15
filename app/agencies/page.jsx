import Link from 'next/link'
import PageHero from '@/components/PageHero'
import JsonLd from '@/components/JsonLd'
import ContactForm from '@/components/products/ContactForm'
import { SITE, pageMeta } from '@/lib/seo'
import { getExperienceDuration } from '../../utils/experience'

const url = `${SITE}/agencies`

export const metadata = pageMeta({
  title: 'Freelance Next.js & WordPress Developer for Agencies',
  description: 'Development partner for design and marketing agencies: your designs built as fast, SEO-ready websites in Next.js, React or custom WordPress, under your brand.',
  alternates: { canonical: url },
})

const builds = [
  ['Next.js & React websites', 'Marketing sites and web apps in Next.js and React with JavaScript or TypeScript, deployed on Vercel or your hosting.'],
  ['Custom WordPress', 'Bespoke themes, Gutenberg blocks and ACF field setups that your clients can edit safely. No page-builder bloat.'],
  ['Headless WordPress', 'WordPress as the CMS with a Next.js front end, for teams that want editing comfort and front-end speed.'],
  ['Landing pages & campaigns', 'Launch, rebrand and campaign pages built quickly from your Figma files, with motion and responsive detail.'],
  ['Performance & technical SEO', 'Core Web Vitals, image and script optimisation, structured data and clean markup on new or existing sites.'],
  ['Integrations & maintenance', 'HubSpot and Marketo forms, analytics, third-party APIs, plus updates on existing WordPress and Drupal sites.'],
]

// [title, who does it, description, what the agency gets]
const steps = [
  ['Share the brief', 'You', 'Send the designs (Figma or similar), the page list and any technical requirements.', 'A quick call or written questions, if anything is unclear'],
  ['Get an estimate', 'Me', 'I go through every template and come back with scope, timeline and price.', 'A clear quote, usually within 1–2 working days'],
  ['Build with previews', 'Me', 'Development on a staging link, shared as each page or template is ready.', 'Progress you can review and comment on as it happens'],
  ['Review & QA', 'Together', 'Your feedback, plus my checks across browsers, screen sizes, accessibility and speed.', 'A build that matches the design, on every device'],
  ['Launch & handover', 'Me', 'Go-live on your hosting, with the code and notes handed to your team.', 'Clean code in your repository and support after launch'],
]

const included = [
  'Pixel-accurate build of your designs',
  'Responsive on phones, tablets and desktops',
  'Accessibility basics: semantic HTML, contrast, keyboard use',
  'Core Web Vitals and page speed checks',
  'SEO-ready markup, meta tags and structured data',
  'An editor-friendly CMS setup your client can use',
  'Code in Git with clear notes for your team',
  'Regular updates, no chasing needed',
]

const whoStyle = {
  You: 'border border-black/25 text-[#444]',
  Me: 'bg-[#ff5a1f] text-white',
  Together: 'bg-[#111] text-white',
}

const faqs = [
  ['Do you work white-label?', 'Yes. I work under your brand and in your process. I only talk to your client if you want me to.'],
  ['Do you also design?', 'I focus on development. You bring the designs and I build them accurately. Small UI decisions during the build, such as states and responsive details, I can handle in your style.'],
  ['Which time zones do you cover?', 'I work from India (IST), which overlaps with UK and European working hours for most of the day. Calls with US teams can be arranged in the US morning.'],
  ['How do you charge?', 'Pricing is on request. Most projects are a fixed price based on the designs and scope; ongoing work can be hourly or a monthly retainer. You can start with a small paid trial task.'],
  ['What do you need to start?', 'The designs, the list of pages and templates, the CMS or framework you prefer, hosting details and the deadline.'],
  ['Can you sign an NDA?', 'Yes. I am happy to sign your NDA or contractor agreement before seeing project details.'],
]

export default function Page() {
  const { years } = getExperienceDuration()
  return (
    <main className="prod bg-[#f4f1ec] text-[#111] antialiased">
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Website development for agencies',
        serviceType: 'Web development',
        url,
        provider: { '@type': 'Person', name: 'Manish Chauhan', url: SITE },
        areaServed: ['United States', 'United Kingdom', 'Europe'],
        description: metadata.description,
      }} />
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
      }} />

      <PageHero eyebrow="For agencies" title="Your development partner for website projects.">
        You design and manage the client. I build your designs as fast, accessible, SEO-ready websites in Next.js, React or custom WordPress, under your brand and to your deadlines. {years}+ years building sites for B2B tech companies.
      </PageHero>

      <section className="!pt-0 !pb-16 md:!pb-24 -mt-4 md:-mt-10">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-4 px-5 sm:px-8">
          <a href="#contact" className="rounded-full bg-[#111] px-8 py-4 text-lg font-semibold text-white hover:bg-[#ff5a1f]">Discuss a project</a>
          <Link href="/projects" className="rounded-full border border-black/30 px-8 py-4 text-lg font-semibold hover:border-[#ff5a1f] hover:text-[#ff5a1f]">See my work</Link>
        </div>
      </section>

      <section className="!py-14 md:!py-20 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">What I build for agencies</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {builds.map(([title, text]) => (
              <div key={title} className="border-t-4 border-[#111] bg-[#f4f1ec] p-7">
                <h3 className="font-display text-2xl font-extrabold">{title}</h3>
                <p className="mt-3 text-[#555]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="!py-14 md:!py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="text-[15px] font-semibold text-[#ff5a1f]">The process</p>
              <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-5xl">How we work together</h2>
            </div>
            <p className="max-w-xl text-lg text-[#555] lg:justify-self-end">
              A simple process that fits into your agency&apos;s workflow. You stay in charge of the client and the design; I take care of the build.
            </p>
          </div>

          <ol className="relative mt-14 grid gap-10 md:grid-cols-5 md:gap-6">
            <span aria-hidden="true" className="absolute bottom-0 left-7 top-0 w-px bg-black/15 md:bottom-auto md:left-0 md:right-0 md:top-7 md:h-px md:w-auto" />
            {steps.map(([title, who, text, gets], i) => (
              <li key={title} className="group relative flex gap-5 md:block">
                <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#111] font-display text-lg font-extrabold text-white ring-8 ring-[#f4f1ec] transition group-hover:bg-[#ff5a1f]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="md:mt-6">
                  <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${whoStyle[who]}`}>{who}</span>
                  <h3 className="mt-3 font-display text-xl font-extrabold">{title}</h3>
                  <p className="mt-2 text-[#555]">{text}</p>
                  <p className="mt-4 border-l-2 border-[#ff5a1f] pl-3 text-sm font-semibold text-[#111]">{gets}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-16 grid gap-10 rounded-3xl bg-[#111] p-8 text-white md:p-12 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="text-[15px] font-semibold text-[#ff5a1f]">Included in every build</p>
              <h3 className="mt-3 font-display text-3xl font-extrabold leading-tight md:text-4xl">The details you shouldn&apos;t have to chase.</h3>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {included.map((item) => (
                  <li key={item} className="flex gap-3 text-[#d8d4cc]">
                    <svg aria-hidden="true" viewBox="0 0 20 20" className="mt-1 h-4 w-4 shrink-0 fill-[#ff5a1f]"><path d="M7.6 14.2 3.4 10l1.4-1.4 2.8 2.8 7.6-7.6L16.6 5z" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl bg-white/15">
                {[
                  ['1–2 days', 'to reply with an estimate'],
                  [`${years}+ yrs`, 'building B2B websites'],
                  ['100%', 'white-label'],
                ].map(([big, small]) => (
                  <div key={small} className="bg-[#1c1c1c] p-4 md:p-5">
                    <p className="font-display text-2xl font-extrabold text-white md:text-3xl">{big}</p>
                    <p className="mt-1 text-xs text-[#b9b5ad] md:text-sm">{small}</p>
                  </div>
                ))}
              </div>
              {[
                ['Your brand, your process', 'I work in your tools: Slack, email, Jira or Trello, Git and your staging setup. Your client only sees your agency.'],
                ['Time zones', 'Based in India (IST), with a good overlap with UK and European hours. US calls by arrangement.'],
                ['Pricing on request', 'Fixed price per project, or hourly and retainers for ongoing work. Start with a small paid trial task.'],
              ].map(([title, text]) => (
                <div key={title} className="border-t border-white/15 pt-5">
                  <h4 className="font-display text-lg font-extrabold">{title}</h4>
                  <p className="mt-1 text-[#b9b5ad]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="!py-14 md:!py-20 bg-white">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">Questions agencies ask</h2>
          <div className="mt-8 divide-y divide-black/15 border-y border-black/15">
            {faqs.map(([q, a]) => (
              <details key={q} className="group py-5">
                <summary className="cursor-pointer list-none font-display text-xl font-extrabold group-open:text-[#ff5a1f]">{q}</summary>
                <p className="mt-3 text-[#555]">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="!py-14 md:!py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">Have a project that needs a developer?</h2>
            <p className="mt-4 text-lg text-[#555]">Tell me about the project, the timeline and your stack. I&apos;ll reply within 1–2 working days.</p>
            <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-[#777]">Email</p>
            <a href="mailto:mani7015066@gmail.com" className="mt-2 block font-display text-2xl font-extrabold underline decoration-[#ff5a1f] decoration-2 underline-offset-4">mani7015066@gmail.com</a>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-xl md:p-8">
            <ContactForm
              product="Agency partnership"
              messageLabel="About the project"
              messagePlaceholder="What needs building, which stack or CMS, and the deadline."
              submitLabel="Send project details"
              successMessage="Thanks! I'll reply within 1–2 working days."
            />
          </div>
        </div>
      </section>
    </main>
  )
}
