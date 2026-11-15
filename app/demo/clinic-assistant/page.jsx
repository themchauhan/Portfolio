import Link from 'next/link'
import ClinicAssistantDemo from '@/components/ClinicAssistantDemo'
import TrackedLink from '@/components/TrackedLink'
import FaqList from '@/components/FaqList'
import PageSeo from '@/components/PageSeo'
import JsonLd from '@/components/JsonLd'
import { SITE, pageMeta } from '@/lib/seo'
import { waLink } from '@/lib/pricing'

const URL = `${SITE}/demo/clinic-assistant`

export const metadata = pageMeta({
  title: 'AI Receptionist for Clinics – Try the Live Demo',
  description: 'Chat with an AI receptionist for a clinic: it answers patients about doctors, timings and fees in English or Hindi, and collects appointment requests for reception. Try it free.',
  alternates: { canonical: URL },
})

const points = [
  ['🕘', 'Answers 24×7', 'Timings, fees, doctors, services and directions, at 11 pm or on a Sunday, without your staff picking up the phone.'],
  ['🗣️', 'English, Hindi and Hinglish', 'Patients write the way they talk. It replies in the same language.'],
  ['📋', 'Bookings go to reception', 'It collects the name, number, doctor and preferred time, and sends a clean request to your reception team to confirm.'],
  ['🛡️', 'Safe by design', 'It never diagnoses or suggests medicines, and it sends anything urgent straight to emergency care.'],
  ['📱', 'Website and WhatsApp', 'The same assistant can sit on your website and answer on your WhatsApp Business number.'],
  ['🏥', 'Your clinic, your details', 'It is set up from your own doctors, timings, fees and policies, and only says what you have approved.'],
]

const faqs = [
  ['Is this a real AI or a scripted bot?', 'It is a real AI model, given only the clinic’s details and strict rules. Try asking the same thing in different ways, or in Hindi.'],
  ['Can it work on my clinic’s WhatsApp number?', 'Yes. It can answer on WhatsApp Business through the official WhatsApp Business Platform, as well as on your website.'],
  ['Will it give medical advice to my patients?', 'No. It is set up to never diagnose, suggest medicines or read reports. It points patients to the right doctor, and tells them to seek emergency care when something sounds urgent.'],
  ['Does it book appointments directly into my system?', 'In this demo it shows the request reception would receive. For your clinic it can send requests to WhatsApp, email or a sheet, or book straight into ClinicOs.'],
  ['What does it cost?', 'A one-time setup plus a small monthly fee that covers the AI usage. The price depends on the channels and volume, and you get a fixed quote after a free call.'],
  ['Is the demo saving what I type?', 'This website doesn’t save your chat. The demo runs on Google’s Gemini free tier, so Google may use the messages to improve its products. Sunrise Clinic and its doctors are fictional, so please don’t enter real names, numbers or health details. A clinic’s own assistant runs on a paid plan where chats are not used this way.'],
]

const wa = waLink("Hi Manish, I tried the clinic AI receptionist demo. I'd like one for my clinic: ")

export default function Page() {
  return (
    <main className="prod bg-[#f4f1ec] text-[#111] antialiased">
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }} />

      <section className="!py-12 md:!py-20">
        {/* Phone: headline, chat, then the rest. Desktop: text on the left, chat on the right. */}
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)] gap-8 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr),minmax(0,440px)] lg:grid-rows-[auto,1fr] lg:gap-x-10 lg:gap-y-0">
          <div>
            <p className="text-[15px] font-semibold text-[#ff5a1f]">Live demo · AI for clinics</p>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">An AI receptionist that never misses a patient.</h1>
            <p className="mt-5 max-w-xl text-xl leading-relaxed text-[#444]">
              Try it: you are a patient messaging Sunrise Clinic. Ask about doctors, timings or fees, in English or Hindi, or book an appointment.
            </p>
          </div>
          <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <ClinicAssistantDemo />
          </div>
          <div>
            <ul className="space-y-2 text-[#444] lg:mt-6">
              <li>✓ Try “Kal subah dentist ka appointment mil sakta hai?”</li>
              <li>✓ Ask about something the clinic doesn’t offer</li>
              <li>✓ Describe a symptom, and see how it handles it safely</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <TrackedLink href={wa} target="_blank" rel="noopener noreferrer" event="clinic_demo_enquiry" params={{ position: 'hero' }} className="rounded-full bg-[#ff5a1f] px-6 py-3 font-semibold text-white hover:bg-[#e14d16]">
                I want this for my clinic
              </TrackedLink>
              <Link href="/clinicos" className="rounded-full border border-black/20 px-6 py-3 font-semibold hover:bg-white">
                See ClinicOs
              </Link>
            </div>
            <p className="mt-6 text-sm text-[#777]">Sunrise Clinic is fictional, and the demo runs on Google’s Gemini free tier. Please don’t enter real names, numbers or health details.</p>
          </div>
        </div>
      </section>

      <section className="!py-14 md:!py-20 bg-white">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">What your clinic gets</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {points.map(([icon, title, text]) => (
              <div key={title}>
                <p className="text-2xl" aria-hidden>{icon}</p>
                <h3 className="mt-3 font-display text-xl font-extrabold">{title}</h3>
                <p className="mt-2 leading-relaxed text-[#555]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="!py-14 md:!py-20 bg-[#111]">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 sm:px-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#ff5a1f]">Not a clinic?</p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-extrabold text-white md:text-4xl">The same assistant works for any business that gets the same questions every day.</h2>
            <p className="mt-3 max-w-xl text-lg text-[#b9b5ad]">Coaching centres, schools, salons, property dealers, restaurants and shops: answers from your own prices and FAQs, and every lead sent to you.</p>
          </div>
          <TrackedLink href={waLink("Hi Manish, I saw the AI receptionist demo. I'd like one for my business: ")} target="_blank" rel="noopener noreferrer" event="clinic_demo_enquiry" params={{ position: 'other_business' }} className="shrink-0 rounded-full bg-[#ff5a1f] px-6 py-3 font-semibold text-white hover:bg-[#e14d16]">
            Ask on WhatsApp
          </TrackedLink>
        </div>
      </section>

      <section className="!py-14 md:!py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">AI receptionist: common questions</h2>
          <FaqList items={faqs} className="mt-8" />
        </div>
      </section>
      <PageSeo type="WebPage" name="AI Receptionist for Clinics" path="/demo/clinic-assistant" crumbs={[['ClinicOs', '/clinicos'], ['AI receptionist demo', '/demo/clinic-assistant']]} />
    </main>
  )
}
