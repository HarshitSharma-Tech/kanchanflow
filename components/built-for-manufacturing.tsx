import React from "react";
import Link from "next/link";
import {
  Factory,
  Mail,
  Calculator,
  Workflow,
  PackageCheck,
  ArrowRight,
} from "lucide-react";
import { Container } from "./container";

interface FeatureCardItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

const features: FeatureCardItem[] = [
  {
    icon: <Mail className="w-5 h-5 text-[#F0B33E]" />,
    title: "Enquiry Management",
    description: "Never lose a lead. Capture and track all customer enquiries.",
    href: "/features#enquiry-intake",
  },
  {
    icon: <Calculator className="w-5 h-5 text-[#F0B33E]" />,
    title: "Quotation & Costing",
    description: "Create accurate quotes with material, process, and margin.",
    href: "/features#bom-costing",
  },
  {
    icon: <Workflow className="w-5 h-5 text-[#F0B33E]" />,
    title: "Sales Workflow",
    description: "Track follow-ups, stages, and conversion rates.",
    href: "/features#pipeline",
  },
  {
    icon: <PackageCheck className="w-5 h-5 text-[#F0B33E]" />,
    title: "Order & Production Handoff",
    description: "Send confirmed jobs to the shop without errors.",
    href: "/features#order-handoff",
  },
];

export function BuiltForManufacturing() {
  return (
    <section
      id="manufacturing-essentials"
      className="py-16 lg:py-20 bg-[#0B111B] text-[#F5F3ED] border-b border-[#2A3B50]/60 relative overflow-hidden"
    >
      {/* Subtle Golden Ambient Spotlight */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-[#F0B33E]/5 blur-[120px] rounded-full pointer-events-none -z-0"
      />

      <Container size="wide" className="relative z-10">
        <div className="space-y-4 mb-10">
          {/* Eyebrow Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#F0B33E]/40 bg-[#16263A]/80 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-[#F0B33E]">
            <Factory className="w-3.5 h-3.5 text-[#F0B33E]" />
            <span>BUILT FOR MANUFACTURING</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
            Everything a modern{" "}
            <span className="text-[#F0B33E]">manufacturing business needs.</span>
          </h2>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feat) => (
            <Link
              key={feat.title}
              href={feat.href}
              className="group p-6 rounded-2xl bg-[#111B29] border border-[#2A3B50] hover:border-[#F0B33E]/60 hover:bg-[#16263A]/70 transition-all duration-300 shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* Golden Boxed Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#F0B33E]/12 border border-[#F0B33E]/30 flex items-center justify-center mb-5 group-hover:bg-[#F0B33E]/20 group-hover:scale-105 transition-all shadow-sm">
                  {feat.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-[#F0B33E] transition-colors">
                  {feat.title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-xs sm:text-sm text-[#A4B0BE] leading-relaxed">
                  {feat.description}
                </p>
              </div>

              {/* Bottom Subtle Link Indicator */}
              <div className="mt-5 pt-3 border-t border-[#2A3B50]/60 flex items-center gap-1.5 text-xs text-[#A4B0BE] group-hover:text-[#F0B33E] transition-colors">
                <span className="font-medium">Learn more</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
