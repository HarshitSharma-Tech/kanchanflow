"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Zap,
  Target,
  ShieldCheck,
  Factory,
  Play,
  Pause,
  Maximize2,
  X,
} from "lucide-react";
import { Container } from "./container";
import { Button } from "./button";
import { DemoModal } from "./demo-modal";

export function VideoHero() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
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
      <section className="relative min-h-[92vh] flex items-center pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden bg-[#070B12]">
        {/* ========================================================= */}
        {/* FULL BACKGROUND VIDEO: Robot mills metal & lights (MUTED) */}
        {/* ========================================================= */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
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

          {/* Left Gradient so text has 100% solid contrast on all devices */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070B12]/95 via-[#070B12]/75 via-45% to-[#070B12]/30 z-10" />

          {/* Top & Bottom Vignettes for Seamless Blending */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070B12] via-transparent via-40% to-[#070B12]/85 z-10" />

          {/* Molten Amber / Tungsten Color Grade Tint */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#F0B33E]/12 via-transparent to-amber-950/25 mix-blend-color-dodge z-10 pointer-events-none" />

          {/* Deep Film Contrast Multiplier */}
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

        {/* Hero Content Container */}
        <Container size="wide" className="relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column (Strictly matching reference design) */}
            <div className="lg:col-span-8 xl:col-span-7 text-left space-y-6">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#F0B33E]/40 bg-[#070B12]/85 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-[#F0B33E] shadow-sm">
                <Factory className="w-3.5 h-3.5 text-[#F0B33E]" />
                <span>BUILT FOR MANUFACTURING TEAMS</span>
              </div>

              {/* Bold Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] drop-shadow-sm">
                From quotation to order.{" "}
                <span className="text-[#F0B33E] block mt-1">
                  Without the chaos.
                </span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed max-w-2xl font-normal drop-shadow-xs">
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

              {/* Three Value Bullets (Strictly matching reference design) */}
              <div className="pt-8 border-t border-[#2A3F5E]/60 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-2xl">
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

            {/* Right Side: Unobstructed View of the Cinematic Robotic Milling Video with Floating Video Controller Badge */}
            <div className="lg:col-span-4 xl:col-span-5 flex flex-col items-start lg:items-end justify-end">
              {/* Subtle Floating Video Badge & Cinema Button */}
              <div className="flex items-center gap-2 p-1.5 rounded-full bg-[#070B12]/80 backdrop-blur-md border border-[#2A3F5E] shadow-xl text-xs">
                <div className="flex items-center gap-2 px-3 py-1">
                  <span className="w-2 h-2 rounded-full bg-[#36C98F] animate-pulse" />
                  <span className="text-white font-medium text-xs">
                    Autonomous Robotic Milling
                  </span>
                </div>

                {/* Play/Pause Button */}
                <button
                  type="button"
                  onClick={togglePlay}
                  className="p-1.5 rounded-full text-[#94A3B8] hover:text-[#F0B33E] hover:bg-[#111C2E] transition-colors"
                  aria-label={isPlaying ? "Pause background video" : "Play background video"}
                  title={isPlaying ? "Pause background video" : "Play background video"}
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                </button>

                {/* Fullscreen Cinema Mode Button */}
                <button
                  type="button"
                  onClick={() => setIsCinemaOpen(true)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#111C2E] text-xs font-semibold text-[#F0B33E] hover:bg-[#1A2A42] transition-colors"
                  aria-label="Expand video cinema mode"
                  title="Expand video cinema mode"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Cinema View</span>
                </button>
              </div>
            </div>
          </div>
        </Container>

        {/* Demo Modal */}
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
