// "Free / no account" reassurance shown at the top of every free tool.
const BADGES = {
  en: ["100% free", "No sign-in or sign-up", "Unlimited use", "Nothing stored"],
  hi: ["100% फ़्री", "कोई लॉगिन या साइन-अप नहीं", "जितना चाहें इस्तेमाल करें", "कुछ भी सेव नहीं होता"],
};

export default function FreeBadges({ className = "", lang = "en" }) {
  const badges = BADGES[lang] || BADGES.en;
  return (
    <ul className={`flex flex-wrap gap-2.5 ${className}`} aria-label="Tool features">
      {badges.map((b) => (
        <li key={b} className="inline-flex items-center gap-1.5 rounded-full border border-black/15 bg-white px-4 py-1.5 text-sm font-semibold">
          <span className="text-[#ff5a1f]" aria-hidden="true">✓</span>{b}
        </li>
      ))}
    </ul>
  )
}
