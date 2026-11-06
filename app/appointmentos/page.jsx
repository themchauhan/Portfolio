import Link from 'next/link'
import TrackedLink from '@/components/TrackedLink'
import PilotTerms from '@/components/products/PilotTerms'
import { pageMeta } from '@/lib/seo'
import { pilot, waLink } from '@/lib/pricing'
import PageSeo from '@/components/PageSeo'
import FaqList from '@/components/FaqList'

export const metadata = pageMeta({
  title: 'AppointmentOS - Missed-call WhatsApp booking (pilot)',
  description: `Missed a call? AppointmentOS sends the caller a WhatsApp booking link automatically. Online booking and reminders for clinics, salons, gyms and coaching. Free for ${pilot.freeLabel} in the pilot.`,
  alternates: { canonical: 'https://themanishchauhan.in/appointmentos' },
})

const JOIN_MSG = "Hi Manish, I'd like to join the AppointmentOS pilot. My business: "

const steps = [
  ['A customer calls', 'You are busy with a client, so the call is missed.'],
  ['WhatsApp goes out', 'Within a minute, the caller gets a WhatsApp message with your booking link.'],
  ['They book a slot', 'They pick a service, date and time on your booking page. No app needed.'],
  ['Reminder before the visit', 'A WhatsApp reminder goes out before the appointment, so fewer people forget.'],
]

const forWho = ['Clinics & dentists', 'Salons & spas', 'Gyms & yoga studios', 'Coaching & tutors', 'Physiotherapists', 'CAs & lawyers', 'Consultants', 'Repair & service shops']

const faqs = [
  ['Is AppointmentOS ready to use today?', `AppointmentOS is new. When you join the pilot, I set it up for your business and we fine-tune it together during the free ${pilot.freeLabel}.`],
  ['Do I need to change my phone number?', 'No. You keep your number and forward missed calls to a business number that detects them. I help you set this up.'],
  ['Do my customers need to install an app?', 'No. They get a normal WhatsApp message and book on a simple web page that opens on any phone.'],
  ['Why do I pay for WhatsApp and the phone number during the free trial?', 'Those charges come from Meta and the phone provider for every message and every month, not from me. You see the bills directly, so nothing is hidden or marked up.'],
  ['What happens after the trial?', `If you want to continue, it is ₹${pilot.priceAfter}/month, fixed for the first year, plus the same usage charges. If not, you stop and pay nothing for the software.`],
  ['Is customer data safe?', 'Only your staff can see your bookings. Customer numbers are used only for their own bookings and reminders, never for marketing unless they agree.'],
]

const Phone = ({ label, children }) => (
  <figure className="mx-auto w-full max-w-[280px]">
    <div className="rounded-[2.2rem] border-[10px] border-[#111] bg-[#111] shadow-2xl">
      <div className="mx-auto mb-1 h-4 w-20 rounded-b-xl bg-[#111]" />
      <div className="h-[460px] overflow-hidden rounded-[1.5rem] bg-white">{children}</div>
    </div>
    <figcaption className="mt-4 text-center text-sm font-semibold text-[#444]">{label}</figcaption>
  </figure>
)

const Bubble = ({ children, time }) => (
  <div className="max-w-[88%] rounded-lg rounded-tl-none bg-white px-3 py-2 text-[13px] leading-snug text-[#111] shadow-sm">
    {children}
    <p className="mt-1 text-right text-[10px] text-[#888]">{time}</p>
  </div>
)

function WhatsAppMock() {
  return (
    <div className="flex h-full flex-col bg-[#efe7dd]">
      <div className="flex items-center gap-2 bg-[#075e54] px-3 py-3 text-white">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-xs font-bold">SS</span>
        <div><p className="text-sm font-semibold">Style Studio Salon</p><p className="text-[10px] text-white/70">Business account</p></div>
      </div>
      <div className="flex-1 space-y-3 p-3">
        <p className="mx-auto w-fit rounded bg-white/70 px-2 py-0.5 text-[10px] text-[#555]">📞 Missed voice call · 11:42</p>
        <Bubble time="11:43">
          Hi! Sorry we missed your call 🙏<br />We&apos;re with a customer right now.<br /><br />Book your appointment here in 30 seconds:
          <span className="mt-1 block font-semibold text-[#0b7cba] underline">book.stylestudio.in</span>
        </Bubble>
        <Bubble time="11:43">Or reply here and we&apos;ll call you back.</Bubble>
      </div>
      <p className="bg-white/60 px-3 py-2 text-center text-[10px] text-[#666]">Sample message</p>
    </div>
  )
}

function BookingMock() {
  const slots = ['11:30', '12:00', '12:30', '3:00', '3:30', '4:00']
  return (
    <div className="flex h-full flex-col p-4 text-[#111]">
      <p className="text-[11px] font-semibold uppercase tracking-widest text-[#ff5a1f]">Style Studio Salon</p>
      <p className="mt-1 font-display text-lg font-extrabold">Book an appointment</p>
      <p className="mt-4 text-[11px] font-semibold text-[#666]">Service</p>
      <div className="mt-1 space-y-1.5 text-[13px]">
        <div className="flex justify-between rounded-lg border-2 border-[#ff5a1f] px-3 py-2"><span>Haircut</span><span className="text-[#666]">30 min</span></div>
        <div className="flex justify-between rounded-lg border border-black/15 px-3 py-2"><span>Facial</span><span className="text-[#666]">45 min</span></div>
      </div>
      <p className="mt-4 text-[11px] font-semibold text-[#666]">Thu, 12 Nov</p>
      <div className="mt-1 grid grid-cols-3 gap-1.5 text-center text-[12px]">
        {slots.map((s) => (
          <span key={s} className={`rounded-md py-1.5 ${s === '12:30' ? 'bg-[#111] text-white' : s === '12:00' ? 'bg-black/5 text-[#bbb] line-through' : 'border border-black/15'}`}>{s}</span>
        ))}
      </div>
      <span className="mt-auto rounded-full bg-[#ff5a1f] py-2.5 text-center text-sm font-semibold text-white">Confirm 12:30 PM</span>
      <p className="mt-2 text-center text-[10px] text-[#888]">Sample booking page</p>
    </div>
  )
}

function ReminderMock() {
  return (
    <div className="flex h-full flex-col bg-[#efe7dd]">
      <div className="flex items-center gap-2 bg-[#075e54] px-3 py-3 text-white">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-xs font-bold">SS</span>
        <div><p className="text-sm font-semibold">Style Studio Salon</p><p className="text-[10px] text-white/70">Business account</p></div>
      </div>
      <div className="flex-1 space-y-3 p-3">
        <Bubble time="11:45">✅ Booked! Haircut on Thu, 12 Nov at 12:30 PM.<br />Address: Main Market</Bubble>
        <p className="mx-auto w-fit rounded bg-white/70 px-2 py-0.5 text-[10px] text-[#555]">Thursday</p>
        <Bubble time="10:30">⏰ Reminder: your Haircut is today at 12:30 PM.<br /><br />Reply 1 to confirm, 2 to reschedule.</Bubble>
        <div className="ml-auto w-fit rounded-lg rounded-tr-none bg-[#d9fdd3] px-3 py-2 text-[13px] shadow-sm">1<p className="text-right text-[10px] text-[#888]">10:31</p></div>
      </div>
      <p className="bg-white/60 px-3 py-2 text-center text-[10px] text-[#666]">Sample messages</p>
    </div>
  )
}

const JoinButton = ({ position, className = '', dark = false }) => (
  <TrackedLink
    href={waLink(JOIN_MSG)}
    target="_blank"
    rel="noopener noreferrer"
    event="pilot_join_click"
    params={{ product: 'AppointmentOS', position }}
    className={`inline-block rounded-full px-8 py-4 text-lg font-semibold text-white ${dark ? 'bg-[#111] hover:bg-white hover:text-[#111]' : 'bg-[#25D366] hover:bg-[#1ebe5b]'} ${className}`}
  >
    Join the free pilot
  </TrackedLink>
)

export default function Page() {
  return (
    <main className="prod bg-[#f4f1ec] text-[#111] antialiased">
      {/* Hero */}
      <section className="!pt-14 !pb-10 md:!pt-24 md:!pb-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="inline-flex items-center gap-2 rounded-full bg-[#111] px-4 py-1.5 text-sm font-semibold text-white">
            <span className="h-2 w-2 rounded-full bg-[#ff5a1f]" />AppointmentOS · Pilot
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-extrabold leading-[1.03] tracking-tight md:text-6xl xl:text-7xl">Missed a call? They still get booked.</h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-[#444]">When you miss a call, the caller automatically gets a WhatsApp message with your booking link. They pick a time, and get a reminder before the visit. You don&apos;t lose the customer.</p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <JoinButton position="hero" />
            <a href="#pilot" className="font-semibold underline decoration-[#ff5a1f] decoration-2 underline-offset-8 hover:text-[#ff5a1f]">See the pilot terms</a>
          </div>
        </div>
      </section>

      {/* Mockups */}
      <section className="!py-12 md:!py-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 md:grid-cols-3 md:gap-8">
          <Phone label="1. Missed call → WhatsApp"><WhatsAppMock /></Phone>
          <Phone label="2. Customer books online"><BookingMock /></Phone>
          <Phone label="3. Confirmation and reminder"><ReminderMock /></Phone>
        </div>
      </section>

      {/* How it works */}
      <section className="!py-14 md:!py-20 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">How it works</h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([t, d], i) => (
              <li key={t} className="border-t-4 border-[#111] pt-5">
                <p className="text-sm font-semibold text-[#ff5a1f]">Step {i + 1}</p>
                <h3 className="mt-2 font-display text-xl font-extrabold">{t}</h3>
                <p className="mt-2 text-[#555]">{d}</p>
              </li>
            ))}
          </ol>
          <h3 className="mt-14 text-sm font-semibold uppercase tracking-widest text-[#777]">Made for</h3>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {forWho.map((w) => <li key={w} className="rounded-full border border-black/20 px-4 py-1.5 text-sm font-medium">{w}</li>)}
          </ul>
          <p className="mt-8 text-[#555]">
            Clinic with long walk-in queues? See the{' '}
            <Link href="/clinicos#queue" className="font-semibold text-[#111] underline decoration-[#ff5a1f] decoration-2 underline-offset-4">ClinicOs Queue pilot</Link>.
          </p>
        </div>
      </section>

      {/* Pilot terms */}
      <section id="pilot" className="!py-14 md:!py-20 scroll-mt-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">The pilot, in plain words</h2>
          <p className="mt-4 max-w-2xl text-lg text-[#444]">AppointmentOS is new, and pilot businesses help shape it. Here is exactly what you get and what you pay.</p>
          <PilotTerms className="mt-10" />
          <JoinButton position="terms" className="mt-10" />
        </div>
      </section>

      {/* FAQ */}
      <section className="!py-14 md:!py-20 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">Questions</h2>
          <FaqList items={faqs} className="mt-8" />
        </div>
      </section>

      <PageSeo type="WebPage" name="AppointmentOS: missed-call WhatsApp booking (pilot)" path="/appointmentos" crumbs={[['Products', '/products'], ['AppointmentOS', '/appointmentos']]} faqs={faqs} hideFaq />

      {/* CTA */}
      <section className="!py-16 md:!py-24 bg-[#ff5a1f] text-[#111]">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 sm:px-8 md:flex-row md:items-center">
          <div>
            <h2 className="max-w-2xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl">Stop losing customers to missed calls.</h2>
            <p className="mt-4 text-lg text-[#111]/80">Try it free for {pilot.freeLabel}. Message me and tell me about your business.</p>
          </div>
          <JoinButton position="footer" className="shrink-0" dark />
        </div>
      </section>
    </main>
  )
}
