"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Play,
  Sparkles,
  Factory,
  Cpu,
  Layers,
  Activity,
  Flame,
} from "lucide-react";
import { Container } from "./container";
import { Button } from "./button";
import { DashboardMockup } from "./dashboard-mockup";
import { DemoModal } from "./demo-modal";

export function VideoHero() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <section className="relative min-h-[92vh] flex items-center pt-8 pb-16 lg:py-24 overflow-hidden bg-[#0B111B]">
      {/* Precision Industrial Grid Background with Vignette */}
      <div className="absolute inset-0 bg-grid-industrial opacity-40 pointer-events-none" />

      {/* Atmospheric Luminous Molten Depth */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-br from-[#F0B33E]/12 via-[#F0B33E]/4 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[350px] bg-gradient-to-tl from-[#16263A]/60 via-[#F0B33E]/5 to-transparent blur-[120px] pointer-events-none rounded-full" />

      {/* Engineering technical crosshairs in background */}
      <div aria-hidden="true" className="absolute top-16 left-8 text-[11px] font-mono text-[#F0B33E]/30 hidden lg:block select-none">
        + LOC: 18.7504° N, 73.8567° E // FACILITY: PUNE CLUSTER 01
      </div>
      <div aria-hidden="true" className="absolute top-16 right-8 text-[11px] font-mono text-[#36C98F]/40 hidden lg:block select-none">
        ● TELEMETRY: 24/24 WORKCENTERS CONNECTED
      </div>

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-5 text-left space-y-6">
            {/* Luminous Trust Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#F0B33E]/50 bg-gradient-to-r from-[#F0B33E]/20 via-[#16263A] to-[#F0B33E]/10 text-xs font-semibold uppercase tracking-wider text-[#F0B33E] shadow-[0_0_20px_rgba(240,179,62,0.18)]">
              <span className="w-2 h-2 rounded-full bg-[#36C98F] animate-pulse shadow-[0_0_8px_#36C98F]" />
              <span className="tracking-wide">Built For Precision Manufacturers</span>
              <span className="text-[#A4B0BE]/40">•</span>
              <span className="font-mono text-[10px] text-[#A4B0BE]">v2.4 Core</span>
            </div>

            {/* Main Headline with Metallic Gold Gradient */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#F5F3ED] leading-[1.08]">
              From quotation to order.{" "}
              <span className="gold-gradient-text block mt-1 drop-shadow-[0_4px_30px_rgba(240,179,62,0.25)]">
                Without the chaos.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#A4B0BE] leading-relaxed max-w-xl font-normal">
              Bring customer enquiries, CAD drawings, multi-tier BOM costing, quotations, and shop floor order handoffs into one unified, high-precision workflow.
            </p>

            {/* CTAs with Glow and Hover */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Button
                size="lg"
                variant="primary"
                onClick={() => setDemoModalOpen(true)}
                icon={<ArrowRight className="w-4 h-4" />}
                className="shadow-[0_0_25px_rgba(240,179,62,0.35)] hover:shadow-[0_0_40px_rgba(240,179,62,0.55)] transition-all duration-300"
              >
                Book Plant Walkthrough
              </Button>

              <Button
                size="lg"
                variant="secondary"
                href="/features"
                icon={<Cpu className="w-4 h-4 text-[#F0B33E]" />}
                className="hover:border-[#F0B33E]/60 transition-all"
              >
                Explore Architecture
              </Button>
            </div>

            {/* Live Manufacturing Proof Metrics */}
            <div className="pt-6 border-t border-[#2A3B50]/80 grid grid-cols-3 gap-4 text-left">
              <div>
                <span className="block text-2xl font-black font-mono text-[#F0B33E]">
                  1.8 Days
                </span>
                <span className="text-[11px] text-[#A4B0BE] font-medium leading-tight block mt-0.5">
                  Quote Turnaround (was 6.2d)
                </span>
              </div>

              <div>
                <span className="block text-2xl font-black font-mono text-[#36C98F]">
                  +26.4%
                </span>
                <span className="text-[11px] text-[#A4B0BE] font-medium leading-tight block mt-0.5">
                  Gross Margin Protected
                </span>
              </div>

              <div>
                <span className="block text-2xl font-black font-mono text-[#F5F3ED]">
                  0 Errors
                </span>
                <span className="text-[11px] text-[#A4B0BE] font-medium leading-tight block mt-0.5">
                  Shop Handoff Mismatch
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Custom Interactive Dashboard Mockup */}
          <div className="lg:col-span-7 relative">
            {/* Luminous outer ambient frame glow */}
            <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-[#F0B33E]/35 via-[#2A3B50]/60 to-[#F0B33E]/20 blur-md pointer-events-none" />
            <DashboardMockup />
          </div>
        </div>
      </Container>

      {/* Book a Demo Modal */}
      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
      />
    </section>
  );
}
