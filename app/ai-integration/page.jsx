import Link from 'next/link'
import ClinicAssistantDemo from '@/components/ClinicAssistantDemo'
import TrackedLink from '@/components/TrackedLink'
import ContactForm from '@/components/products/ContactForm'
import PageSeo from '@/components/PageSeo'
import JsonLd from '@/components/JsonLd'
import { SITE, pageMeta } from '@/lib/seo'
import { waLink } from '@/lib/pricing'
import { getExperienceText } from '@/utils/experience'

const URL = `${SITE}/ai-integration`

export const metadata = pageMeta({
  title: 'AI Integration Services for Businesses in India: Chatbots, WhatsApp & Automation',
  description: 'I add AI to your business: an AI receptionist on your website and WhatsApp, instant lead replies, invoices and forms read into Excel, and assistants trained on your own documents. Free AI call.',
  alternates: { canonical: URL },
})

const builds = [
  ['💬', 'AI receptionist', 'Answers customers on your website and WhatsApp in seconds, in English or Hindi, from your own prices and timings, and sends you every booking.', '/demo/clinic-assistant', 'Try the live demo'],
  ['⚡', 'Instant replies to new leads', 'Every enquiry from your website, Google, Facebook or IndiaMART gets a helpful reply in under a minute, plus a follow-up if they go quiet.'],
  ['🧾', 'Bills and forms into Excel', 'Photos and PDFs of invoices, bills, forms and ID documents are read automatically and added to your sheet, Tally export or software.'],
  ['📚', 'Assistant for your staff', 'Your SOPs, price lists, policies and product manuals turned into an assistant your team can ask, instead of calling the owner.'],
  ['📊', 'Reports and summaries', 'Daily sales, enquiries or reviews summarised and sent to your WhatsApp every evening, in plain words.'],
  ['🔌', 'AI inside what you already use', 'AI added to your existing website, WordPress, Drupal, HubSpot, Google Sheets or CRM, without rebuilding anything.'],
]

const industries = [
  ['Hotels & homestays', 'Room enquiries at night, rates, booking requests'],
  ['Restaurants & cafés', 'Table bookings, menu questions, party orders'],
  ['Coaching & schools', 'Batch and admission enquiries, demo-class bookings'],
  ['Clinics & labs', 'Doctor timings, appointments, report-ready messages'],
  ['Distributors & traders', 'Orders on WhatsApp, invoices into Excel'],
  ['Real estate', 'Property enquiries, site-visit bookings, lead follow-up'],
  ['CA & accounting firms', 'Client documents sorted and read into sheets'],
  ['Agencies', 'White-label AI features for your clients’ websites'],
]

const steps = [
  ['Free AI call', '20 minutes. You tell me how your day runs, and I show you 2 or 3 tasks AI can take over.'],
  ['Fixed-price pilot', 'We start with one task, built and tested in 1 to 2 weeks. You know the full price before I start.'],
  ['Go live', 'It runs on your website, WhatsApp or sheets. Your team sees every booking and every reply.'],
  ['Improve monthly', 'I check how it is used, add answers to new questions and keep it running.'],
]

const faqs = [
  ['What does AI integration mean for a small business?', 'It means using AI inside the tools you already use, such as your website, WhatsApp, Google Sheets or software, to do repeated work: answering common questions, replying to leads, reading bills and forms, and writing summaries. You don’t need to learn any AI tool yourself.'],
  ['Can’t we just use ChatGPT ourselves?', 'ChatGPT is great for one person typing questions. But it doesn’t know your prices or stock, it can’t reply to your customers on WhatsApp at night, and it can’t add bills to your sheet by itself. AI integration connects the same kind of AI to your business details and tools, so the work happens automatically.'],
  ['How much does AI integration cost?', 'Most projects start as a small fixed-price pilot for one task, then a monthly fee that covers the AI usage and upkeep. The price depends on the task and how many messages or documents it handles. You get a fixed quote after a free call.'],
  ['Is my business data safe?', 'Your assistant uses only the details you approve, on paid AI plans where your data is not used to train AI models. It asks customers only for what a booking needs, and you can switch it off at any time.'],
  ['Will it reply in Hindi?', 'Yes. It replies in the language the customer writes in: English, Hindi or Hinglish.'],
  ['What if the AI gives a wrong answer?', 'It is set up to answer only from your details, and to pass anything it doesn’t know to your team instead of guessing. In the first weeks I review its answers with you and fix any gaps.'],
  ['Do you work outside my city?', 'Yes. Everything is set up and supported online for businesses anywhere in India, and for agencies in the UK and US.'],
]

const wa = waLink("Hi Manish, I'd like a free AI call for my business. We are a: ")

export default function Page() {
  return (
    <main className="prod bg-[#f4f1ec] text-[#111] antialiased">
      <JsonLd data={[
        { '@context': 'https://schema.org', '@type': 'Service', name: 'AI integration services', serviceType: 'AI integration', url: URL, description: metadata.description, areaServed: 'IN', provider: { '@type': 'Person', name: 'Manish Chauhan', url: SITE } },
        { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
      ]} />

      {/* Hero */}
      <section className="!py-14 md:!py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-[15px] font-semibold text-[#ff5a1f]">AI integration for businesses</p>
          <h1 className="mt-5 max-w-4xl font-display text-5xl font-extrabold leading-[1.02] tracking-tight md:text-7xl">
            I put AI to work <span className="underline decoration-[#ff5a1f] decoration-[6px] underline-offset-[10px]">inside your business.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-[#444]">
            Customers answered at 11 pm. Leads replied to in a minute. Bills typed into Excel without anyone typing. I connect AI to your website, WhatsApp and sheets, so the repeated work gets done on its own.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <TrackedLink href={wa} target="_blank" rel="noopener noreferrer" event="ai_call_click" params={{ position: 'ai_hero' }} className="rounded-full bg-[#111] px-7 py-3.5 font-semibold text-white hover:bg-[#ff5a1f]">Book a free AI call</TrackedLink>
            <a href="#demo" className="rounded-full border-2 border-[#111] px-7 py-3 font-semibold hover:bg-[#111] hover:text-white">Try the live demo</a>
          </div>
          <p className="mt-6 text-[#666]">{(t => t[0].toUpperCase() + t.slice(1))(getExperienceText())} building software for companies like Splunk, Cohesity and Socure. Now building AI for Indian businesses.</p>
        </div>
      </section>

      {/* What I build */}
      <section className="!py-16 md:!py-24 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">What I can build for you</h2>
          <p className="mt-4 max-w-2xl text-lg text-[#555]">Start with the one that takes up most of your team’s time.</p>
          <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {builds.map(([icon, t, d, href, label]) => (
              <li key={t} className="flex flex-col border-t-4 border-[#111] bg-[#f4f1ec] p-7">
                <p className="text-3xl" aria-hidden>{icon}</p>
                <h3 className="mt-4 font-display text-2xl font-extrabold">{t}</h3>
                <p className="mt-2 flex-1 text-[#555]">{d}</p>
                {href && <Link href={href} className="mt-5 font-semibold text-[#0f766e] underline decoration-2 underline-offset-4">{label} →</Link>}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Live demo */}
      <section id="demo" className="!py-16 md:!py-24 scroll-mt-20">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)] items-center gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr),minmax(0,440px)]">
          <div>
            <p className="text-sm font-semibold text-[#0f766e]">Live demo · real AI</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-5xl">Don’t take my word for it. Try it.</h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#444]">This is an AI receptionist for a fictional clinic. Ask it anything a patient would, in English or Hindi, book an appointment, or try to trick it. Yours would know your business instead.</p>
            <ul className="mt-6 space-y-2 text-[#444]">
              <li>✓ Ask “Kal subah dentist ka appointment mil sakta hai?”</li>
              <li>✓ Ask for something the clinic doesn’t offer</li>
              <li>✓ Book an appointment and see what reception receives</li>
            </ul>
            <p className="mt-6 text-sm text-[#777]">The demo runs on Google’s Gemini free tier. Please don’t enter real names, numbers or health details.</p>
          </div>
          <ClinicAssistantDemo />
        </div>
      </section>

      {/* Who it's for */}
      <section className="!py-16 md:!py-24 bg-[#111] text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">Who it’s for</h2>
          <p className="mt-4 max-w-2xl text-lg text-[#b9b5ad]">If your team answers the same questions or types the same data every day, AI can take it over.</p>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map(([t, d]) => (
              <li key={t} className="border-t-2 border-[#ff5a1f] pt-4">
                <h3 className="font-display text-xl font-extrabold">{t}</h3>
                <p className="mt-1 text-[#b9b5ad]">{d}</p>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-[#b9b5ad]">Run an agency? <Link href="/agencies" className="font-semibold text-white underline decoration-[#ff5a1f] decoration-2 underline-offset-4">Add AI features to your clients’ websites, white-label.</Link></p>
        </div>
      </section>

      {/* ChatGPT question */}
      <section className="!py-16 md:!py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">“We already use ChatGPT.”</h2>
          <p className="mt-6 text-xl leading-relaxed text-[#444]">Good, then you know what AI can do. But ChatGPT only works when someone sits and types into it. It doesn’t know your prices, it can’t reply to your customers on WhatsApp at night, and it can’t put 200 bills into your sheet by itself.</p>
          <p className="mt-4 text-xl leading-relaxed text-[#444]"><strong>AI integration connects that same AI to your business</strong>: your details, your WhatsApp, your website and your sheets. Then the work happens without anyone typing.</p>
        </div>
      </section>

      {/* Process */}
      <section className="!py-16 md:!py-24 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">How it works</h2>
          <ol className="mt-12 grid gap-10 md:grid-cols-4">
            {steps.map(([t, d], i) => (
              <li key={t} className="border-t-4 border-[#111] pt-5">
                <p className="font-display text-sm font-bold text-[#ff5a1f]">Step {i + 1}</p>
                <h3 className="mt-2 font-display text-xl font-extrabold">{t}</h3>
                <p className="mt-2 text-[#555]">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <PageSeo type="WebPage" name="AI integration services" path="/ai-integration" crumbs={[['AI integration', '/ai-integration']]} faqs={faqs} faqTitle="AI integration: common questions" bg="bg-[#f4f1ec]" />

      {/* Contact */}
      <section id="contact" className="!py-16 md:!py-24 bg-[#ff5a1f] scroll-mt-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-[#111] md:text-5xl">Book a free 20-minute AI call.</h2>
            <p className="mt-5 max-w-md text-xl text-[#111]/80">Tell me what your team does every day. I’ll show you what AI can take over, with a fixed price for a first pilot.</p>
            <TrackedLink href={wa} target="_blank" rel="noopener noreferrer" event="ai_call_click" params={{ position: 'ai_contact' }} className="mt-8 inline-block rounded-full bg-[#111] px-7 py-3.5 font-semibold text-white hover:bg-white hover:text-[#111]">Message on WhatsApp</TrackedLink>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-xl md:p-8"><ContactForm product="AI integration" /></div>
        </div>
      </section>
    </main>
  )
}
