// Wordmark: monogram "M" whose last stroke ends in an orange dot, plus the name.
export default function Logo({ dark = false, className = "" }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="38" height="38" viewBox="0 0 48 48" aria-hidden="true">
        <rect width="48" height="48" rx="11" fill={dark ? "#ffffff" : "#111111"} />
        <path d="M12 35V13l12 14 12-14v10" fill="none" stroke={dark ? "#111111" : "#ffffff"} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="36" cy="35.5" r="3.6" fill="#ff5a1f" />
      </svg>
      <span className={`font-display text-xl font-extrabold leading-none tracking-tight ${dark ? "text-white" : "text-[#111]"}`}>
        manish<span className="text-[#ff5a1f]">.</span>
      </span>
    </span>
  );
}
