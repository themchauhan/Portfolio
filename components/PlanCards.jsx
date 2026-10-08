"use client"
import { useState } from "react";
import { inr, waLink, YEARLY_MONTHS } from "@/lib/pricing";
import TrackedLink from "@/components/TrackedLink";

// Plan cards with a Monthly / Yearly switch, used on /pricing and product pages.
export default function PlanCards({ plans, productName, setupFee, unitNote }) {
  const [yearly, setYearly] = useState(false);
  const unit = yearly ? "/year" : "/month";
  const priceOf = (p) => (yearly ? p.price * YEARLY_MONTHS : p.price);

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center gap-4">
        <div className="inline-flex rounded-full border border-black/15 bg-white p-1" role="group" aria-label="Billing period">
          {[["Monthly", false], ["Yearly", true]].map(([label, value]) => (
            <button key={label} type="button" onClick={() => setYearly(value)} aria-pressed={yearly === value}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${yearly === value ? "bg-[#111] text-white" : "text-[#444] hover:text-[#111]"}`}>
              {label}
            </button>
          ))}
        </div>
        <span className="rounded-full bg-[#ff5a1f]/10 px-3 py-1 text-sm font-semibold text-[#c2410c]">Yearly: 2 months free</span>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((p) => {
          const label = `${productName} ${p.name} plan (${inr(priceOf(p))}${unit}${unitNote ? ` ${unitNote}` : ""}, billed ${yearly ? "yearly" : "monthly"})`;
          return (
            <div key={p.name} className={`relative flex flex-col rounded-2xl border-2 bg-white p-7 ${p.popular ? "border-[#ff5a1f]" : "border-black/10"}`}>
              {p.popular && <span className="absolute -top-3 left-7 rounded-full bg-[#ff5a1f] px-3 py-0.5 text-xs font-bold uppercase tracking-wide text-white">Most popular</span>}
              <h3 className="font-display text-2xl font-extrabold">{p.name}</h3>
              <p className="mt-1 text-sm text-[#666]">{p.for}</p>
              <p className="mt-5">
                <span className="font-display text-4xl font-extrabold">{inr(priceOf(p))}</span>
                <span className="text-sm text-[#666]">{unit}{unitNote ? ` ${unitNote}` : ""}</span>
              </p>
              <p className="mt-1 text-sm text-[#666]">
                {yearly ? <>That&apos;s {inr(Math.round(priceOf(p) / 12))}/month</> : <>or {inr(p.price * YEARLY_MONTHS)}/year (2 months free)</>}
              </p>
              <ul className="mt-6 flex-1 space-y-2.5 text-[15px]">
                {p.features.map((f) => <li key={f} className="flex gap-2.5"><span className="text-[#ff5a1f]">✓</span>{f}</li>)}
              </ul>
              {setupFee ? <p className="mt-6 border-t border-black/10 pt-4 text-sm text-[#555]">+ {inr(setupFee)} one-time setup, data import &amp; training</p> : null}
              <TrackedLink
                event="pricing_plan_click"
                params={{ product: productName, plan: p.name, billing: yearly ? "yearly" : "monthly" }}
                href={waLink(`Hi Manish, I'm interested in the ${label}. Can we set up a demo?`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-5 block rounded-full px-5 py-3 text-center font-semibold ${p.popular ? "bg-[#ff5a1f] text-white hover:bg-[#111]" : "bg-[#111] text-white hover:bg-[#ff5a1f]"}`}
              >
                Get started on WhatsApp
              </TrackedLink>
            </div>
          );
        })}
      </div>
    </div>
  );
}
