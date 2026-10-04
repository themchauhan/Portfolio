import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactForm from "@/components/products/ContactForm";
import { getExperienceText } from "@/utils/experience";
import { serviceList, cityList, pathFor } from "@/lib/seo";

const Blade = ({ id, bg = "bg-white", title, sub, children }) => (
  <section id={id} className={`${bg} !py-14 md:!py-20`}>
    <div className="mx-auto max-w-6xl px-5">
      {title && (
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">{title}</h2>
          <div className="mt-3 h-1 w-14 bg-orange-500" />
          {sub && <p className="mt-5 text-lg text-slate-600">{sub}</p>}
        </div>
      )}
      {children}
    </div>
  </section>
);

function AppMockup({ product }) {
  const { mock, accent } = product;
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl" aria-label={`${product.name} dashboard preview with sample data`}>
      <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-100 px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-red-400" /><span className="h-3 w-3 rounded-full bg-yellow-400" /><span className="h-3 w-3 rounded-full bg-green-400" />
        <span className="ml-3 truncate text-xs text-slate-500">{product.appUrl.replace("https://", "")}</span>
      </div>
      <div className="p-4 sm:p-6">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-slate-900">{mock.title}</h3>
          <span className={`rounded-full ${accent.soft} px-3 py-1 text-xs font-semibold ${accent.text}`}>Sample data</span>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {mock.stats.map(([k, v]) => (
            <div key={k} className={`rounded-lg ${accent.soft} p-3`}>
              <div className="text-xs text-slate-500">{k}</div>
              <div className={`mt-1 text-lg font-bold ${accent.text}`}>{v}</div>
            </div>
          ))}
        </div>
        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[420px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-400">
                {mock.columns.map((c) => <th key={c} className="py-2 pr-3 font-semibold">{c}</th>)}
              </tr>
            </thead>
            <tbody>
              {mock.rows.map((r) => (
                <tr key={r[0]} className="border-b border-slate-100 text-slate-700">
                  {r.map((c, i) => <td key={i} className={`py-2.5 pr-3 ${i === 0 ? "font-medium text-slate-900" : ""}`}>{c}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default function ProductPage({ product }) {
  const a = product.accent;
  const experience = getExperienceText();
  return (
    <main className="prod bg-white text-slate-800 antialiased">
      <Nav />

      {/* Sub-header */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <div className="flex items-center gap-3">
            <Link href="/products" className="text-sm text-slate-500 hover:text-slate-900">← All products</Link>
            <span className="text-slate-300">|</span>
            <span className={`text-lg font-extrabold ${a.text}`}>{product.name}</span>
          </div>
          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden text-sm font-medium text-slate-700 hover:text-slate-900 sm:block">Request demo</a>
            <a href={product.appUrl} className={`rounded-md ${a.bg} ${a.hover} px-5 py-2 text-sm font-semibold text-white`}>Login</a>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className={`${a.soft}`}>
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 md:py-20 lg:grid-cols-2">
          <div>
            <span className={`inline-block rounded-full border ${a.border} px-4 py-1 text-sm font-semibold ${a.text}`}>{product.tag}</span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">{product.headline}</h1>
            <p className="mt-5 text-lg text-slate-600">{product.summary}</p>
            <p className="mt-3 text-sm text-slate-500">Built for: {product.audience}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className={`rounded-md ${a.bg} ${a.hover} px-7 py-3 font-semibold text-white`}>Request a demo</a>
              <a href={product.appUrl} className="rounded-md border border-slate-300 bg-white px-7 py-3 font-semibold text-slate-800 hover:bg-slate-50">Login to {product.name}</a>
            </div>
          </div>
          <AppMockup product={product} />
        </div>
      </div>

      {/* Replaces */}
      <Blade title={`What ${product.name} replaces`} sub="Move off the manual way of working, one task at a time.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {product.replaces.map((t) => (
            <div key={t} className="flex items-start gap-3 border border-slate-200 bg-white p-5">
              <span className="mt-0.5 text-rose-500">✕</span>
              <p className="text-slate-700">{t}</p>
            </div>
          ))}
        </div>
      </Blade>

      {/* Features */}
      <Blade id="features" bg="bg-slate-50" title="Key features">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {product.features.map(([icon, t, d]) => (
            <div key={t} className={`border border-slate-200 border-t-4 ${a.border} bg-white p-6 shadow-sm`}>
              <div className="text-3xl">{icon}</div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">{t}</h3>
              <p className="mt-2 text-slate-600">{d}</p>
            </div>
          ))}
        </div>
      </Blade>

      {/* Built from experience */}
      <div className={`${a.band}`}>
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-16">
          <div className="grid items-center gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-white md:text-3xl">Built by a developer with {experience} of experience</h2>
              <p className={`mt-4 text-lg ${a.bandText}`}>
                {product.name} is designed and built by Manish Chauhan, a full-stack developer who has spent years building production web applications. Every feature comes from real day-to-day workflows, not a feature checklist.
              </p>
            </div>
            <div className="md:text-right">
              <Link href="/about" className="inline-block rounded-md bg-white px-6 py-3 font-semibold text-slate-900 hover:bg-slate-100">About Manish →</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Local availability */}
      {serviceList.filter((sv) => sv.product === product.slug).map((sv) => (
        <Blade key={sv.slug} bg="bg-white" title={`${sv.name} near you`} sub="Set up and supported for businesses across Haryana.">
          <ul className="flex flex-wrap gap-3">
            {cityList.map((c) => (
              <li key={c.slug}>
                <Link href={pathFor(sv.slug, c.slug)} className="inline-block rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:border-orange-500 hover:text-orange-600">{c.name}</Link>
              </li>
            ))}
          </ul>
        </Blade>
      ))}

      {/* FAQ */}
      <Blade id="faq" title="Frequently asked questions">
        <div className="max-w-3xl divide-y divide-slate-200 border-y border-slate-200">
          {product.faqs.map(([q, ans]) => (
            <details key={q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
                {q}<span className="text-2xl text-orange-500 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-slate-600">{ans}</p>
            </details>
          ))}
        </div>
      </Blade>

      {/* Contact */}
      <Blade id="contact" bg="bg-slate-100">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">See {product.name} in action</h2>
            <div className="mt-3 h-1 w-14 bg-orange-500" />
            <p className="mt-5 text-lg text-slate-600">Request a walkthrough and I&apos;ll show you how it fits your business. No pressure.</p>
            <ul className="mt-6 space-y-3 text-slate-700">
              {["Free 20-minute live demo", "Tailored to your workflow", "Reply within one working day"].map((t) => (
                <li key={t} className="flex gap-3"><span className="font-bold text-orange-500">✓</span>{t}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-6 shadow-sm md:p-8"><ContactForm product={product.name} /></div>
        </div>
      </Blade>

      <Footer />
    </main>
  );
}
