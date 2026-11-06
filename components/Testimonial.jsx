import { RECOMMENDATIONS_URL, testimonials } from "@/lib/testimonials";

// One large quote from a LinkedIn recommendation, styled for a dark section. `who` is a key in lib/testimonials, `quote` picks the excerpt.
export default function Testimonial({ who, quote, className = "" }) {
  const t = testimonials[who];
  return (
    <figure className={className}>
      <span aria-hidden="true" className="block font-display text-7xl font-extrabold leading-none text-[#ff5a1f] md:text-8xl">&ldquo;</span>
      <blockquote className="-mt-4 max-w-5xl font-display text-2xl font-bold leading-snug tracking-tight md:-mt-6 md:text-4xl">
        {t.quotes[quote]}
      </blockquote>
      <figcaption className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/20 pt-6">
        <div>
          <p className="font-semibold">{t.name}</p>
          <p className="text-sm opacity-70">{t.role} · {t.relation}</p>
        </div>
        {t.linkedin && <a href={RECOMMENDATIONS_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold underline decoration-[#ff5a1f] decoration-2 underline-offset-4 hover:text-[#ff5a1f]">
          Read it on LinkedIn →
        </a>}
      </figcaption>
    </figure>
  );
}
