import Link from "next/link";
import TrackedLink from "@/components/TrackedLink";
import { waLink } from "@/lib/pricing";

// Buttons for the dark offer band under each free tool: WhatsApp (pre-filled) + the product/service page.
const WA = {
  salary: {
    en: "Hi Manish, I used your salary slip tool. I'd like payroll automation for my business. Number of staff: ",
    hi: "नमस्ते मनीष, मैंने आपका सैलरी स्लिप टूल इस्तेमाल किया। मुझे अपने बिज़नेस के लिए पेरोल ऑटोमेशन चाहिए। स्टाफ़ की संख्या: ",
  },
  gst: {
    en: "Hi Manish, I used your GST invoice tool. I'd like billing software for my business. Type of business: ",
  },
  rent: {
    en: "Hi Manish, I used your rent receipt tool. I'd like to know about RentCorp. Number of units/rooms: ",
    hi: "नमस्ते मनीष, मैंने आपका रेंट रसीद टूल इस्तेमाल किया। मुझे RentCorp के बारे में जानना है। यूनिट/कमरों की संख्या: ",
  },
  quotation: {
    en: "Hi Manish, I used your quotation maker. I'd like to automate quotes and follow-ups for my business. My business: ",
    hi: "नमस्ते मनीष, मैंने आपका कोटेशन मेकर इस्तेमाल किया। मुझे अपने बिज़नेस के कोटेशन और फ़ॉलो-अप ऑटोमेट करने हैं। मेरा बिज़नेस: ",
  },
};

export default function ToolOfferActions({ tool, lang = "en", href, label }) {
  const message = WA[tool]?.[lang] || WA[tool]?.en;
  return (
    <div className="flex shrink-0 flex-wrap items-center gap-x-6 gap-y-4">
      <TrackedLink
        href={waLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        event="tool_offer_click"
        params={{ tool, lang, cta: "whatsapp" }}
        className="rounded-full bg-[#25D366] px-7 py-3.5 font-semibold text-white hover:bg-[#1ebe5b]"
      >
        {lang === "hi" ? "WhatsApp पर पूछें" : "Ask on WhatsApp"}
      </TrackedLink>
      <Link href={href} className="font-semibold text-white underline decoration-[#ff5a1f] decoration-2 underline-offset-4 hover:text-[#ff5a1f]">
        {label} →
      </Link>
    </div>
  );
}
