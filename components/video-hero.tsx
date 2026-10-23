"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  ZoomIn,
  X,
  Factory,
  Layers,
  Sparkles,
  Maximize2,
  Eye,
  Sliders,
} from "lucide-react";
import { Container } from "./container";
import { Button } from "./button";
import { DashboardMockup } from "./dashboard-mockup";
import { DemoModal } from "./demo-modal";

export function VideoHero() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [activeView, setActiveView] = useState<"photo" | "software">("photo");
  const [isPhotoZoomed, setIsPhotoZoomed] = useState(false);

  return (
    <>
      <section className="relative min-h-[90vh] flex items-center pt-8 pb-16 lg:py-20 overflow-hidden bg-[#0B111B]">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-grid-industrial opacity-30 pointer-events-none" />

        {/* Soft warm ambient lighting */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#F0B33E]/10 blur-[130px] pointer-events-none rounded-full" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[300px] bg-[#16263A]/50 blur-[100px] pointer-events-none rounded-full" />

        <Container size="wide" className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Simple, Clear Copy & CTAs */}
            <div className="lg:col-span-5 text-left space-y-6">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#F0B33E]/40 bg-[#F0B33E]/10 text-xs font-semibold uppercase tracking-wider text-[#F0B33E]">
                <Factory className="w-3.5 h-3.5" />
                <span>Built for Manufacturing Teams</span>
              </div>

              {/* Clear, Bold Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F3ED] leading-[1.15]">
                From quotation to order.{" "}
                <span className="text-[#F0B33E] block mt-1">
                  Without the chaos.
                </span>
              </h1>

              {/* Simple, Readable Supporting Copy */}
              <p className="text-base sm:text-lg text-[#A4B0BE] leading-relaxed max-w-xl font-normal">
                Bring customer enquiries, costing, quotations, and order handoffs into one connected workflow designed for precision manufacturers.
              </p>

              {/* Action Buttons */}
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
                >
                  Explore Features
                </Button>
              </div>

              {/* Simple Benefits (No Jargon) */}
              <div className="pt-6 border-t border-[#2A3B50]/60 space-y-3 text-sm text-[#F5F3ED]">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#36C98F]/20 text-[#36C98F] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>
                    <strong className="font-semibold text-white">Fast Quotes:</strong> Issue accurate pricing in minutes instead of days
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#36C98F]/20 text-[#36C98F] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>
                    <strong className="font-semibold text-white">Accurate Costing:</strong> Track raw materials, machine hours, and margins
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#36C98F]/20 text-[#36C98F] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>
                    <strong className="font-semibold text-white">Clean Order Handoff:</strong> Release confirmed jobs to the shop without errors
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual with Zoom & Toggle */}
            <div className="lg:col-span-7 relative">
              {/* Top View Selector Toggle */}
              <div className="flex items-center justify-between pb-3">
                <div className="inline-flex items-center p-1 rounded-lg bg-[#111B29] border border-[#2A3B50]">
                  <button
                    type="button"
                    onClick={() => setActiveView("photo")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                      activeView === "photo"
                        ? "bg-[#16263A] text-[#F0B33E] border border-[#F0B33E]/40 shadow-sm"
                        : "text-[#A4B0BE] hover:text-[#F5F3ED]"
                    }`}
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Shop Floor View</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveView("software")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                      activeView === "software"
                        ? "bg-[#16263A] text-[#F0B33E] border border-[#F0B33E]/40 shadow-sm"
                        : "text-[#A4B0BE] hover:text-[#F5F3ED]"
                    }`}
                  >
                    <Sliders className="w-3.5 h-3.5" />
                    <span>Interactive CRM Demo</span>
                  </button>
                </div>

                {activeView === "photo" && (
                  <button
                    type="button"
                    onClick={() => setIsPhotoZoomed(true)}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-[#16263A] border border-[#2A3B50] text-xs text-[#F0B33E] hover:bg-[#1C324D] transition-colors"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>Click to Zoom</span>
                  </button>
                )}
              </div>

              {/* View 1: Photo View with Interactive Hover Zoom & Full Screen Trigger */}
              {activeView === "photo" ? (
                <div
                  onClick={() => setIsPhotoZoomed(true)}
                  className="group relative rounded-2xl border-2 border-[#2A3B50] hover:border-[#F0B33E]/60 bg-[#111B29] overflow-hidden shadow-2xl cursor-zoom-in transition-all duration-300 gold-glow-card"
                >
                  <div className="relative aspect-[16/10] sm:aspect-[16/10] w-full overflow-hidden bg-[#0B111B]">
                    <Image
                      src="/images/hero-plant-engineer.jpg"
                      alt="Manufacturing engineer using KanchanFlow CRM at machine shop workstation with precision CNC components and drawings"
                      fill
                      priority
                      className="object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-108"
                      sizes="(max-width: 1024px) 100vw, 55vw"
                    />

                    {/* Gradient overlay so content blends softly at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B111B]/90 via-transparent to-black/20 pointer-events-none" />

                    {/* Floating Zoom Indicator Pill */}
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0B111B]/80 backdrop-blur-md border border-[#F0B33E]/40 text-xs font-semibold text-[#F0B33E] shadow-lg group-hover:bg-[#F0B33E] group-hover:text-[#0B111B] transition-colors">
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>Click to Zoom</span>
                    </div>

                    {/* Bottom Caption Pill */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#F5F3ED] bg-[#0B111B]/85 backdrop-blur-md px-4 py-2.5 rounded-xl border border-[#2A3B50]/80">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#36C98F] animate-pulse" />
                        <span className="font-semibold text-white">
                          KanchanFlow in Production
                        </span>
                        <span className="text-[#A4B0BE] hidden sm:inline">
                          • Precision CNC Machining & Quotation Workstation
                        </span>
                      </div>
                      <span className="text-[#F0B33E] font-medium hidden sm:inline">
                        Full Screen Zoom →
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                /* View 2: Live React Software Dashboard */
                <DashboardMockup />
              )}
            </div>
          </div>
        </Container>

        {/* Demo Modal */}
        <DemoModal
          isOpen={demoModalOpen}
          onClose={() => setDemoModalOpen(false)}
        />
      </section>

      {/* FULL SCREEN PHOTO ZOOM LIGHTBOX MODAL */}
      {isPhotoZoomed && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Full screen photo zoom view"
          onClick={() => setIsPhotoZoomed(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200 cursor-zoom-out"
        >
          <div
            className="relative max-w-6xl w-full max-h-[90vh] bg-[#111B29] rounded-2xl border border-[#F0B33E]/40 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Modal Bar */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-[#0B111B] border-b border-[#2A3B50]">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#36C98F]" />
                <span className="text-sm font-semibold text-white">
                  KanchanFlow Shop Floor Deployment • High Resolution
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsPhotoZoomed(false)}
                className="p-1.5 rounded-lg text-[#A4B0BE] hover:text-white hover:bg-[#16263A] transition-colors"
                aria-label="Close zoomed view"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* High-Resolution Zoomable Image Display */}
            <div className="relative aspect-[16/10] w-full bg-[#070D16] overflow-hidden">
              <Image
                src="/images/hero-plant-engineer.jpg"
                alt="Detailed view of KanchanFlow CRM workstation in precision machining plant"
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            {/* Bottom Details Bar */}
            <div className="p-4 bg-[#0B111B] border-t border-[#2A3B50] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#A4B0BE]">
              <div className="flex items-center gap-3">
                <span className="text-[#F0B33E] font-medium">
                  Workstation Elements:
                </span>
                <span>• Live CRM on Laptop</span>
                <span>• 5-Axis Machined Manifold</span>
                <span>• Technical Blueprints</span>
                <span>• CNC Milling Center</span>
              </div>
              <Button
                size="sm"
                variant="primary"
                onClick={() => {
                  setIsPhotoZoomed(false);
                  setDemoModalOpen(true);
                }}
              >
                Book a Demo for Your Plant
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
