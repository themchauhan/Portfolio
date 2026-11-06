"use client";

import { useEffect, useState } from "react";
import Testimonial from "@/components/Testimonial";

// Rotating recommendations for a dark section. `items` is a list of { who, quote } (see lib/testimonials).
// `title` adds a heading above the quotes.
// All slides share one grid cell, so the height stays at the tallest quote and nothing jumps.
export default function TestimonialSlider({ items, title, interval = 7000, className = "" }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setI((n) => (n + 1) % items.length), interval);
    return () => clearInterval(id);
  }, [paused, interval, items.length]);

  const go = (n) => setI((n + items.length) % items.length);

  return (
    <div
      className={className}
      role="region"
      aria-roledescription="carousel"
      aria-label="Recommendations"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {title && (
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#ff5a1f]">Recommendations</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight md:text-5xl">{title}</h2>
        </div>
      )}
      <div className="grid">
        {items.map((t, n) => (
          <div
            key={`${t.who}-${t.quote}`}
            aria-hidden={n !== i}
            className={`col-start-1 row-start-1 transition-[opacity,visibility] duration-700 ${n === i ? "opacity-100" : "pointer-events-none invisible opacity-0"}`}
          >
            <Testimonial who={t.who} quote={t.quote} />
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center gap-4">
        <button type="button" onClick={() => go(i - 1)} aria-label="Previous recommendation" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 hover:border-[#ff5a1f] hover:text-[#ff5a1f]">←</button>
        <div className="flex gap-2">
          {items.map((t, n) => (
            <button
              key={`${t.who}-dot`}
              type="button"
              onClick={() => go(n)}
              aria-label={`Show recommendation ${n + 1} of ${items.length}`}
              aria-current={n === i}
              className={`h-2 rounded-full transition-all ${n === i ? "w-8 bg-[#ff5a1f]" : "w-2 bg-white/30 hover:bg-white/60"}`}
            />
          ))}
        </div>
        <button type="button" onClick={() => go(i + 1)} aria-label="Next recommendation" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 hover:border-[#ff5a1f] hover:text-[#ff5a1f]">→</button>
      </div>
    </div>
  );
}
