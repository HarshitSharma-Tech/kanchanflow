"use client";

import React, { useState } from "react";
import { ArrowRight, Factory, Shield, Sparkles } from "lucide-react";
import { Container } from "./container";
import { Button } from "./button";
import { DemoModal } from "./demo-modal";

interface SectionCTAProps {
  heading?: string;
  copy?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  secondaryHref?: string;
}

export function SectionCTA({
  heading = "Bring clarity to every quotation.",
  copy = "See how a connected sales workflow can help your manufacturing team move from enquiry to order.",
  primaryCtaText = "Book a Demo",
  secondaryCtaText = "Explore Features",
  secondaryHref = "/features",
}: SectionCTAProps) {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <section className="relative py-20 lg:py-24 bg-[#08090C] overflow-hidden border-t border-[#242836]">
      {/* Precision grid pattern */}
      <div className="absolute inset-0 bg-grid-industrial opacity-30 pointer-events-none" />

      {/* Atmospheric center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#F0B33E]/10 blur-[130px] rounded-full pointer-events-none" />

      <Container>
        <div className="relative z-10 max-w-4xl mx-auto rounded-3xl glass-panel-luxury border-2 border-[#F0B33E]/50 p-8 sm:p-12 lg:p-16 text-center shadow-2xl gold-glow-card">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#F0B33E]/20 via-[#141722] to-[#F0B33E]/10 border border-[#F0B33E]/40 text-xs font-semibold uppercase tracking-wider text-[#F0B33E] mb-6 shadow-[0_0_15px_rgba(240,179,62,0.15)]">
            <Factory className="w-3.5 h-3.5" />
            <span>Modernise Your Plant Commercial Operations</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F3ED] tracking-tight leading-tight">
            Bring clarity to <span className="gold-gradient-text">every quotation.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#A4B0BE] max-w-2xl mx-auto leading-relaxed font-normal">
            {copy}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              variant="primary"
              onClick={() => setDemoModalOpen(true)}
              icon={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto shadow-lg shadow-[#F0B33E]/20"
            >
              {primaryCtaText}
            </Button>

            {secondaryCtaText && secondaryHref && (
              <Button
                size="lg"
                variant="outline"
                href={secondaryHref}
                className="w-full sm:w-auto"
              >
                {secondaryCtaText}
              </Button>
            )}
          </div>

          {/* Micro-trust indicators */}
          <div className="mt-10 pt-6 border-t border-[#2A3B50]/60 flex flex-wrap items-center justify-center gap-6 text-xs text-[#A4B0BE]">
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-[#36C98F]" />
              Enterprise data encryption
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#F0B33E]" />
              Guided rollout in 14 days
            </span>
            <span>•</span>
            <span>No upfront IT infrastructure overhaul</span>
          </div>
        </div>
      </Container>

      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
      />
    </section>
  );
}
