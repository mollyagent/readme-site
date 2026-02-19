import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Product — Med Spa Agent Stack",
  description:
    "Explore the Marketing, Operations, and Client Communications agents built specifically for med spa operators. Human-approved, always.",
};

const agents = [
  {
    tag: "Marketing Agent",
    headline: "Campaigns that fill your calendar — without the creative overhead.",
    body: "Your marketing agent monitors trends, drafts posts, writes promo emails, and schedules SMS blasts timed to your peak booking windows. Seasonal pushes for Botox, filler, and memberships go out automatically — every message reviewed by your team before it reaches a single client.",
    features: [
      "Social media scheduling (Instagram, Facebook)",
      "Promo email campaigns with A/B subject lines",
      "SMS promotions for time-sensitive offers",
      "Botox & seasonal campaign templates",
      "No-show win-back campaigns",
      "Holiday and event-driven content calendars",
    ],
    bg: "bg-[#FAF8F5]",
  },
  {
    tag: "Operations Agent",
    headline: "The back-office work your team shouldn't be doing.",
    body: "From appointment confirmation calls to expense report drafting, the Operations agent handles the administrative layer that drains your staff's time. It surfaces only what needs a human decision — everything else runs quietly in the background.",
    features: [
      "Appointment reminders (voice, SMS, email)",
      "Cancellation & rescheduling handling",
      "Expense filing and categorization",
      "Travel and accommodation coordination",
      "Intake form follow-up workflows",
      "Daily operations digest for managers",
    ],
    bg: "bg-[#F0EDE6]",
  },
  {
    tag: "Client Communications Agent",
    headline: "Every client feels like your only client.",
    body: "The Client Comms agent maintains warm, consistent relationships with your entire book of business. It identifies lapsed clients, drafts re-engagement messages, and triggers renewal reminders — personalized by treatment history and visit cadence.",
    features: [
      "Win-back sequences for lapsed clients",
      "Post-treatment follow-up messages",
      "Membership renewal reminders",
      "Referral request sequences",
      "Birthday and anniversary touches",
      "Loyalty tier notifications",
    ],
    bg: "bg-[#FAF8F5]",
  },
];

export default function ProductPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-[#FAF8F5]">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#F0EDE6] border border-[#DDD8D0] rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#8FAF9F] inline-block" />
            <span className="text-sm font-medium text-[#5C5C5C]">How it works</span>
          </div>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-6">
            Done-for-you marketing and ops,<br />
            <span className="text-[#4A7C95]">built for med spas.</span>
          </h1>
          <p className="text-[18px] leading-[28px] text-[#5C5C5C] max-w-2xl mx-auto">
            Three specialized agents work in concert with your team — handling execution while you retain full approval authority over everything that touches a client.
          </p>
        </div>
      </section>

      {/* Workflow diagram */}
      <section className="py-16 px-6 bg-[#F0EDE6] border-y border-[#DDD8D0]">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#1A1A1A] text-center mb-10">
            Every campaign, every time
          </h2>
          <div className="flex flex-col md:flex-row items-stretch gap-0">
            {[
              { step: "1", label: "PMS Sync", sub: "Zenoti · Vagaro · Pabau · Boulevard", icon: "🗄" },
              { step: "2", label: "Agent Stack", sub: "Drafts, schedules, and routes campaigns", icon: "⚡" },
              { step: "3", label: "Human Approval", sub: "Your team reviews every item before it sends", icon: "✓" },
              { step: "4", label: "Executed", sub: "Campaign goes out. Results tracked automatically.", icon: "🚀" },
            ].map((item, i, arr) => (
              <div key={item.step} className="flex flex-col md:flex-row items-center flex-1">
                <div className="flex-1 bg-white rounded-[12px] border border-[#DDD8D0] p-5 text-center shadow-sm">
                  <div className="text-3xl mb-2" aria-hidden="true">{item.icon}</div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-[#8FAF9F] mb-1">
                    Step {item.step}
                  </div>
                  <div className="font-[family-name:var(--font-playfair)] text-lg font-bold text-[#1A1A1A]">
                    {item.label}
                  </div>
                  <div className="text-xs text-[#5C5C5C] mt-1">{item.sub}</div>
                </div>
                {i < arr.length - 1 && (
                  <div className="text-[#8FAF9F] text-2xl md:px-3 py-2 md:py-0 select-none" aria-hidden="true">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent sections */}
      {agents.map((agent) => (
        <section key={agent.tag} className={`py-20 px-6 ${agent.bg}`}>
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-[#8FAF9F]/20 text-[#3A6478] text-xs font-semibold px-3 py-1 rounded-full mb-5 tracking-wide">
                {agent.tag}
              </div>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-5">
                {agent.headline}
              </h2>
              <p className="text-[#5C5C5C] text-base leading-relaxed mb-8">
                {agent.body}
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#4A7C95] text-white px-6 py-3 rounded-[6px] font-semibold hover:bg-[#3A6478] transition-colors"
              >
                See a live demo
              </Link>
            </div>
            <div>
              <ul className="space-y-3">
                {agent.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 bg-white border border-[#DDD8D0] rounded-[8px] px-4 py-3 text-sm text-[#1A1A1A]">
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#3D9970" strokeWidth="2.5" className="shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      {/* Compliance callout */}
      <section className="py-16 px-6 bg-[#F0EDE6]">
        <div className="max-w-[900px] mx-auto">
          <div className="bg-white border-2 border-[#4A7C95] rounded-[12px] p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="shrink-0">
                <div className="w-14 h-14 rounded-full bg-[#4A7C95]/10 flex items-center justify-center">
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#4A7C95" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
              </div>
              <div>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1A1A1A] mb-3">
                  Human-in-the-loop, always.
                </h2>
                <p className="text-[#5C5C5C] text-base leading-relaxed mb-5">
                  Med spas operate in a health-adjacent space. We take that seriously. No campaign, message, or communication goes out without explicit approval from a designated team member at your practice.
                </p>
                <ul className="space-y-2 text-sm">
                  {[
                    "All content flagged for health claims before routing to approvals",
                    "Role-based approval flows — assign who signs off on what",
                    "Full audit trail of every approved and rejected campaign",
                    "Content guardrails tuned for aesthetic medicine language standards",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[#1A1A1A]">
                      <span className="text-[#8FAF9F] mt-0.5">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#4A7C95]">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-white mb-4">
            Ready to see the agents in action?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Book a 20-minute demo and we'll walk through a live workflow tailored to your practice.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#4A7C95] text-lg px-8 py-4 rounded-[6px] font-semibold hover:bg-[#F0EDE6] transition-colors"
          >
            Book a demo
          </Link>
        </div>
      </section>
    </>
  );
}
