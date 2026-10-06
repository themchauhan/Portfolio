import './globals.css'
import { Inter, Bricolage_Grotesque } from 'next/font/google'
import { getExperienceText } from '../utils/experience'
import { OG_IMAGE } from '@/lib/seo'

const inter = Inter({ subsets: ['latin'] })
const display = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-display', display: 'swap' })
const experience = getExperienceText()

export const metadata = {
  metadataBase: new URL('https://themanishchauhan.in'),
  title: {
    default: 'Manish Chauhan - Full Stack Web Developer & Freelancer',
    template: '%s | Manish Chauhan'
  },
  description: `Full stack developer with ${experience} of experience building websites, web apps and business software. Now building ClinicOs, RentCorp and CafeCorp.`,
  keywords: [
    'Manish Chauhan',
    'web developer',
    'full stack developer',
    'freelance web developer',
    'React developer',
    'Next.js developer',
    'Node.js developer',
    'web design',
    'website development',
    'frontend developer',
    'backend developer',
    'JavaScript developer',
    'responsive web design',
    'custom website development',
    'web application development',
    'freelance developer India',
    'remote web developer',
    'portfolio website',
    'web development services',
    'small business website'
  ],
  authors: [{ name: 'Manish Chauhan' }],
  creator: 'Manish Chauhan',
  publisher: 'Manish Chauhan',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://themanishchauhan.in',
    siteName: 'Manish Chauhan',
    title: 'Manish Chauhan - Full Stack Web Developer & Freelancer',
    description: `Full stack developer with ${experience} of experience building websites, web apps and business software.`,
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manish Chauhan - Full Stack Web Developer & Freelancer',
    description: `Full stack developer with ${experience} of experience building websites, web apps and business software.`,
    images: [OG_IMAGE.url],
  },
  category: 'technology',
}

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Manish Chauhan",
    "jobTitle": "Full Stack Web Developer",
    "description": `Professional full-stack web developer with ${experience} of experience in React, Next.js, Node.js, and modern web technologies.`,
    "url": "https://themanishchauhan.in",
    "image": "https://themanishchauhan.in/manish-portrait.jpg",
    "sameAs": [
      "https://www.linkedin.com/in/themchauhan"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "email": "mani7015066@gmail.com",
    "telephone": "+91-7015066237",
    "worksFor": {
      "@type": "Organization",
      "name": "Clear Digital"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Punjab Technical University"
    },
    "knowsAbout": [
      "Web Development",
      "React",
      "Next.js",
      "Node.js",
      "JavaScript",
      "Full Stack Development",
      "Frontend Development",
      "Backend Development",
      "Web Design",
      "Responsive Design"
    ],
    "offers": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Web Development Services",
        "description": "Professional web development services including custom websites, web applications, and digital solutions for businesses worldwide."
      }
    }
  }

  return (
    <html lang="en" className={`${inter.className} ${display.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="msapplication-TileColor" content="#1e40af" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Manish Chauhan" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "WebSite", name: "Manish Chauhan", url: "https://themanishchauhan.in" }) }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
