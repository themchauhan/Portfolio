// Single source of truth for the product pages.
// `appUrl` is where the "Login" button goes. Point these at the Vercel subdomains
// once they are live (see the setup notes).
export const products = {
  clinicos: {
    slug: "clinicos",
    name: "ClinicOs",
    tag: "Clinic management software",
    headline: "Run your clinic without the paper registers.",
    summary:
      "Appointments, patient records, prescriptions and billing in one simple system, built for small and mid-size clinics.",
    audience: "Clinics, polyclinics, dental and diagnostic centres",
    appUrl: "https://clinicos.themanishchauhan.in",
    accent: { bg: "bg-teal-600", hover: "hover:bg-teal-700", text: "text-teal-700", soft: "bg-teal-50", border: "border-teal-600", bar: "bg-teal-600", band: "bg-teal-900", bandText: "text-teal-100" },
    replaces: ["Paper appointment diary", "Handwritten patient files", "Manual bill books", "Reminder calls by hand"],
    features: [
      ["📅", "Appointment scheduling", "Day and doctor-wise calendar with walk-ins, reschedules and no-show tracking."],
      ["🗂️", "Digital patient records", "Visit history, vitals, allergies and documents in one searchable profile."],
      ["💊", "e-Prescriptions", "Fast prescription templates with a drug list and printable or shareable output."],
      ["🧾", "Billing & receipts", "Consultation, procedure and pharmacy bills with payments and dues tracked."],
      ["💬", "Automated reminders", "Appointment and follow-up reminders over WhatsApp, SMS or email."],
      ["📊", "Clinic reports", "Daily collections, doctor-wise revenue and patient footfall at a glance."],
    ],
    mock: {
      title: "Today at Sunrise Clinic",
      stats: [["Appointments", "42"], ["Waiting", "6"], ["Collected", "₹38,400"], ["Pending bills", "9"]],
      columns: ["Patient", "Doctor", "Time", "Status"],
      rows: [
        ["Anita Verma", "Dr. Rao", "10:00", "In consultation"],
        ["Rohit Singh", "Dr. Mehta", "10:15", "Waiting"],
        ["Kavita Joshi", "Dr. Rao", "10:30", "Booked"],
        ["Imran Khan", "Dr. Mehta", "10:45", "Completed"],
      ],
    },
    faqs: [
      ["Can multiple doctors and branches use it?", "Yes. The system is designed around multiple doctors, staff roles and, later, multiple branches."],
      ["Is patient data secure?", "Access is role-based and data is stored in an encrypted cloud database. Details are shared during the demo."],
      ["Can I move my existing records?", "Yes. Existing patient lists from Excel can be imported during onboarding."],
    ],
  },
  rentcorp: {
    slug: "rentcorp",
    name: "RentCorp",
    tag: "Property & rental management",
    headline: "Collect rent on time. Track every property.",
    summary:
      "Manage properties, tenants, agreements and rent collection in one place, with automatic reminders and clear owner reports.",
    audience: "Landlords, property managers, PG and hostel owners",
    appUrl: "https://rentcorp.themanishchauhan.in",
    accent: { bg: "bg-indigo-600", hover: "hover:bg-indigo-700", text: "text-indigo-700", soft: "bg-indigo-50", border: "border-indigo-600", bar: "bg-indigo-600", band: "bg-indigo-900", bandText: "text-indigo-100" },
    replaces: ["Rent notebooks and Excel sheets", "Chasing tenants on WhatsApp", "Paper agreements", "Hand-made owner statements"],
    features: [
      ["🏢", "Properties & units", "Every building, flat and room with its status, rent and occupancy."],
      ["👥", "Tenant profiles", "Contact details, ID documents, deposits and full payment history."],
      ["💰", "Rent collection", "Auto-generated monthly dues, receipts and an overdue list you can act on."],
      ["🔔", "Smart reminders", "Friendly due-date and overdue reminders sent automatically."],
      ["📄", "Agreements & renewals", "Store leases and get alerted before they expire."],
      ["🛠️", "Maintenance requests", "Tenants raise issues, you assign and track them to completion."],
    ],
    mock: {
      title: "Rent overview - October",
      stats: [["Properties", "18"], ["Occupancy", "94%"], ["Collected", "₹4.2L"], ["Overdue", "5"]],
      columns: ["Tenant", "Unit", "Due", "Status"],
      rows: [
        ["Sanjay Gupta", "A-101", "₹18,000", "Paid"],
        ["Neha Kapoor", "B-204", "₹22,500", "Due in 3 days"],
        ["Arjun Das", "C-012", "₹12,000", "Overdue"],
        ["Pooja Nair", "A-305", "₹16,500", "Paid"],
      ],
    },
    faqs: [
      ["Does it work for PGs and hostels?", "Yes. Units can be rooms or beds, with per-person rent and deposits."],
      ["Can owners see their own statements?", "Owner logins with read-only reports are planned for property managers handling many owners."],
      ["Can tenants pay online?", "Online payment collection is on the roadmap. Today, payments are recorded and receipts generated."],
    ],
  },
  cafecorp: {
    slug: "cafecorp",
    name: "CafeCorp",
    tag: "Café & restaurant POS",
    headline: "Faster billing. Fewer mistakes. Happier kitchen.",
    summary:
      "A simple point-of-sale with table orders, kitchen display, inventory and sales reports, made for cafés and small restaurants.",
    audience: "Cafés, bakeries, QSRs and small restaurants",
    appUrl: "https://cafecorp.themanishchauhan.in",
    accent: { bg: "bg-amber-600", hover: "hover:bg-amber-700", text: "text-amber-700", soft: "bg-amber-50", border: "border-amber-600", bar: "bg-amber-600", band: "bg-amber-900", bandText: "text-amber-100" },
    replaces: ["Handwritten order slips", "Calculator billing", "Stock counted by eye", "End-of-day cash guesswork"],
    features: [
      ["🧾", "Quick POS billing", "Tap-to-bill with taxes, discounts, split payments and printable receipts."],
      ["🪑", "Table & QR ordering", "Dine-in tables, takeaway and QR menus that send orders straight to the kitchen."],
      ["👨‍🍳", "Kitchen display", "Orders appear on a kitchen screen with timers, so no slip gets lost."],
      ["📦", "Inventory & recipes", "Ingredient stock deducts per sale, with low-stock alerts."],
      ["👥", "Staff & shifts", "Roles, attendance and shift-wise sales for every team member."],
      ["📈", "Sales reports", "Best sellers, peak hours and daily closing reports in seconds."],
    ],
    mock: {
      title: "Live orders - Brew & Bean",
      stats: [["Orders today", "128"], ["Open tables", "7"], ["Sales", "₹54,900"], ["Avg. bill", "₹429"]],
      columns: ["Order", "Table", "Items", "Status"],
      rows: [
        ["#1042", "T3", "2 Latte, 1 Brownie", "Preparing"],
        ["#1043", "Takeaway", "1 Cold Coffee", "Ready"],
        ["#1044", "T6", "3 Sandwich, 2 Tea", "Preparing"],
        ["#1045", "T1", "1 Pasta", "Paid"],
      ],
    },
    faqs: [
      ["Does it work without internet?", "Offline billing is on the roadmap. Today the system needs a stable connection."],
      ["Can I use my existing printer?", "Standard thermal receipt printers are supported; compatibility is confirmed during the demo."],
      ["Can I run multiple outlets?", "Multi-outlet support with central reporting is planned."],
    ],
  },
};

export const productList = Object.values(products);
