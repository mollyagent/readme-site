"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-[#FAF8F5]">
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-xl">
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-[#1A1A1A] mb-5">
              Let's talk
            </h1>
            <p className="text-[18px] leading-[28px] text-[#5C5C5C]">
              Whether you want a live demo, a partnership conversation, or just have questions — we're quick to respond and don't do hard sells.
            </p>
          </div>
        </div>
      </section>

      {/* Form + info */}
      <section className="pb-24 px-6 bg-[#FAF8F5]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-5 gap-16">
          {/* Form */}
          <div className="md:col-span-3">
            {submitted ? (
              <div className="bg-[#F0EDE6] border border-[#8FAF9F] rounded-[12px] p-12 text-center">
                <div className="text-5xl mb-4">✓</div>
                <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#1A1A1A] mb-3">
                  Got it — thanks!
                </h2>
                <p className="text-[#5C5C5C] text-base leading-relaxed">
                  We've received your message and will be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card space-y-5" aria-label="Contact form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                    <label className="block text-sm font-medium text-[#1A1A1A] mb-1.5" htmlFor="business">
                      Business name <span className="text-[#C0544A]">*</span>
                    </label>
                    <input
                      id="business"
                      type="text"
                      required
                      placeholder="Lumière Medical Aesthetics"
                      className="w-full px-4 py-2.5 border border-[#DDD8D0] rounded-[6px] text-sm bg-white focus:outline-none focus:border-[#4A7C95] focus:ring-1 focus:ring-[#4A7C95] placeholder:text-[#B8B0A4]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                    <label className="block text-sm font-medium text-[#1A1A1A] mb-1.5" htmlFor="phone">
                      Phone <span className="text-[#B8B0A4] font-normal">(optional)</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-2.5 border border-[#DDD8D0] rounded-[6px] text-sm bg-white focus:outline-none focus:border-[#4A7C95] focus:ring-1 focus:ring-[#4A7C95] placeholder:text-[#B8B0A4]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[#1A1A1A] mb-1.5" htmlFor="pms">
                      Practice management software
                    </label>
                    <select
                      id="pms"
                      className="w-full px-4 py-2.5 border border-[#DDD8D0] rounded-[6px] text-sm bg-white focus:outline-none focus:border-[#4A7C95] focus:ring-1 focus:ring-[#4A7C95] text-[#1A1A1A]"
                    >
                      <option value="">Select PMS…</option>
                      {["Zenoti", "Vagaro", "Pabau", "Boulevard", "Other"].map((p) => (
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
                      {["1", "2–3", "4–9", "10+"].map((l) => (
                        <option key={l} value={l}>{l}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[#1A1A1A] mb-1.5" htmlFor="role">
                      Your role
                    </label>
                    <select
                      id="role"
                      className="w-full px-4 py-2.5 border border-[#DDD8D0] rounded-[6px] text-sm bg-white focus:outline-none focus:border-[#4A7C95] focus:ring-1 focus:ring-[#4A7C95] text-[#1A1A1A]"
                    >
                      <option value="">Select…</option>
                      {["Owner/Operator", "Office Manager", "Multi-site Chain", "Consultant/Agency"].map((r) => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1A1A1A] mb-1.5" htmlFor="inquiry">
                      Inquiry type <span className="text-[#C0544A]">*</span>
                    </label>
                    <select
                      id="inquiry"
                      required
                      className="w-full px-4 py-2.5 border border-[#DDD8D0] rounded-[6px] text-sm bg-white focus:outline-none focus:border-[#4A7C95] focus:ring-1 focus:ring-[#4A7C95] text-[#1A1A1A]"
                    >
                      <option value="">Select…</option>
                      {["Book a demo", "Partner inquiry", "Press"].map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1A1A1A] mb-1.5" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us a bit about your practice or what you'd like to see in a demo…"
                    className="w-full px-4 py-2.5 border border-[#DDD8D0] rounded-[6px] text-sm bg-white focus:outline-none focus:border-[#4A7C95] focus:ring-1 focus:ring-[#4A7C95] placeholder:text-[#B8B0A4] resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#4A7C95] text-white py-3 rounded-[6px] font-semibold hover:bg-[#3A6478] transition-colors"
                >
                  Send message
                </button>
              </form>
            )}
          </div>

          {/* Info sidebar */}
          <div className="md:col-span-2 space-y-8">
            <div className="bg-[#F0EDE6] rounded-[12px] p-6">
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#1A1A1A] mb-3">
                What to expect
              </h3>
              <ul className="space-y-3 text-sm text-[#5C5C5C]">
                {[
                  "Typical response time: within 1 business day",
                  "A 20-minute demo tailored to your practice size",
                  "No hard sell — if it's not a fit, we'll say so",
                  "Your data is never shared or sold",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#3D9970" strokeWidth="2.5" className="shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-[#1A1A1A] mb-3">
                For other inquiries
              </h3>
              <div className="space-y-2 text-sm text-[#5C5C5C]">
                <p><span className="font-medium text-[#1A1A1A]">Partnerships:</span> Use the form above and select "Partner inquiry"</p>
                <p><span className="font-medium text-[#1A1A1A]">Press:</span> Select "Press" in inquiry type for fastest routing</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
