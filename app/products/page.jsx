import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { productList } from "@/lib/products";
import { getExperienceText } from "@/utils/experience";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Products - ClinicOs, RentCorp, CafeCorp",
  description: "Business software built to replace paperwork: clinic management, rental management and café POS.",
  alternates: { canonical: "https://themanishchauhan.in/products" },
});

export default function Page() {
  return (
    <main className="prod bg-white text-slate-800 antialiased">
      <Nav />
      <div className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-400">Products</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold text-white md:text-5xl">Software that replaces paperwork.</h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-300">
            Three focused business apps, built from {getExperienceText()} of web development experience. Pick one to see what it does, or log in to your account.
          </p>
        </div>
      </div>
      <section className="!py-14 md:!py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-3">
          {productList.map((p) => (
            <div key={p.slug} className={`flex flex-col border border-slate-200 border-t-4 ${p.accent.border} bg-white p-7 shadow-sm`}>
              <span className={`text-sm font-semibold ${p.accent.text}`}>{p.tag}</span>
              <h2 className="mt-2 text-2xl font-extrabold text-slate-900">{p.name}</h2>
              <p className="mt-3 flex-1 text-slate-600">{p.summary}</p>
              <ul className="mt-5 space-y-1.5 text-sm text-slate-700">
                {p.features.slice(0, 3).map(([, t]) => <li key={t} className="flex gap-2"><span className={p.accent.text}>✓</span>{t}</li>)}
              </ul>
              <div className="mt-7 flex gap-3">
                <Link href={`/${p.slug}`} className={`flex-1 rounded-md ${p.accent.bg} ${p.accent.hover} px-4 py-2.5 text-center text-sm font-semibold text-white`}>Learn more</Link>
                <a href={p.appUrl} className="rounded-md border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50">Login</a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
