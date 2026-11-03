"use client"
import { usePathname } from "next/navigation";
import { waLink } from "@/lib/pricing";
import { track } from "@/lib/analytics";

const PRODUCTS = { clinicos: "ClinicOs", rentcorp: "RentCorp", cafecorp: "CafeCorp" };
const titleCase = (slug) => slug.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ");

// Pre-filled message depends on the page the visitor is on.
function messageFor(path) {
  const parts = path.split("/").filter(Boolean);
  if (PRODUCTS[parts[0]]) return `Hi Manish, I saw ${PRODUCTS[parts[0]]} on your website and would like a demo.`;
  if (parts[0] === "services" && parts[2]) return `Hi Manish, I'm interested in ${titleCase(parts[1])} for my business in ${titleCase(parts[2])}.`;
  if (parts[0] === "services" && parts[1]) return `Hi Manish, I'm interested in ${titleCase(parts[1])}.`;
  if (parts[0] === "locations" && parts[1]) return `Hi Manish, I run a business in ${titleCase(parts[1])} and want to discuss software/automation.`;
  if (parts[0] === "pricing") return "Hi Manish, I have a question about your pricing.";
  if (parts[1] === "website-cost-calculator") return "Hi Manish, I'd like a quote for a website.";
  if (parts[0] === "tools") return "Hi Manish, I used your free tool and have a question.";
  return "Hi Manish, I visited your website and would like to discuss a project.";
}

export default function WhatsAppButton() {
  const path = usePathname() || "/";
  return (
    <a
      href={waLink(messageFor(path))}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("whatsapp_click", { page: path, position: "floating" })}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3.5 font-semibold text-white shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#1ebe5b] print:hidden"
    >
      <svg width="24" height="24" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
        <path d="M16.04 3C9.4 3 4 8.36 4 14.96c0 2.1.56 4.15 1.62 5.95L4 29l8.3-1.58a12.1 12.1 0 0 0 3.74.6c6.63 0 12.03-5.36 12.03-11.96C28.07 8.36 22.67 3 16.04 3Zm0 21.8c-1.2 0-2.38-.2-3.5-.6l-.25-.09-4.93.94.95-4.76-.16-.26a9.8 9.8 0 0 1-1.52-5.07c0-5.43 4.45-9.84 9.41-9.84 5.2 0 9.42 4.41 9.42 9.84 0 5.43-4.22 9.84-9.42 9.84Zm5.17-7.36c-.28-.14-1.68-.82-1.94-.92-.26-.09-.45-.14-.64.14-.19.28-.73.92-.9 1.1-.17.19-.33.21-.61.07-.28-.14-1.2-.44-2.28-1.4-.84-.75-1.41-1.67-1.58-1.95-.16-.28-.02-.43.13-.57.13-.13.28-.33.42-.5.14-.16.19-.28.28-.47.1-.19.05-.35-.02-.49-.07-.14-.64-1.53-.87-2.1-.23-.55-.47-.47-.64-.48h-.55c-.19 0-.5.07-.75.35-.26.28-.99.96-.99 2.34s1.01 2.71 1.15 2.9c.14.19 1.99 3.03 4.82 4.25.67.29 1.2.46 1.61.59.68.21 1.3.18 1.78.11.54-.08 1.68-.68 1.92-1.35.24-.66.24-1.23.17-1.35-.07-.12-.26-.19-.54-.33Z" />
      </svg>
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}
