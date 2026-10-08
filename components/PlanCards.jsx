import { inr, waLink } from "@/lib/pricing";
import TrackedLink from "@/components/TrackedLink";

// Plan cards used on /pricing and on product pages.
export default function PlanCards({ plans, productName, unit = "/month", dark = false }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {plans.map((p) => {
        const label = `${productName} ${p.name} plan (${p.from ? "from " : ""}${inr(p.price)}${p.from ? "" : unit})`;
        return (
          <div key={p.name} className={`relative flex flex-col rounded-2xl border-2 p-7 ${p.popular ? "border-[#ff5a1f]" : dark ? "border-white/15" : "border-black/10"} ${dark ? "bg-white/5 text-white" : "bg-white"}`}>
            {p.popular && <span className="absolute -top-3 left-7 rounded-full bg-[#ff5a1f] px-3 py-0.5 text-xs font-bold uppercase tracking-wide text-white">Most popular</span>}
            <h3 className="font-display text-2xl font-extrabold">{p.name}</h3>
            <p className={`mt-1 text-sm ${dark ? "text-[#b9b5ad]" : "text-[#666]"}`}>{p.for || p.time}</p>
            <p className="mt-5">
              {p.from && <span className={`mr-1 text-sm ${dark ? "text-[#b9b5ad]" : "text-[#666]"}`}>from</span>}
              <span className="font-display text-4xl font-extrabold">{inr(p.price)}</span>
              {!p.from && <span className={`text-sm ${dark ? "text-[#b9b5ad]" : "text-[#666]"}`}>{unit}</span>}
            </p>
            <ul className="mt-6 flex-1 space-y-2.5 text-[15px]">
              {p.features.map((f) => <li key={f} className="flex gap-2.5"><span className="text-[#ff5a1f]">✓</span>{f}</li>)}
            </ul>
            <TrackedLink
              event="pricing_plan_click"
              params={{ product: productName, plan: p.name }}
              href={waLink(`Hi Manish, I'm interested in the ${label}. Can we set up a demo?`)}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-7 block rounded-full px-5 py-3 text-center font-semibold ${p.popular ? "bg-[#ff5a1f] text-white hover:bg-[#111]" : dark ? "bg-white text-[#111] hover:bg-[#ff5a1f] hover:text-white" : "bg-[#111] text-white hover:bg-[#ff5a1f]"}`}
            >
              Get started on WhatsApp
            </TrackedLink>
          </div>
        );
      })}
    </div>
  );
}
