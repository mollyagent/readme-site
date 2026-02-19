"use client";

import Link from "next/link";
import { useState } from "react";

const pmsOptions = ["Zenoti", "Vagaro", "Pabau", "Boulevard", "Other"];
const locationOptions = ["1", "2–3", "4–9", "10+"];

const metrics = [
  { value: "8 hrs", label: "saved per week, per location" },
  { value: "40%", label: "fewer no-shows with reminders" },
  { value: "24 hr", label: "campaign turnaround time" },
];

const pillars = [
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#8FAF9F" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
    title: "Marketing Agent",
    desc: "Social scheduling, seasonal campaigns, promo emails and SMS — executed on-brand, on time, without lifting a finger.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#8FAF9F" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
    title: "Operations Agent",
    desc: "Appointment reminders, expense filing, travel coordination — the back-office work that slows your team, handled automatically.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#8FAF9F" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
    title: "Client Comms Agent",
    desc: "Win-back sequences, membership renewals, follow-up messages — your clients feel heard, even when you're fully booked.",
  },
];

const testimonials = [
  {
    quote: "We went from scrambling to post anything on Instagram to having a full month of content ready by Monday morning. The agents just work.",
    name: "Sarah M.",
    title: "Owner, Lumière Medical Aesthetics",
    note: "Representative testimonial",
  },
  {
    quote: "The no-show reminders alone paid for the platform in the first week. Our front desk used to spend two hours a day on calls. Now it's fifteen minutes.",
    name: "Dr. Priya K.",
    title: "Medical Director, Radiance Medspa Group",
    note: "Representative testimonial",
  },
  {
    quote: "I run three locations. Before this, marketing was an afterthought. Now it feels like I have a full agency on retainer — without the agency price tag.",
    name: "James T.",
    title: "Founder, Apex Aesthetic Centers",
    note: "Representative testimonial",
  },
];

const tiers = [
  {
    name: "Marketing",
    price: "$799",
    per: "/mo",
    desc: "Social, email, and SMS campaigns executed for you.",
    cta: "Get started",
    features: ["Social scheduling", "Promo emails & SMS", "Seasonal campaigns", "1 PMS integration"],
  },
  {
    name: "Full Operations",
    price: "$1,499",
    per: "/mo",
    desc: "Marketing plus full operations and client communications.",
    cta: "Get started",
    recommended: true,
    features: ["Everything in Marketing", "Operations agent", "Client comms agent", "Win-back sequences", "3 PMS integrations"],
  },
  {
    name: "White-label",
    price: "Custom",
    per: "",
    desc: "Resell as your own product with a multi-client dashboard.",
    cta: "Talk to us",
    features: ["Everything in Full Ops", "White-label branding", "Reseller margin", "Multi-client dashboard"],
  },
];

export default function HomePage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-[128px] pb-[96px] px-6 bg-[#FAF8F5]">
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#F0EDE6] border border-[#DDD8D0] rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#8FAF9F] inline-block" />
              <span className="text-sm font-medium text-[#5C5C5C]">Built for med spa operators</span>
            </div>
            <h1 className="display-xl text-[#1A1A1A] mb-6 font-[family-name:var(--font-playfair)]">
              Your med spa,<br />
              <span className="text-[#4A7C95]">always on.</span>
            </h1>
            <p className="text-[18px] leading-[28px] text-[#5C5C5C] max-w-xl mb-10">
              AI agents that handle marketing campaigns, operations, and client communications — all reviewed and approved by your team before anything goes out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-[#4A7C95] text-white text-lg px-8 py-4 rounded-[6px] font-semibold hover:bg-[#3A6478] transition-colors text-center"
              >
                Book a free demo
              </Link>
              <Link
                href="/product"
                className="border border-[#4A7C95] text-[#4A7C95] text-lg px-8 py-4 rounded-[6px] font-semibold hover:bg-[#4A7C95]/8 transition-colors text-center"
              >
                See how it works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof bar */}
      <section className="py-6 border-y border-[#DDD8D0] bg-[#F0EDE6]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B8B0A4]">Integrates with</span>
            {["Zenoti", "Vagaro", "Pabau", "Boulevard"].map((name) => (
              <span key={name} className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#5C5C5C] opacity-70">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-20 px-6 bg-[#FAF8F5]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metrics.map((m) => (
              <div key={m.value} className="text-center">
                <div className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-[#4A7C95] mb-2">
                  {m.value}
                </div>
                <div className="text-[#5C5C5C] text-base">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value pillars */}
      <section className="py-20 px-6 bg-[#F0EDE6]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#1A1A1A] mb-4">
              Three agents. One seamless practice.
            </h2>
            <p className="text-[#5C5C5C] text-lg max-w-xl mx-auto">
              Each agent covers a critical function — together, they give you back the time to focus on what you do best.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p) => (
              <div key={p.title} className="card-feature">
                <div className="mb-4">{p.icon}</div>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1A1A1A] mb-3">
                  {p.title}
                </h3>
                <p className="text-[#5C5C5C] text-base leading-relaxed">{p.desc}</p>
                <Link
                  href="/product"
                  className="inline-block mt-5 text-sm font-semibold text-[#4A7C95] hover:text-[#3A6478] transition-colors"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accent strip */}
      <section className="py-16 px-6 bg-[#4A7C95]">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-white mb-4">
            AI agents that speak aesthetics.
          </h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
            Built specifically for the aesthetics industry — not a generic tool bolted onto your PMS.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#4A7C95] text-lg px-8 py-4 rounded-[6px] font-semibold hover:bg-[#F0EDE6] transition-colors"
          >
            Book a demo
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-[#FAF8F5]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#1A1A1A] mb-4">
              What operators are saying
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-[#F0EDE6] rounded-[12px] p-8 relative">
                <div className="font-[family-name:var(--font-playfair)] text-[64px] leading-none text-[#8FAF9F] absolute top-4 left-8 select-none" aria-hidden="true">
                  "
                </div>
                <blockquote className="pt-8 text-[#1A1A1A] text-base leading-relaxed mb-6">
                  {t.quote}
                </blockquote>
                <footer>
                  <div className="font-semibold text-[#1A1A1A] text-sm">{t.name}</div>
                  <div className="text-[#5C5C5C] text-sm">{t.title}</div>
                  <div className="text-[#B8B0A4] text-xs mt-1 italic">{t.note}</div>
                </footer>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="py-20 px-6 bg-[#F0EDE6]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#1A1A1A] mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-[#5C5C5C] text-lg max-w-xl mx-auto">
              Month-to-month. No contracts. Cancel any time.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`rounded-[12px] p-6 ${
                  t.recommended
                    ? "bg-white border-2 border-[#4A7C95] shadow-lg"
                    : "bg-white border border-[#DDD8D0] shadow-sm"
                }`}
              >
                {t.recommended && (
                  <div className="inline-block bg-[#4A7C95] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    Recommended
                  </div>
                )}
                <h3
                  className={`font-[family-name:var(--font-playfair)] text-2xl font-bold mb-1 ${
                    t.recommended ? "text-[#4A7C95]" : "text-[#1A1A1A]"
                  }`}
                >
                  {t.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-4xl font-bold text-[#1A1A1A]">{t.price}</span>
                  <span className="text-[#5C5C5C] text-base">{t.per}</span>
                </div>
                <p className="text-[#5C5C5C] text-sm mb-5">{t.desc}</p>
                <ul className="space-y-2 mb-6">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-[#1A1A1A]">
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#3D9970" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block w-full text-center py-2.5 rounded-[6px] text-sm font-semibold transition-colors ${
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
          <div className="text-center">
            <Link href="/pricing" className="text-[#4A7C95] font-semibold hover:text-[#3A6478] transition-colors">
              See full feature comparison →
            </Link>
          </div>
        </div>
      </section>

      {/* Lead capture */}
      <section className="py-20 px-6 bg-[#FAF8F5]">
        <div className="max-w-[600px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#1A1A1A] mb-4">
              Ready to see it in action?
            </h2>
            <p className="text-[#5C5C5C] text-lg">
              Tell us a bit about your practice and we'll reach out to schedule a personalized demo.
            </p>
          </div>

          {submitted ? (
            <div className="bg-[#F0EDE6] border border-[#8FAF9F] rounded-[12px] p-10 text-center">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1A1A1A] mb-2">
                You're on the list!
              </h3>
              <p className="text-[#5C5C5C]">
                We'll be in touch within one business day to schedule your demo.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="card space-y-5"
              aria-label="Demo request form"
            >
              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-1.5" htmlFor="name">
                  Your name <span className="text-[#C0544A]">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Jane Smith"
                  className="w-full px-4 py-2.5 border border-[#DDD8D0] rounded-[6px] text-sm bg-white focus:outline-none focus:border-[#4A7C95] focus:ring-1 focus:ring-[#4A7C95] placeholder:text-[#B8B0A4]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-1.5" htmlFor="email">
                  Email <span className="text-[#C0544A]">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="jane@mymedspa.com"
                  className="w-full px-4 py-2.5 border border-[#DDD8D0] rounded-[6px] text-sm bg-white focus:outline-none focus:border-[#4A7C95] focus:ring-1 focus:ring-[#4A7C95] placeholder:text-[#B8B0A4]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-1.5" htmlFor="pms">
                  Practice management software
                </label>
                <select
                  id="pms"
                  className="w-full px-4 py-2.5 border border-[#DDD8D0] rounded-[6px] text-sm bg-white focus:outline-none focus:border-[#4A7C95] focus:ring-1 focus:ring-[#4A7C95] text-[#1A1A1A]"
                >
                  <option value="">Select PMS…</option>
                  {pmsOptions.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-1.5" htmlFor="locations">
                  Number of locations
                </label>
                <select
                  id="locations"
                  className="w-full px-4 py-2.5 border border-[#DDD8D0] rounded-[6px] text-sm bg-white focus:outline-none focus:border-[#4A7C95] focus:ring-1 focus:ring-[#4A7C95] text-[#1A1A1A]"
                >
                  <option value="">Select…</option>
                  {locationOptions.map((l) => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-[#4A7C95] text-white py-3 rounded-[6px] font-semibold hover:bg-[#3A6478] transition-colors"
              >
                Request my demo
              </button>
              <p className="text-xs text-[#B8B0A4] text-center">
                Your data is never shared or sold.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
