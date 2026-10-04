// Data for the local-SEO landing pages: /services/[service]/[city] and /locations/[city].
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
      [`Which POS software is good for a cafe in ${c}?`, `CafeCorp is a simple point-of-sale made for cafés and small restaurants. It handles billing, tables, kitchen orders, inventory and sales reports, and I can set it up for your outlet in ${c}.`],
      [`Can you set up billing software for my restaurant in ${c}?`, `Yes. I configure your menu, taxes and printers, then train your staff on a video call or in person on request.`],
      [`How much does cafe billing software cost in ${c}?`, `Pricing depends on outlets and features. Share your requirements and you get a clear quote after a free 20-minute call.`],
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

// nearby: slugs of neighbouring towns, used for internal linking.
export const cities = {
  rewari: { slug: "rewari", name: "Rewari", context: "Rewari in southern Haryana is a busy trading town with the Dharuhera and Bawal industrial areas close by.", nearby: ["dharuhera", "bawal", "kosli", "narnaul", "jhajjar"] },
  mahendergarh: { slug: "mahendergarh", name: "Mahendergarh", alt: "Mahendragarh", context: "Mahendergarh (also spelled Mahendragarh) serves a wide area of southern Haryana, with local shops, schools and clinics supporting the surrounding villages.", nearby: ["narnaul", "rewari", "charkhi-dadri", "bhiwani", "kosli"] },
  narnaul: { slug: "narnaul", name: "Narnaul", context: "Narnaul is the district headquarters of Mahendragarh district, with a steady mix of retail, education and healthcare businesses.", nearby: ["mahendergarh", "rewari", "kosli", "charkhi-dadri", "bhiwani"] },
  gurgaon: { slug: "gurgaon", name: "Gurgaon", alt: "Gurugram", context: "Gurgaon (Gurugram) is Haryana's corporate hub, with a dense mix of cafés, clinics, hotels and rental housing.", nearby: ["manesar", "pataudi", "farrukhnagar", "dharuhera", "jhajjar"] },
  pataudi: { slug: "pataudi", name: "Pataudi", context: "Pataudi in Gurugram district is a growing town where local businesses are moving from paper registers to simple software.", nearby: ["gurgaon", "farrukhnagar", "manesar", "jhajjar", "rewari"] },
  bhiwani: { slug: "bhiwani", name: "Bhiwani", context: "Bhiwani in western Haryana has an active market of traders, schools, clinics and small manufacturers.", nearby: ["charkhi-dadri", "rohtak", "mahendergarh", "jhajjar", "narnaul"] },
  dharuhera: { slug: "dharuhera", name: "Dharuhera", context: "Dharuhera is an industrial town in Rewari district, with factories, suppliers and the shops and eateries that serve them.", nearby: ["rewari", "bawal", "manesar", "gurgaon", "farrukhnagar"] },
  bawal: { slug: "bawal", name: "Bawal", context: "Bawal is an industrial area in Rewari district, where manufacturers and their suppliers need clean, paperless processes.", nearby: ["rewari", "dharuhera", "kosli", "narnaul", "jhajjar"] },
  kosli: { slug: "kosli", name: "Kosli", context: "Kosli, in Rewari district, is a market town for farmers, traders and local services.", nearby: ["rewari", "jhajjar", "rohtak", "narnaul", "bawal"] },
  jhajjar: { slug: "jhajjar", name: "Jhajjar", context: "Jhajjar is a district headquarters near Delhi NCR, with a growing set of schools, clinics, shops and hospitality businesses.", nearby: ["rohtak", "bhiwani", "gurgaon", "kosli", "charkhi-dadri"] },
  manesar: { slug: "manesar", name: "Manesar", context: "Manesar in Gurugram district is an industrial and residential hub with many factories, hostels, PGs and eateries.", nearby: ["gurgaon", "dharuhera", "pataudi", "farrukhnagar", "bawal"] },
  rohtak: { slug: "rohtak", name: "Rohtak", context: "Rohtak is a large city in Haryana with a strong base of colleges, hospitals, hostels and retail.", nearby: ["jhajjar", "bhiwani", "charkhi-dadri", "kosli", "gurgaon"] },
  "charkhi-dadri": { slug: "charkhi-dadri", name: "Charkhi Dadri", context: "Charkhi Dadri is a district headquarters in Haryana with local trade, schools and healthcare serving nearby villages.", nearby: ["bhiwani", "mahendergarh", "jhajjar", "rohtak", "narnaul"] },
  farrukhnagar: { slug: "farrukhnagar", name: "Farrukhnagar", context: "Farrukhnagar in Gurugram district is a historic town where small businesses are going digital.", nearby: ["pataudi", "gurgaon", "manesar", "jhajjar", "dharuhera"] },
};

export const serviceList = Object.values(services);
export const cityList = Object.values(cities);

export const pathFor = (serviceSlug, citySlug) => `/services/${serviceSlug}/${citySlug}`;
