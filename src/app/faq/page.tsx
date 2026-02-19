"use client";

import { useState } from "react";

const sections = [
  {
    topic: "Integrations",
    faqs: [
      {
        q: "Which practice management systems do you support?",
        a: "We currently integrate with Zenoti, Vagaro, Pabau, and Boulevard. These cover the majority of mid-market and enterprise med spas. Additional PMS connections are added on a rolling basis — reach out if yours isn't listed.",
      },
      {
        q: "How does the PMS connection work?",
        a: "We connect via secure API to your existing PMS instance. There's no software to install on your end. Setup takes about 30 minutes with our onboarding team. Your data stays in your systems — we only read what's needed to power campaigns and reminders.",
      },
      {
        q: "Can I connect more than one location's PMS?",
        a: "Yes. Multi-location support is included in the Full Operations and White-label plans. Each location can run its own approval workflows and content calendars from a shared dashboard.",
      },
    ],
  },
  {
    topic: "Compliance",
    faqs: [
      {
        q: "How do you handle health-adjacent content?",
        a: "Our content guardrails automatically flag any language that could constitute a health claim — procedure efficacy statements, before/after framing, and clinical outcome language. Flagged content is held for human review and cannot be approved by the system itself.",
      },
      {
        q: "Do you follow HIPAA guidelines?",
        a: "We are designed with HIPAA-compliant data handling in mind. We process only the data necessary to run the platform and do not use client health records for any purpose other than powering appointment-related communications. We sign a BAA with all practices on Full Operations and above.",
      },
      {
        q: "What if a campaign goes out that we didn't approve?",
        a: "That cannot happen. The approval gate is a hard dependency — no campaign, message, or post reaches a distribution channel until a designated approver at your practice marks it as approved. Period.",
      },
    ],
  },
  {
    topic: "Pricing",
    faqs: [
      {
        q: "Is there a setup fee?",
        a: "No setup fees. The first month includes full onboarding support at no extra charge. You pay your monthly subscription rate from day one.",
      },
      {
        q: "Can I change plans mid-cycle?",
        a: "Yes. Upgrades take effect immediately and are prorated. Downgrades take effect at the start of your next billing cycle.",
      },
      {
        q: "Do you offer annual billing discounts?",
        a: "We're building our annual billing option now. Reach out to discuss a custom rate if you're ready to commit longer-term.",
      },
    ],
  },
  {
    topic: "Onboarding",
    faqs: [
      {
        q: "How long does onboarding take?",
        a: "Most practices are live within 5 business days. We handle the PMS integration, content voice calibration, and your first campaign drafts. Your team reviews and approves before anything ships.",
      },
      {
        q: "What does onboarding involve?",
        a: "A 60-minute kickoff call, a brand voice questionnaire, and access to your PMS read credentials. We take it from there. You'll see your first campaign drafts in the approval queue within 48 hours.",
      },
    ],
  },
  {
    topic: "Approvals",
    faqs: [
      {
        q: "Who can approve content?",
        a: "You designate approvers during onboarding. Common setups: the practice owner approves all campaigns, or the front desk manager approves reminders while the owner approves external-facing marketing. Role-based approval permissions are fully configurable.",
      },
      {
        q: "How do I approve content?",
        a: "Via the Readme dashboard or email. Each item arrives in your approval queue with a preview, scheduled send time, and a one-click approve or reject. Rejected items return to the agent for revision with your notes.",
      },
      {
        q: "What happens if I don't approve something in time?",
        a: "Nothing goes out. The campaign is held until approved. You can configure reminder notifications at any interval — 24 hours, 4 hours, 1 hour before the scheduled send.",
      },
    ],
  },
  {
    topic: "Data Privacy",
    faqs: [
      {
        q: "What client data do you access?",
        a: "Only what's needed: appointment history, contact details (name, email, phone), and booking cadence. We never access treatment notes, clinical records, or payment information.",
      },
      {
        q: "Do you sell or share our data?",
        a: "Never. Your data is never sold, shared with third parties, or used to train models outside your own account context. We are a tool, not a data business.",
      },
      {
        q: "Where is data stored?",
        a: "All data is encrypted at rest and in transit and stored in US-based, SOC 2-compliant cloud infrastructure. You can request a data deletion at any time and we'll process it within 10 business days.",
      },
    ],
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

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-[#FAF8F5]">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-[#1A1A1A] mb-5">
            Frequently asked questions
          </h1>
          <p className="text-[18px] leading-[28px] text-[#5C5C5C]">
            Everything you need to know before you talk to us — and a few things you didn't know you needed to ask.
          </p>
        </div>
      </section>

      {/* FAQ sections */}
      <section className="pb-20 px-6 bg-[#FAF8F5]">
        <div className="max-w-[800px] mx-auto space-y-14">
          {sections.map((section) => (
            <div key={section.topic}>
              <div className="flex items-center gap-3 mb-6">
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1A1A1A]">
                  {section.topic}
                </h2>
                <div className="flex-1 h-px bg-[#DDD8D0]" />
              </div>
              <div className="space-y-3">
                {section.faqs.map((faq) => (
                  <Accordion key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-16 px-6 bg-[#F0EDE6] border-t border-[#DDD8D0]">
        <div className="max-w-[700px] mx-auto text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#1A1A1A] mb-4">
            Still have questions?
          </h2>
          <p className="text-[#5C5C5C] text-base mb-6">
            Book a 20-minute call with our team. We'll answer everything — no pitch, no pressure.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#4A7C95] text-white px-6 py-3 rounded-[6px] font-semibold hover:bg-[#3A6478] transition-colors"
          >
            Talk to us
          </a>
        </div>
      </section>
    </>
  );
}
