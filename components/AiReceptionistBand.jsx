import TrackedLink from '@/components/TrackedLink'

// "AI receptionist" promo, linking to the live demo. Placed on pages that get Google clicks
// (tools, services, blog, contact). `kind` picks a sample chat that fits the page's visitors.
const DEMO = '/demo/clinic-assistant'
const BLOG = '/blog/ai-receptionist-for-small-business'

const chats = {
  hotel: ['Room available for Saturday? 2 adults. Rate kya hai?', 'Yes, a Deluxe Room is free on Saturday at ₹2,800 with breakfast. Shall I hold it? Please share your name and number.'],
  cafe: ['Table for 8 tonight at 8:30? Birthday hai', 'Happy birthday in advance! 🎉 Yes, we can seat 8 at 8:30 pm. May I have your name and number to confirm?'],
  clinic: ['Kal subah dentist ka appointment mil sakta hai?', 'Ji haan, Dr. Kapoor kal subah 10 se 1 baje tak hain. Aapka naam aur mobile number bata dijiye.'],
  rent: ['Single room khali hai? Rent kitna hai?', 'Yes, a single room with meals is available from 1 December at ₹9,000 a month. Would you like to book a visit?'],
  coaching: ['Class 11 JEE batch kab start hoga? Demo class milegi?', 'The new batch starts on 1 December, 4 to 6 pm. Yes, the first demo class is free. Shall I book one?'],
}

const text = {
  en: {
    eyebrow: 'New · AI receptionist',
    title: 'Customers message at 11 pm. Who replies?',
    body: 'An AI receptionist answers your customers in seconds on your website and WhatsApp, in English or Hindi, and sends you every booking. For hotels, restaurants, coaching centres, clinics, PGs and shops.',
    cta: 'Try the live demo',
    more: 'How it works',
    label: 'Your business · AI receptionist',
  },
  hi: {
    eyebrow: 'नया · AI रिसेप्शनिस्ट',
    title: 'रात 11 बजे ग्राहक का मैसेज आया। जवाब कौन देगा?',
    body: 'AI रिसेप्शनिस्ट आपकी वेबसाइट और WhatsApp पर ग्राहकों को कुछ सेकंड में जवाब देता है, हिंदी या अंग्रेज़ी में, और हर बुकिंग आपको भेज देता है। होटल, रेस्टोरेंट, कोचिंग, क्लिनिक, PG और दुकानों के लिए।',
    cta: 'लाइव डेमो आज़माएँ',
    more: 'कैसे काम करता है',
    label: 'आपका बिज़नेस · AI रिसेप्शनिस्ट',
  },
}

export default function AiReceptionistBand({ kind = 'hotel', lang = 'en', page, compact = false, bg = 'bg-[#f4f1ec]' }) {
  const t = text[lang] || text.en
  const [q, a] = chats[kind] || chats.hotel
  const track = { page: page || kind, kind }

  const inner = (
    <div className={`grid items-center gap-8 ${compact ? '' : 'md:grid-cols-[minmax(0,1fr),minmax(0,380px)] md:gap-12'}`}>
      <div>
        <p className="text-sm font-semibold text-[#0f766e]">{t.eyebrow}</p>
        <h2 className={`mt-2 font-display font-extrabold tracking-tight ${compact ? 'text-2xl md:text-[1.625rem]' : 'text-3xl md:text-4xl'}`}>{t.title}</h2>
        <p className={`mt-3 max-w-xl leading-relaxed text-[#444] ${compact ? '' : 'text-lg'}`}>{t.body}</p>
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
          <TrackedLink href={DEMO} event="clinic_demo_open" params={{ ...track, position: 'band' }} className="rounded-full bg-[#0f766e] px-6 py-3 font-semibold text-white hover:bg-[#115e59]">
            {t.cta} →
          </TrackedLink>
          <a href={BLOG} className="font-semibold underline decoration-[#0f766e] decoration-2 underline-offset-4 hover:text-[#0f766e]">{t.more}</a>
        </div>
      </div>
      {!compact && (
        <div className="overflow-hidden rounded-2xl border border-black/10 shadow-sm" aria-hidden>
          <p className="bg-[#0f766e] px-4 py-2.5 text-sm font-semibold text-white">{t.label}</p>
          <div className="space-y-3 bg-[#efeae2] p-4 text-[15px] leading-relaxed">
            <p className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-[#d9fdd3] px-4 py-2.5 shadow-sm">{q}</p>
            <p className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white px-4 py-2.5 shadow-sm">{a}</p>
          </div>
        </div>
      )}
    </div>
  )

  if (compact) return <div className="mt-14 rounded-2xl border border-[#0f766e]/25 bg-[#f0fdfa] p-6 md:p-8">{inner}</div>
  return (
    <section className={`!py-14 md:!py-20 ${bg} print:hidden`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">{inner}</div>
    </section>
  )
}
