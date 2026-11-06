// Short, answer-first FAQs for pages that don't have their own FAQ section.
// Shown on the page AND as FAQPage structured data (Google requires the markup to match visible text).
// Facts and prices come from the same data as the pages, so answers never go out of date.
import { getExperienceText } from '@/utils/experience'
import { inr, productPlans, quoteRates, starterPack, setupFees, STARTER_OFFER_ENDS_LABEL } from '@/lib/pricing'
import { productList } from '@/lib/products'
import { serviceList } from '@/lib/seo'
import { clientCount } from '@/lib/clients'

const from = (slug) => inr(Math.min(...productPlans[slug].map((p) => p.price)))
const base = (id) => inr(quoteRates.types.find((t) => t.id === id).base)
const starter = () => `${inr(starterPack.price)}${starterPack.offerActive ? ` (introductory price until ${STARTER_OFFER_ENDS_LABEL})` : ''}`
const productLine = () => productList.map((p) => `${p.name} (${p.tag.toLowerCase()}, from ${from(p.slug)}/month)`).join(', ')

export const pageFaqs = {
  home: () => [
    ['Who is Manish Chauhan?', `Manish Chauhan is a full stack web developer in India with ${getExperienceText()} of experience. He builds websites, web apps and simple business software for small businesses, and works as a white-label developer for design and marketing agencies.`],
    ['How much does a website cost?', `A starter website of up to 3 pages with a WhatsApp button and Google listing is ${starter()}. A business website of about 5 pages starts at ${base('business')}, an online store at ${base('ecommerce')} and a custom web app at ${base('webapp')}. Domain and hosting are extra.`],
    ['What software do you offer for small businesses?', `Ready-made software with monthly plans: ${productLine()}. Every plan starts with a free demo.`],
    ['Do you work with businesses outside Haryana?', 'Yes. Setup, training and support happen online, so I work with businesses anywhere in India, and with agencies in the US, UK and Europe.'],
    ['How do I get started?', 'Message me on WhatsApp at +91 70150 66237 or use the contact form. You get a reply within one working day and a free 20-minute call to understand what you need.'],
  ],
  about: () => [
    ['How much experience does Manish Chauhan have?', `${getExperienceText()}. He started his professional career in March 2018 and has been building websites, CMS platforms and web apps since.`],
    ['Which companies has he built websites for?', `As part of the Clear Digital team, he has built and worked on websites for ${clientCount}+ companies, including Splunk, Cohesity, Socure, Sift and Digimarc.`],
    ['What is his education?', 'Master of Computer Applications (MCA) from Punjab Technical University, and a Bachelor of Information Technology (Hons.) from Kurukshetra University.'],
    ['Does he take freelance projects?', 'Yes. He takes freelance website and software projects for businesses, and white-label development work for agencies.'],
    ['Does he teach?', 'Yes. Since 2024 he has taught coding and AI to school students, first in Livermore, California, and now live online for students in India.'],
  ],
  projects: () => [
    ['What kind of websites has Manish built?', `Marketing websites and web platforms for ${clientCount}+ companies in cybersecurity, data and cloud, healthcare, fintech and industry, mostly as a developer in the Clear Digital team.`],
    ['Which technologies does he use?', 'Next.js, React, Node.js, WordPress, Drupal, Contentful, Tailwind CSS, MUI, Bootstrap and HubSpot, among others, chosen to suit each project.'],
    ['Can you build a similar website for my business?', `Yes. Business websites start at ${base('business')}, and a starter website is ${starter()}. Use the free website cost calculator for an instant estimate.`],
  ],
  products: () => [
    ['What software products are available?', `${productLine()}.`],
    ['Is there a free demo?', 'Yes. Every product starts with a free demo so you can see it working for your business before paying.'],
    ['What does the one-time setup fee cover?', `Setting up your account, importing your existing data and training your staff. Setup fees: ${productList.filter((p) => setupFees[p.slug]).map((p) => `${p.name} ${inr(setupFees[p.slug])}`).join(', ')}.`],
    ['Is there a discount for paying yearly?', 'Yes. Pay yearly and you get 2 months free: you pay for 10 months instead of 12.'],
  ],
  services: () => [
    ['What services do you offer?', `${serviceList.map((s) => s.name).join(', ')}.`],
    ['Do you work outside my town?', 'Yes. Everything is set up and supported online, so I work with businesses anywhere in India, and can visit in person on request.'],
    ['How does a project work?', 'A free 20-minute call, then a clear plan with a fixed price, then setup and training, then ongoing support whenever you need a change.'],
    ['How much do your services cost?', `Websites start at ${base('landing')} for a landing page and ${starter()} for a starter website. Business automation starts at ${base('automation')}. Ready-made software starts at ${from('rentcorp')}/month.`],
  ],
  tools: () => [
    ['Are these tools really free?', 'Yes. All tools are free to use, with no sign-up and no watermark.'],
    ['Is my data safe?', 'Yes. Everything you type stays in your own browser; nothing is uploaded or saved on a server.'],
    ['Can I save the document as PDF?', 'Yes. Use "Print / Save as PDF" to print it or save it as a PDF on your phone or computer.'],
    ['Are the tools available in Hindi?', 'Yes. The Rent Receipt Generator, Salary Slip Generator and Quotation Maker are also available in Hindi.'],
  ],
  blog: () => [
    ['What does this blog cover?', 'Practical guides for small businesses and employees in India: website costs, GST invoices, salary slips, rent receipts for HRA, quotations, PG and hostel management, and using AI and SEO to get found online.'],
    ['Who writes these guides?', `Manish Chauhan, a full stack web developer with ${getExperienceText()} of experience who builds websites and business software for small businesses.`],
    ['Is the tax and GST information official advice?', 'No. The guides are general information to help you understand the basics. Confirm tax and GST rules for your case with your accountant.'],
  ],
  contacts: () => [
    ['How can I contact Manish Chauhan?', 'Email manish@themanishchauhan.in, message on WhatsApp at +91 70150 66237, or use the contact form on this page.'],
    ['How quickly will I get a reply?', 'Within one working day.'],
    ['Is the first consultation free?', 'Yes. The first 20-minute call is free, and you get a clear plan with a fixed-price quote afterwards.'],
    ['Which languages do you work in?', 'English and Hindi.'],
  ],
  academics: () => [
    ['What is Manish Chauhan\'s highest qualification?', 'Master of Computer Applications (MCA), Punjab Technical University (2016–2018).'],
    ['Where did he do his graduation?', 'Bachelor of Information Technology (Hons.), Kurukshetra University (2013–2016).'],
  ],
}
