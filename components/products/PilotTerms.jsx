import { inr, pilot } from "@/lib/pricing";

// Pilot offer with the usage charges the client pays, shown up front. Used on /appointmentos and ClinicOs.
export default function PilotTerms({ className = "" }) {
  return (
    <div className={`grid gap-4 md:grid-cols-2 ${className}`}>
      <div className="rounded-2xl bg-[#ff5a1f] p-6 text-white md:p-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-white/80">Pilot offer</p>
        <ul className="mt-5 space-y-4 text-lg">
          <li><strong className="font-display text-2xl font-extrabold">Free for {pilot.freeLabel}.</strong><br />Software and setup, no charge.</li>
          <li><strong className="font-display text-2xl font-extrabold">Then {inr(pilot.priceAfter)}/month.</strong><br />Early price, fixed for the first year.</li>
          <li><strong className="font-display text-2xl font-extrabold">Stop anytime.</strong><br />No charge if you don&apos;t continue after the trial.</li>
        </ul>
      </div>
      <div className="rounded-2xl border-2 border-[#111] bg-white p-6 md:p-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#111]">Paid by you from day one</p>
        <p className="mt-3 text-[#444]">These usage charges come from third parties, not from me. They apply during the free trial too.</p>
        <dl className="mt-5 divide-y divide-black/10 border-y border-black/10">
          <div className="flex flex-wrap items-baseline justify-between gap-2 py-4">
            <dt className="font-semibold">WhatsApp messages</dt>
            <dd className="text-right"><span className="font-display text-xl font-extrabold">{pilot.whatsappPerMessage}</span> <span className="text-sm text-[#666]">per message, charged by Meta</span></dd>
          </div>
          <div className="flex flex-wrap items-baseline justify-between gap-2 py-4">
            <dt className="font-semibold">Phone number for missed-call alerts</dt>
            <dd className="text-right"><span className="font-display text-xl font-extrabold">{pilot.phoneNumberPerMonth}</span> <span className="text-sm text-[#666]">per month, charged by the provider</span></dd>
          </div>
        </dl>
        <p className="mt-4 text-sm text-[#666]">Typical ranges; the exact rate depends on the provider and message type. I help you set them up, and you see the bills directly.</p>
      </div>
      <p className="text-[#444] md:col-span-2">In return: honest feedback while we build it together, and a Google review if you&apos;re happy.</p>
    </div>
  );
}
