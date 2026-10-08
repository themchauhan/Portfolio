"use client"
import { useMemo, useState } from "react";
import { quoteRates as R, inr, waLink } from "@/lib/pricing";
import { track } from "@/lib/analytics";

const round = (n) => Math.round(n / 500) * 500; // friendly numbers

export default function QuoteEstimator({ compact = false }) {
  const [type, setType] = useState("business");
  const [pages, setPages] = useState(5);
  const [features, setFeatures] = useState(["whatsapp", "seo"]);
  const [rush, setRush] = useState(false);
  const [maintenance, setMaintenance] = useState(false);

  const t = R.types.find((x) => x.id === type);
  const showPages = type !== "automation";
  const toggle = (id) => setFeatures(features.includes(id) ? features.filter((f) => f !== id) : [...features, id]);

  const est = useMemo(() => {
    let total = t.base + (showPages ? Math.max(0, pages - t.includedPages) * R.extraPage : 0);
    for (const f of R.features) if (features.includes(f.id)) total += f.perPage ? f.price * (showPages ? pages : 1) : f.price;
    if (rush) total *= R.rushMultiplier;
    return { low: round(total * R.rangeLow), high: round(total * R.rangeHigh) };
  }, [t, pages, features, rush, showPages]);

  const summary = [
    `Project: ${t.name}`,
    showPages ? `Pages: ${pages}` : null,
    features.length ? `Features: ${R.features.filter((f) => features.includes(f.id)).map((f) => f.name).join(", ")}` : null,
    rush ? "Delivery: rush" : "Delivery: standard",
    maintenance ? `Monthly maintenance: yes (${inr(R.maintenancePerMonth)}/month)` : null,
    `Estimate: ${inr(est.low)} – ${inr(est.high)}`,
  ].filter(Boolean);
  const message = `Hi Manish, I'd like a quotation for:\n${summary.map((l) => `• ${l}`).join("\n")}\n\nAbout my business: `;

  const chip = (on) => `cursor-pointer rounded-xl border-2 p-4 text-left transition ${on ? "border-[#ff5a1f] bg-[#fff4ef]" : "border-black/10 bg-white hover:border-black/30"}`;

  return (
    <div className={`grid gap-8 ${compact ? "" : "lg:grid-cols-[1.5fr_1fr]"}`}>
      <div className="space-y-8">
        <div>
          <p className="font-display text-lg font-extrabold">1. What do you need?</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {R.types.map((x) => (
              <button type="button" key={x.id} onClick={() => setType(x.id)} className={chip(type === x.id)} aria-pressed={type === x.id}>
                <span className="block font-semibold">{x.name}</span>
                <span className="mt-0.5 block text-sm text-[#666]">{x.desc}</span>
              </button>
            ))}
          </div>
        </div>

        {showPages && (
          <div>
            <p className="font-display text-lg font-extrabold">2. How many pages? <span className="font-sans text-base font-semibold text-[#ff5a1f]">{pages}</span></p>
            <input type="range" min="1" max="30" value={pages} onChange={(e) => setPages(Number(e.target.value))} className="mt-3 w-full accent-[#ff5a1f]" aria-label="Number of pages" />
            <p className="text-sm text-[#666]">{t.includedPages} page{t.includedPages === 1 ? "" : "s"} included, then {inr(R.extraPage)} per extra page.</p>
          </div>
        )}

        <div>
          <p className="font-display text-lg font-extrabold">{showPages ? "3" : "2"}. Features</p>
          <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
            {R.features.map((f) => (
              <label key={f.id} className={`flex items-center gap-3 ${chip(features.includes(f.id))} py-3`}>
                <input type="checkbox" checked={features.includes(f.id)} onChange={() => toggle(f.id)} className="h-4 w-4 accent-[#ff5a1f]" />
                <span className="text-[15px] font-medium">{f.name}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-6">
          <label className="flex items-center gap-2.5 font-medium"><input type="checkbox" checked={rush} onChange={(e) => setRush(e.target.checked)} className="h-4 w-4 accent-[#ff5a1f]" />Rush delivery (faster, +{Math.round((R.rushMultiplier - 1) * 100)}%)</label>
          <label className="flex items-center gap-2.5 font-medium"><input type="checkbox" checked={maintenance} onChange={(e) => setMaintenance(e.target.checked)} className="h-4 w-4 accent-[#ff5a1f]" />Monthly maintenance ({inr(R.maintenancePerMonth)}/month)</label>
        </div>

        {/* Phones: keep the estimate visible while choosing options */}
        <div className="sticky bottom-3 z-40 rounded-xl bg-[#111] px-4 py-3 pr-20 text-white shadow-lg lg:hidden">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#ff5a1f]">Estimate</p>
          <p className="font-display text-xl font-extrabold">{inr(est.low)} – {inr(est.high)}</p>
        </div>
      </div>

      <aside className="h-fit rounded-2xl bg-[#111] p-7 text-white lg:sticky lg:top-24">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#ff5a1f]">Estimated cost</p>
        <p className="mt-3 font-display text-4xl font-extrabold leading-tight">{inr(est.low)} – {inr(est.high)}</p>
        {maintenance && <p className="mt-2 text-[#b9b5ad]">+ {inr(R.maintenancePerMonth)}/month maintenance</p>}
        <ul className="mt-5 space-y-1.5 text-sm text-[#d8d4cc]">
          {summary.slice(0, -1).map((l) => <li key={l}>• {l}</li>)}
        </ul>
        <a
          href={waLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("quote_request", { project_type: type, pages: showPages ? pages : 0, feature_count: features.length, rush, estimate_low: est.low })}
          className="mt-7 block rounded-full bg-[#25D366] px-5 py-3.5 text-center font-semibold text-white hover:bg-[#1ebe5b]"
        >
          Send for a final quote on WhatsApp
        </a>
        <p className="mt-4 text-sm text-[#8d8982]">This is an estimate, not a quotation. I review your requirements and send a fixed quote, usually the same day.</p>
      </aside>
    </div>
  );
}
