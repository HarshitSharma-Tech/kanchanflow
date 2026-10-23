"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import {
  ArrowRight,
  Zap,
  Target,
  ShieldCheck,
  Factory,
} from "lucide-react";
import { Container } from "./container";
import { Button } from "./button";
import { GoldenSparkles } from "./golden-sparkles";

// Code splitting: dynamically import DemoModal so it does not block critical bundle
const DemoModal = dynamic(
  () => import("./demo-modal").then((mod) => mod.DemoModal),
  { ssr: false }
);

export function VideoHero() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center pt-20 pb-20 lg:pt-24 lg:pb-28 overflow-hidden bg-[#07090E]">
        {/* ========================================================= */}
        {/* TOTAL BACKGROUND VIDEO: Complete 0.5x Precision Walkthrough */}
        {/* ========================================================= */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
          <video
            poster="/videos/factory-poster.webp"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover object-center scale-[1.01] filter brightness-[1.26] contrast-[1.08] saturate-[1.25] transition-opacity duration-700"
          >
            <source
              src="/videos/factory-precision-walkthrough.mp4"
              type="video/mp4"
            />
            <source
              src="/videos/factory-precision-walkthrough.webm"
              type="video/webm"
            />
          </video>

          {/* Soft Left Reading Gradient: keeps text legible while leaving the total factory walkway bright & open */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07090E]/80 via-[#07090E]/30 via-35% to-transparent z-10 pointer-events-none" />

          {/* Top & Bottom seamless edge blend for header and next section */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#07090E]/35 via-transparent via-15% to-[#08090C]/65 z-10 pointer-events-none" />

          {/* Luminous Warm Sunlight Glow enhancing the factory aisle lighting */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(240,179,62,0.24),transparent_65%)] pointer-events-none z-10" />

          {/* Subtle warm floor reflection sheen */}
          <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#08090C]/65 via-transparent to-transparent pointer-events-none z-10" />
        </div>

        {/* Ambient Golden Wave Ribbon - GPU Accelerated */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none z-10 overflow-hidden"
        >
          <svg
            viewBox="0 0 1440 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full opacity-60"
          >
            <path
              d="M-100 280 C 200 120, 500 480, 800 260 C 1100 80, 1300 400, 1600 280"
              stroke="url(#goldenWaveHero)"
              strokeWidth="2.5"
              strokeDasharray="6 3"
              className="animate-pulse"
            />
            <path
              d="M-80 300 C 220 150, 520 500, 820 280 C 1120 100, 1320 420, 1620 300"
              stroke="url(#goldenWaveHeroGlow)"
              strokeWidth="1.2"
            />
            <defs>
              <linearGradient id="goldenWaveHero" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F0B33E" stopOpacity="0.1" />
                <stop offset="35%" stopColor="#FFD875" stopOpacity="0.8" />
                <stop offset="65%" stopColor="#F0B33E" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#C98B19" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="goldenWaveHeroGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F0B33E" stopOpacity="0" />
                <stop offset="50%" stopColor="#FFD875" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#F0B33E" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* ========================================================= */}
        {/* SHINY GOLDEN SPARKLES: Scoped ONLY to Hero & Follows Mouse */}
        {/* ========================================================= */}
        <GoldenSparkles />

        {/* Hero Content Container */}
        <Container size="wide" className="relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-9 xl:col-span-8 text-left space-y-6">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#F0B33E]/50 bg-[#070B12]/80 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-[#F0B33E] shadow-sm">
                <Factory className="w-3.5 h-3.5 text-[#F0B33E]" />
                <span>BUILT FOR MANUFACTURING TEAMS</span>
              </div>

              {/* Bold Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] drop-shadow-[0_4px_22px_rgba(0,0,0,0.95)]">
                From quotation to order.{" "}
                <span className="text-[#F0B33E] block mt-1">
                  Without the chaos.
                </span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-[#E2E8F0] leading-relaxed max-w-2xl font-normal drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                Bring customer enquiries, costing, quotations, and order handoffs into one connected workflow designed for precision manufacturers.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Button
                  size="lg"
                  variant="primary"
                  onClick={() => setDemoModalOpen(true)}
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="shadow-lg shadow-[#F0B33E]/25 text-[#070B12] font-bold text-center justify-center px-8"
                >
                  Book a Demo
                </Button>

                <Button
                  size="lg"
                  variant="secondary"
                  href="/features"
                  className="bg-[#111C2E]/85 border-[#2A3F5E] hover:border-[#F0B33E]/60 text-white text-center justify-center backdrop-blur-md px-7"
                >
                  Explore Features
                </Button>
              </div>

              {/* Three Value Bullets with sleek glass panel cards */}
              <div className="pt-8 border-t border-[#2A3F5E]/50 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left max-w-2xl">
                {/* 1. Fast Quotes */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#090D15]/80 border border-[#2A3F5E]/60 backdrop-blur-md shadow-lg transition-transform hover:-translate-y-0.5">
                  <div className="w-8 h-8 rounded-lg bg-[#111C2E] border border-[#F0B33E]/30 flex items-center justify-center text-[#F0B33E] shrink-0 shadow-sm">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-sm font-bold text-white">
                      Fast Quotes
                    </strong>
                    <span className="text-xs text-[#94A3B8]">
                      Accurate pricing in minutes
                    </span>
                  </div>
                </div>

                {/* 2. True Costing */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#090D15]/80 border border-[#2A3F5E]/60 backdrop-blur-md shadow-lg transition-transform hover:-translate-y-0.5">
                  <div className="w-8 h-8 rounded-lg bg-[#111C2E] border border-[#F0B33E]/30 flex items-center justify-center text-[#F0B33E] shrink-0 shadow-sm">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-sm font-bold text-white">
                      True Costing
                    </strong>
                    <span className="text-xs text-[#94A3B8]">
                      Track materials & margins
                    </span>
                  </div>
                </div>

                {/* 3. Clean Handoffs */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#090D15]/80 border border-[#2A3F5E]/60 backdrop-blur-md shadow-lg transition-transform hover:-translate-y-0.5">
                  <div className="w-8 h-8 rounded-lg bg-[#111C2E] border border-[#F0B33E]/30 flex items-center justify-center text-[#F0B33E] shrink-0 shadow-sm">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-sm font-bold text-white">
                      Clean Handoffs
                    </strong>
                    <span className="text-xs text-[#94A3B8]">
                      Send confirmed jobs to shop
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* Demo Modal (Loaded on Demand) */}
        {demoModalOpen && (
          <DemoModal
            isOpen={demoModalOpen}
            onClose={() => setDemoModalOpen(false)}
          />
        )}
      </section>
    </>
  );
}
