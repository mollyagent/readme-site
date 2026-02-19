import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — AesthetIQ",
  description:
    "Marketing, operations, and growth insights for modern med spa operators. Written by practitioners, for practitioners.",
};

const posts = [
  {
    slug: "5-botox-promotion-ideas",
    category: "Marketing",
    title: "5 Botox Promotion Ideas That Actually Fill Your Calendar",
    excerpt:
      "Most med spa promotions compete on price. The ones that actually drive bookings compete on timing, specificity, and client psychology. Here's what works.",
    date: "February 12, 2026",
    readTime: "5 min read",
  },
  {
    slug: "reduce-no-shows-reminder-strategy",
    category: "Operations",
    title: "The Reminder Cadence That Cut No-Shows by 40%",
    excerpt:
      "Three well-timed messages outperform twenty frantic ones. We analyzed booking data across 60+ practices to find the reminder rhythm that actually changes client behavior.",
    date: "February 5, 2026",
    readTime: "4 min read",
  },
  {
    slug: "membership-renewal-sequences",
    category: "Client Retention",
    title: "How to Write a Membership Renewal Sequence That Doesn't Feel Pushy",
    excerpt:
      "The window between a membership lapse and a client leaving for good is short. Here's a five-message sequence that renews memberships without making clients feel hunted.",
    date: "January 28, 2026",
    readTime: "6 min read",
  },
];

const categories = ["All", "Marketing", "Operations", "Client Retention"];

const categoryColors: Record<string, string> = {
  Marketing: "bg-[#4A7C95]/10 text-[#4A7C95]",
  Operations: "bg-[#8FAF9F]/20 text-[#3A6478]",
  "Client Retention": "bg-[#F0EDE6] text-[#5C5C5C]",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-[#FAF8F5]">
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-xl">
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-[#1A1A1A] mb-5">
              Insights for operators
            </h1>
            <p className="text-[18px] leading-[28px] text-[#5C5C5C]">
              Marketing, operations, and growth strategy for the modern aesthetics practice. No fluff, just tactics that work.
            </p>
          </div>
        </div>
      </section>

      {/* Category filters — static for MVP */}
      <section className="pb-6 px-6 bg-[#FAF8F5]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                  cat === "All"
                    ? "bg-[#4A7C95] text-white border-[#4A7C95]"
                    : "bg-white border-[#DDD8D0] text-[#5C5C5C] hover:border-[#4A7C95] hover:text-[#4A7C95]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="pt-8 pb-20 px-6 bg-[#FAF8F5]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="card-feature flex flex-col">
              <div className="mb-4">
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                    categoryColors[post.category] ?? "bg-[#F0EDE6] text-[#5C5C5C]"
                  }`}
                >
                  {post.category}
                </span>
              </div>
              <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#1A1A1A] mb-3 leading-snug flex-1">
                <Link href={`/blog/${post.slug}`} className="hover:text-[#4A7C95] transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="text-[#5C5C5C] text-sm leading-relaxed mb-6">{post.excerpt}</p>
              <div className="flex items-center justify-between mt-auto">
                <div className="text-xs text-[#B8B0A4]">
                  {post.date} · {post.readTime}
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm font-semibold text-[#4A7C95] hover:text-[#3A6478] transition-colors"
                >
                  Read →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
