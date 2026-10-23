"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Zap,
  Target,
  ShieldCheck,
  Factory,
  Sliders,
  Play,
  Pause,
  Compass,
  Cpu,
  Activity,
  Layers,
  Sparkles,
  Maximize2,
  X,
} from "lucide-react";
import { Container } from "./container";
import { Button } from "./button";
import { DashboardMockup } from "./dashboard-mockup";
import { DemoModal } from "./demo-modal";

export function VideoHero() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"dashboard" | "telemetry">("dashboard");
  const [isPlaying, setIsPlaying] = useState(true);
  const [isCinemaOpen, setIsCinemaOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <section className="relative min-h-[94vh] flex items-center pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden bg-[#070B12]">
        {/* ========================================================= */}
        {/* FULL BACKGROUND VIDEO: Robot mills metal & lights (MUTED) */}
        {/* ========================================================= */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
          {/* Hardware-accelerated background video */}
          <video
            ref={videoRef}
            src="/videos/robot-mills.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover object-center scale-105 filter contrast-[1.18] brightness-[0.82] saturate-[1.3] hue-rotate-[-3deg]"
          />

          {/* 1. Dark Vignette Overlays for Maximum Text Legibility */}
          {/* Left Gradient so text has 100% solid contrast on all devices */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070B12]/95 via-[#070B12]/80 via-45% to-[#070B12]/45 z-10" />

          {/* Top & Bottom Vignettes for Seamless Blending */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070B12] via-transparent via-40% to-[#070B12]/85 z-10" />

          {/* 2. Molten Amber / Tungsten Color Grade Tint (Tungsten Machining Sparks) */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#F0B33E]/12 via-transparent to-amber-950/25 mix-blend-color-dodge z-10 pointer-events-none" />

          {/* 3. Deep Film Contrast Multiplier */}
          <div className="absolute inset-0 bg-[#070B12]/30 mix-blend-multiply z-10 pointer-events-none" />
        </div>

        {/* Ambient Golden Wave Ribbon */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none z-10 overflow-hidden"
        >
          <svg
            viewBox="0 0 1440 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full opacity-50"
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

        {/* Hero Content Container */}
        <Container size="wide" className="relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
            {/* Left Content Column (Headline, Copy, CTAs, 3 Bullets) */}
            <div className="lg:col-span-5 text-left space-y-6">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#F0B33E]/40 bg-[#070B12]/85 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-[#F0B33E] shadow-sm">
                <Factory className="w-3.5 h-3.5 text-[#F0B33E]" />
                <span>BUILT FOR MANUFACTURING TEAMS</span>
              </div>

              {/* Bold Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.12] drop-shadow-sm">
                From quotation to order.{" "}
                <span className="text-[#F0B33E] block mt-1">
                  Without the chaos.
                </span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-sm sm:text-base lg:text-lg text-[#CBD5E1] leading-relaxed max-w-xl font-normal drop-shadow-xs">
                Bring customer enquiries, costing, quotations, and order handoffs into one connected workflow designed for precision manufacturers.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <Button
                  size="lg"
                  variant="primary"
                  onClick={() => setDemoModalOpen(true)}
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="shadow-lg shadow-[#F0B33E]/25 text-[#070B12] font-bold text-center justify-center"
                >
                  Book a Demo
                </Button>

                <Button
                  size="lg"
                  variant="secondary"
                  href="/features"
                  className="bg-[#111C2E]/85 border-[#2A3F5E] hover:border-[#F0B33E]/60 text-white text-center justify-center backdrop-blur-md"
                >
                  Explore Features
                </Button>
              </div>

              {/* Three Value Bullets */}
              <div className="pt-6 sm:pt-8 border-t border-[#2A3F5E]/60 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 text-left">
                {/* 1. Fast Quotes */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#111C2E]/90 border border-[#2A3F5E] flex items-center justify-center text-[#F0B33E] shrink-0 mt-0.5 shadow-sm">
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
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#111C2E]/90 border border-[#2A3F5E] flex items-center justify-center text-[#F0B33E] shrink-0 mt-0.5 shadow-sm">
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
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#111C2E]/90 border border-[#2A3F5E] flex items-center justify-center text-[#F0B33E] shrink-0 mt-0.5 shadow-sm">
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

            {/* Right Side: Creative Plant Terminal & Interactive Costing Engine */}
            <div className="lg:col-span-7 flex flex-col items-end justify-center pt-6 lg:pt-0">
              {/* Header bar with Live Robot Feed Status & View Mode */}
              <div className="w-full flex flex-wrap items-center justify-between gap-2.5 mb-3">
                {/* Status Indicator */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#070B12]/85 backdrop-blur-md border border-[#2A3F5E] text-xs shadow-md">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#36C98F] animate-pulse" />
                  <span className="text-white font-medium flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-[#36C98F]" />
                    <span>Robotic Milling Cell • Live Background</span>
                  </span>
                </div>

                {/* Switcher & Video Actions */}
                <div className="flex items-center gap-1.5">
                  <div className="inline-flex p-1 rounded-xl bg-[#070B12]/85 backdrop-blur-md border border-[#2A3F5E] text-xs">
                    <button
                      type="button"
                      onClick={() => setActiveTab("dashboard")}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-semibold transition-all ${
                        activeTab === "dashboard"
                          ? "bg-[#F0B33E] text-[#070B12] shadow-sm"
                          : "text-[#94A3B8] hover:text-white"
                      }`}
                    >
                      <Sliders className="w-3.5 h-3.5" />
                      <span>Live CRM</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveTab("telemetry")}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-semibold transition-all ${
                        activeTab === "telemetry"
                          ? "bg-[#F0B33E] text-[#070B12] shadow-sm"
                          : "text-[#94A3B8] hover:text-white"
                      }`}
                    >
                      <Cpu className="w-3.5 h-3.5" />
                      <span>Shop Floor HUD</span>
                    </button>
                  </div>

                  {/* Play/Pause Video Background Control */}
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="p-1.5 rounded-xl bg-[#070B12]/85 backdrop-blur-md border border-[#2A3F5E] text-[#94A3B8] hover:text-[#F0B33E] transition-colors"
                    aria-label={isPlaying ? "Pause background video" : "Play background video"}
                    title={isPlaying ? "Pause background video" : "Play background video"}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>

                  {/* Cinema Mode Button */}
                  <button
                    type="button"
                    onClick={() => setIsCinemaOpen(true)}
                    className="p-1.5 rounded-xl bg-[#070B12]/85 backdrop-blur-md border border-[#2A3F5E] text-[#94A3B8] hover:text-[#F0B33E] transition-colors"
                    aria-label="Expand video cinema mode"
                    title="Expand video cinema mode"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Main Showcase Panel */}
              <div className="w-full relative rounded-2xl border border-[#F0B33E]/40 bg-[#0B1322]/85 backdrop-blur-xl shadow-2xl overflow-hidden gold-glow-card">
                {activeTab === "dashboard" ? (
                  /* Live Interactive CRM Dashboard */
                  <div className="p-1 sm:p-2">
                    <DashboardMockup />
                  </div>
                ) : (
                  /* Plant Control HUD (Robotic Milling Cell Live Telemetry) */
                  <div className="p-6 space-y-6">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#2A3F5E]/60">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#36C98F] animate-pulse" />
                          <h3 className="text-base font-bold text-white">
                            Autonomous Robotic Milling Cell #04
                          </h3>
                        </div>
                        <p className="text-xs text-[#94A3B8] mt-0.5">
                          High-torque 5-axis spindle milling aerospace-grade titanium & SS-316L
                        </p>
                      </div>

                      <div className="flex items-center gap-2 text-xs font-mono">
                        <span className="px-2.5 py-1 rounded bg-[#111C2E] text-[#F0B33E] border border-[#F0B33E]/30">
                          Cycle Time: 42.5m
                        </span>
                        <span className="px-2.5 py-1 rounded bg-[#36C98F]/15 text-[#36C98F] border border-[#36C98F]/30">
                          Yield: 99.8%
                        </span>
                      </div>
                    </div>

                    {/* Telemetry Metrics */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      <div className="p-3.5 rounded-xl bg-[#111C2E]/90 border border-[#2A3F5E]">
                        <span className="text-[10px] font-mono text-[#94A3B8] uppercase">
                          Spindle Speed
                        </span>
                        <div className="text-lg font-bold text-white font-mono mt-1">
                          14,200 <span className="text-xs font-normal text-[#F0B33E]">RPM</span>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-[#111C2E]/90 border border-[#2A3F5E]">
                        <span className="text-[10px] font-mono text-[#94A3B8] uppercase">
                          Feed Rate
                        </span>
                        <div className="text-lg font-bold text-[#36C98F] font-mono mt-1">
                          920 <span className="text-xs font-normal text-white">mm/m</span>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-[#111C2E]/90 border border-[#2A3F5E]">
                        <span className="text-[10px] font-mono text-[#94A3B8] uppercase">
                          Coolant Flow
                        </span>
                        <div className="text-lg font-bold text-[#38BDF8] font-mono mt-1">
                          48 <span className="text-xs font-normal text-white">L/min</span>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-[#111C2E]/90 border border-[#2A3F5E]">
                        <span className="text-[10px] font-mono text-[#94A3B8] uppercase">
                          Locked Margin
                        </span>
                        <div className="text-lg font-bold text-[#F0B33E] font-mono mt-1">
                          28.5%
                        </div>
                      </div>
                    </div>

                    {/* Active Drawing Card */}
                    <div className="p-4 rounded-xl bg-[#070B12]/80 border border-[#2A3F5E] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#F0B33E]/15 border border-[#F0B33E]/40 flex items-center justify-center text-[#F0B33E]">
                          <Compass className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white">
                            DWG-IMP-316L-REV-C.step
                          </div>
                          <div className="text-xs text-[#94A3B8]">
                            Customer: Bharat Precision Dynamics • 250 pcs batch
                          </div>
                        </div>
                      </div>

                      <Button
                        size="sm"
                        variant="primary"
                        onClick={() => setActiveTab("dashboard")}
                        icon={<ArrowRight className="w-3.5 h-3.5" />}
                      >
                        Adjust Pricing & Margin
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>

        {/* Book a Demo Modal */}
        <DemoModal
          isOpen={demoModalOpen}
          onClose={() => setDemoModalOpen(false)}
        />
      </section>

      {/* FULL SCREEN CINEMA MODAL */}
      {isCinemaOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Full screen robotic milling video"
          onClick={() => setIsCinemaOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-xl animate-in fade-in duration-200"
        >
          <div
            className="relative max-w-5xl w-full bg-[#070B12] rounded-2xl border border-[#F0B33E]/50 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-[#0B1322] border-b border-[#2A3F5E]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#36C98F]" />
                <span className="text-sm font-semibold text-white">
                  Robot Mills Metal & Lights • Precision 5-Axis Robotic Milling
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsCinemaOpen(false)}
                className="p-1.5 rounded-lg text-[#94A3B8] hover:text-white hover:bg-[#111C2E] transition-colors"
                aria-label="Close cinema mode"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Viewport */}
            <div className="relative aspect-video w-full bg-black">
              <video
                src="/videos/robot-mills.mp4"
                controls
                autoPlay
                className="w-full h-full object-contain filter contrast-[1.15] brightness-[0.95]"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
