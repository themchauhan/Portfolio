import { starterPriceText } from "./pricing";
// Data for the service pages: /services and /services/[service].
export const SITE = "https://themanishchauhan.in";

// product: key in lib/products.js, or null when the service is built on request.
export const services = {
  "cafe-pos-software": {
    slug: "cafe-pos-software",
    name: "Cafe & Restaurant POS Software",
    short: "Cafe POS",
    keyword: "cafe billing software",
    product: "cafecorp",
    businesses: "cafés, restaurants, bakeries and dhabas",
    pain: "handwritten order slips, calculator billing and stock counted by eye",
    benefits: [
      ["Quick GST billing", "Tap-to-bill with taxes, discounts, split payments and printable receipts."],
      ["Table and QR ordering", "Dine-in tables, takeaway and QR menus that send orders straight to the kitchen."],
      ["Kitchen display", "Orders show on a kitchen screen with timers, so no slip gets lost."],
      ["Inventory and recipes", "Ingredient stock reduces with every sale, with low-stock alerts."],
      ["Daily sales reports", "Best sellers, peak hours and closing reports in seconds."],
    ],
    faqs: (c) => [
      [`Which restaurant POS software is good for a cafe or restaurant in ${c}?`, `CafeCorp is a simple point-of-sale made for cafés and small restaurants. It handles billing, tables, kitchen orders, inventory and sales reports, and I can set it up for your outlet in ${c}.`],
      [`Can you set up billing software for my restaurant in ${c}?`, `Yes. I configure your menu, taxes and printers, then train your staff on a video call or in person on request.`],
      [`How much does restaurant POS software cost in ${c}?`, `CafeCorp plans start from a simple monthly fee per outlet, with a one-time setup. See the pricing page, or share your requirements for a clear quote after a free 20-minute call.`],
    ],
  },
  "clinic-management-software": {
    slug: "clinic-management-software",
    name: "Clinic Management Software",
    short: "Clinic software",
    keyword: "clinic management software",
    product: "clinicos",
    businesses: "clinics, polyclinics, dental clinics and diagnostic centres",
    pain: "paper appointment diaries, handwritten patient files and manual bill books",
    benefits: [
      ["Appointment scheduling", "Day and doctor-wise calendar with walk-ins, reschedules and no-show tracking."],
      ["Digital patient records", "Visit history, vitals, allergies and documents in one searchable profile."],
      ["e-Prescriptions", "Fast prescription templates with a drug list and printable or shareable output."],
      ["Billing and receipts", "Consultation and procedure bills with payments and dues tracked."],
      ["WhatsApp and SMS reminders", "Automatic appointment and follow-up reminders."],
    ],
    faqs: (c) => [
      [`What is the best software to manage a clinic in ${c}?`, `ClinicOs is built for small and mid-size clinics: appointments, patient records, prescriptions, billing and reminders in one system. I can set it up for your clinic in ${c}.`],
      [`Can I move my existing patient records to the software?`, `Yes. Existing patient lists in Excel can be imported during onboarding.`],
      [`Is patient data safe?`, `Access is role-based and data is stored in an encrypted cloud database. Details are shared during the demo.`],
    ],
  },
  "rent-management-software": {
    slug: "rent-management-software",
    name: "Rent & Property Management Software",
    short: "Rent software",
    keyword: "rent management software",
    product: "rentcorp",
    businesses: "landlords, property managers and shop or flat owners",
    pain: "rent notebooks, chasing tenants on WhatsApp and hand-made owner statements",
    benefits: [
      ["Properties and units", "Every building, flat, shop and room with its status, rent and occupancy."],
      ["Tenant profiles", "Contact details, ID documents, deposits and full payment history."],
      ["Rent collection", "Auto-generated monthly dues, receipts and an overdue list you can act on."],
      ["Smart reminders", "Friendly due-date and overdue reminders sent automatically."],
      ["Agreements and renewals", "Store leases and get alerted before they expire."],
    ],
    faqs: (c) => [
      [`How can I manage rent from many properties in ${c}?`, `RentCorp keeps every property, tenant, due date and payment in one place, with automatic reminders and clear owner reports.`],
      [`Can tenants pay online?`, `Online payment collection is on the roadmap. Today, payments are recorded and receipts are generated.`],
      [`Do you also set it up for me?`, `Yes. I import your existing tenant list and train you on a video call or in person on request.`],
    ],
  },
  "hostel-pg-management-software": {
    slug: "hostel-pg-management-software",
    name: "Hostel & PG Management Software",
    short: "Hostel & PG software",
    keyword: "hostel management software",
    product: "rentcorp",
    businesses: "hostels, PGs and paying-guest accommodations",
    pain: "rent registers, mess and deposit tracking in notebooks and daily reminder calls",
    benefits: [
      ["Rooms and beds", "Track every room and bed with occupancy and per-person rent."],
      ["Resident profiles", "ID documents, guardian contact, deposits and full payment history."],
      ["Monthly rent and dues", "Automatic dues, receipts and an overdue list."],
      ["Reminders", "Rent due and overdue reminders sent without calling anyone."],
      ["Owner reports", "Occupancy and collection reports for every month."],
    ],
    faqs: (c) => [
      [`Is there software to manage a PG or hostel in ${c}?`, `Yes. RentCorp supports rooms and beds with per-person rent, deposits, receipts and reminders, so you can run your PG or hostel in ${c} without notebooks.`],
      [`Can it handle multiple buildings?`, `Yes. You can manage several properties and see each one's occupancy and collections.`],
      [`How long does setup take?`, `Most hostels and PGs are set up within a few days once the resident list is ready.`],
    ],
  },
  "hotel-management-software": {
    slug: "hotel-management-software",
    name: "Hotel & Guest House Management Software",
    short: "Hotel software",
    keyword: "hotel management software",
    product: null,
    businesses: "hotels, guest houses, banquet halls and lodges",
    pain: "paper registers, manual room availability and slow check-in billing",
    benefits: [
      ["Room availability", "A live view of rooms booked, vacant and cleaning."],
      ["Check-in and check-out", "Fast guest registration and billing with printable invoices."],
      ["Bookings", "Track direct and phone bookings in one calendar."],
      ["Billing and GST", "Room, food and extra charges on a single invoice."],
      ["Daily reports", "Occupancy and revenue reports without manual totals."],
    ],
    faqs: (c) => [
      [`Can you build hotel management software for my property in ${c}?`, `Yes. Hotel and guest house software is built to your workflow. Share how you take bookings and bill guests, and you get a fixed quote after a free call.`],
      [`How long does a custom build take?`, `A focused first version usually takes 4 to 8 weeks, depending on the features you need.`],
      [`Can it connect to my website?`, `Yes. A simple booking enquiry form on your website can feed straight into the system.`],
    ],
  },
  "website-design": {
    slug: "website-design",
    name: "Website Design & Development",
    short: "Website design",
    keyword: "website design company",
    product: null,
    businesses: "shops, clinics, schools, builders, hotels and local businesses",
    pain: "word of mouth, an outdated website or only a Facebook page",
    metaTail: `Starter websites at ${starterPriceText()}, with WhatsApp and Google listing.`,
    cta: "Get a free quote",
    heroText: `Fast, mobile-friendly websites for shops, clinics, schools and local businesses, with a WhatsApp button and Google listing. Starter websites at ${starterPriceText()}, ready in 1–2 weeks.`,
    intro: (c) => `${c.context} Most customers in ${c.name}${c.alt ? ` (${c.alt})` : ""} now check a business on Google and on their phone before they call. I build fast, mobile-friendly websites for businesses in ${c.name} and nearby towns, with WhatsApp enquiries and a Google listing that bring in real leads.`,
    benefits: [
      [`Starter website: ${starterPriceText()}`, "Up to 3 pages, your logo and colours, WhatsApp and call buttons, Google Maps and Google Business Profile setup."],
      ["Mobile-first design", "Looks right and loads fast on the phones your customers use, not just on a laptop."],
      ["WhatsApp and call enquiries", "Every page makes it easy to message or call you, so visitors turn into enquiries."],
      ["Found on Google", "Clean SEO setup, your Google Business Profile and local keywords for your town."],
      ["Hindi or English", "Content in the language your customers prefer, written from the details you share."],
      ["Easy to update", "Change prices, photos and offers yourself, or let me handle it for ₹999 a month."],
    ],
    callout: {
      eyebrow: "Starter Website Pack",
      title: `A professional website for ${starterPriceText()}, ready in 1–2 weeks.`,
      text: "Up to 3 pages, WhatsApp button, Google Maps and Google Business Profile setup. Need more? Get an instant estimate with the website cost calculator.",
      href: "/pricing",
      label: "See the Starter Pack",
    },
    faqs: (c) => [
      [`How much does a website cost in ${c}?`, `A Starter website (up to 3 pages, WhatsApp button and Google listing) is ${starterPriceText()}. A 5-page business website starts around ₹15,000, and online stores from about ₹35,000. Domain and hosting are paid separately.`],
      [`How long does it take to make a website?`, `A Starter website is usually ready in 1 to 2 weeks after you share your details and photos. Bigger websites take 3 to 6 weeks.`],
      [`Will my website show on Google?`, `Yes. I set up basic SEO, your Google Business Profile and Google Maps location, so people searching in ${c} can find you.`],
      [`Can I update the website myself?`, `Yes. You can edit text, prices and photos yourself, or I can update it for you with the ₹999/month maintenance plan.`],
    ],
  },
  "business-automation": {
    slug: "business-automation",
    name: "Business Automation Services",
    short: "Automation",
    keyword: "business automation services",
    product: null,
    businesses: "shops, distributors, factories, schools, accountants and offices",
    pain: "paper registers, repeated data entry in Excel and reports built by hand",
    benefits: [
      ["Invoice and bill processing", "Invoices are read automatically and pushed to your sheet or accounting tool."],
      ["Digital forms and approvals", "Replace printed forms and signatures with online forms and approval chains."],
      ["Registers to dashboards", "Stock, attendance and sales registers become live tables and reports."],
      ["Email and WhatsApp workflows", "Reminders, confirmations and follow-ups sent the moment something happens."],
      ["Tool integrations", "Make Excel, Google Sheets, Tally, CRMs and websites talk to each other."],
    ],
    faqs: (c) => [
      [`Which tasks can be automated for my business in ${c}?`, `Typically data entry from invoices and registers, approvals, reminders, and recurring reports. Tell me one task your team hates and I will suggest how to automate it.`],
      [`I am not technical. Can I still use it?`, `Yes. You keep working the way you like; I handle the technical side and keep the result simple for your team.`],
      [`How long does an automation project take?`, `Most small automations go live in 1 to 3 weeks.`],
    ],
  },
};

// Towns served, shown as plain text on the service pages (one page per service, no per-town pages,
// so Google doesn't see near-duplicates). Old /services/x/town and /locations/town URLs redirect (next.config.js).
export const serviceAreas = [
  ["Haryana", ["Rewari", "Narnaul", "Mahendergarh (Mahendragarh)", "Gurgaon (Gurugram)", "Pataudi", "Bhiwani", "Ambala", "Dharuhera", "Bawal", "Kosli", "Jhajjar", "Manesar", "Rohtak", "Charkhi Dadri", "Farrukhnagar"]],
  ["Rajasthan", ["Jaipur", "Bhiwadi", "Alwar", "Neemrana", "Behror", "Kotputli", "Chomu", "Dausa"]],
  ["Chandigarh & Punjab", ["Chandigarh", "Mohali (SAS Nagar)"]],
];

export const serviceList = Object.values(services);

// Shared social preview image (public/og-image.png, 1200x630).
export const OG_IMAGE = { url: `${SITE}/og-image.png`, width: 1200, height: 630, alt: "Manish Chauhan – websites, web apps and business software" };

// Builds page metadata with matching Open Graph / Twitter tags, so shared links
// show the page's own title, description, URL and preview image.
export function pageMeta({ title, description, alternates, openGraph, ...rest }) {
  const plainTitle = typeof title === "object" && title ? title.absolute ?? title.default : title;
  return {
    title,
    description,
    alternates,
    ...rest,
    openGraph: {
      type: "website",
      siteName: "Manish Chauhan",
      locale: "en_IN",
      url: alternates?.canonical,
      title: plainTitle,
      description,
      images: [OG_IMAGE],
      ...openGraph,
    },
    twitter: { card: "summary_large_image", title: plainTitle, description, images: [OG_IMAGE.url] },
  };
}
