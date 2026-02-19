"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { label: "Product", href: "/product" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled
            ? "bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#DDD8D0] shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-[family-name:var(--font-playfair)] text-[22px] font-bold text-[#1A1A1A] tracking-tight hover:text-[#4A7C95] transition-colors"
          >
            AesthetIQ
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[15px] font-medium text-[#1A1A1A] hover:text-[#4A7C95] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="bg-[#4A7C95] text-white px-5 py-2 rounded-[6px] text-sm font-semibold hover:bg-[#3A6478] transition-colors"
            >
              Book a demo
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-[#1A1A1A] hover:bg-[#F0EDE6] transition-colors"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/40"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 bg-[#FAF8F5] shadow-xl transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Navigation menu"
      >
        <div className="flex items-center justify-between p-6 border-b border-[#DDD8D0]">
          <span className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#1A1A1A]">
            AesthetIQ
          </span>
          <button
            onClick={() => setOpen(false)}
            className="p-1 rounded-md hover:bg-[#F0EDE6] transition-colors"
            aria-label="Close menu"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="p-6 flex flex-col gap-4" aria-label="Mobile navigation">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[17px] font-medium text-[#1A1A1A] hover:text-[#4A7C95] transition-colors py-1"
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-[#DDD8D0]">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block w-full text-center bg-[#4A7C95] text-white px-6 py-3 rounded-[6px] font-semibold hover:bg-[#3A6478] transition-colors"
            >
              Book a demo
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
