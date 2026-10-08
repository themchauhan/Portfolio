import Link from "next/link";
import Logo from "@/components/Logo";
import { serviceList, cityList, pathFor } from "@/lib/seo";

const cols = [
  ["Explore", [["About", "/about"], ["Work", "/projects"], ["Academics", "/academics"], ["Blog", "/blog"], ["Resources", "/resources"]]],
  ["Products", [["ClinicOs", "/clinicos"], ["RentCorp", "/rentcorp"], ["CafeCorp", "/cafecorp"], ["Pricing", "/pricing"]]],
  ["Free tools", [["All free tools", "/tools"], ["Rent Receipt Generator", "/tools/rent-receipt-generator"], ["GST Invoice Generator", "/tools/gst-invoice-generator"], ["Website Cost Calculator", "/tools/website-cost-calculator"]]],
];

const areas = ["rewari", "narnaul", "mahendergarh", "gurgaon", "pataudi", "bhiwani", "jaipur", "ambala", "chandigarh", "mohali"].map((slug) => cityList.find((c) => c.slug === slug));

const Footer = () => (
  <footer className="prod bg-[#111] text-white print:hidden">
    <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-5">
        <div className="md:col-span-2">
          <Logo dark />
          <p className="mt-5 max-w-sm text-[#b9b5ad]">
            Full stack developer building websites and business software that people actually use.
          </p>
          <Link href="/contacts" className="mt-6 inline-block rounded-full bg-[#ff5a1f] px-6 py-3 font-semibold text-white hover:bg-white hover:text-[#111]">
            Start a project
          </Link>
        </div>
        {cols.map(([title, items]) => (
          <div key={title}>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#ff5a1f]">{title}</p>
            <ul className="mt-5 space-y-3">
              {items.map(([label, href]) => (
                <li key={href}><Link href={href} className="text-[#d8d4cc] hover:text-white">{label}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-14 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-[#ff5a1f]">Services</p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {serviceList.map((s) => <li key={s.slug}><Link href={`/services/${s.slug}`} className="text-[#d8d4cc] hover:text-white">{s.name}</Link></li>)}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-[#ff5a1f]">Areas</p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-3">
            {areas.map((c) => <li key={c.slug}><Link href={`/locations/${c.slug}`} className="text-[#d8d4cc] hover:text-white">{c.name}</Link></li>)}
            <li><Link href="/services" className="font-semibold text-white underline decoration-[#ff5a1f] underline-offset-4">All areas →</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-sm text-[#8d8982] sm:flex-row sm:items-center">
        <p>&copy; {new Date().getFullYear()} Manish Chauhan. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="https://www.linkedin.com/in/themchauhan" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
