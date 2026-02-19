import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — AesthetIQ",
  description: "Terms of Service for AesthetIQ.",
};

export default function TermsPage() {
  return (
    <section className="pt-32 pb-24 px-6 bg-[#FAF8F5]">
      <div className="max-w-[760px] mx-auto">
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-[#1A1A1A] mb-4">
          Terms of Service
        </h1>
        <p className="text-sm text-[#B8B0A4] mb-12">Last updated: February 2026</p>

        <div className="space-y-8 text-[#5C5C5C] text-base leading-relaxed">
          <p>
            This is a placeholder Terms of Service page. Full terms will be published prior to commercial launch and will cover acceptable use, service level commitments, subscription terms, termination, intellectual property, limitation of liability, and governing law.
          </p>
          <p>
            By using this site, you agree to these terms once finalized. In the interim, all interactions are governed by applicable law and good faith.
          </p>
          <p>
            Questions? Contact us via the <a href="/contact" className="text-[#4A7C95] hover:text-[#3A6478] underline">Contact page</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
