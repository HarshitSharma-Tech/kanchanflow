import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ScrollProgress } from "@/components/scroll-progress";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#08090C",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "KanchanFlow | Manufacturing CRM & Quote-to-Order Platform",
    template: "%s | KanchanFlow",
  },
  description:
    "The connected sales and quotation workflow for manufacturing teams. Track enquiries, calculate accurate costs, send quotes, and hand off orders to the shop floor.",
  keywords: [
    "Manufacturing CRM",
    "Quote to Order",
    "BOM Costing",
    "Machine Shop Software",
    "Quotation Software",
    "Order Handoff",
  ],
  authors: [{ name: "KanchanFlow" }],
  metadataBase: new URL("https://kanchanflow.com"),
  openGraph: {
    title: "KanchanFlow | Manufacturing CRM Platform",
    description:
      "From quotation to order. Without the chaos. Connected workflow for manufacturing teams.",
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
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#08090C] text-[#F5F3ED] font-sans selection:bg-[#F0B33E]/30 selection:text-[#F0B33E]">
        <ScrollProgress />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#F0B33E] text-[#08090C] font-bold rounded-md shadow-lg outline-none ring-2 ring-white"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
