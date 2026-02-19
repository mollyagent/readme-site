import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — AesthetIQ",
  description: "Privacy Policy for AesthetIQ.",
};

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-24 px-6 bg-[#FAF8F5]">
      <div className="max-w-[760px] mx-auto">
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-[#1A1A1A] mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-[#B8B0A4] mb-12">Last updated: February 2026</p>

        <div className="prose-like space-y-8 text-[#5C5C5C] text-base leading-relaxed">
          <p>
            This is a placeholder Privacy Policy page. A full policy will be published prior to commercial launch and will cover data collection, use, storage, third-party sharing, your rights, and contact information for privacy inquiries.
          </p>
          <p>
            In the meantime: we do not sell or share your data with third parties. Data collected through this site is used solely to respond to your inquiries and operate the platform.
          </p>
          <p>
            Questions? Contact us via the <a href="/contact" className="text-[#4A7C95] hover:text-[#3A6478] underline">Contact page</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
