"use client";

import Link from "next/link";
import { useState } from "react";

const tiers = [
  {
    name: "Marketing",
    price: "$799",
    per: "/mo",
    desc: "Everything you need to run consistent, branded marketing campaigns across email, SMS, and social.",
    cta: "Get started",
    features: {
      "Social scheduling": true,
      "Promo emails & SMS": true,
      "Seasonal campaigns": true,
      "Appointment reminders": false,
      "Win-back sequences": false,
      "Membership renewals": false,
      "Expense filing": false,
      "Multi-PMS support": false,
      "White-label branding": false,
      "BI dashboard (coming soon)": false,
    },
  },
  {
    name: "Full Operations",
    price: "$1,499",
    per: "/mo",
    desc: "Marketing plus the full operations and client comms stack — the system high-performing practices run on.",
    cta: "Get started",
    recommended: true,
    pmsCount: "3 PMS integrations",
    features: {
      "Social scheduling": true,
      "Promo emails & SMS": true,
      "Seasonal campaigns": true,
      "Appointment reminders": true,
      "Win-back sequences": true,
      "Membership renewals": true,
      "Expense filing": true,
      "Multi-PMS support": true,
      "White-label branding": false,
      "BI dashboard (coming soon)": false,
    },
  },
  {
    name: "White-label",
    price: "Custom",
    per: "",
    desc: "Resell the full platform under your own brand. Built for agencies, consultants, and multi-site operators.",
    cta: "Talk to us",
    features: {
      "Social scheduling": true,
      "Promo emails & SMS": true,
      "Seasonal campaigns": true,
      "Appointment reminders": true,
      "Win-back sequences": true,
      "Membership renewals": true,
      "Expense filing": true,
      "Multi-PMS support": true,
      "White-label branding": true,
      "BI dashboard (coming soon)": true,
    },
  },
];

const faqs = [
  {
    q: "How long does onboarding take?",
    a: "Most practices are live within 5 business days. We handle the PMS integration and initial content calibration — you review and approve the first batch of campaigns before anything goes out.",
  },
  {
    q: "What PMS systems do you support?",
    a: "Zenoti, Vagaro, Pabau, and Boulevard at launch. Additional integrations are on our roadmap. If you're on a different platform, reach out — we're adding new connections regularly.",
  },
  {
    q: "Is there a contract?",
    a: "Month-to-month. No long-term commitment required. You can upgrade, downgrade, or cancel from your dashboard at any time.",
  },
  {
    q: "Can we approve content before it goes out?",
    a: "Yes. Every campaign goes through a human-approval step before publishing. You assign who on your team has approval authority, and nothing ships without a green light.",
  },
];

function Accordion({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#DDD8D0] rounded-[8px] overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 bg-white hover:bg-[#F0EDE6] transition-colors"
        aria-expanded={open}
      >
        <span className="font-medium text-[#1A1A1A] text-sm md:text-base">{q}</span>
        <span
          className={`shrink-0 text-[#4A7C95] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="px-5 py-4 bg-white border-t border-[#DDD8D0]">
          <p className="text-[#5C5C5C] text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

const featureKeys = [
  "Social scheduling",
  "Promo emails & SMS",
  "Seasonal campaigns",
  "Appointment reminders",
  "Win-back sequences",
  "Membership renewals",
  "Expense filing",
  "Multi-PMS support",
  "White-label branding",
  "BI dashboard (coming soon)",
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-[#FAF8F5]">
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-5">
            Simple, transparent pricing
          </h1>
          <p className="text-[18px] leading-[28px] text-[#5C5C5C] max-w-xl mx-auto">
            Month-to-month. No contracts. No surprises. Upgrade or downgrade any time.
          </p>
        </div>
      </section>

      {/* Tier cards */}
      <section className="pb-20 px-6 bg-[#FAF8F5]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`rounded-[12px] p-6 flex flex-col ${
                t.recommended
                  ? "bg-white border-2 border-[#4A7C95] shadow-xl"
                  : "bg-white border border-[#DDD8D0] shadow-sm"
              }`}
            >
              {t.recommended && (
                <div className="inline-block self-start bg-[#4A7C95] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  Recommended
                </div>
              )}
              <h2
                className={`font-[family-name:var(--font-playfair)] text-2xl font-bold mb-1 ${
                  t.recommended ? "text-[#4A7C95]" : "text-[#1A1A1A]"
                }`}
              >
                {t.name}
              </h2>
              <div className="flex items-baseline gap-1 mb-3">
                <span className="text-4xl font-bold text-[#1A1A1A]">{t.price}</span>
                <span className="text-[#5C5C5C] text-base">{t.per}</span>
              </div>
              <p className="text-[#5C5C5C] text-sm mb-6 flex-1">{t.desc}</p>
              <Link
                href="/contact"
                className={`block w-full text-center py-3 rounded-[6px] font-semibold transition-colors ${
                  t.recommended
                    ? "bg-[#4A7C95] text-white hover:bg-[#3A6478]"
                    : "border border-[#4A7C95] text-[#4A7C95] hover:bg-[#4A7C95]/8"
                }`}
              >
                {t.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20 px-6 bg-[#F0EDE6]">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#1A1A1A] text-center mb-12">
            Feature comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-[12px] border border-[#DDD8D0] overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-[#F0EDE6]">
                  <th className="text-left px-5 py-4 text-sm font-semibold text-[#1A1A1A] w-[40%]">Feature</th>
                  {tiers.map((t) => (
                    <th
                      key={t.name}
                      className={`text-center px-4 py-4 text-sm font-semibold ${
                        t.recommended ? "text-[#4A7C95]" : "text-[#1A1A1A]"
                      }`}
                    >
                      {t.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featureKeys.map((key, i) => (
                  <tr
                    key={key}
                    className={`border-t border-[#DDD8D0] ${i % 2 === 0 ? "bg-white" : "bg-[#FAF8F5]"}`}
                  >
                    <td className="px-5 py-3 text-sm text-[#1A1A1A]">{key}</td>
                    {tiers.map((t) => (
                      <td key={t.name} className="text-center px-4 py-3">
                        {(t.features as Record<string, boolean>)[key] ? (
                          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#3D9970" strokeWidth="2.5" className="inline-block">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <span className="text-[#DDD8D0] text-lg">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-[#FAF8F5]">
        <div className="max-w-[700px] mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#1A1A1A] text-center mb-12">
            Common questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <Accordion key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#4A7C95]">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-white mb-4">
            Not sure which plan is right?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Book a call. We'll recommend the tier that fits your practice size and goals.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#4A7C95] text-lg px-8 py-4 rounded-[6px] font-semibold hover:bg-[#F0EDE6] transition-colors"
          >
            Talk to us
          </Link>
        </div>
      </section>
    </>
  );
}
