import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Manish Chauhan - Full Stack Web Developer & Freelancer',
    template: '%s | Manish Chauhan - Web Developer'
  },
  description: 'Manish Chauhan is a professional full-stack web developer with 7+ years of experience. Specializing in React, Next.js, Node.js, and modern web technologies. Available for freelance web development projects worldwide.',
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
    locale: 'en_US',
    url: 'https://manishchauhan.dev',
    siteName: 'Manish Chauhan - Web Developer',
    title: 'Manish Chauhan - Full Stack Web Developer & Freelancer',
    description: 'Professional full-stack web developer with 7+ years of experience. Specializing in React, Next.js, Node.js, and modern web technologies. Available for freelance projects worldwide.',
    images: [
      {
        url: '/manish.png',
        width: 1200,
        height: 630,
        alt: 'Manish Chauhan - Full Stack Web Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manish Chauhan - Full Stack Web Developer & Freelancer',
    description: 'Professional full-stack web developer with 7+ years of experience. Specializing in React, Next.js, Node.js, and modern web technologies.',
    images: ['/manish.png'],
    creator: '@manishchauhan',
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
  alternates: {
    canonical: 'https://manishchauhan.dev',
  },
  category: 'technology',
}

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Manish Chauhan",
    "jobTitle": "Full Stack Web Developer",
    "description": "Professional full-stack web developer with 7+ years of experience in React, Next.js, Node.js, and modern web technologies.",
    "url": "https://manishchauhan.dev",
    "image": "https://manishchauhan.dev/manish.png",
    "sameAs": [
      "https://linkedin.com/in/manishchauhan",
      "https://github.com/manishchauhan"
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
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://manishchauhan.dev" />
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
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
