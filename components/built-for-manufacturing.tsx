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
  iconBg: string;
  iconBorder: string;
  glowColor: string;
  title: string;
  description: string;
  tag: string;
  href: string;
}

const features: FeatureCardItem[] = [
  {
    icon: <Mail className="w-5 h-5 text-[#F0B33E]" />,
    iconBg: "bg-amber-500/15",
    iconBorder: "border-amber-500/35",
    glowColor: "group-hover:border-amber-500/60 group-hover:shadow-[0_0_25px_rgba(240,179,62,0.15)]",
    title: "Enquiry Management",
    tag: "Intake",
    description: "Never lose a lead. Capture and track all customer enquiries.",
    href: "/features#enquiry-intake",
  },
  {
    icon: <Calculator className="w-5 h-5 text-[#36C98F]" />,
    iconBg: "bg-emerald-500/15",
    iconBorder: "border-emerald-500/35",
    glowColor: "group-hover:border-emerald-500/60 group-hover:shadow-[0_0_25px_rgba(54,201,143,0.15)]",
    title: "Quotation & Costing",
    tag: "Estimation",
    description: "Create accurate quotes with material, process, and margin.",
    href: "/features#bom-costing",
  },
  {
    icon: <Workflow className="w-5 h-5 text-[#38BDF8]" />,
    iconBg: "bg-sky-500/15",
    iconBorder: "border-sky-500/35",
    glowColor: "group-hover:border-sky-500/60 group-hover:shadow-[0_0_25px_rgba(56,189,248,0.15)]",
    title: "Sales Workflow",
    tag: "Pipeline",
    description: "Track follow-ups, stages, and conversion rates.",
    href: "/features#pipeline",
  },
  {
    icon: <PackageCheck className="w-5 h-5 text-[#A855F7]" />,
    iconBg: "bg-purple-500/15",
    iconBorder: "border-purple-500/35",
    glowColor: "group-hover:border-purple-500/60 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]",
    title: "Order & Production Handoff",
    tag: "Shop Floor",
    description: "Send confirmed jobs to the shop without errors.",
    href: "/features#order-handoff",
  },
];

export function BuiltForManufacturing() {
  return (
    <section
      id="manufacturing-essentials"
      className="py-16 lg:py-22 bg-[#0C1420] text-[#F5F3ED] border-b border-[#1E2E42] relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-[#F0B33E]/5 blur-[120px] rounded-full pointer-events-none -z-0"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-10 w-[400px] h-[250px] bg-sky-500/5 blur-[100px] rounded-full pointer-events-none -z-0"
      />

      <Container size="wide" className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3.5 max-w-2xl">
            {/* Eyebrow Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#F0B33E]/40 bg-[#16263A]/90 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-[#F0B33E]">
              <Factory className="w-3.5 h-3.5 text-[#F0B33E]" />
              <span>BUILT FOR MANUFACTURING</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Everything a modern{" "}
              <span className="text-[#F0B33E]">manufacturing business needs.</span>
            </h2>
          </div>

          <p className="text-sm text-[#94A3B8] max-w-md leading-relaxed">
            Eliminate gaps between client enquiries, commercial estimation, and machine shop production with modular, connected tools.
          </p>
        </div>

        {/* 4 Feature Cards Grid with distinct color identities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feat) => (
            <Link
              key={feat.title}
              href={feat.href}
              className={`group p-6 rounded-2xl bg-[#101B2B] border border-[#23354C] transition-all duration-300 shadow-xl flex flex-col justify-between hover:-translate-y-1 ${feat.glowColor}`}
            >
              <div>
                {/* Header with Tag & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`w-12 h-12 rounded-xl ${feat.iconBg} border ${feat.iconBorder} flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm`}
                  >
                    {feat.icon}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#16263A] text-[#94A3B8] border border-[#23354C]">
                    {feat.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-[#F0B33E] transition-colors">
                  {feat.title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  {feat.description}
                </p>
              </div>

              {/* Bottom Link Indicator */}
              <div className="mt-6 pt-3.5 border-t border-[#1E2E42] flex items-center justify-between text-xs text-[#94A3B8] group-hover:text-white transition-colors">
                <span className="font-medium">Explore capability</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#F0B33E]" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
