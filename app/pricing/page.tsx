import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionCTA } from "@/components/section-cta";
import { PricingView } from "./pricing-view";

export const metadata: Metadata = {
  title: "Manufacturing CRM Pricing & Plans | KanchanFlow",
  description:
    "Explore transparent plans for precision machine shops and fabrication plants. Starter, Growth, and Enterprise options with multi-tier BOM calculations and revision tracking.",
  openGraph: {
    title: "KanchanFlow Pricing — Connected Manufacturing CRM",
    description:
      "A clearer way to manage your sales workflow. Compare indicative plans for small job shops to enterprise multi-plant operations.",
    type: "website",
    url: "https://kanchanflow.com/pricing",
  },
};

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#08090C] text-[#F5F3ED]">
      <Navbar />

      <main id="main-content" className="flex-1">
        <PricingView />

        <SectionCTA
          heading="Start winning more profitable manufacturing orders."
          copy="See how quickly KanchanFlow can be deployed across your estimators and production leads."
          primaryCtaText="Book a Demo"
          secondaryCtaText="Explore All Features"
          secondaryHref="/features"
        />
      </main>

      <Footer />
    </div>
  );
}
