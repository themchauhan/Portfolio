import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import CtaBand from '@/components/CtaBand'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'Work',
  description: 'Websites and web platforms built for Splunk, Cohesity, Socure, Digimarc and more.',
  alternates: { canonical: 'https://themanishchauhan.in/projects' },
})

// [name, logo, dark logo?, tech]
const projects = [
  ['Socure', '/Socure.svg', false, ['WordPress', 'PHP', 'SCSS', 'JavaScript', 'Marketo']],
  ['Digimarc', '/Digimarc_Logo_Grey-1.svg', false, ['Drupal', 'SCSS', 'JavaScript', 'HubSpot']],
  ['Clear Digital', '/clear_logo.svg', false, ['WordPress', 'PHP', 'SCSS', 'JavaScript']],
  ['Estimatic', '/Estimatic_Logo.svg', false, ['React', 'Material UI', 'Redux', 'Firebase']],
  ['LightBeam', '/LightBeam_Logo.svg', false, ['WordPress', 'PHP', 'Tailwind CSS', 'Custom integration']],
  ['Splunk', '/Splunk_Logo_Grey-1.svg', false, ['AEM', 'SCSS', 'JavaScript']],
  ['Aternity', '/Aternity_Logo_Grey.svg', false, ['WordPress', 'SCSS', 'JavaScript']],
  ['Hoover', '/Hoover_Logo_White.svg', false, ['Drupal', 'SCSS', 'JavaScript']],
  ['TRS Rentelco', '/McGrath_Logo_Grey.svg', false, ['Drupal', 'SCSS', 'JavaScript']],
  ['Heat and Control', '/Heat-Control-white-Logo.svg', false, ['Drupal', 'SCSS', 'JavaScript']],
  ['Kount', '/Kount_Logo.svg', false, ['WordPress', 'SCSS', 'JavaScript']],
  ['Cohesity', '/Cohesity_Logo_Grey-1.svg', false, ['WordPress', 'SCSS', 'JavaScript']],
  ['Agari', '/Agari_Logo-1.svg', false, ['WordPress', 'SCSS', 'JavaScript']],
  ['Hippo', '/Hippo_Logo_Grey.svg', false, ['Drupal', 'SCSS', 'JavaScript']],
  ['Weka', '/Weka-Grey-Logo-1.svg', false, ['WordPress', 'SCSS', 'JavaScript']],
  ['Carbon Black', '/Carbon-Black-Grey-Logo.svg', false, ['WordPress', 'SCSS', 'JavaScript']],
]

export default function Page() {
  return (
    <main className="prod bg-[#f4f1ec] text-[#111] antialiased">
      <Nav />
      <PageHero eyebrow="Work" title="Sites and platforms I've built.">
        A selection of websites and web platforms for software and industrial companies, built mostly at Clear Digital.
      </PageHero>

      <section className="!py-0 pb-16 md:pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-px overflow-hidden border border-black/15 bg-black/15 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map(([name, logo, dark, tech]) => (
              <div key={name} className="flex flex-col bg-[#f4f1ec] p-6">
                <div className={`flex h-28 items-center justify-center rounded-lg p-5 ${dark ? 'bg-[#111]' : 'bg-white'}`}>
                  <Image src={logo} alt={name} width={140} height={60} className="max-h-14 w-auto object-contain" />
                </div>
                <h2 className="mt-5 font-display text-2xl font-extrabold">{name}</h2>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {tech.map((t) => <li key={t} className="rounded-full border border-black/20 px-3 py-1 text-xs font-medium text-[#444]">{t}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Have a project in mind? Let's talk." />
      <Footer />
    </main>
  )
}
