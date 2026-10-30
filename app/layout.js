import './globals.css'
import { Inter, Bricolage_Grotesque } from 'next/font/google'
import { getExperienceText } from '../utils/experience'
import Script from 'next/script'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { OG_IMAGE, SITE, serviceList } from '@/lib/seo'
import { productList } from '@/lib/products'
import { productPlans, starterPack, quoteRates } from '@/lib/pricing'
import { aiFees } from '@/lib/aiCourses'

// Google Analytics 4 (property: themanishchauhan.in, stream: portfolio-web)
const GA_ID = 'G-C73CLLFRK8'

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

// Services and products for the Person structured data, built from the same data as the pages.
const inrOffer = (price) => ({ "price": String(price), "priceCurrency": "INR" })
const minWebsitePrice = Math.min(...quoteRates.types.map((t) => t.base))
const makesOffer = [
  {
    "@type": "Offer", ...inrOffer(starterPack.price), "url": `${SITE}/pricing`,
    "itemOffered": { "@type": "Service", "name": starterPack.name, "description": `${starterPack.tagline} ${starterPack.includes.join(", ")}.`, "areaServed": "IN" },
  },
  {
    "@type": "Offer", "url": `${SITE}/tools/website-cost-calculator`,
    "priceSpecification": { "@type": "PriceSpecification", "minPrice": String(minWebsitePrice), "priceCurrency": "INR" },
    "itemOffered": { "@type": "Service", "name": "Website development", "description": "Business websites, landing pages, online stores and custom web apps built with Next.js, React or WordPress.", "areaServed": "IN" },
  },
  {
    "@type": "Offer", "url": `${SITE}/agencies`,
    "itemOffered": { "@type": "Service", "name": "Freelance development for agencies", "description": "White-label Next.js, React and custom WordPress development for design and marketing agencies.", "areaServed": ["United States", "United Kingdom", "Europe"] },
  },
  {
    "@type": "Offer", "url": `${SITE}/ai-courses`,
    "priceSpecification": { "@type": "PriceSpecification", "minPrice": String(Math.min(...aiFees.junior)), "maxPrice": String(Math.max(...aiFees.senior)), "priceCurrency": "INR" },
    "itemOffered": { "@type": "Service", "name": "AI classes for school students (Classes 6–12)", "description": "Weekend AI classes from basics to advanced, offline in Rewari and online.", "areaServed": "IN" },
  },
  ...serviceList.map((sv) => ({
    "@type": "Offer", "url": `${SITE}/services/${sv.slug}`,
    "itemOffered": { "@type": "Service", "name": sv.name, "description": `${sv.name} for ${sv.businesses}.`, "areaServed": "IN" },
  })),
  ...productList.map((pr) => {
    const prices = productPlans[pr.slug].map((p) => p.price)
    return {
      "@type": "Offer", "url": `${SITE}/${pr.slug}`,
      "priceSpecification": { "@type": "UnitPriceSpecification", "price": String(Math.min(...prices)), "priceCurrency": "INR", "unitText": "MONTH" },
      "itemOffered": { "@type": "SoftwareApplication", "name": pr.name, "applicationCategory": "BusinessApplication", "operatingSystem": "Web browser", "description": pr.tag, "url": `${SITE}/${pr.slug}` },
    }
  }),
]

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
    "email": "manish@themanishchauhan.in",
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
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "WordPress",
      "Headless WordPress",
      "PHP",
      "Tailwind CSS",
      "Technical SEO",
      "Core Web Vitals",
      "HubSpot",
      "Business Automation",
      "Artificial Intelligence in Education"
    ],
    // Person can't have `offers` in schema.org; `makesOffer` is the valid property.
    "makesOffer": makesOffer
  }

  return (
    <html lang="en" className={`${inter.className} ${display.variable}`}>
      <head>
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
        {/* Site-wide header and footer: pages only render their own content */}
        <Nav />
        {children}
        <Footer />
        <WhatsAppButton />
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  )
}
