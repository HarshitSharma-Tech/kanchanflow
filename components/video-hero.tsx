"use client";

import React, { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
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
  SunMedium,
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
  const [isPlaying, setIsPlaying] = useState(true);
  const [isCinemaOpen, setIsCinemaOpen] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isHighExposure, setIsHighExposure] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Defer video stream until after initial render paint to guarantee high Lighthouse score
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!prefersReducedMotion) {
      const timer = setTimeout(() => {
        setShouldLoadVideo(true);
      }, 60);
      return () => clearTimeout(timer);
    }
  }, []);

  // Ensure video runs at smooth playback rate (0.6x speed is baked into file PTS)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.0;
    }
  }, [shouldLoadVideo]);

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
      <section className="relative min-h-[92vh] flex items-center pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden bg-[#07090E]">
        {/* ========================================================= */}
        {/* FULL BACKGROUND VIDEO: Walking Down Precision Factory Aisle */}
        {/* ========================================================= */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
          <video
            ref={videoRef}
            poster="/videos/factory-poster.webp"
            autoPlay
            loop
            muted
            playsInline
            preload={shouldLoadVideo ? "metadata" : "none"}
            onLoadedData={() => {
              if (videoRef.current) videoRef.current.playbackRate = 1.0;
            }}
            className={`w-full h-full object-cover object-center scale-[1.01] filter transition-all duration-700 ${
              isHighExposure
                ? "brightness-[1.28] contrast-[1.08] saturate-[1.25]"
                : "brightness-[1.12] contrast-[1.05] saturate-[1.15]"
            }`}
          >
            {shouldLoadVideo && (
              <>
                <source
                  src="/videos/factory-precision-walkthrough.mp4"
                  type="video/mp4"
                />
                <source
                  src="/videos/factory-precision-walkthrough.webm"
                  type="video/webm"
                />
              </>
            )}
          </video>

          {/* Soft Left Reading Gradient: keeps text legible while leaving 70% of factory walkway bright & open */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07090E]/75 via-[#07090E]/30 via-35% to-transparent z-10 pointer-events-none" />

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
            <div className="lg:col-span-8 xl:col-span-7 text-left space-y-6">
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

            {/* Right Side: Creative High-Tech HUD Video Controller Badge */}
            <div className="lg:col-span-4 xl:col-span-5 flex flex-col items-start lg:items-end justify-end">
              <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-[#08090C]/85 backdrop-blur-md border border-[#F0B33E]/30 shadow-2xl text-xs">
                {/* Live Status indicator */}
                <div className="flex items-center gap-2 px-3 py-1">
                  <span className="w-2 h-2 rounded-full bg-[#36C98F] animate-pulse" />
                  <span className="text-white font-medium text-xs tracking-tight">
                    Plant Floor • 0.6x Walkthrough
                  </span>
                </div>

                {/* Brightness / High Exposure Boost Toggle */}
                <button
                  type="button"
                  onClick={() => setIsHighExposure(!isHighExposure)}
                  className={`p-1.5 rounded-full transition-colors ${
                    isHighExposure
                      ? "text-[#F0B33E] bg-[#F0B33E]/15 hover:bg-[#F0B33E]/25"
                      : "text-[#94A3B8] hover:text-white hover:bg-[#181C26]"
                  }`}
                  aria-label={isHighExposure ? "High exposure active" : "Enable high exposure"}
                  title={isHighExposure ? "High brightness mode (Active)" : "Switch to high exposure mode"}
                >
                  <SunMedium className="w-3.5 h-3.5" />
                </button>

                {/* Play/Pause Button */}
                <button
                  type="button"
                  onClick={togglePlay}
                  className="p-1.5 rounded-full text-[#94A3B8] hover:text-[#F0B33E] hover:bg-[#181C26] transition-colors"
                  aria-label={isPlaying ? "Pause background video" : "Play background video"}
                  title={isPlaying ? "Pause background video" : "Play background video"}
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                </button>

                {/* Fullscreen Cinema Mode Button */}
                <button
                  type="button"
                  onClick={() => setIsCinemaOpen(true)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#181C26] text-xs font-semibold text-[#F0B33E] hover:bg-[#222736] transition-colors border border-[#F0B33E]/25"
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

        {/* Demo Modal (Loaded on Demand) */}
        {demoModalOpen && (
          <DemoModal
            isOpen={demoModalOpen}
            onClose={() => setDemoModalOpen(false)}
          />
        )}
      </section>

      {/* FULL SCREEN CINEMA MODAL */}
      {isCinemaOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Full screen precision manufacturing video"
          onClick={() => setIsCinemaOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-xl animate-in fade-in duration-200"
        >
          <div
            className="relative max-w-5xl w-full bg-[#08090C] rounded-2xl border border-[#F0B33E]/50 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-[#12151D] border-b border-[#262B38]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#36C98F]" />
                <span className="text-sm font-semibold text-white">
                  Precision Plant Floor • 0.6x Cinematic Machining Walkthrough
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsCinemaOpen(false)}
                className="p-1.5 rounded-lg text-[#94A3B8] hover:text-white hover:bg-[#181C26] transition-colors"
                aria-label="Close cinema mode"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Viewport */}
            <div className="relative aspect-video w-full bg-black">
              <video
                poster="/videos/factory-poster.webp"
                controls
                autoPlay
                className="w-full h-full object-contain filter contrast-[1.08] brightness-[1.20] saturate-[1.20]"
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
            </div>
          </div>
        </div>
      )}
    </>
  );
}
