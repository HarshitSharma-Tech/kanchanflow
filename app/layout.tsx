import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoldenSparkles } from "@/components/golden-sparkles";
import { ScrollProgress } from "@/components/scroll-progress";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0B111B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "KanchanFlow | Connected Manufacturing CRM & Quote-to-Order Platform",
    template: "%s | KanchanFlow",
  },
  description:
    "Industrial CRM purpose-built for precision CNC machining, metal fabrication, and engineering manufacturers to unify RFQ enquiries, multi-tier BOM costing, quotation revisions, and shop floor order handoffs.",
  keywords: [
    "Manufacturing CRM",
    "Quote to Order",
    "BOM Costing",
    "Machine Hour Rate",
    "Precision Engineering",
    "Sheet Metal Fabrication",
    "Shop Floor Handoff",
    "RFQ Management",
  ],
  authors: [{ name: "KanchanFlow" }],
  metadataBase: new URL("https://kanchanflow.com"),
  openGraph: {
    title: "KanchanFlow | Manufacturing CRM Platform",
    description:
      "From quotation to order. Without the chaos. The connected workflow for precision engineering teams.",
    siteName: "KanchanFlow",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "KanchanFlow | Manufacturing CRM Platform",
    description:
      "Bring customer enquiries, costing, quotations, and order handoffs into one connected workflow.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#0B111B] text-[#F5F3ED] font-sans selection:bg-[#F0B33E]/30 selection:text-[#F0B33E]">
        <GoldenSparkles />
        <ScrollProgress />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#F0B33E] text-[#0B111B] font-bold rounded-md shadow-lg outline-none ring-2 ring-white"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
