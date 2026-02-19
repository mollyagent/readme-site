import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Med Spa Agent Stack — Your med spa, always on.",
  description:
    "AI agents that handle marketing, operations, and client communications for modern med spas. Done-for-you, human-approved.",
  openGraph: {
    title: "Med Spa Agent Stack — Your med spa, always on.",
    description:
      "AI agents that handle marketing, operations, and client communications for modern med spas.",
    url: "https://medspaagentstack.com",
    siteName: "Med Spa Agent Stack",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} bg-[#FAF8F5] text-[#1A1A1A]`}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
