import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import FreeBadges from '@/components/tools/FreeBadges'
import ShareTool from '@/components/tools/ShareTool'
import SalarySlipGenerator from '@/components/tools/SalarySlipGenerator'
import { SITE, pageMeta } from '@/lib/seo'

const URL = `${SITE}/hi/tools/salary-slip-generator`
const EN_URL = `${SITE}/tools/salary-slip-generator`

export const metadata = pageMeta({
  title: 'सैलरी स्लिप फ़्री में बनाएँ – Salary Slip / Payslip (PF, ESI)',
  description: 'सैलरी स्लिप 1 मिनट में बनाएँ: कंपनी का लोगो, PF, ESI, TDS, छुट्टी (LOP) और हाथ में आने वाली सैलरी। फ़्री, कोई लॉगिन नहीं। प्रिंट या PDF।',
  alternates: { canonical: URL, languages: { 'en-IN': EN_URL, 'hi-IN': URL } },
  openGraph: { locale: 'hi_IN' },
})

const faqs = [
  ['क्या ये सैलरी स्लिप टूल फ़्री है?', 'हाँ, बिल्कुल फ़्री है और जितनी चाहें उतनी स्लिप बना सकते हैं। कोई लॉगिन या साइन-अप नहीं चाहिए, और आपकी जानकारी कहीं सेव नहीं होती।'],
  ['सैलरी स्लिप में क्या-क्या होना चाहिए?', 'कंपनी का नाम, कर्मचारी की जानकारी, सैलरी का महीना, वर्किंग और पेड दिन, हर कमाई (Basic, HRA, अलाउंस), हर कटौती (PF, प्रोफ़ेशनल टैक्स, TDS, ESI), कुल कमाई, कुल कटौती और हाथ में आने वाली सैलरी।'],
  ['PF कैसे कटता है?', 'कर्मचारी का PF आमतौर पर Basic का 12% होता है। बहुत सी कंपनियाँ ₹15,000 की सीमा पर PF काटती हैं, यानी ज़्यादा से ज़्यादा ₹1,800 महीना। "PF अपने-आप" बटन यही हिसाब लगाता है।'],
  ['ESI कब कटता है?', 'जब कर्मचारी की कुल महीने की सैलरी ₹21,000 या उससे कम हो, तब आमतौर पर 0.75% ESI कटता है। "ESI अपने-आप" बटन यही नियम लगाता है।'],
  ['स्लिप अंग्रेज़ी में क्यों बनती है?', 'बैंक, लोन और HR में अंग्रेज़ी की सैलरी स्लिप सबसे आसानी से मान्य होती है, इसलिए स्लिप अंग्रेज़ी में बनती है। फ़ॉर्म आप हिंदी में भर सकते हैं।'],
]

export default function Page() {
  return (
    <main className="prod bg-[#f4f1ec] text-[#111] antialiased">
      <JsonLd data={[
        { '@context': 'https://schema.org', '@type': 'WebApplication', name: 'सैलरी स्लिप जनरेटर', inLanguage: 'hi', url: URL, applicationCategory: 'BusinessApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' }, author: { '@type': 'Person', name: 'Manish Chauhan', url: SITE } },
        { '@context': 'https://schema.org', '@type': 'FAQPage', inLanguage: 'hi', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
      ]} />

      <section className="!py-12 md:!py-20 print:!py-0">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="print:hidden">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-[15px] font-semibold text-[#ff5a1f]">फ़्री टूल</p>
              <Link href="/tools/salary-slip-generator" hrefLang="en" className="text-sm font-semibold underline decoration-[#ff5a1f] underline-offset-4">Read in English</Link>
            </div>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.15] md:text-6xl">सैलरी स्लिप बनाएँ <span className="block text-2xl text-[#555] md:text-3xl">Salary Slip / Payslip – PF और ESI के साथ</span></h1>
            <p className="mt-5 max-w-2xl text-xl leading-relaxed text-[#444]">कंपनी के लोगो के साथ सैलरी स्लिप 1 मिनट में बनाएँ। PF, ESI, TDS और छुट्टी (LOP) का हिसाब अपने-आप। बिल्कुल फ़्री: कोई लॉगिन नहीं, कोई साइन-अप नहीं।</p>
            <FreeBadges lang="hi" className="mt-6" />
            <ShareTool lang="hi" className="mt-5" url={URL} title="फ़्री सैलरी स्लिप जनरेटर" message="PF और ESI के साथ सैलरी स्लिप फ़्री में बनाएँ, कोई साइन-अप नहीं:" />
          </div>
          <div className="mt-10 print:mt-0"><SalarySlipGenerator lang="hi" /></div>
        </div>
      </section>

      <section className="!py-14 md:!py-20 bg-white print:hidden">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 className="text-3xl font-extrabold md:text-4xl">सैलरी स्लिप कैसे बनाएँ</h2>
          <ol className="mt-8 grid gap-6 md:grid-cols-4">
            {[
              ['कंपनी की जानकारी', 'कंपनी का नाम, पता और लोगो। लोगो आपके डिवाइस में ही रहता है।'],
              ['कर्मचारी की जानकारी', 'नाम, ID, पद, PAN, UAN और बैंक अकाउंट (आख़िरी 4 अंक काफ़ी हैं)।'],
              ['सैलरी भरें', 'Basic, HRA और अलाउंस भरें। PF और ESI बटन से कटौती अपने-आप लगाएँ। छुट्टी हो तो पेड दिन कम करें।'],
              ['प्रिंट या PDF', 'स्लिप चेक करें, फिर प्रिंट करें या PDF सेव करके WhatsApp या ईमेल पर भेजें।'],
            ].map(([t, d], i) => (
              <li key={t} className="border-t-4 border-[#111] pt-4">
                <p className="text-sm font-bold text-[#ff5a1f]">स्टेप {i + 1}</p>
                <h3 className="mt-2 text-lg font-extrabold">{t}</h3>
                <p className="mt-1 text-[#555]">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="!py-14 md:!py-20 bg-[#111] print:hidden">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 sm:px-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold text-[#ff5a1f]">बिज़नेस मालिकों के लिए</p>
            <h2 className="mt-3 max-w-xl text-3xl font-extrabold text-white md:text-4xl">हर महीने सबकी सैलरी स्लिप बनाते हैं? अपने-आप करवाइए।</h2>
            <p className="mt-3 max-w-xl text-lg text-[#b9b5ad]">हाज़िरी डालिए, सबकी सैलरी स्लिप अपने-आप बने और WhatsApp या ईमेल पर पहुँच जाए। मैं ये सेटअप करके दे सकता हूँ।</p>
          </div>
          <Link href="/services/business-automation" className="shrink-0 rounded-full bg-[#ff5a1f] px-7 py-3.5 font-semibold text-white hover:bg-white hover:text-[#111]">ऑटोमेशन के बारे में जानें</Link>
        </div>
      </section>

      <section className="!py-14 md:!py-20 print:hidden">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 className="text-3xl font-extrabold md:text-4xl">अक्सर पूछे जाने वाले सवाल</h2>
          <div className="mt-8 max-w-4xl divide-y divide-black/15 border-y border-black/15">
            {faqs.map(([q, a]) => (
              <details key={q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">{q}<span className="text-2xl text-[#ff5a1f] transition group-open:rotate-45">+</span></summary>
                <p className="mt-3 text-[#555]">{a}</p>
              </details>
            ))}
          </div>
          <p className="mt-6 text-sm text-[#777]">ये टूल सैलरी स्लिप बनाने में मदद करता है। PF, ESI, प्रोफ़ेशनल टैक्स और TDS के नियम अपने अकाउंटेंट से कन्फ़र्म कर लें।</p>
        </div>
      </section>
    </main>
  )
}
