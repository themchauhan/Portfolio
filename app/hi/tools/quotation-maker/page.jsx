import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import FreeBadges from '@/components/tools/FreeBadges'
import ShareTool from '@/components/tools/ShareTool'
import QuotationMaker from '@/components/tools/QuotationMaker'
import { SITE, pageMeta } from '@/lib/seo'

const URL = `${SITE}/hi/tools/quotation-maker`
const EN_URL = `${SITE}/tools/quotation-maker`

export const metadata = pageMeta({
  title: 'कोटेशन फ़ॉर्मेट फ़्री में बनाएँ – Quotation Maker (PDF)',
  description: 'दुकान, कॉन्ट्रैक्टर और फ़्रीलांसर के लिए प्रोफ़ेशनल कोटेशन 1 मिनट में बनाएँ: सामान, GST, छूट, वैधता और शर्तें। बिल्कुल फ़्री, कोई लॉगिन नहीं। प्रिंट या PDF।',
  alternates: { canonical: URL, languages: { 'en-IN': EN_URL, 'hi-IN': URL } },
  openGraph: { locale: 'hi_IN' },
})

const faqs = [
  ['क्या ये कोटेशन मेकर फ़्री है?', 'हाँ, बिल्कुल फ़्री है और जितने चाहें उतने कोटेशन बना सकते हैं। कोई लॉगिन या साइन-अप नहीं चाहिए, और आपकी जानकारी कहीं सेव नहीं होती।'],
  ['कोटेशन और बिल (इनवॉइस) में क्या फ़र्क है?', 'कोटेशन काम से पहले भेजा जाता है, जिसमें अंदाज़न कीमत और शर्तें होती हैं। इनवॉइस बिक्री के बाद का बिल है। कोटेशन मंज़ूर होने पर फ़्री GST इनवॉइस जनरेटर से बिल बना सकते हैं।'],
  ['क्या कोटेशन में GST दिखाना चाहिए?', 'अगर आप GST रजिस्टर्ड हैं, तो कोटेशन में GST दिखाने से ग्राहक को पूरी रकम पहले से पता चल जाती है। "GST जोड़ें" पर टिक करें और हर सामान का रेट चुनें।'],
  ['कोटेशन कितने दिन के लिए मान्य रखें?', 'आमतौर पर 7 से 30 दिन, इस पर निर्भर करता है कि आपके सामान के दाम कितनी जल्दी बदलते हैं। उसी हिसाब से "कब तक मान्य" की तारीख रखें।'],
  ['कोटेशन अंग्रेज़ी में क्यों बनता है?', 'ज़्यादातर ग्राहक और कंपनियाँ अंग्रेज़ी का कोटेशन आसानी से समझते और मानते हैं, इसलिए कोटेशन अंग्रेज़ी में बनता है। फ़ॉर्म आप हिंदी में भर सकते हैं।'],
  ['PDF कैसे सेव करें?', '"प्रिंट करें / PDF सेव करें" दबाएँ और प्रिंटर में "Save as PDF" चुनें, फिर WhatsApp या ईमेल पर भेज दें।'],
]

export default function Page() {
  return (
    <main className="prod bg-[#f4f1ec] text-[#111] antialiased">
      <JsonLd data={[
        { '@context': 'https://schema.org', '@type': 'WebApplication', name: 'कोटेशन मेकर', inLanguage: 'hi', url: URL, applicationCategory: 'BusinessApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' }, author: { '@type': 'Person', name: 'Manish Chauhan', url: SITE } },
        { '@context': 'https://schema.org', '@type': 'FAQPage', inLanguage: 'hi', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
      ]} />

      <section className="!py-12 md:!py-20 print:!py-0">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="print:hidden">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-[15px] font-semibold text-[#ff5a1f]">फ़्री टूल</p>
              <Link href="/tools/quotation-maker" hrefLang="en" className="text-sm font-semibold underline decoration-[#ff5a1f] underline-offset-4">Read in English</Link>
            </div>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.15] md:text-6xl">कोटेशन बनाएँ <span className="block text-2xl text-[#555] md:text-3xl">Quotation Maker – फ़्री और आसान</span></h1>
            <p className="mt-5 max-w-2xl text-xl leading-relaxed text-[#444]">ग्राहक को प्रोफ़ेशनल कोटेशन 1 मिनट में भेजें: सामान, GST, छूट, वैधता और शर्तें। बिल्कुल फ़्री: कोई लॉगिन नहीं, कोई साइन-अप नहीं।</p>
            <FreeBadges lang="hi" className="mt-6" />
            <ShareTool lang="hi" className="mt-5" url={URL} title="फ़्री कोटेशन मेकर" message="दुकान और कॉन्ट्रैक्टर के लिए फ़्री कोटेशन मेकर: GST, छूट और शर्तें, 1 मिनट में:" />
          </div>
          <div className="mt-10 print:mt-0"><QuotationMaker lang="hi" /></div>
          <p className="mt-8 text-[#555] print:hidden">कोटेशन मंज़ूर हो गया? फ़्री <Link href="/tools/gst-invoice-generator" className="font-semibold text-[#111] underline decoration-[#ff5a1f] decoration-2 underline-offset-4">GST इनवॉइस जनरेटर</Link> से बिल बनाएँ।</p>
        </div>
      </section>

      <section className="!py-14 md:!py-20 bg-white print:hidden">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <h2 className="text-3xl font-extrabold md:text-4xl">कोटेशन कैसे बनाएँ</h2>
          <ol className="mt-8 grid gap-6 md:grid-cols-4">
            {[
              ['आपका बिज़नेस', 'बिज़नेस का नाम, पता, फ़ोन और चाहें तो लोगो और GSTIN।'],
              ['ग्राहक', 'ग्राहक का नाम, पता, कोटेशन नंबर और कब तक मान्य है।'],
              ['सामान और रेट', 'हर सामान या काम, मात्रा, यूनिट और रेट। ज़रूरत हो तो GST और छूट।'],
              ['प्रिंट या PDF', 'कोटेशन बनाएँ, PDF सेव करें और WhatsApp पर भेज दें।'],
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
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 px-5 sm:px-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold text-[#ff5a1f]">रोज़ कोटेशन और बिल भेजते हैं?</p>
            <h2 className="mt-3 max-w-xl text-3xl font-extrabold text-white md:text-4xl">कोटेशन से बिल, और रिमाइंडर, सब अपने-आप।</h2>
            <p className="mt-3 max-w-xl text-lg text-[#b9b5ad]">एक क्लिक में कोटेशन से इनवॉइस, WhatsApp पर फ़ॉलो-अप रिमाइंडर, और हर ग्राहक की जानकारी एक जगह।</p>
          </div>
          <Link href="/services/business-automation" className="shrink-0 rounded-full bg-[#ff5a1f] px-7 py-3.5 font-semibold text-white hover:bg-white hover:text-[#111]">बिज़नेस ऑटोमेशन देखें</Link>
        </div>
      </section>

      <section className="!py-14 md:!py-20 print:hidden">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <h2 className="text-3xl font-extrabold md:text-4xl">अक्सर पूछे जाने वाले सवाल</h2>
          <div className="mt-8 divide-y divide-black/15 border-y border-black/15">
            {faqs.map(([q, a]) => (
              <details key={q} name="faq" className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">{q}<span className="text-2xl text-[#ff5a1f] transition group-open:rotate-45">+</span></summary>
                <p className="mt-3 text-[#555]">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
