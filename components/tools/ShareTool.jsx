"use client"
import { useEffect, useState } from "react";
import { track } from "@/lib/analytics";

// Share a free tool: WhatsApp, LinkedIn, copy link, and the phone's share menu.
export default function ShareTool({ url, title, message, className = "" }) {
  const [copied, setCopied] = useState(false);
  const [canShare, setCanShare] = useState(false);
  useEffect(() => setCanShare(typeof navigator !== "undefined" && !!navigator.share), []);

  const text = message || `${title}: free, no sign-up needed.`;
  const send = (method) => track("share_tool", { tool: title, method });
  const btn = "inline-flex items-center gap-2 rounded-full border border-black/20 bg-white px-4 py-2 text-sm font-semibold hover:border-[#111]";

  return (
    <div className={`flex flex-wrap items-center gap-2.5 print:hidden ${className}`}>
      <span className="text-sm font-semibold text-[#555]">Share this free tool:</span>
      <a className={btn} href={`https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`} target="_blank" rel="noopener noreferrer" onClick={() => send("whatsapp")}>
        <span className="text-[#25D366]" aria-hidden="true">●</span>WhatsApp
      </a>
      <a className={btn} href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer" onClick={() => send("linkedin")}>
        <span className="text-[#0a66c2]" aria-hidden="true">●</span>LinkedIn
      </a>
      <button type="button" className={btn} onClick={async () => {
        try { await navigator.clipboard.writeText(url); setCopied(true); setTimeout(() => setCopied(false), 2000); send("copy"); } catch {}
      }}>
        {copied ? "✓ Link copied" : "Copy link"}
      </button>
      {canShare && (
        <button type="button" className={btn} onClick={async () => {
          try { await navigator.share({ title, text, url }); send("native"); } catch {}
        }}>
          More…
        </button>
      )}
    </div>
  );
}
