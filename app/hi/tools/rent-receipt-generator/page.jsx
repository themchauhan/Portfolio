import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import FreeBadges from '@/components/tools/FreeBadges'
import ShareTool from '@/components/tools/ShareTool'
import RentReceiptGenerator from '@/components/tools/RentReceiptGenerator'
import { SITE, pageMeta } from '@/lib/seo'

const URL = `${SITE}/hi/tools/rent-receipt-generator`
const EN_URL = `${SITE}/tools/rent-receipt-generator`

export const metadata = pageMeta({
  title: 'किराया रसीद (Rent Receipt) फ़्री में बनाएँ – HRA के लिए',
  description: 'HRA के लिए किराया रसीद 1 मिनट में बनाएँ। हर महीने की या पूरे साल की रसीद, मकान मालिक का PAN, प्रिंट या PDF। बिल्कुल फ़्री, कोई लॉगिन नहीं।',
  alternates: { canonical: URL, languages: { 'en-IN': EN_URL, 'hi-IN': URL } },
  openGraph: { locale: 'hi_IN' },
})

const faqs = [
  ['क्या ये किराया रसीद बनाने का टूल फ़्री है?', 'हाँ, बिल्कुल फ़्री है और जितनी चाहें उतनी रसीद बना सकते हैं। कोई लॉगिन या साइन-अप नहीं चाहिए, और आपकी जानकारी कहीं सेव नहीं होती।'],
  ['मकान मालिक का PAN कब ज़रूरी है?', 'अगर साल का किराया ₹1,00,000 से ज़्यादा है, तो ज़्यादातर कंपनियाँ HRA के लिए मकान मालिक का PAN माँगती हैं।'],
  ['क्या रसीद पर रेवेन्यू स्टैम्प लगाना ज़रूरी है?', 'अगर किराया कैश में दिया है और रसीद ₹5,000 से ज़्यादा की है, तो आमतौर पर रेवेन्यू स्टैम्प लगाकर मकान मालिक का साइन चाहिए। UPI, बैंक ट्रांसफ़र या चेक पर आमतौर पर ज़रूरत नहीं होती।'],
  ['रसीद अंग्रेज़ी में क्यों बनती है?', 'कंपनियों और HR में अंग्रेज़ी की रसीद सबसे आसानी से मान्य होती है, इसलिए रसीद अंग्रेज़ी में बनती है। फ़ॉर्म आप हिंदी में भर सकते हैं।'],
  ['PDF कैसे सेव करें?', '"प्रिंट करें / PDF सेव करें" दबाएँ और प्रिंटर में "Save as PDF" चुनें। फिर रसीद पर मकान मालिक से साइन करवा लें।'],
]

export default function Page() {
  return (
    <main className="prod bg-[#f4f1ec] text-[#111] antialiased">
      <JsonLd data={[
        { '@context': 'https://schema.org', '@type': 'WebApplication', name: 'किराया रसीद जनरेटर', inLanguage: 'hi', url: URL, applicationCategory: 'FinanceApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' }, author: { '@type': 'Person', name: 'Manish Chauhan', url: SITE } },
        { '@context': 'https://schema.org', '@type': 'FAQPage', inLanguage: 'hi', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
      ]} />

      <section className="!py-12 md:!py-20 print:!py-0">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="print:hidden">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-[15px] font-semibold text-[#ff5a1f]">फ़्री टूल</p>
              <Link href="/tools/rent-receipt-generator" hrefLang="en" className="text-sm font-semibold underline decoration-[#ff5a1f] underline-offset-4">Read in English</Link>
            </div>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.15] md:text-6xl">किराया रसीद बनाएँ <span className="block text-2xl text-[#555] md:text-3xl">Rent Receipt – HRA के लिए</span></h1>
            <p className="mt-5 max-w-2xl text-xl leading-relaxed text-[#444]">HRA क्लेम के लिए किराया रसीद 1 मिनट में बनाएँ। बिल्कुल फ़्री: कोई लॉगिन नहीं, कोई साइन-अप नहीं। बस जानकारी भरें और प्रिंट करें।</p>
            <FreeBadges lang="hi" className="mt-6" />
            <ShareTool lang="hi" className="mt-5" url={URL} title="फ़्री किराया रसीद जनरेटर" message="HRA के लिए किराया रसीद फ़्री में बनाएँ, 1 मिनट में, कोई साइन-अप नहीं:" />
          </div>
          <div className="mt-10 print:mt-0"><RentReceiptGenerator lang="hi" /></div>
        </div>
      </section>

      <section className="!py-14 md:!py-20 bg-white print:hidden">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <h2 className="text-3xl font-extrabold md:text-4xl">किराया रसीद कैसे बनाएँ</h2>
          <ol className="mt-8 grid gap-6 md:grid-cols-4">
            {[
              ['किरायेदार की जानकारी', 'अपना नाम, मकान नंबर और पूरा पता भरें।'],
              ['किराया और महीने', 'महीने का किराया, पेमेंट का तरीका और किस महीने से किस महीने तक।'],
              ['मकान मालिक', 'मकान मालिक का नाम, पता और PAN (अगर किराया ₹1 लाख/साल से ज़्यादा है)।'],
              ['प्रिंट या PDF', 'रसीद बनाएँ, प्रिंट करें या PDF सेव करें, फिर मकान मालिक से साइन करवाएँ।'],
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
            <p className="text-sm font-semibold text-[#ff5a1f]">मकान मालिक और PG वालों के लिए</p>
            <h2 className="mt-3 max-w-xl text-3xl font-extrabold text-white md:text-4xl">कई किरायेदारों का हिसाब रखते हैं? अपने-आप करवाइए।</h2>
            <p className="mt-3 max-w-xl text-lg text-[#b9b5ad]">RentCorp में हर किरायेदार, हर महीने का किराया, रसीद और रिमाइंडर एक जगह। किसका किराया बाकी है, तुरंत दिख जाता है।</p>
          </div>
          <Link href="/rentcorp" className="shrink-0 rounded-full bg-[#ff5a1f] px-7 py-3.5 font-semibold text-white hover:bg-white hover:text-[#111]">RentCorp देखें</Link>
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
          <p className="mt-6 text-sm text-[#777]">ये टूल रसीद बनाने में मदद करता है। HRA के नियम अपनी कंपनी से भी कन्फ़र्म कर लें।</p>
        </div>
      </section>
    </main>
  )
}
