"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Play, Sparkles, Factory, Cpu } from "lucide-react";
import { Container } from "./container";
import { Button } from "./button";
import { DashboardMockup } from "./dashboard-mockup";
import { DemoModal } from "./demo-modal";

export function VideoHero() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-8 pb-16 lg:py-20 overflow-hidden bg-[#0B111B]">
      {/* Precision Industrial Grid Background */}
      <div className="absolute inset-0 bg-grid-industrial opacity-35 pointer-events-none" />

      {/* Atmospheric lighting effects - subtle molten gold and steel depth without generic SaaS blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#F0B33E]/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[300px] bg-[#16263A]/40 blur-[100px] pointer-events-none rounded-full" />

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-5 text-left space-y-6">
            {/* Trust Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#F0B33E]/30 bg-[#F0B33E]/10 text-xs font-semibold uppercase tracking-wider text-[#F0B33E]">
              <Factory className="w-3.5 h-3.5" />
              <span>Built for Manufacturing Teams</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F3ED] leading-[1.12]">
              From quotation to order.{" "}
              <span className="text-[#F0B33E] relative inline-block">
                Without the chaos.
                <span className="absolute bottom-1 left-0 right-0 h-1 bg-[#F0B33E]/20 -z-10 rounded-full" />
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#A4B0BE] leading-relaxed max-w-xl">
              Bring customer enquiries, costing, quotations and order handoffs into one connected workflow built for precision engineering and industrial manufacturing teams.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Button
                size="lg"
                variant="primary"
                onClick={() => setDemoModalOpen(true)}
                icon={<ArrowRight className="w-4 h-4" />}
                className="shadow-lg shadow-[#F0B33E]/20"
              >
                Book a Demo
              </Button>

              <Button
                size="lg"
                variant="secondary"
                href="/features"
                icon={<Cpu className="w-4 h-4 text-[#A4B0BE]" />}
              >
                Explore Features
              </Button>
            </div>

            {/* Trust Bullets */}
            <div className="pt-4 border-t border-[#2A3B50]/60 grid grid-cols-2 gap-3 text-xs text-[#A4B0BE]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#36C98F] shrink-0" />
                <span>Multi-Tier BOM Costing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#36C98F] shrink-0" />
                <span>Revision Traceability</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#36C98F] shrink-0" />
                <span>Seamless Shop Handoff</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#36C98F] shrink-0" />
                <span>Zero ERP Duplication</span>
              </div>
            </div>
          </div>

          {/* Right Column: Custom Interactive Dashboard Mockup */}
          <div className="lg:col-span-7 relative">
            {/* Ambient industrial rim border glow */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#F0B33E]/20 via-[#2A3B50]/40 to-[#F0B33E]/10 blur-sm pointer-events-none" />
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
