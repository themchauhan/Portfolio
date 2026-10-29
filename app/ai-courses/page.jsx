import AiCoursesPage, { AI_COURSES_URL } from '@/components/AiCoursesPage'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'AI Classes for School Students (Class 6–12) in Rewari & Online',
  description: 'Weekend AI classes for Class 6–12 students: build games, apps and chatbots, learn how AI works and use it the right way for studies. Offline in Rewari and online. Free demo class.',
  alternates: { canonical: AI_COURSES_URL.en, languages: { 'en-IN': AI_COURSES_URL.en, 'hi-IN': AI_COURSES_URL.hi } },
})

export default function Page() {
  return <AiCoursesPage lang="en" />
}
