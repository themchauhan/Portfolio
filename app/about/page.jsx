import Image from 'next/image'
import Link from 'next/link'
import { getExperienceText, getExperienceYears } from '@/utils/experience'
import { pageMeta } from '@/lib/seo'
import TestimonialSlider from '@/components/TestimonialSlider'
import PageSeo from '@/components/PageSeo'
import { pageFaqs } from '@/lib/pageFaqs'
import AiReceptionistBand from '@/components/AiReceptionistBand'

export const metadata = pageMeta({
  title: 'About',
  description: 'Manish Chauhan is an AI integration and full stack developer with almost a decade of experience, connecting AI to the websites, WhatsApp and tools businesses already use.',
  alternates: { canonical: 'https://themanishchauhan.in/about' },
})

const values = [
  ['Plain language', 'No jargon. You always know what is being built, why, and what it costs.'],
  ['Built to last', 'Clean, documented code that your next developer can pick up without a rescue mission.'],
  ['Fast by default', 'Performance, mobile and accessibility are part of the build, not an add-on.'],
  ['Dependable delivery', 'Clear scope, regular updates and no disappearing acts.'],
]

const education = [
  ['2016 – 2018', 'Master of Computer Applications', 'Punjab Technical University'],
  ['2013 – 2016', 'B.Sc. Information Technology (Hons.)', 'Kurukshetra University'],
  ['2012 – 2013', 'Higher Secondary (12th)', 'Kendriya Vidyalaya'],
  ['2010 – 2011', 'Secondary (10th)', 'Kendriya Vidyalaya'],
]

const skillGroups = [
  ['AI', ['Gemini API', 'LLM APIs', 'Prompt design', 'AI chatbots', 'Structured outputs']],
  ['Frontend', ['Next.js', 'React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'MUI', 'Bootstrap', 'SCSS']],
  ['Backend & data', ['Node.js', 'PHP', 'REST APIs', 'GraphQL', 'PostgreSQL', 'Supabase', 'Firebase']],
  ['CMS & workflow', ['WordPress', 'Drupal', 'Contentful', 'HubSpot', 'Marketo', 'Git', 'Docker']],
]

const Heading = ({ children, light = false }) => (
  <h2 className={`font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl ${light ? 'text-white' : 'text-[#111]'}`}>{children}</h2>
)

export default function Page() {
  const experience = getExperienceText()
  const years = getExperienceYears()

  return (
    <main className="prod bg-[#f4f1ec] text-[#111] antialiased">

      {/* Hero */}
      <section className="!py-14 md:!py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <p className="text-[15px] font-semibold text-[#ff5a1f]">About</p>
            <h1 className="mt-4 font-display text-5xl font-extrabold leading-[1.03] tracking-tight md:text-6xl">
              A developer who puts{' '}
              <span className="underline decoration-[#ff5a1f] decoration-[6px] underline-offset-[10px]">AI to work.</span>
            </h1>
            <p className="mt-8 max-w-xl text-xl leading-relaxed text-[#444]">
              I&apos;m Manish Chauhan, an AI integration and full stack developer with {experience} of experience. I connect AI to the websites, WhatsApp and sheets businesses already use, so the repeated work gets done on its own.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/ai-integration" className="rounded-full bg-[#111] px-7 py-3.5 font-semibold text-white hover:bg-[#ff5a1f]">What I build with AI</Link>
              <Link href="/projects" className="rounded-full border-2 border-[#111] px-7 py-3 font-semibold hover:bg-[#111] hover:text-white">See my work</Link>
            </div>
          </div>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md lg:max-w-none">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[28px] bg-[#ff5a1f]" />
            <div className="relative h-full w-full overflow-hidden rounded-[28px]">
              <Image src="/manish-full.jpg" alt="Manish Chauhan" fill priority sizes="(min-width:1024px) 520px, 90vw" className="object-cover object-[45%_20%]" />
            </div>
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="!py-0 border-y border-black/10 bg-white">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 divide-black/10 px-5 sm:px-8 md:grid-cols-4 md:divide-x">
          {[[years, 'years of experience'], ['2018', 'professional since'], ['MCA', 'Punjab Technical University'], ['US + India', 'clients and students']].map(([a, b]) => (
            <div key={b} className="py-8 md:px-8 md:first:pl-0">
              <dt className="font-display text-4xl font-extrabold text-[#ff5a1f]">{a}</dt>
              <dd className="mt-1 text-[#555]">{b}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Recommendations */}
      <section className="!py-16 md:!py-24 bg-[#111] text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <TestimonialSlider title="What people I've worked with say." items={[{ who: 'rachel', quote: 'main' }, { who: 'connor', quote: 'home' }, { who: 'roman', quote: 'work' }, { who: 'ajay', quote: 'about' }]} />
        </div>
      </section>


      {/* Story */}
      <section className="!py-16 md:!py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <Heading>My story</Heading>
            <p className="mt-5 max-w-sm text-lg leading-relaxed text-[#666]">From a computer science degree to websites for US tech companies, and now AI for businesses in India.</p>
          </div>
          <div className="space-y-6 text-xl leading-relaxed text-[#444]">
            <p>
              I started my professional career in March 2018 and have been building for the web ever since: marketing sites, CMS platforms and web apps for software companies and small businesses.
            </p>
            <p>
              Today I work as a full stack developer at{' '}
              <a href="https://www.cleardigital.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#111] underline decoration-[#ff5a1f] decoration-2 underline-offset-4">Clear Digital</a>
              , where I&apos;ve built sites for companies like Splunk, Cohesity, Socure and Digimarc. Alongside that, I take on freelance projects.
            </p>
            <p>
              Today my main focus is <Link href="/ai-integration" className="font-semibold text-[#111] underline decoration-[#ff5a1f] decoration-2 underline-offset-4">AI integration</Link>. Most businesses have already tried ChatGPT, but the AI isn&apos;t connected to their customers, their WhatsApp or their data. I build that connection: AI receptionists that answer customers at 11 pm, instant replies to new leads, and bills and forms read straight into Excel. You can <Link href="/demo/clinic-assistant" className="font-semibold text-[#111] underline decoration-[#ff5a1f] decoration-2 underline-offset-4">try a live demo</Link>.
            </p>
            <p>
              I also built my own software: <Link href="/clinicos" className="font-semibold text-[#111] underline decoration-[#ff5a1f] decoration-2 underline-offset-4">ClinicOs</Link>,{' '}
              <Link href="/rentcorp" className="font-semibold text-[#111] underline decoration-[#ff5a1f] decoration-2 underline-offset-4">RentCorp</Link> and{' '}
              <Link href="/cafecorp" className="font-semibold text-[#111] underline decoration-[#ff5a1f] decoration-2 underline-offset-4">CafeCorp</Link>
              , tools that replace paperwork for clinics, landlords and cafés.
            </p>
          </div>
        </div>
      </section>

      {/* AI classes (details live on learn.themanishchauhan.in; keep these facts in sync with it) */}
      <section className="!py-16 md:!py-24 bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.2fr_1fr] lg:items-stretch">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#ff5a1f]">I also teach</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight md:text-5xl">AI and coding classes for school students.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#444]">
              Since 2024 I&apos;ve taught coding and AI to 6th–8th graders in Livermore, California, over Zoom. Now the same approach (a strong foundation in programming basics first, then smart use of AI on top) runs live online for students in India.
            </p>
            <a href="https://learn.themanishchauhan.in" className="mt-7 inline-block rounded-full bg-[#111] px-7 py-3.5 font-semibold text-white hover:bg-[#ff5a1f]">See the courses →</a>
            <ul className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-2">
              {[
                ['Classes 6–12', 'Junior (6–8) and Senior (9–12) courses'],
                ['Live online', 'Two 1-hour classes every weekend on Google Meet'],
                ['3 levels, 8 weeks each', 'Basics, Builder and Advanced, with a project every level'],
                ['Free demo class', 'Small batches of 10–15 students'],
              ].map(([h, d]) => (
                <li key={h} className="rounded-2xl border border-black/10 bg-[#f4f1ec] p-5">
                  <p className="font-display text-lg font-extrabold">{h}</p>
                  <p className="mt-1 text-[15px] text-[#555]">{d}</p>
                </li>
              ))}
            </ul>
          </div>
          <figure className="flex flex-col rounded-3xl bg-[#111] p-7 text-white md:p-9">
            <span aria-hidden="true" className="block font-display text-6xl font-extrabold leading-none text-[#ff5a1f]">&ldquo;</span>
            <blockquote className="-mt-2 mb-8 text-lg leading-relaxed md:text-xl">
              Manish has worked with me for nearly 10 years. He began teaching 6th–8th grade kids in Livermore, CA over Zoom when local programming classes fell short. He focused on solid basics first, then showed students how to use AI effectively on top of that foundation. The results were excellent. He is now bringing the same proven approach to students in India.
            </blockquote>
            <figcaption className="mt-auto border-t border-white/20 pt-4">
              <p className="font-semibold">DK</p>
              <p className="text-sm text-white/60">Development Manager, Clear Digital</p>
            </figcaption>
          </figure>
        </div>
      </section>

      <AiReceptionistBand page="about" kind="coaching" bg="bg-[#f0fdfa]" />

      {/* Values (black blade) */}
      <section className="!py-16 md:!py-28 bg-[#111]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Heading light>How I work</Heading>
          <div className="mt-14 grid gap-px overflow-hidden bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(([t, d], i) => (
              <div key={t} className="bg-[#111] p-8">
                <p className="font-display text-sm font-bold text-[#ff5a1f]">0{i + 1}</p>
                <h3 className="mt-5 font-display text-2xl font-extrabold text-white">{t}</h3>
                <p className="mt-3 leading-relaxed text-[#b9b5ad]">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience + education */}
      <section className="!py-16 md:!py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <Heading>Experience</Heading>
            <div className="mt-10 border-t border-black/20 py-7">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-2xl font-extrabold">Full Stack Developer</h3>
                <p className="text-sm font-medium text-[#777]">March 2018 – Present</p>
              </div>
              <p className="mt-1 font-medium text-[#ff5a1f]">Clear Digital · Freelance</p>
              <ul className="mt-5 space-y-3 text-lg text-[#444]">
                <li>Build responsive interfaces and reusable components for modern web apps.</li>
                <li>Develop backend APIs and integrate third-party services reliably.</li>
                <li>Work with clients to scope requirements and deliver maintainable solutions.</li>
                <li>Add AI to business workflows: chat assistants, lead replies and document reading, built on the Gemini and other AI APIs.</li>
              </ul>
            </div>
          </div>
          <div>
            <Heading>Education</Heading>
            <ul className="mt-10 border-t border-black/20">
              {education.map(([yr, deg, inst]) => (
                <li key={deg} className="grid gap-1 border-b border-black/20 py-5 sm:grid-cols-[110px_1fr] sm:gap-6">
                  <p className="text-sm font-medium text-[#777] sm:pt-1">{yr}</p>
                  <div>
                    <h3 className="font-display text-xl font-extrabold">{deg}</h3>
                    <p className="text-[#555]">{inst}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Skills (dark blade) */}
      <section className="!py-16 md:!py-24 bg-[#111] text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Heading light>Tools I use</Heading>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map(([group, items]) => (
              <div key={group} className="rounded-2xl border border-white/15 bg-white/[0.04] p-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-[#ff5a1f]">{group}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {items.map((t) => <li key={t} className="rounded-full bg-white/10 px-3.5 py-1.5 text-sm font-medium text-white">{t}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageSeo type="AboutPage" name="About Manish Chauhan" path="/about" crumbs={[['About', '/about']]} faqs={pageFaqs.about()} bg="bg-[#f4f1ec]" />

      {/* CTA */}
      <section className="!py-16 md:!py-24 bg-[#ff5a1f]">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 sm:px-8 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-[#111] md:text-5xl">Let&apos;s put AI to work in your business.</h2>
            <p className="mt-4 text-xl text-[#111]/80">
              <a href="mailto:manish@themanishchauhan.in" className="break-all font-semibold underline underline-offset-4">manish@themanishchauhan.in</a>
              {' · '}
              <a href="https://www.linkedin.com/in/themchauhan" target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4">LinkedIn</a>
              {' · '}
              <a href="https://www.instagram.com/themanishchauhan.learn/" target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4">Instagram</a>
            </p>
          </div>
          <Link href="/ai-integration#contact" className="shrink-0 rounded-full bg-[#111] px-8 py-4 text-lg font-semibold text-white hover:bg-white hover:text-[#111]">Book a free AI call</Link>
        </div>
      </section>

    </main>
  )
}
