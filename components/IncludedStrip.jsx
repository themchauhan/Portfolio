import { includedInEveryPlan } from "@/lib/pricing";

// "Included in every plan" – the reasons the price is premium.
export default function IncludedStrip({ className = "" }) {
  return (
    <div className={`rounded-2xl border border-black/10 bg-white p-6 md:p-8 ${className}`}>
      <p className="text-sm font-semibold uppercase tracking-widest text-[#ff5a1f]">Included in every plan</p>
      <ul className="mt-5 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
        {includedInEveryPlan.map(([t, d]) => (
          <li key={t} className="flex gap-3">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#111] text-xs font-bold text-white">✓</span>
            <div>
              <p className="font-semibold text-[#111]">{t}</p>
              <p className="text-sm text-[#555]">{d}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
