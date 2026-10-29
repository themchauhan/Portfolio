import AiCoursesPage, { AI_COURSES_URL } from '@/components/AiCoursesPage'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'स्कूल के बच्चों के लिए AI क्लास (कक्षा 6–12) – रेवाड़ी और ऑनलाइन',
  description: 'कक्षा 6–12 के बच्चों के लिए वीकेंड AI क्लास: गेम, ऐप और चैटबॉट बनाना, AI कैसे काम करता है, और पढ़ाई में AI का सही इस्तेमाल। रेवाड़ी में ऑफ़लाइन और ऑनलाइन। फ़्री डेमो क्लास।',
  alternates: { canonical: AI_COURSES_URL.hi, languages: { 'en-IN': AI_COURSES_URL.en, 'hi-IN': AI_COURSES_URL.hi } },
  openGraph: { locale: 'hi_IN' },
})

export default function Page() {
  return <AiCoursesPage lang="hi" />
}
