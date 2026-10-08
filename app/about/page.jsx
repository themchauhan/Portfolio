import Image from 'next/image'
import Link from 'next/link'
import { getExperienceText } from '@/utils/experience'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'About',
  description: 'Manish Chauhan is a full stack developer at Clear Digital, freelancing and building ClinicOs, RentCorp and CafeCorp: software for real businesses.',
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

const skills = ['Next.js', 'React', 'Node.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'SCSS', 'WordPress', 'Drupal', 'PHP', 'HubSpot', 'Marketo', 'Firebase', 'PostgreSQL', 'Supabase', 'Docker', 'REST APIs', 'Git']

const Heading = ({ children, light = false }) => (
  <h2 className={`font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl ${light ? 'text-white' : 'text-[#111]'}`}>{children}</h2>
)

export default function Page() {
  const experience = getExperienceText()
  const years = experience.split(' ')[0]

  return (
    <main className="prod bg-[#f4f1ec] text-[#111] antialiased">

      {/* Hero */}
      <section className="!py-14 md:!py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <p className="text-[15px] font-semibold text-[#ff5a1f]">About</p>
            <h1 className="mt-4 font-display text-5xl font-extrabold leading-[1.03] tracking-tight md:text-6xl">
              A developer who{' '}
              <span className="underline decoration-[#ff5a1f] decoration-[6px] underline-offset-[10px]">ships things</span> people use.
            </h1>
            <p className="mt-8 max-w-xl text-xl leading-relaxed text-[#444]">
              I&apos;m Manish Chauhan, a full stack developer with {experience} of experience. I build websites, web apps and business software, and I enjoy turning messy manual work into something simple.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/contacts" className="rounded-full bg-[#111] px-7 py-3.5 font-semibold text-white hover:bg-[#ff5a1f]">Let&apos;s talk</Link>
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
          {[[`${years}+`, 'years of experience'], ['2018', 'professional since'], ['MCA', 'Punjab Technical University'], ['3', 'products in the works']].map(([a, b]) => (
            <div key={b} className="py-8 md:px-8 md:first:pl-0">
              <dt className="font-display text-4xl font-extrabold text-[#ff5a1f]">{a}</dt>
              <dd className="mt-1 text-[#555]">{b}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Story */}
      <section className="!py-16 md:!py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.4fr]">
          <Heading>My story</Heading>
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
              Recently I started building my own software: <Link href="/clinicos" className="font-semibold text-[#111] underline decoration-[#ff5a1f] decoration-2 underline-offset-4">ClinicOs</Link>,{' '}
              <Link href="/rentcorp" className="font-semibold text-[#111] underline decoration-[#ff5a1f] decoration-2 underline-offset-4">RentCorp</Link> and{' '}
              <Link href="/cafecorp" className="font-semibold text-[#111] underline decoration-[#ff5a1f] decoration-2 underline-offset-4">CafeCorp</Link>
              , tools that replace paperwork for clinics, landlords and cafés.
            </p>
          </div>
        </div>
      </section>

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

      {/* Skills */}
      <section className="!py-14 md:!py-20 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Heading>Tools I use</Heading>
          <ul className="mt-10 flex flex-wrap gap-3">
            {skills.map((s) => <li key={s} className="rounded-full border border-black/20 px-5 py-2 font-medium">{s}</li>)}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="!py-16 md:!py-24 bg-[#ff5a1f]">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 sm:px-8 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-[#111] md:text-5xl">Let&apos;s build something.</h2>
            <p className="mt-4 text-xl text-[#111]/80">
              <a href="mailto:mani7015066@gmail.com" className="font-semibold underline underline-offset-4">mani7015066@gmail.com</a>
              {' · '}
              <a href="https://www.linkedin.com/in/themchauhan" target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4">LinkedIn</a>
            </p>
          </div>
          <Link href="/contacts" className="shrink-0 rounded-full bg-[#111] px-8 py-4 text-lg font-semibold text-white hover:bg-white hover:text-[#111]">Start a project</Link>
        </div>
      </section>

    </main>
  )
}
