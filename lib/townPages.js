// The few town pages that ranked in Google before towns were merged (Search Console, Aug–Nov 2026).
// Each has its own local text, not a template. All other /services/<service>/<town> URLs redirect
// to the main service page (handled in app/services/[service]/[city]/page.jsx).
// Key: "service-slug/town-slug".
export const townPages = {
  'rent-management-software/chandigarh': {
    town: 'Chandigarh',
    region: 'Chandigarh tricity',
    intro: "Chandigarh's rental market covers flats and kothis across the sectors, PG rooms for students and working professionals, and shops in the sector markets. Many owners and property managers in the tricity still track rent in a notebook or an Excel sheet. RentCorp keeps every property, tenant, agreement and monthly rent in one place, sends rent reminders on WhatsApp, and shows at a glance who is overdue.",
    points: [
      ['Flats, kothis, PG rooms and shops', 'All your properties and units in one list, with who lives where.'],
      ['Tenant records', 'Phone, ID, security deposit, agreement start and renewal dates.'],
      ['Rent reminders on WhatsApp', 'Sent before the due date, so you stop chasing tenants.'],
      ['Receipts for HRA', 'Working tenants get a proper rent receipt for every payment.'],
    ],
    faqs: [
      ['Is there rent management software for landlords in Chandigarh?', 'Yes. RentCorp is made for landlords, PG owners and property managers. It tracks tenants, monthly rent, deposits and agreements, and sends WhatsApp reminders. Setup is done online, with a free demo first.'],
      ['Can one account manage properties in Mohali and Panchkula too?', 'Yes. One RentCorp account can manage properties anywhere in the tricity or beyond, each with its own tenants and rent.'],
      ['Do I need to install anything?', 'No. RentCorp works in the browser on a phone or computer.'],
    ],
  },
  'rent-management-software/mohali': {
    town: 'Mohali',
    region: 'Mohali (SAS Nagar)',
    intro: 'Mohali (SAS Nagar) is growing fast, with new residential sectors, IT offices and many PGs and rented flats for students and young professionals. For owners with several flats or a PG, keeping track of rent, deposits and agreement renewals by hand gets messy quickly. RentCorp puts it all in one place and reminds tenants on WhatsApp before rent is due.',
    points: [
      ['Built for flats and PGs', 'Track flats, rooms and beds, and which ones are vacant.'],
      ['Deposits and agreements', 'Know every deposit amount and when each agreement needs renewing.'],
      ['Overdue list', 'See who has not paid this month, in one tap.'],
      ['Monthly summary', 'Rent collected, rent pending and occupancy for the month.'],
    ],
    faqs: [
      ['What is the best way to manage rented flats in Mohali?', 'Keep one record per tenant (deposit, agreement dates, rent), fix one due date for everyone, and send reminders before it. RentCorp does all of this for you and gives receipts for every payment.'],
      ['Do you visit Mohali for setup?', 'Setup and training happen online over a video call, which is quick and works well. An in-person visit is possible on request.'],
      ['How much does rent management software cost?', 'RentCorp plans start at ₹799 a month for up to 10 units, with a one-time setup fee. Every plan starts with a free demo.'],
    ],
  },
  'rent-management-software/jaipur': {
    town: 'Jaipur',
    region: 'Jaipur, Rajasthan',
    intro: 'Jaipur has a large rental market: houses and flats, shops in busy markets, and many PGs and hostels for students who come for college and coaching. Landlords with several tenants spend hours every month on rent collection, receipts and reminders. RentCorp keeps tenants, rent and deposits in one place and reminds tenants automatically on WhatsApp.',
    points: [
      ['Houses, flats and shops', 'Manage residential and commercial tenants in one account.'],
      ['Automatic reminders', 'Tenants get a WhatsApp reminder before the due date.'],
      ['Receipts and history', 'Every payment gets a receipt, with the full payment history per tenant.'],
      ['Hindi or English', 'Training and support in the language you prefer.'],
    ],
    faqs: [
      ['Is there rent collection software for landlords in Jaipur?', 'Yes. RentCorp tracks tenants, monthly rent, deposits and agreements, sends WhatsApp reminders and shows who is overdue. It is set up online for landlords in Jaipur.'],
      ['Can it handle both shops and flats?', 'Yes. You can add residential and commercial units, each with its own rent, deposit and tenant.'],
      ['Is support available in Hindi?', 'Yes. Setup, training and support are available in Hindi or English.'],
    ],
  },
  'hostel-pg-management-software/jaipur': {
    town: 'Jaipur',
    region: 'Jaipur, Rajasthan',
    intro: 'Thousands of students live in PGs and hostels in Jaipur while they study at college or prepare for exams. Running a PG with many rooms and beds means tracking who is in which bed, monthly fees, deposits, guardians and notice periods, often in a register. RentCorp manages rooms and beds, tenant records and monthly dues, and reminds students and parents on WhatsApp.',
    points: [
      ['Rooms and beds', 'See which beds are occupied, vacant or under notice.'],
      ['Student records', 'Phone, guardian contact, ID proof, deposit and joining date.'],
      ['Monthly fee reminders', 'WhatsApp reminders before the due date to students or parents.'],
      ['Occupancy and dues', 'Fees collected, fees pending and empty beds for the month.'],
    ],
    faqs: [
      ['What software do PG and hostel owners in Jaipur use?', 'Many still use registers or Excel. RentCorp is a simple alternative made for PGs and hostels: rooms and beds, tenant and guardian records, monthly fees, deposits, receipts and WhatsApp reminders.'],
      ['Can I track deposits and notice periods?', 'Yes. Each resident has a deposit amount, joining date and notice period, so move-outs and refunds are clear.'],
      ['How much does hostel management software cost?', 'RentCorp plans for hostels and PGs start at ₹1,499 a month for up to 50 beds, with a one-time setup fee and a free demo first.'],
    ],
  },
  'business-automation/jaipur': {
    town: 'Jaipur',
    region: 'Jaipur, Rajasthan',
    intro: "Jaipur's traders, exporters and manufacturers (textiles, handicrafts, gems and jewellery, and more) handle a lot of paperwork: orders, quotations, invoices, stock and dispatch, often across registers, Excel and WhatsApp. Business automation replaces that with simple software built around how your business already works, so information is entered once and reports are ready when you need them.",
    points: [
      ['Orders and quotations', 'From enquiry to quotation to invoice, without retyping.'],
      ['Stock and dispatch', 'Know what is in stock and what has been sent, every day.'],
      ['Automatic reports', 'Daily sales, pending payments and stock reports, sent to you.'],
      ['Works with your tools', 'Excel, Google Sheets, Tally and WhatsApp can stay; they just talk to each other.'],
    ],
    faqs: [
      ['What can be automated for a small business in Jaipur?', 'Common examples: quotations and invoices, order tracking, stock registers, payment reminders, daily sales reports and moving data between Excel, Google Sheets and Tally.'],
      ['How much does business automation cost?', 'Automation projects start at ₹9,999 for one process, with a fixed price agreed after a free 20-minute call.'],
      ['Do I have to stop using Excel or Tally?', 'No. Automation works around the tools you already use and connects them, instead of forcing a switch.'],
    ],
  },
}

export const townPageKeys = Object.keys(townPages)
export const townPageFor = (service, town) => townPages[`${service}/${town}`]
