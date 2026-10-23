"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Zap,
  Target,
  ShieldCheck,
  Factory,
  Maximize2,
  Sliders,
  Play,
  Pause,
  Volume2,
  VolumeX,
  X,
  Compass,
  CheckCircle2,
} from "lucide-react";
import { Container } from "./container";
import { Button } from "./button";
import { DashboardMockup } from "./dashboard-mockup";
import { DemoModal } from "./demo-modal";

export function VideoHero() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"video" | "dashboard">("dashboard");
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
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

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <section className="relative min-h-[92vh] flex items-center pt-8 pb-16 lg:pt-12 lg:pb-20 overflow-hidden bg-[#0B111B]">
        {/* Ambient Warm Golden Wave Ribbon (Matching Reference Design) */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none z-10 overflow-hidden"
        >
          <svg
            viewBox="0 0 1440 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full opacity-60 preserve-3d"
          >
            <path
              d="M-100 280 C 200 120, 500 480, 800 260 C 1100 80, 1300 400, 1600 280"
              stroke="url(#goldenWave)"
              strokeWidth="2.5"
              strokeDasharray="6 3"
              className="animate-pulse"
            />
            <path
              d="M-80 300 C 220 150, 520 500, 820 280 C 1120 100, 1320 420, 1620 300"
              stroke="url(#goldenWaveGlow)"
              strokeWidth="1.2"
            />
            <defs>
              <linearGradient id="goldenWave" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F0B33E" stopOpacity="0.1" />
                <stop offset="35%" stopColor="#FFD875" stopOpacity="0.8" />
                <stop offset="65%" stopColor="#F0B33E" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#C98B19" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="goldenWaveGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F0B33E" stopOpacity="0" />
                <stop offset="50%" stopColor="#FFD875" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#F0B33E" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Cinematic Video / Workshop Layer (Seamless Right Half Blend with Golden Color Grading) */}
        <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[65%] overflow-hidden pointer-events-none select-none z-0">
          {/* 1. Left Fade Gradient (Ensures left-side typography is 100% crisp and readable) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B111B] via-[#0B111B]/85 via-35% to-transparent z-10 w-full lg:w-[50%]" />

          {/* 2. Top and Bottom Dark Edge Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B111B] via-transparent via-50% to-[#0B111B]/70 z-10" />

          {/* 3. Warm Golden Amber Color Grading (Tungsten Foundry Atmosphere) */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#F0B33E]/12 via-transparent to-amber-950/20 mix-blend-color-dodge z-10 pointer-events-none" />

          {/* 4. Film Contrast Tint */}
          <div className="absolute inset-0 bg-[#0B111B]/20 mix-blend-multiply z-10 pointer-events-none" />

          {/* Video element with hardware accelerated color grading filter */}
          <video
            ref={videoRef}
            src="/videos/hero-manufacturing.mp4"
            poster="/images/hero-plant-engineer.jpg"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover object-center scale-105 filter contrast-[1.12] brightness-[0.92] saturate-[1.2]"
          />
        </div>

        <Container size="wide" className="relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column (Strictly matching reference screenshot) */}
            <div className="lg:col-span-5 text-left space-y-6">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#F0B33E]/40 bg-[#0B111B]/85 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-[#F0B33E] shadow-sm">
                <Factory className="w-3.5 h-3.5 text-[#F0B33E]" />
                <span>BUILT FOR MANUFACTURING TEAMS</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                From quotation to order.{" "}
                <span className="text-[#F0B33E] block mt-1">
                  Without the chaos.
                </span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-[#A4B0BE] leading-relaxed max-w-xl font-normal">
                Bring customer enquiries, costing, quotations, and order handoffs into one connected workflow designed for precision manufacturers.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <Button
                  size="lg"
                  variant="primary"
                  onClick={() => setDemoModalOpen(true)}
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="shadow-lg shadow-[#F0B33E]/20 text-[#0B111B] font-bold"
                >
                  Book a Demo
                </Button>

                <Button
                  size="lg"
                  variant="secondary"
                  href="/features"
                  className="bg-[#16263A]/85 border-[#2A3B50] hover:border-[#F0B33E]/50 text-white"
                >
                  Explore Features
                </Button>
              </div>

              {/* Three Value Bullets (Strictly matching reference design) */}
              <div className="pt-8 border-t border-[#2A3B50]/60 grid grid-cols-1 sm:grid-cols-3 gap-5 text-left">
                {/* 1. Fast Quotes */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#16263A] border border-[#2A3B50] flex items-center justify-center text-[#F0B33E] shrink-0 mt-0.5 shadow-sm">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-sm font-bold text-white">
                      Fast Quotes
                    </strong>
                    <span className="text-xs text-[#A4B0BE]">
                      Accurate pricing in minutes
                    </span>
                  </div>
                </div>

                {/* 2. True Costing */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#16263A] border border-[#2A3B50] flex items-center justify-center text-[#F0B33E] shrink-0 mt-0.5 shadow-sm">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-sm font-bold text-white">
                      True Costing
                    </strong>
                    <span className="text-xs text-[#A4B0BE]">
                      Track materials & margins
                    </span>
                  </div>
                </div>

                {/* 3. Clean Handoffs */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#16263A] border border-[#2A3B50] flex items-center justify-center text-[#F0B33E] shrink-0 mt-0.5 shadow-sm">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-sm font-bold text-white">
                      Clean Handoffs
                    </strong>
                    <span className="text-xs text-[#A4B0BE]">
                      Send confirmed jobs to shop
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Laptop Workstation Mockup & Video Controller (Matching Reference Design) */}
            <div className="lg:col-span-7 flex flex-col items-end justify-center pt-4 lg:pt-0">
              {/* Top View Toggle & Media Controls Bar */}
              <div className="w-full flex flex-wrap items-center justify-between gap-2.5 mb-3">
                {/* Mode Selector Tabs */}
                <div className="inline-flex p-1 rounded-xl bg-[#0B111B]/90 backdrop-blur-md border border-[#2A3B50] shadow-lg text-xs">
                  <button
                    type="button"
                    onClick={() => setActiveTab("dashboard")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all ${
                      activeTab === "dashboard"
                        ? "bg-[#F0B33E] text-[#0B111B] shadow-sm"
                        : "text-[#A4B0BE] hover:text-white"
                    }`}
                  >
                    <Sliders className="w-3.5 h-3.5" />
                    <span>CRM Simulator</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab("video")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all ${
                      activeTab === "video"
                        ? "bg-[#F0B33E] text-[#0B111B] shadow-sm"
                        : "text-[#A4B0BE] hover:text-white"
                    }`}
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>CNC Video Reel</span>
                  </button>
                </div>

                {/* Media Control Actions */}
                <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#0B111B]/90 backdrop-blur-md border border-[#2A3B50] shadow-lg">
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="p-1.5 rounded-lg text-[#A4B0BE] hover:text-[#F0B33E] hover:bg-[#16263A] transition-colors"
                    aria-label={isPlaying ? "Pause background video" : "Play background video"}
                    title={isPlaying ? "Pause background video" : "Play background video"}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>

                  <button
                    type="button"
                    onClick={toggleMute}
                    className="p-1.5 rounded-lg text-[#A4B0BE] hover:text-[#F0B33E] hover:bg-[#16263A] transition-colors"
                    aria-label={isMuted ? "Unmute video sound" : "Mute video sound"}
                    title={isMuted ? "Unmute video sound" : "Mute video sound"}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsVideoModalOpen(true)}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#16263A] text-xs font-semibold text-[#F0B33E] hover:bg-[#1F3652] transition-colors"
                    aria-label="Expand video full screen"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Cinema Mode</span>
                  </button>
                </div>
              </div>

              {/* Main Showcase Frame */}
              <div className="w-full relative rounded-2xl border border-[#F0B33E]/30 bg-[#0B111B]/80 backdrop-blur-xl shadow-2xl overflow-hidden gold-glow-card">
                {activeTab === "dashboard" ? (
                  /* Interactive Live CRM Dashboard */
                  <div className="p-1 sm:p-2">
                    <DashboardMockup />
                  </div>
                ) : (
                  /* High Definition Video Viewport with Live Color Grade */
                  <div className="relative aspect-video w-full bg-black overflow-hidden flex items-center justify-center group">
                    <video
                      src="/videos/hero-manufacturing.mp4"
                      autoPlay
                      loop
                      muted={isMuted}
                      playsInline
                      className="w-full h-full object-cover filter contrast-[1.12] brightness-[0.92] saturate-[1.2]"
                    />

                    {/* Overlay telemetry badges */}
                    <div className="absolute top-3 left-3 flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#0B111B]/80 backdrop-blur-md border border-[#2A3B50] text-[11px] font-mono text-white">
                      <span className="w-2 h-2 rounded-full bg-[#36C98F] animate-pulse" />
                      <span>Live Shop Floor Feed • Plant 01</span>
                    </div>

                    <div className="absolute bottom-3 right-3 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setIsVideoModalOpen(true)}
                        className="px-3 py-1.5 rounded-lg bg-[#F0B33E] text-[#0B111B] text-xs font-bold flex items-center gap-1.5 shadow-lg hover:bg-[#FFD875] transition-colors"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Watch Fullscreen</span>
                      </button>
                    </div>
                  </div>
                )}
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

      {/* FULL SCREEN VIDEO CINEMA MODAL */}
      {isVideoModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Full screen manufacturing video"
          onClick={() => setIsVideoModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-xl animate-in fade-in duration-200"
        >
          <div
            className="relative max-w-5xl w-full bg-[#111B29] rounded-2xl border border-[#F0B33E]/50 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-[#0B111B] border-b border-[#2A3B50]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#36C98F]" />
                <span className="text-sm font-semibold text-white">
                  KanchanFlow Shop Floor Deployment • Precision Machining Video
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsVideoModalOpen(false)}
                className="p-1.5 rounded-lg text-[#A4B0BE] hover:text-white hover:bg-[#16263A] transition-colors"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player */}
            <div className="relative aspect-video w-full bg-black">
              <video
                src="/videos/hero-manufacturing.mp4"
                controls
                autoPlay
                className="w-full h-full object-contain filter contrast-[1.1] brightness-[0.95]"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
