// Keyword-focused posts. Each answers one common search and links to a free tool or product.
// Shape matches the older posts in app/blog/[slug]/page.jsx.
// Optional seoTitle (under ~60 characters, shown on Google without the site name) and seoDescription
// (under ~155 characters) override title/excerpt in search results only; the page heading stays `title`.
import { quoteRates, inr, starterPack, STARTER_OFFER_ENDS_LABEL } from './pricing';

export const newBlogPosts = [
  {
    id: 'why-business-needs-website-ai-era',
    title: 'Does Your Business Still Need a Website in the AI Era? (ChatGPT, Google AI)',
    excerpt: 'People now ask ChatGPT and Google AI for recommendations. Those answers come from websites. Here is why a clear website with the right keywords is how a business gets found by both Google and AI.',
    date: '2026-10-11',
    readTime: '6 min read',
    category: 'Websites',
    tags: ['Website', 'SEO', 'AI Search', 'ChatGPT', 'Small Business'],
    content: `
<p>A common question from business owners today: "Everyone uses ChatGPT and Instagram now. Do I really need a website?" The short answer is <strong>yes, more than before</strong>, and the reason is how AI tools actually work.</p>

<h2>AI answers are built from websites</h2>
<p>When someone asks ChatGPT, Gemini, Perplexity or Google's AI answers "best clinic management software for small clinics" or "PG near Model Town Rewari", the AI does not invent businesses. It reads and summarises information that already exists online: <strong>websites, business listings, reviews and articles</strong>, and often links to its sources.</p>
<p>If your business has no website, or a website that doesn't clearly say what you do and where, there is very little for an AI to read about you. You simply don't appear in the answer, while a competitor with a clear website does.</p>

<h2>Keywords still matter, just in a more natural way</h2>
<p>Old-style SEO meant repeating keywords. Today, both Google and AI tools look for pages that <strong>clearly answer a real question</strong>. The "right keywords" are simply the words your customers use:</p>
<ul>
  <li>What you offer: "clinic software", "PG rooms", "café billing"</li>
  <li>Where you are: "in Rewari", "near Model Town", "Haryana"</li>
  <li>Who it's for: "small clinics", "students", "working professionals"</li>
  <li>The questions people ask: "how much", "how to", "which is best"</li>
</ul>
<p>A page that says <em>"Hostel and PG rooms for students near Model Town, Rewari, with meals and Wi-Fi, from ₹X per month"</em> is easy for Google to rank and easy for an AI to quote.</p>

<h2>What makes a website "AI-friendly"</h2>
<ul>
  <li><strong>Clear pages for each service</strong>, instead of one page that tries to say everything.</li>
  <li><strong>Plain answers to common questions</strong> (an FAQ section works very well).</li>
  <li><strong>Your location, contact details and hours</strong>, written as text, not only inside images.</li>
  <li><strong>Structured data</strong> behind the scenes, which helps machines understand your business type, services and FAQs.</li>
  <li><strong>Fast loading on mobile</strong>: slow sites get fewer visitors and rank lower.</li>
  <li><strong>A matching Google Business Profile</strong>, with the same name, phone and address as the website.</li>
</ul>

<h2>Social media is not enough on its own</h2>
<p>Instagram and Facebook are great for showing your work, but posts are hard for search engines and AI tools to read as a reliable summary of your business, and you don't control the platform. Your website is the one place you own, where every detail is correct and up to date. Use social media to bring people to it.</p>

<h2>Trust: the human side</h2>
<p>Even when an AI recommends you, customers usually check you before calling. A clean, professional website with real details and a WhatsApp button turns that check into an enquiry. No website, or an outdated one, often means they move on to the next option.</p>

<h2>What a small business should do now</h2>
<ol>
  <li>Get a simple, fast, mobile-friendly website with a page for each main service.</li>
  <li>Write the way your customers search: service + location + the questions they ask.</li>
  <li>Add an FAQ section and keep your contact details visible.</li>
  <li>Set up your Google Business Profile with the same details.</li>
  <li>Add helpful content over time, such as guides, prices and answers, so both Google and AI have more to read about you.</li>
</ol>

<h2>See what a website would cost</h2>
<p>Use the free <a href="/tools/website-cost-calculator">Website Cost Calculator</a> to get an instant estimate, or see the <a href="/services/business-automation">services</a> I offer. Every website I build is mobile-first and set up with SEO, structured data and Google Business Profile, so it can be found by people, search engines and AI.</p>
`,
  },
  {
    id: 'rent-receipt-format-for-hra',
    title: 'Rent Receipt Format for HRA (2026): What to Include + Free Generator',
    excerpt: 'Everything a valid rent receipt for HRA needs: tenant and landlord details, rent period, landlord PAN, revenue stamp rules, and a free generator that makes all 12 receipts in a minute.',
    quickAnswer: "A rent receipt for HRA needs the tenant's and landlord's names, the rented property's full address, the rent amount in figures and words, the rent period, the date and mode of payment, and the landlord's signature. Add the landlord's PAN if yearly rent is more than ₹1,00,000, and a revenue stamp only for cash payments above ₹5,000. You can make all 12 monthly receipts free with the Rent Receipt Generator.",
    faqs: [["Is the landlord's PAN mandatory for HRA?", "Only if the rent you pay in a year is more than ₹1,00,000 (about ₹8,334 a month or more). If the landlord does not have a PAN, employers usually accept a signed declaration from the landlord instead."], ["Does a rent receipt need a revenue stamp?", "Generally only when rent is paid in cash and the receipt is for more than ₹5,000. The landlord signs across the stamp. For UPI, bank transfer or cheque payments, a stamp is usually not needed."], ["Can I claim HRA under the new tax regime?", "No. The HRA exemption is available only under the old tax regime, so rent receipts matter only if you have chosen the old regime."], ["How much HRA is tax-free?", "The lowest of three amounts: the actual HRA received; 50% of salary (Basic + DA) in Delhi, Mumbai, Kolkata or Chennai, or 40% elsewhere; and rent paid minus 10% of salary (Basic + DA)."], ["Should I give one receipt per month or one for the whole year?", "Both are widely accepted: 12 monthly receipts for the financial year, or one receipt covering the whole period. Check which your employer prefers."]],
    seoTitle: 'Rent Receipt Format for HRA 2026 + Free PDF Generator',
    seoDescription: 'The correct rent receipt format for HRA: what to include, when landlord PAN is needed (rent over ₹1 lakh a year) and the revenue stamp rule. Make all 12 free.',
    date: '2026-10-11',
    readTime: '6 min read',
    category: 'HRA & Tax',
    tags: ['Rent Receipt', 'HRA', 'Income Tax', 'Free Tool'],
    content: `
<p>If you live in a rented house and get House Rent Allowance (HRA) as part of your salary, your employer will ask for <strong>rent receipts</strong> before the financial year ends. Without them, the HRA tax exemption is not applied and more tax is deducted from your salary.</p>
<p>Here is exactly what a rent receipt should contain, the rules people most often get wrong, and how to make all your receipts in a minute for free.</p>

<h2>What a valid rent receipt must include</h2>
<ul>
  <li><strong>Tenant's name</strong>: the person paying the rent (you).</li>
  <li><strong>Landlord's name</strong>: the person receiving the rent.</li>
  <li><strong>Complete address</strong> of the rented property, including house or flat number.</li>
  <li><strong>Rent amount</strong>, in figures and in words.</li>
  <li><strong>Rent period</strong>: the month (or months) the payment covers.</li>
  <li><strong>Date of payment</strong> and <strong>mode of payment</strong> (cash, UPI, bank transfer or cheque).</li>
  <li><strong>Landlord's signature.</strong></li>
  <li><strong>Landlord's PAN</strong>, if annual rent is more than ₹1,00,000 (see below).</li>
</ul>

<h2>Standard rent receipt format</h2>
<p>Most employers accept this widely used wording:</p>
<div class="callout"><p><strong>RECEIPT OF HOUSE RENT</strong></p><p>Hereby, I acknowledge that I have received a sum of Rs. 12,000 (Rupees Twelve Thousand only) from Rahul Sharma towards the rent @ Rs. 12,000 per month from 01 Apr 2026 to 30 Apr 2026 in respect of House No. B-204 situated at Model Town, Rewari, paid by UPI.</p><p>Signature of the House Owner · Name · Address · PAN</p></div>
<p>You can make one receipt per month (12 receipts for a financial year), or a single receipt covering the whole period. Check which your employer prefers.</p>

<h2>When is the landlord's PAN required?</h2>
<p>If the rent you pay in a year is <strong>more than ₹1,00,000</strong> (roughly ₹8,334 a month or more), employers ask for the landlord's PAN. If the landlord does not have a PAN, a signed declaration from the landlord is usually needed instead.</p>

<h2>Do rent receipts need a revenue stamp?</h2>
<p>A revenue stamp is generally needed only when rent is paid <strong>in cash</strong> and the receipt is for <strong>more than ₹5,000</strong>. The landlord signs across the stamp. For UPI, bank transfer or cheque payments, a stamp is usually not required, and the bank record itself is good proof.</p>

<h2>How much HRA is tax-free?</h2>
<p>Under the old tax regime, the tax-free part of HRA is the <strong>lowest</strong> of these three:</p>
<ol>
  <li>The actual HRA you receive.</li>
  <li>50% of salary (Basic + DA) if you live in Delhi, Mumbai, Kolkata or Chennai, or 40% elsewhere.</li>
  <li>Rent paid minus 10% of salary (Basic + DA).</li>
</ol>
<p>The new tax regime does not allow the HRA exemption, so rent receipts matter only if you have chosen the old regime.</p>

<h2>Common mistakes to avoid</h2>
<ul>
  <li>Missing the tenant's name or the property address.</li>
  <li>Different rent amounts on different receipts without a reason (like a rent increase).</li>
  <li>No landlord PAN when annual rent is over ₹1 lakh.</li>
  <li>Unsigned receipts. Always get the landlord's signature.</li>
  <li>Paying rent to a spouse. Rent paid to parents who own the house is generally fine if they show it as income; rent to a spouse is commonly questioned.</li>
</ul>

<h2>Make your rent receipts for free</h2>
<p>Use the free <a href="/tools/rent-receipt-generator">Rent Receipt Generator</a>: enter the details once and get every monthly receipt (or one for the whole period) in the standard format, ready to print or save as PDF. No sign-up, and nothing is stored. It is also available <a href="/hi/tools/rent-receipt-generator">in Hindi</a>.</p>
<p class="note">This article is general guidance. Confirm the exact HRA rules with your employer or tax advisor.</p>
`,
  },
  {
    id: 'salary-slip-format-india',
    title: 'Salary Slip Format in India: Every Component Explained (Basic, HRA, PF, ESI)',
    excerpt: 'Understand each line of a salary slip: Basic, HRA, allowances, PF, ESI, professional tax, TDS and net pay, with a sample calculation and a free salary slip generator.',
    quickAnswer: "A salary slip shows the company and employee details, the pay period, earnings (Basic, HRA, conveyance and other allowances), deductions (PF, ESI, professional tax and TDS) and the net pay. PF is 12% of Basic, often calculated on a ₹15,000 wage ceiling (so at most ₹1,800 a month), and ESI applies only when gross monthly wages are ₹21,000 or less.",
    faqs: [["How much PF is deducted from salary?", "The employee contributes 12% of Basic (plus DA), and the employer contributes a matching share. Many employers use the ₹15,000 wage ceiling, which caps the employee's share at ₹1,800 a month."], ["When does ESI apply to a salary?", "ESI applies when gross monthly wages are ₹21,000 or less. The employee pays 0.75% of gross wages and the employer pays 3.25%."], ["What is net pay on a salary slip?", "Net pay is gross earnings minus total deductions such as PF, ESI, professional tax and TDS. It is shown in figures and in words."], ["What is professional tax?", "A state tax with a maximum of ₹2,500 a year. Rates and rules differ by state, and some states do not levy it at all."], ["How can a small business make salary slips for free?", "Use the free Salary Slip Generator: add company and employee details, earnings and deductions (Auto PF and Auto ESI help), then print or save the payslip as PDF with your logo. No sign-up is needed."]],
    seoTitle: 'Salary Slip Format India: Sample + Free Generator',
    seoDescription: 'Salary slip format with sample salaries: Basic, HRA, PF, ESI, professional tax and TDS explained line by line. Make a payslip PDF with your logo, free.',
    date: '2026-10-11',
    readTime: '7 min read',
    category: 'Payroll',
    tags: ['Salary Slip', 'Payslip', 'PF', 'ESI', 'Free Tool'],
    content: `
<p>A <strong>salary slip</strong> (also called a payslip) is the monthly document that shows what an employee earned, what was deducted and what was finally paid. Employees need it for loans, credit cards, visas and job changes, and small businesses need to issue it every month.</p>

<h2>The basic structure of a salary slip</h2>
<ul>
  <li><strong>Company details</strong>: name, address and logo.</li>
  <li><strong>Employee details</strong>: name, employee ID, designation, department, PAN, UAN and bank account.</li>
  <li><strong>Pay period</strong>: the month, working days, paid days and loss-of-pay (LOP) days.</li>
  <li><strong>Earnings</strong>: every component of salary.</li>
  <li><strong>Deductions</strong>: everything subtracted.</li>
  <li><strong>Net pay</strong>: earnings minus deductions, in figures and words.</li>
</ul>

<h2>Earnings: what each component means</h2>
<h3>Basic salary</h3>
<p>The fixed core of the salary, often around 40–50% of the monthly gross. PF and HRA are usually calculated from Basic, so it affects everything else.</p>
<h3>House Rent Allowance (HRA)</h3>
<p>Paid to help with rent. Part of it can be tax-free under the old tax regime if the employee pays rent and submits <a href="/blog/rent-receipt-format-for-hra">rent receipts</a>.</p>
<h3>Conveyance and other allowances</h3>
<p>Fixed amounts for travel or specific purposes. Many companies combine smaller allowances into one line.</p>
<h3>Special allowance</h3>
<p>The balancing figure that makes up the rest of the agreed salary.</p>

<h2>Deductions: what gets subtracted</h2>
<h3>Provident Fund (PF)</h3>
<p>The employee contributes 12% of Basic (plus DA), and the employer contributes a matching share. Many employers calculate PF on a wage ceiling of ₹15,000, which caps the employee share at ₹1,800 a month.</p>
<h3>Employees' State Insurance (ESI)</h3>
<p>Applies when gross monthly wages are ₹21,000 or less. The employee pays 0.75% of gross wages and the employer pays 3.25%.</p>
<h3>Professional tax</h3>
<p>A state tax, with a maximum of ₹2,500 a year. Rates and rules differ by state, and some states do not levy it at all.</p>
<h3>Income tax (TDS)</h3>
<p>Tax deducted at source based on the employee's estimated yearly income and the tax regime they chose.</p>

<h2>Sample calculation</h2>
<table>
  <thead><tr><th>Earnings</th><th>₹</th><th>Deductions</th><th>₹</th></tr></thead>
  <tbody>
    <tr><td>Basic</td><td>15,000</td><td>PF (12% of Basic)</td><td>1,800</td></tr>
    <tr><td>HRA</td><td>6,000</td><td>Professional tax</td><td>200</td></tr>
    <tr><td>Conveyance</td><td>1,600</td><td>TDS</td><td>0</td></tr>
    <tr><td>Special allowance</td><td>2,400</td><td></td><td></td></tr>
    <tr><td><strong>Gross</strong></td><td><strong>25,000</strong></td><td><strong>Total deductions</strong></td><td><strong>2,000</strong></td></tr>
  </tbody>
</table>
<p><strong>Net pay = ₹25,000 − ₹2,000 = ₹23,000</strong>. ESI does not apply here because gross is above ₹21,000.</p>

<h2>Salary slip for ₹30,000, ₹45,000 and ₹50,000 per month</h2>
<p>A common way to split a monthly salary: Basic is 50% of gross, HRA is 40% of Basic, conveyance is ₹1,600 and the special allowance covers the rest. PF is 12% of Basic on the ₹15,000 wage ceiling.</p>
<table>
  <thead><tr><th>Component</th><th>₹30,000</th><th>₹45,000</th><th>₹50,000</th></tr></thead>
  <tbody>
    <tr><td>Basic</td><td>15,000</td><td>22,500</td><td>25,000</td></tr>
    <tr><td>HRA</td><td>6,000</td><td>9,000</td><td>10,000</td></tr>
    <tr><td>Conveyance</td><td>1,600</td><td>1,600</td><td>1,600</td></tr>
    <tr><td>Special allowance</td><td>7,400</td><td>11,900</td><td>13,400</td></tr>
    <tr><td><strong>Gross</strong></td><td><strong>30,000</strong></td><td><strong>45,000</strong></td><td><strong>50,000</strong></td></tr>
    <tr><td>PF (employee)</td><td>1,800</td><td>1,800</td><td>1,800</td></tr>
    <tr><td>Professional tax</td><td>200</td><td>200</td><td>200</td></tr>
    <tr><td><strong>Net pay</strong></td><td><strong>28,000</strong></td><td><strong>43,000</strong></td><td><strong>48,000</strong></td></tr>
  </tbody>
</table>
<p>Some employers calculate PF on the full Basic instead of the ₹15,000 ceiling. Then PF is ₹2,700 at ₹45,000 (net ₹42,100) and ₹3,000 at ₹50,000 (net ₹46,800). TDS is usually ₹0 at these salaries under the new tax regime, but it depends on the employee's total income and chosen regime. Professional tax depends on the state, and some states do not charge it.</p>
<p>To make a slip for any amount, enter the gross salary in the <a href="/tools/salary-slip-generator">Salary Slip Generator</a> and turn on Auto PF.</p>

<h2>How loss of pay (LOP) works</h2>
<p>If an employee takes unpaid leave, each earning is usually reduced in proportion. With 30 working days and 28 paid days, the employee receives 28/30 of each earning, and PF is recalculated on the reduced Basic.</p>

<h2>Make a salary slip for free</h2>
<p>The free <a href="/tools/salary-slip-generator">Salary Slip Generator</a> does all of this for you: add your logo, enter the salary, use Auto PF and Auto ESI, set paid days, and print or save a one-page PDF. No sign-up needed. It is also available <a href="/hi/tools/salary-slip-generator">in Hindi</a>. If you make slips for many employees every month, <a href="/services/business-automation">payroll automation</a> can generate and send them for you.</p>
<p class="note">This article is general guidance. Check PF, ESI, professional tax and TDS rules with your accountant.</p>
`,
  },
  {
    id: 'gst-invoice-format-mandatory-fields',
    title: 'GST Invoice Format: Mandatory Fields Checklist for Small Businesses',
    excerpt: 'A simple checklist of everything a GST tax invoice must show, when to charge CGST + SGST vs IGST, and how to create a correct GST invoice in a minute for free.',
    quickAnswer: "A GST tax invoice must show the supplier's name, address and GSTIN; a unique, consecutive invoice number (up to 16 characters) and the date; the recipient's name and address (and GSTIN if registered); the place of supply; the HSN or SAC code; the description, quantity and taxable value; the GST rate and amount (CGST + SGST within a state, IGST between states); whether reverse charge applies; and a signature.",
    faqs: [["When do I charge CGST + SGST and when IGST?", "If the seller and the place of supply are in the same state, charge CGST + SGST, each at half the GST rate (for example 9% + 9% for 18%). If they are in different states, charge IGST at the full rate."], ["How long can a GST invoice number be?", "Up to 16 characters (letters, numbers, \"-\" or \"/\"). It must be unique and consecutive for each financial year."], ["What is the difference between a tax invoice and a bill of supply?", "A tax invoice is issued when GST is charged. A bill of supply is issued instead by composition-scheme businesses or for exempt supplies, because no GST is charged."], ["Do small businesses need e-invoicing?", "No. E-invoicing applies only above the turnover limit (currently ₹5 crore). Smaller businesses can keep issuing regular GST invoices."], ["How can I make a GST invoice for free?", "Use the free GST Invoice Generator. It includes every mandatory field, picks CGST + SGST or IGST from the GSTIN automatically, adds your logo and saves the invoice as PDF."]],
    seoTitle: 'GST Invoice Format: Mandatory Fields (Free Template)',
    seoDescription: 'Checklist of every field a GST tax invoice must show, CGST + SGST vs IGST explained simply, and a free GST invoice generator that makes a PDF in a minute.',
    date: '2026-10-11',
    readTime: '6 min read',
    category: 'GST & Billing',
    tags: ['GST Invoice', 'Billing', 'Small Business', 'Free Tool'],
    content: `
<p>If your business is registered under GST, every sale needs a proper <strong>tax invoice</strong>. A missing field can cause trouble for your customer's input tax credit, and for you during an audit. Here is a plain checklist.</p>

<h2>Mandatory fields on a GST tax invoice</h2>
<ol>
  <li><strong>Supplier's name, address and GSTIN.</strong></li>
  <li><strong>Invoice number</strong>: unique and consecutive, up to 16 characters (letters, numbers, "-" or "/"), unique for each financial year.</li>
  <li><strong>Date of issue.</strong></li>
  <li><strong>Recipient's name and address</strong>, and their GSTIN if they are registered.</li>
  <li><strong>Place of supply</strong>, with the state name and state code, for interstate supplies.</li>
  <li><strong>HSN code</strong> for goods or <strong>SAC code</strong> for services.</li>
  <li><strong>Description</strong> of goods or services.</li>
  <li><strong>Quantity and unit</strong> (for goods).</li>
  <li><strong>Total value</strong> and <strong>taxable value</strong>, after any discount.</li>
  <li><strong>GST rate and amount</strong>, shown separately as CGST + SGST, or IGST.</li>
  <li><strong>Whether tax is payable on reverse charge.</strong></li>
  <li><strong>Signature</strong> (or digital signature) of the supplier or authorised person.</li>
</ol>

<h2>CGST + SGST or IGST?</h2>
<ul>
  <li><strong>Same state</strong> (seller and place of supply in the same state): charge <strong>CGST + SGST</strong>, each at half the GST rate. Example: 18% becomes 9% CGST + 9% SGST.</li>
  <li><strong>Different states</strong>: charge <strong>IGST</strong> at the full rate.</li>
</ul>
<p>The first two digits of a GSTIN are the state code (for example, 06 is Haryana and 08 is Rajasthan), which makes it easy to check.</p>

<h2>Current GST rates</h2>
<p>Since 22 September 2025, most goods and services fall under <strong>0%, 5%, 18%</strong>, with <strong>40%</strong> for a small set of luxury and sin goods. Restaurant food is usually 5%. Always confirm the rate for your specific HSN or SAC code.</p>

<h2>Tax invoice vs bill of supply vs quotation</h2>
<ul>
  <li><strong>Tax invoice</strong>: issued by registered businesses when they charge GST.</li>
  <li><strong>Bill of supply</strong>: issued instead of a tax invoice by composition-scheme businesses or for exempt supplies, because no GST is charged.</li>
  <li><strong>Quotation</strong>: an offer sent before the sale, not a tax document. Make one with the free <a href="/tools/quotation-maker">Quotation Maker</a>.</li>
</ul>

<h2>Large businesses: e-invoicing</h2>
<p>Businesses above the e-invoicing turnover limit (currently ₹5 crore) must generate e-invoices through the government portal. Smaller businesses can keep issuing regular invoices.</p>

<h2>Create a GST invoice for free</h2>
<p>The free <a href="/tools/gst-invoice-generator">GST Invoice Generator</a> includes every field above, picks CGST + SGST or IGST from the GSTIN automatically, adds your logo, and prints a clean invoice or saves it as PDF. No sign-up. For cafés and restaurants billing all day, <a href="/cafecorp">CafeCorp</a> handles GST billing at the counter.</p>
<p class="note">This article is general guidance. Confirm GST rules for your business with your accountant.</p>
`,
  },
  {
    id: 'website-cost-in-india',
    title: 'How Much Does a Website Cost in India in 2026? A Simple Breakdown',
    excerpt: 'What really decides the price of a website in India: type of site, number of pages, features, content and maintenance. Plus a free calculator for an instant estimate.',
    quickAnswer: `In 2026 a website in India usually costs from ${inr(quoteRates.types.find((x) => x.id === 'landing').base)} for a one-page landing page, ${inr(quoteRates.types.find((x) => x.id === 'business').base)} for a business website of about 5 pages, ${inr(quoteRates.types.find((x) => x.id === 'ecommerce').base)} for an online store and ${inr(quoteRates.types.find((x) => x.id === 'webapp').base)} for a custom web app (my starting prices). A starter website of up to 3 pages is ${inr(starterPack.price)}${starterPack.offerActive ? ` until ${STARTER_OFFER_ENDS_LABEL}` : ''}. Domain and hosting are paid separately.`,
    faqs: [
      ['How much does a small business website cost in India?', `A starter website of up to 3 pages with a WhatsApp button and Google listing is ${inr(starterPack.price)}, and a business website of about 5 pages starts at ${inr(quoteRates.types.find((x) => x.id === 'business').base)}. Domain and hosting are extra.`],
      ['What affects the cost of a website?', 'The type of website, the number of pages, features such as online payments, booking or logins, content and design work, how fast you need it, and ongoing maintenance.'],
      ['Are domain and hosting included in the price?', 'No. Domain and hosting are paid separately, and I help you set them up.'],
      ['How long does it take to make a website?', 'A starter website is usually ready in 1 to 2 weeks after you share your details and photos. Bigger websites take 3 to 6 weeks.'],
      ['How much does website maintenance cost?', `Maintenance (updates, backups and small changes) is ${inr(quoteRates.maintenancePerMonth)} a month.`],
    ],
    seoTitle: 'Website Cost in India (2026): Prices from ₹4,999',
    seoDescription: 'Real 2026 prices: landing page from ₹4,999, business website from ₹14,999, online store from ₹34,999. What changes the cost, plus a free instant calculator.',
    date: '2026-10-11',
    readTime: '6 min read',
    category: 'Websites',
    tags: ['Website Cost', 'Small Business', 'India', 'Free Tool'],
    content: `
<p>"How much will a website cost?" has no single answer, because a one-page site and an online store are very different projects. But the price is not random either. It comes down to a handful of choices you can understand in five minutes.</p>

<h2>Typical website prices in 2026</h2>
<p>These are my own starting prices, to give you a real idea. Other developers and agencies may charge more or less.</p>
<table>
  <thead><tr><th>Type of website</th><th>Starting price</th></tr></thead>
  <tbody>
    <tr><td>Landing page (one page)</td><td>${inr(quoteRates.types.find((t) => t.id === 'landing').base)}</td></tr>
    <tr><td>Starter website (up to 3 pages, WhatsApp, Google listing)</td><td>${starterPack.offerActive ? `${inr(starterPack.price)} (offer until ${STARTER_OFFER_ENDS_LABEL})` : inr(starterPack.price)}</td></tr>
    <tr><td>Business website (about 5 pages)</td><td>${inr(quoteRates.types.find((t) => t.id === 'business').base)}</td></tr>
    <tr><td>Online store with payments</td><td>${inr(quoteRates.types.find((t) => t.id === 'ecommerce').base)}</td></tr>
    <tr><td>Custom web app (logins, dashboards)</td><td>${inr(quoteRates.types.find((t) => t.id === 'webapp').base)}</td></tr>
    <tr><td>Maintenance (updates, backups)</td><td>${inr(quoteRates.maintenancePerMonth)}/month</td></tr>
  </tbody>
</table>
<p>Domain and hosting are paid separately. The sections below explain what moves a project up or down from these prices.</p>

<h2>What is included in a ${inr(quoteRates.types.find((x) => x.id === 'business').base)} business website?</h2>
<p>A business website starting at ${inr(quoteRates.types.find((x) => x.id === 'business').base)} usually covers about 5 pages (home, about, services, gallery and contact), a mobile-friendly design with your logo and colours, a WhatsApp chat button and enquiry form, Google Maps, basic SEO and your Google Business Profile. You share the text and photos; content writing is an add-on.</p>

<h2>Website add-on prices</h2>
<p>Features you can add on top of the starting price:</p>
<table>
  <thead><tr><th>Add-on</th><th>Price</th></tr></thead>
  <tbody>
    <tr><td>Extra page</td><td>${inr(quoteRates.extraPage)} per page</td></tr>
    <tr><td>Edit content yourself (CMS)</td><td>${inr(quoteRates.features.find((x) => x.id === 'cms').price)}</td></tr>
    <tr><td>Blog</td><td>${inr(quoteRates.features.find((x) => x.id === 'blog').price)}</td></tr>
    <tr><td>Appointment or booking system</td><td>${inr(quoteRates.features.find((x) => x.id === 'booking').price)}</td></tr>
    <tr><td>Online payments (UPI, cards)</td><td>${inr(quoteRates.features.find((x) => x.id === 'payments').price)}</td></tr>
    <tr><td>User login and accounts</td><td>${inr(quoteRates.features.find((x) => x.id === 'login').price)}</td></tr>
    <tr><td>Hindi + English (2 languages)</td><td>${inr(quoteRates.features.find((x) => x.id === 'multilang').price)}</td></tr>
    <tr><td>Logo and brand design</td><td>${inr(quoteRates.features.find((x) => x.id === 'branding').price)}</td></tr>
    <tr><td>Content writing</td><td>${inr(quoteRates.features.find((x) => x.id === 'content').price)} per page</td></tr>
  </tbody>
</table>

<h2>Freelancer vs agency vs website builder: which costs less?</h2>
<ul>
  <li><strong>Website builders</strong> (Wix, Shopify and similar): low starting cost, but you pay a subscription every month or year, do the work yourself, and are limited to their templates.</li>
  <li><strong>Agencies</strong>: a full team (designer, developer, project manager), so prices are usually higher. A good fit for large or complex projects.</li>
  <li><strong>Freelance developers</strong>: usually the most affordable for small and medium businesses, with one person who builds the site and supports it directly.</li>
</ul>
<p>Whichever you choose, ask for a written quote that lists the pages, features, timeline, and what happens after launch (hosting, updates and support).</p>

<h2>Hidden costs to ask about</h2>
<ul>
  <li><strong>Domain name</strong>: renewed every year.</li>
  <li><strong>Hosting</strong>: monthly or yearly, depending on the plan.</li>
  <li><strong>Maintenance</strong>: updates, backups and small changes (mine is ${inr(quoteRates.maintenancePerMonth)} a month, optional).</li>
  <li><strong>Content and photos</strong>: writing or photography if you do not have them.</li>
</ul>

<h2>1. The type of website</h2>
<ul>
  <li><strong>Landing page</strong>: one page for a product, offer or event. The cheapest option.</li>
  <li><strong>Business website</strong>: home, about, services, gallery and contact. What most local businesses need.</li>
  <li><strong>Online store</strong>: products, cart and online payments. More work for setup and testing.</li>
  <li><strong>Custom web app</strong>: logins, dashboards and portals. Priced like software, not like a website.</li>
</ul>

<h2>2. Number of pages</h2>
<p>Each page needs design, content and testing. A five-page business site costs less than a 25-page one, though the jump per extra page is usually small.</p>

<h2>3. Features</h2>
<p>These add the most to the price:</p>
<ul>
  <li>Online payments (UPI, cards)</li>
  <li>Appointment or booking systems</li>
  <li>User login and accounts</li>
  <li>Hindi + English (two languages)</li>
  <li>Integrations with Tally, Google Sheets or a CRM</li>
</ul>
<p>Simpler features, like a WhatsApp chat button or a contact form, cost little but bring a lot of enquiries.</p>

<h2>4. Content, design and branding</h2>
<p>If you already have a logo, photos and written text, the site is faster and cheaper to build. If the developer needs to write the content or design a logo, that is extra work.</p>

<h2>5. Speed of delivery</h2>
<p>A rush deadline usually costs more, because other work has to wait.</p>

<h2>6. Ongoing costs</h2>
<ul>
  <li><strong>Domain name</strong>: a yearly fee for your web address.</li>
  <li><strong>Hosting</strong>: where the site lives. Simple sites can be very cheap to host.</li>
  <li><strong>Maintenance</strong> (optional): updates, backups, small changes and support.</li>
</ul>

<h2>Cheap website vs good website</h2>
<p>A very cheap template site can work, but watch for slow loading, a poor mobile layout, no SEO setup, or a site you cannot edit. For a local business, what matters most is that the site <strong>loads fast on a phone</strong>, shows up on Google, and makes it easy to call or WhatsApp you.</p>

<h2>Get an instant estimate</h2>
<p>Use the free <a href="/tools/website-cost-calculator">Website Cost Calculator</a>: pick the type of site, pages and features, and see an estimated range in rupees. Send your selection on WhatsApp to get a fixed quote. You can also see examples of my <a href="/projects">past work</a>.</p>
`,
  },
  {
    id: 'how-to-manage-pg-hostel',
    title: 'How to Manage a PG or Hostel: Rent, Deposits and Tenant Records Made Simple',
    excerpt: 'Practical tips for PG and hostel owners: tracking rent by room and bed, handling deposits, keeping tenant documents, sending reminders and stopping late payments.',
    quickAnswer: "To manage a PG or hostel well: track every room and bed, keep a record for each tenant (ID proof, deposit, notice period), fix one rent due date for everyone, give a receipt for every payment, remind tenants two or three days before the due date, write down clear deposit rules, and check rent collected, rent pending and occupancy every month.",
    faqs: [["How do I stop late rent payments in a PG?", "Fix one due date for everyone, send a polite reminder two or three days before it, and one more on the due date to anyone who hasn't paid."], ["What records should a PG owner keep for each tenant?", "Name, phone and an emergency contact, ID proof and photo, room and bed, joining date, monthly rent, security deposit and notice period."], ["Is police verification needed for PG tenants?", "Many states, including Haryana, expect landlords to get tenant details verified by the local police. Check the current rules in your area and keep the verification on record."], ["Is there software to manage a PG or hostel?", "Yes. RentCorp tracks rooms and beds, tenants and deposits, monthly dues and receipts, and sends WhatsApp reminders, with an overdue list in one place."]],
    date: '2026-10-11',
    readTime: '6 min read',
    category: 'PG & Rentals',
    tags: ['PG Management', 'Hostel', 'Rent Collection', 'Landlord'],
    content: `
<p>Running a PG or hostel looks simple from outside: rooms, beds, monthly rent. In reality, owners spend hours every month chasing late payments, checking who paid what, and searching notebooks for a tenant's phone number or deposit amount. Here is how to keep it under control.</p>

<h2>1. Track every room and bed, not just tenants</h2>
<p>Keep a list of each room and bed with its status: occupied, vacant or under notice. Knowing exactly which beds will be free next month helps you fill them before they sit empty.</p>

<h2>2. Keep a proper record for each tenant</h2>
<ul>
  <li>Name, phone number and a guardian or emergency contact</li>
  <li>ID proof and photo</li>
  <li>Room and bed, joining date, monthly rent</li>
  <li>Security deposit amount and date received</li>
  <li>Notice period and expected leaving date</li>
</ul>
<p>Many states, including Haryana, expect landlords to get tenant details verified by the local police. Check the current rules in your area and keep the verification on record.</p>

<h2>3. Fix one due date for everyone</h2>
<p>Different due dates for different tenants make tracking hard. Choose one date, for example the 5th of every month, and mention it clearly when a tenant joins.</p>

<h2>4. Give a receipt for every payment</h2>
<p>Receipts avoid disputes later, and working tenants need them for their HRA claim anyway. You can make them free with the <a href="/tools/rent-receipt-generator">Rent Receipt Generator</a>, or <a href="/hi/tools/rent-receipt-generator">in Hindi</a>.</p>

<h2>5. Remind before the due date, not after</h2>
<p>A polite reminder two or three days before the due date gets far more payments on time than chasing people later. Then send one more reminder on the due date to anyone who hasn't paid.</p>

<h2>6. Handle deposits clearly</h2>
<p>Write down the deposit amount, what can be deducted (damage, unpaid rent, notice period) and how soon it is returned after a tenant leaves. Clear rules avoid arguments at move-out.</p>

<h2>7. Check your numbers every month</h2>
<p>At the end of each month, look at three things: total rent collected, rent still pending, and occupancy (how many beds are filled). These tell you more about your business than any notebook.</p>

<h2>Doing all of this without notebooks</h2>
<p><a href="/rentcorp">RentCorp</a> is built for PG, hostel and rental owners: rooms and beds, tenant profiles with deposits, monthly dues and receipts, automatic WhatsApp reminders and an overdue list in one place. I set it up for you, import your existing tenants and train your staff in Hindi or English. See the <a href="/pricing#rentcorp">plans</a> or <a href="/services/hostel-pg-management-software">hostel and PG software</a>.</p>
`,
  },
  {
    id: 'how-to-make-a-quotation',
    title: 'How to Make a Quotation: Format, What to Include and a Free Template',
    excerpt: 'What a professional quotation should contain, a simple format you can copy, how to show GST and discounts, how long to keep it valid, and a free quotation maker that makes a PDF in a minute.',
    quickAnswer: "A quotation should include your business details (and GSTIN if registered), the customer's details, a quotation number and date, a 'valid until' date, each item with quantity, unit and rate, any discount, GST (CGST + SGST or IGST) calculated after the discount, the total in figures and words, payment and delivery terms, and a signature. Most quotations are valid for 7 to 30 days.",
    faqs: [["How long should a quotation be valid?", "Most businesses keep a quotation valid for 7 to 30 days. Use a shorter period if material prices change often, and write the exact date rather than \"15 days\"."], ["Should GST be shown in a quotation?", "Yes, if you are GST-registered: show CGST + SGST for a customer in your state or IGST for a customer in another state, calculated on the amount after discount. If you are not registered, do not add GST or a GSTIN."], ["What is the difference between a quotation and an invoice?", "A quotation is a price offer sent before the sale; it is not a tax document. An invoice is issued after the sale to collect payment."], ["How should I number my quotations?", "Use a short prefix, the financial year and a running number, for example QT/2026-27/001, and start again at 001 every April. Never reuse a number, and mention the quotation number on the invoice when the customer accepts."], ["How do I write a quotation for supply of goods?", "List each product with its make or model, HSN code, quantity, unit, rate and GST rate, then add who pays for freight and loading, the delivery time and any warranty."], ["Can I make a quotation in Hindi?", "Yes. The free Quotation Maker works in English and Hindi, adds your logo, GST and terms, and saves the quotation as PDF."]],
    date: '2026-10-30',
    readTime: '8 min read',
    category: 'Business',
    tags: ['Quotation', 'Quotation Format', 'GST', 'Free Tool', 'Small Business'],
    content: `
<p>A <strong>quotation</strong> (also called a quote or estimate) is the price offer you send a customer <em>before</em> the work starts. It tells them what you will supply, what it will cost and on what terms. A clear quotation wins more orders than a price sent as a WhatsApp message, because the customer can compare it, show it to family or a manager, and trust that nothing is hidden.</p>
<p>Here is exactly what to put in one, a format you can copy, and a free way to make it in a minute.</p>

<h2>What a quotation must include</h2>
<ul>
  <li><strong>Your business details</strong>: name, logo, address, phone, email and GSTIN if you are registered.</li>
  <li><strong>Customer details</strong>: name, address and phone of the person or company you are quoting.</li>
  <li><strong>Quotation number and date</strong>: for example QT-001, so you can find it later and refer to it in the invoice.</li>
  <li><strong>Valid until</strong>: the last date the price is guaranteed.</li>
  <li><strong>Items or work</strong>: a short, specific description of each item, with quantity, unit (pcs, sq ft, kg, hours) and rate.</li>
  <li><strong>Discount</strong>, if any, shown clearly as a percentage or amount.</li>
  <li><strong>GST</strong>, if you are registered: CGST and SGST for a customer in your state, or IGST for a customer in another state.</li>
  <li><strong>Total</strong>, in figures and in words.</li>
  <li><strong>Terms</strong>: advance and payment terms, delivery or completion time, and what is not included.</li>
  <li><strong>Signature</strong>: "For [your business], Authorised signatory".</li>
</ul>

<h2>A simple quotation format you can copy</h2>
<table>
  <thead><tr><th>#</th><th>Item / work</th><th>Qty</th><th>Rate (₹)</th><th>Amount (₹)</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>Modular kitchen, L-shape with soft-close drawers</td><td>1 job</td><td>1,45,000</td><td>1,45,000</td></tr>
    <tr><td>2</td><td>Sliding wardrobe, laminate finish</td><td>2 pcs</td><td>38,000</td><td>76,000</td></tr>
    <tr><td>3</td><td>Installation and transport</td><td>1 job</td><td>5,000</td><td>5,000</td></tr>
    <tr><td></td><td><strong>Subtotal</strong></td><td></td><td></td><td><strong>2,26,000</strong></td></tr>
  </tbody>
</table>
<p>Below the subtotal, show the discount, then GST, then the final total. Always calculate GST on the amount <em>after</em> discount.</p>

<h2>How to number your quotations</h2>
<p>A quotation number lets you and the customer find the exact offer later, especially when prices change. A simple, common format is <strong>prefix / financial year / running number</strong>:</p>
<ul>
  <li><strong>QT/2026-27/001</strong>, QT/2026-27/002, and so on, starting again at 001 every April.</li>
  <li>Use a different prefix if you run more than one business or branch, for example <strong>QT-JPR/2026-27/014</strong>.</li>
  <li>Never reuse a number, even if the quotation was rejected. If you revise a quote, add R1, R2: <strong>QT/2026-27/014-R1</strong>.</li>
  <li>When the customer accepts, write the quotation number on the invoice, so the two documents are linked.</li>
</ul>

<h2>Quotation for supply of goods: what to add</h2>
<p>If you are quoting for <strong>products</strong> rather than a service or a job, the customer (often a purchase team) needs a few extra details to compare your offer:</p>
<ul>
  <li><strong>Exact product details</strong>: brand, model, size or specification, not just "pipes" or "chairs".</li>
  <li><strong>HSN code and GST rate</strong> for each item, if you are GST-registered.</li>
  <li><strong>Freight and loading</strong>: say whether the price is "ex-works" (customer arranges transport) or "delivered to site", and who pays loading and unloading.</li>
  <li><strong>Delivery time</strong>, counted from the date of the purchase order or advance.</li>
  <li><strong>Warranty</strong> and what it covers, if any.</li>
  <li><strong>Minimum order quantity</strong>, if the rate depends on it.</li>
</ul>

<h2>How to show GST in a quotation</h2>
<p>If you are GST-registered, showing tax in the quotation avoids an unpleasant surprise later. Use the rate that applies to each item (common rates are 5% and 18%). For a customer in the same state, split the tax equally into <strong>CGST and SGST</strong>; for a customer in another state, charge <strong>IGST</strong>. If you are not registered, do not add GST, and do not write a GSTIN.</p>

<h2>How long should a quotation be valid?</h2>
<p>Most businesses keep a quotation valid for <strong>7 to 30 days</strong>. Use a shorter period if your material prices change often (steel, wood, electronics) and a longer one for services with stable pricing. Write the exact date, not "15 days", so there is no confusion.</p>

<h2>Terms that save you trouble later</h2>
<ul>
  <li>Advance required to confirm, for example 50%, and when the balance is due.</li>
  <li>Delivery or completion time, counted from the date the advance is received.</li>
  <li>What is not included, for example civil work, electrical points or transport beyond city limits.</li>
  <li>That prices may change after the validity date.</li>
</ul>

<h2>Common mistakes to avoid</h2>
<ul>
  <li>Vague descriptions like "furniture work". Say exactly what, how many and what material.</li>
  <li>No validity date, which lets old prices be claimed months later.</li>
  <li>Adding GST without being registered, or using CGST/SGST for an out-of-state customer.</li>
  <li>Totals worked out by hand with mistakes. Let a tool do the maths.</li>
  <li>Sending a photo of a handwritten page. A neat PDF looks far more professional.</li>
</ul>

<h2>How to send the quotation</h2>
<p>When a customer says "quotation required", reply quickly with a PDF and a short message, not just a price. You can copy this:</p>
<blockquote>Dear [Name], thank you for your enquiry. Please find attached our quotation QT/2026-27/014 for [work or items]. The prices are valid until [date]. Let me know if you have any questions or need any changes. Regards, [Your name], [Business name], [Phone]</blockquote>
<p>Follow up once, two or three days later, if you do not hear back. Many orders are won simply by being the one who replied first and followed up politely.</p>

<h2>Make your quotation for free</h2>
<p>The free <a href="/tools/quotation-maker">Quotation Maker</a> does all of this for you: add your logo, items, GST, discount and terms, and download a clean PDF to send on WhatsApp or email. No sign-up, and nothing is saved. It is also available <a href="/hi/tools/quotation-maker">in Hindi</a>. When the customer says yes, turn it into a bill with the free <a href="/tools/gst-invoice-generator">GST Invoice Generator</a>.</p>
<p>Sending quotes and bills every day? <a href="/services/business-automation">Business automation</a> can turn an accepted quote into an invoice in one click and send follow-up reminders for you.</p>
`,
  },
]
