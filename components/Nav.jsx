"use client"

import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";

const links = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Work" },
  { href: "/products", label: "Products" },
  { href: "/pricing", label: "Pricing" },
  { href: "/academics", label: "Academics" },
  { href: "/blog", label: "Blog" },
];

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f4f1ec]/95 backdrop-blur print:hidden">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
        <Link href="/" aria-label="Manish Chauhan - home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-[15px] font-medium text-[#111] hover:text-[#ff5a1f]">
              {l.label}
            </Link>
          ))}
          <Link href="/contacts" className="rounded-full bg-[#111] px-5 py-2.5 text-[15px] font-semibold text-white hover:bg-[#ff5a1f]">
            Let&apos;s talk
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 text-[#111] md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? <path strokeLinecap="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-black/10 bg-[#f4f1ec] px-5 pb-5 md:hidden" aria-label="Mobile">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b border-black/10 py-3.5 text-lg font-medium text-[#111]">
              {l.label}
            </Link>
          ))}
          <Link href="/contacts" onClick={() => setOpen(false)} className="mt-4 block rounded-full bg-[#ff5a1f] px-5 py-3 text-center font-semibold text-white">
            Let&apos;s talk
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Nav;
