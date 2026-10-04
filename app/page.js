import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ContactForm from '@/components/products/ContactForm'
import { productList } from '@/lib/products'
import { serviceList, cityList, pathFor } from '@/lib/seo'
import { getExperienceText } from '@/utils/experience'

export const metadata = {
  alternates: { canonical: 'https://themanishchauhan.in' },
}

const clients = [
  ['Splunk', '/Splunk_Logo_Grey-1.svg'],
  ['Cohesity', '/Cohesity_Logo_Grey-1.svg', 'scale-110'],
  ['Digimarc', '/Digimarc_Logo_Grey-1.svg', 'scale-[1.7]'],
  ['Socure', '/Socure.svg', 'scale-[1.8]'],
  ['Hippo', '/Hippo_Logo_Grey.svg'],
  ['McGrath', '/McGrath_Logo_Grey.svg'],
  ['Weka', '/Weka-Grey-Logo-1.svg', 'scale-110'],
  ['Agari', '/Agari_Logo-1.svg'],
]

const services = [
  ['01', 'Websites', 'Fast, clean marketing sites and CMS builds in Next.js, WordPress and Drupal, with the HubSpot or Marketo setup your team needs.'],
  ['02', 'Web apps', 'Dashboards, portals and SaaS products in React and Node. Built to be used every day, not just demoed.'],
  ['03', 'Automation', 'Replacing paperwork and manual data entry with simple software your team will actually adopt.'],
]

const work = [
  ['Socure', 'Identity verification platform', 'WordPress · PHP · Marketo'],
  ['LightBeam', 'AI-enabled data privacy product site', 'WordPress · Tailwind · HubSpot'],
  ['Digimarc', 'Digital watermarking and brand protection', 'Drupal · HubSpot · SCSS'],
  ['Estimatic', 'Construction estimation platform', 'React · Redux · Firebase'],
  ['Clear Digital', 'Agency website', 'WordPress · PHP · Gravity Forms'],
]

const steps = [
  ['Design', 'We agree on the message first, then the look. You see the direction before any code is written.'],
  ['Build', 'The design becomes a real, responsive site or app that works across browsers and devices.'],
  ['Test & launch', 'Speed, cross-browser and mobile checks before go-live, then support after.'],
]

const skills = ['Next.js', 'React', 'Node.js', 'JavaScript', 'Tailwind CSS', 'SCSS', 'WordPress', 'Drupal', 'PHP', 'HubSpot', 'Marketo', 'Firebase', 'PostgreSQL', 'Supabase', 'Docker', 'Git']

const Heading = ({ children, light = false }) => (
  <h2 className={`font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl ${light ? 'text-white' : 'text-[#111]'}`}>
    {children}
  </h2>
)

export default function Home() {
  const experience = getExperienceText()

  return (
    <main className="prod bg-[#f4f1ec] text-[#111] antialiased">
      <Nav />

      {/* Hero */}
      <section className="!py-14 md:!py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="text-[15px] font-semibold text-[#ff5a1f]">Manish Chauhan · Full stack developer</p>
            <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.02] tracking-tight md:text-6xl xl:text-7xl">
              I build websites and software that businesses{' '}
              <span className="underline decoration-[#ff5a1f] decoration-[6px] underline-offset-[10px]">actually use.</span>
            </h1>
            <p className="mt-8 max-w-xl text-xl leading-relaxed text-[#444]">
              {experience} of building for companies like Splunk, Cohesity and Socure. Now building my own products for clinics, landlords and cafés.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/contacts" className="rounded-full bg-[#111] px-7 py-3.5 font-semibold text-white hover:bg-[#ff5a1f]">Start a project</Link>
              <Link href="/products" className="rounded-full border-2 border-[#111] px-7 py-3 font-semibold hover:bg-[#111] hover:text-white">See my products</Link>
            </div>
          </div>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm lg:max-w-none">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[28px] bg-[#ff5a1f]" />
            <div className="relative h-full w-full overflow-hidden rounded-[28px]">
              <Image src="/manish-portrait.jpg" alt="Manish Chauhan" fill priority sizes="(min-width:1024px) 420px, 90vw" className="object-cover object-[50%_20%]" />
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="!py-10 border-y border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-[#777]">Worked with teams at</p>
          <div className="mt-7 grid grid-cols-2 items-center gap-x-10 gap-y-10 sm:grid-cols-4">
            {clients.map(([name, src, scale = '']) => (
              <Image key={name} src={src} alt={name} width={220} height={72} className={`mx-auto h-[72px] w-auto max-w-[200px] object-contain opacity-80 grayscale ${scale}`} />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="!py-16 md:!py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Heading>What I do</Heading>
          <div className="mt-14 grid gap-px overflow-hidden bg-black/15 md:grid-cols-3">
            {services.map(([n, t, d]) => (
              <div key={t} className="bg-[#f4f1ec] p-8 md:p-10">
                <p className="font-display text-sm font-bold text-[#ff5a1f]">{n}</p>
                <h3 className="mt-6 font-display text-3xl font-extrabold">{t}</h3>
                <p className="mt-4 text-lg leading-relaxed text-[#444]">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="!py-16 md:!py-28 bg-[#111]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#ff5a1f]">New · My own products</p>
          <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Heading light>Software that replaces paperwork.</Heading>
            <Link href="/products" className="shrink-0 font-semibold text-white underline decoration-[#ff5a1f] decoration-2 underline-offset-8 hover:text-[#ff5a1f]">All products →</Link>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {productList.map((p) => (
              <Link key={p.slug} href={`/${p.slug}`} className="group flex flex-col justify-between rounded-2xl border border-white/15 p-8 transition hover:border-[#ff5a1f] hover:bg-white/5">
                <div>
                  <p className="text-sm text-[#b9b5ad]">{p.tag}</p>
                  <h3 className="mt-3 font-display text-3xl font-extrabold text-white">{p.name}</h3>
                  <p className="mt-4 leading-relaxed text-[#b9b5ad]">{p.summary}</p>
                </div>
                <p className="mt-8 font-semibold text-[#ff5a1f]">Learn more <span className="inline-block transition group-hover:translate-x-1">→</span></p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Local services */}
      <section className="!py-16 md:!py-24 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Heading>Automation for local businesses.</Heading>
            <Link href="/services" className="shrink-0 font-semibold underline decoration-[#ff5a1f] decoration-2 underline-offset-8 hover:text-[#ff5a1f]">All services →</Link>
          </div>
          <p className="mt-5 max-w-2xl text-xl text-[#444]">Cafés, clinics, rentals, hostels, hotels and offices in Rewari, Narnaul, Mahendergarh, Gurgaon, Pataudi, Bhiwani and nearby towns.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {serviceList.map((sv) => (
              <Link key={sv.slug} href={`/services/${sv.slug}`} className="border-l-4 border-[#ff5a1f] bg-[#f4f1ec] p-5 hover:bg-[#ebe7df]">
                <h3 className="font-display text-lg font-extrabold">{sv.name}</h3>
                <p className="mt-1 text-sm text-[#555]">For {sv.businesses}</p>
              </Link>
            ))}
          </div>
          <ul className="mt-8 flex flex-wrap gap-2.5">
            {cityList.map((c) => (
              <li key={c.slug}><Link href={`/locations/${c.slug}`} className="inline-block rounded-full border border-black/20 px-4 py-1.5 text-sm font-medium hover:border-[#ff5a1f] hover:text-[#ff5a1f]">{c.name}</Link></li>
            ))}
          </ul>
        </div>
      </section>

      {/* Work */}
      <section id="featured" className="!py-16 md:!py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Heading>Selected work</Heading>
            <Link href="/projects" className="shrink-0 font-semibold underline decoration-[#ff5a1f] decoration-2 underline-offset-8 hover:text-[#ff5a1f]">All projects →</Link>
          </div>
          <ul className="mt-12 border-t border-black/20">
            {work.map(([name, what, tech]) => (
              <li key={name} className="grid items-center gap-2 border-b border-black/20 py-7 md:grid-cols-[1.2fr_1.5fr_1fr] md:gap-8">
                <h3 className="font-display text-3xl font-extrabold md:text-4xl">{name}</h3>
                <p className="text-lg text-[#444]">{what}</p>
                <p className="text-sm font-medium text-[#777] md:text-right">{tech}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* About */}
      <section className="!py-16 md:!py-28 bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <Heading>Hi, I&apos;m Manish.</Heading>
            <p className="mt-8 text-xl leading-relaxed text-[#444]">
              I&apos;m a full stack developer at{' '}
              <a href="https://www.cleardigital.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#111] underline decoration-[#ff5a1f] decoration-2 underline-offset-4">Clear Digital</a>
              , and I freelance for businesses that want something built properly. I care about fast, simple, maintainable work, and about talking to you in plain language.
            </p>
            <Link href="/about" className="mt-8 inline-block font-semibold underline decoration-[#ff5a1f] decoration-2 underline-offset-8 hover:text-[#ff5a1f]">More about me →</Link>
          </div>
          <div>
            <div className="relative mb-8 aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src="/manish-full.jpg" alt="Manish Chauhan outdoors" fill sizes="(min-width:1024px) 560px, 90vw" className="object-cover object-[50%_25%]" />
            </div>
            <dl className="grid grid-cols-2 gap-px bg-black/15">
              <div className="bg-white p-6"><dt className="font-display text-4xl font-extrabold text-[#ff5a1f]">{getExperienceText().split(' ')[0]}+</dt><dd className="mt-1 text-[#555]">years of experience</dd></div>
              <div className="bg-white p-6"><dt className="font-display text-4xl font-extrabold text-[#ff5a1f]">MCA</dt><dd className="mt-1 text-[#555]">Punjab Technical University</dd></div>
            </dl>
            <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-[#777]">Tools I use</p>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {skills.map((s) => <li key={s} className="rounded-full border border-black/20 px-4 py-1.5 text-sm font-medium">{s}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="!py-16 md:!py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Heading>How we work</Heading>
          <ol className="mt-14 grid gap-10 md:grid-cols-3">
            {steps.map(([t, d], i) => (
              <li key={t} className="border-t-4 border-[#111] pt-6">
                <p className="font-display text-sm font-bold text-[#ff5a1f]">Step {i + 1}</p>
                <h3 className="mt-3 font-display text-2xl font-extrabold">{t}</h3>
                <p className="mt-3 text-lg leading-relaxed text-[#444]">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="!py-16 md:!py-28 bg-[#ff5a1f]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-[#111] md:text-6xl">Have something to build? Let&apos;s talk.</h2>
            <p className="mt-6 max-w-md text-xl text-[#111]/80">Tell me what you need. I&apos;ll reply within one working day.</p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-xl md:p-8"><ContactForm product="Website" /></div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
