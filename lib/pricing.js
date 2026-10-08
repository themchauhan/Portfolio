// Product prices. Everything on /pricing and the product pages reads from this file.
export const WHATSAPP_NUMBER = "917015066237"; // country code + number, no "+"

export const waLink = (message) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const PRICING_NOTE = "Pay monthly, or yearly and get 2 months free. Every plan starts with a free demo.";

// Yearly billing = this many months (12 - 2 free months).
export const YEARLY_MONTHS = 10;

// One-time setup per client: onboarding, data import and staff training.
export const setupFees = { clinicos: 3999, rentcorp: 1499, cafecorp: 2499 };

// Shown as "Included in every plan" – only list what you actually deliver.
export const includedInEveryPlan = [
  ["Personal setup", "I set up your account myself, configured for how you work."],
  ["Your data imported", "Existing patients, tenants or menu moved in for you."],
  ["Staff training", "Hands-on training over video call, in Hindi or English."],
  ["Same-day WhatsApp support", "Guaranteed same-day reply, straight from the person who built it."],
  ["Small tweaks on request", "Minor changes to fit your workflow, at no extra cost."],
  ["Free updates", "New features and improvements as they ship."],
];

// Comparison table: [row, ours, typical large software, paper / Excel]. Keep claims general and true.
export const comparisonRows = [
  ["Ready to use", "In 1–2 days", "Often 1–3 weeks", "—"],
  ["Learning time", "Under an hour", "Days of training", "None, but slow forever"],
  ["Everyday use", "Simple screens, only what you need", "Many menus and modules", "Registers and repeated entries"],
  ["Speed", "Fast on any phone or laptop", "Can feel heavy", "Searching pages by hand"],
  ["Support", "Same-day WhatsApp reply, guaranteed", "Tickets or call centre", "None"],
  ["Your existing data", "Imported for you", "Often extra cost", "Stays on paper"],
  ["Changes for your workflow", "Small tweaks on request", "Rarely possible", "—"],
  ["Pricing", "Clear, listed on this page", "Often ‘contact sales’ + add-ons", "Free, but costs hours"],
];

// Extra wording after "/month" for products priced per location.
export const priceUnit = { cafecorp: "per outlet" };

// Monthly plans per product (keys match lib/products.js)
export const productPlans = {
  clinicos: [
    { name: "Starter", price: 1999, for: "1 doctor clinic", features: ["Appointments & patient records", "e-Prescriptions", "Billing & receipts", "1 staff login"] },
    { name: "Business", price: 4499, for: "Polyclinics up to 5 doctors", popular: true, features: ["Everything in Starter", "WhatsApp/SMS reminders", "Clinic reports", "Up to 5 staff logins"] },
    { name: "Multi-branch", price: 8999, for: "Clinic chains", features: ["Everything in Business", "Multiple branches", "Central reporting", "Priority support"] },
  ],
  rentcorp: [
    { name: "Starter", price: 799, for: "Up to 10 units", features: ["Properties & tenants", "Monthly dues & receipts", "Overdue list", "1 login"] },
    { name: "Business", price: 1499, for: "Up to 50 units / beds", popular: true, features: ["Everything in Starter", "Automatic reminders", "Agreements & renewals", "Hostel & PG beds"] },
    { name: "Pro", price: 2999, for: "Property managers", features: ["Everything in Business", "Unlimited units", "Owner reports", "Priority support"] },
  ],
  cafecorp: [
    { name: "Starter", price: 1499, for: "Small café or takeaway", features: ["Quick GST billing", "Menu & taxes", "Daily sales report", "1 billing counter"] },
    { name: "Business", price: 2799, for: "Dine-in cafés & restaurants", popular: true, features: ["Everything in Starter", "Table & QR ordering", "Kitchen display", "Inventory & recipes"] },
    { name: "Multi-outlet", price: 5499, for: "Chains & franchises", features: ["Everything in Business", "Multiple outlets", "Central reports", "Priority support"] },
  ],
};

// PLACEHOLDER quote-estimator rates for freelance work (₹). The estimator shows a
// range around the calculated total; you send the final quotation after review.
export const quoteRates = {
  types: [
    { id: "landing", name: "Landing page", desc: "One page for a product, offer or event", base: 7999, includedPages: 1 },
    { id: "business", name: "Business website", desc: "Home, about, services, contact…", base: 14999, includedPages: 5 },
    { id: "ecommerce", name: "Online store", desc: "Products, cart and online payments", base: 34999, includedPages: 6 },
    { id: "webapp", name: "Custom web app", desc: "Dashboards, portals, internal tools", base: 49999, includedPages: 6 },
    { id: "automation", name: "Business automation", desc: "Automate a paperwork or Excel process", base: 9999, includedPages: 0 },
  ],
  extraPage: 1500,
  features: [
    { id: "cms", name: "Edit content yourself (CMS)", price: 4000 },
    { id: "blog", name: "Blog", price: 3000 },
    { id: "booking", name: "Appointment / booking system", price: 6000 },
    { id: "payments", name: "Online payments (UPI, cards)", price: 5000 },
    { id: "login", name: "User login & accounts", price: 8000 },
    { id: "whatsapp", name: "WhatsApp chat & lead forms", price: 1500 },
    { id: "seo", name: "SEO setup + Google Business Profile", price: 3000 },
    { id: "multilang", name: "Hindi + English (2 languages)", price: 5000 },
    { id: "branding", name: "Logo & brand design", price: 4000 },
    { id: "content", name: "Content writing (per page)", price: 800, perPage: true },
    { id: "integration", name: "Integration (Tally, Sheets, CRM…)", price: 6000 },
  ],
  rushMultiplier: 1.25, // delivery in half the usual time
  maintenancePerMonth: 1500,
  rangeLow: 0.9,
  rangeHigh: 1.15,
};

export const inr = (n) => `₹${new Intl.NumberFormat("en-IN").format(n)}`;
