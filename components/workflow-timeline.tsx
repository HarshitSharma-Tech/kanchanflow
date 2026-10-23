"use client";

import React, { useState, useEffect, useRef } from "react";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";
import { Play, Pause, ArrowRight, Zap, CheckCircle2 } from "lucide-react";

export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
  badge: string;
  telemetry: string;
  gate: string;
  metric: string;
}

const workflowSteps: WorkflowStep[] = [
  {
    step: "01",
    title: "Enquiry Capture & RFQ",
    description:
      "Log customer RFQs, 2D/3D CAD drawings, specifications, and delivery target dates in a single central repository.",
    badge: "Intake",
    telemetry: "Multi-CAD 3D Link",
    gate: "Locked to Rev C Specimen",
    metric: "< 15 min intake",
  },
  {
    step: "02",
    title: "Costing & BOM Calculation",
    description:
      "Break down raw materials, machine cycle times, tooling overheads, and target profit margins with automated formula guards.",
    badge: "Engineering",
    telemetry: "Dynamic Spindle Rate",
    gate: "Protected Margin Guard",
    metric: "0% Margin Drift",
  },
  {
    step: "03",
    title: "Quotation & Customer Approval",
    description:
      "Generate branded, audit-ready PDF quotes with clear revision tags. Track customer opens, questions, and approvals.",
    badge: "Commercial",
    telemetry: "Instant WhatsApp Alert",
    gate: "ISO 9001 Compliance Stamp",
    metric: "1-Click PDF Export",
  },
  {
    step: "04",
    title: "Order Handoff to Production",
    description:
      "Convert approved quotes into verified production job cards and BOM releases for the shop floor without email misunderstandings.",
    badge: "Shop Floor",
    telemetry: "Direct CAM Release",
    gate: "1-Click ERP & Shop Traveler",
    metric: "Zero Retyping",
  },
];

export function WorkflowTimeline() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const STEP_DURATION = 3200; // 3.2 seconds per step

  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % workflowSteps.length);
    }, STEP_DURATION);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  return (
    <section
      id="workflow"
      className="py-20 lg:py-24 bg-[#0C0E14] border-y border-[#222633] relative overflow-hidden"
    >
      {/* Background Tech Grids & Radial Glow */}
      <div className="absolute inset-0 bg-grid-industrial opacity-20 pointer-events-none" />
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[380px] bg-[#F0B33E]/6 blur-[140px] rounded-full pointer-events-none -z-0"
      />

      <Container>
        {/* Section Heading with Real-Time Cadence Indicator */}
        <div className="flex flex-col items-center text-center">
          <SectionHeading
            eyebrow="Precision Process"
            title="Four connected steps from enquiry to shop release."
            description="A clear, repeatable cadence designed to eliminate confusion between customer communication, commercial estimation, and factory execution."
          />

          {/* Interactive Flow Bar Controls */}
          <div className="mt-8 inline-flex items-center gap-2 sm:gap-3 p-1.5 rounded-full bg-[#12151E]/90 border border-[#262B38] backdrop-blur-md shadow-xl text-xs">
            <div className="flex items-center gap-2 px-3 py-1 text-[#94A3B8]">
              <span className="w-2 h-2 rounded-full bg-[#F0B33E] animate-pulse" />
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#CBD5E1]">
                Pipeline Cadence
              </span>
            </div>

            {/* Quick Step Indicators */}
            <div className="flex items-center gap-1.5 px-1">
              {workflowSteps.map((step, idx) => (
                <button
                  key={step.step}
                  type="button"
                  onClick={() => {
                    setActiveStep(idx);
                  }}
                  className={`px-2.5 py-1 rounded-full text-[11px] font-mono font-bold transition-all ${
                    activeStep === idx
                      ? "bg-[#F0B33E] text-[#08090C] shadow-md shadow-[#F0B33E]/20"
                      : "bg-[#181C26] text-[#94A3B8] hover:text-white hover:bg-[#222736]"
                  }`}
                  aria-label={`Jump to Step ${step.step}: ${step.title}`}
                >
                  {step.step}
                </button>
              ))}
            </div>

            {/* Pause / Resume Button */}
            <button
              type="button"
              onClick={() => setIsPaused(!isPaused)}
              className="p-1.5 rounded-full text-[#94A3B8] hover:text-[#F0B33E] hover:bg-[#181C26] transition-colors"
              title={isPaused ? "Resume auto-rotation" : "Pause auto-rotation"}
              aria-label={isPaused ? "Resume auto-rotation" : "Pause auto-rotation"}
            >
              {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Desktop Horizontal Timeline / Mobile Stack */}
        <div
          className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-6 relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Connector Line with Live Animated Laser Pulse */}
          <div className="hidden md:block absolute top-[58px] left-12 right-12 h-0.5 bg-[#262B38] z-0">
            {/* Animated Laser Pulse that tracks active card */}
            <div
              className="h-full bg-gradient-to-r from-transparent via-[#F0B33E] to-transparent transition-all duration-700 ease-out"
              style={{
                width: "25%",
                transform: `translateX(${activeStep * 100}%)`,
                boxShadow: "0 0 14px rgba(240, 179, 62, 0.9)",
              }}
            />
          </div>

          {/* 4 Workflow Cards with Sequential Highlighting */}
          {workflowSteps.map((item, index) => {
            const isActive = activeStep === index;

            return (
              <div
                key={item.step}
                onClick={() => setActiveStep(index)}
                className={`relative z-10 flex flex-col justify-between p-6 sm:p-7 rounded-2xl cursor-pointer transition-all duration-500 overflow-hidden text-left ${
                  isActive
                    ? "bg-gradient-to-b from-[#1E1B13] via-[#14161F] to-[#0F1118] border-2 border-[#F0B33E] shadow-[0_0_35px_rgba(240,179,62,0.32),0_20px_45px_rgba(0,0,0,0.85)] scale-[1.03] -translate-y-2 z-20"
                    : "bg-[#12151D] border border-[#262B38] hover:border-[#F0B33E]/50 shadow-xl opacity-85 hover:opacity-100 hover:-translate-y-1"
                }`}
              >
                {/* Active Golden Progress Timer Bar */}
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#2A3142] overflow-hidden">
                    <div
                      key={`progress-${activeStep}`}
                      className="h-full bg-gradient-to-r from-[#FFD875] to-[#F0B33E] animate-progress"
                      style={{
                        animationDuration: isPaused ? "0s" : `${STEP_DURATION}ms`,
                      }}
                    />
                  </div>
                )}

                {/* Ambient Top Rim Beam */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent ${
                    isActive
                      ? "via-[#F0B33E] opacity-100"
                      : "via-[#F0B33E]/0 hover:via-[#F0B33E]/60 opacity-0 hover:opacity-100"
                  } transition-all duration-500`}
                />

                <div>
                  {/* Card Header: Step Pill & Department Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className={`w-11 h-11 rounded-xl font-mono text-sm font-black flex items-center justify-center transition-all duration-500 shadow-md ${
                        isActive
                          ? "bg-gradient-to-br from-[#F0B33E] to-[#D9951A] text-[#08090C] border border-[#FFE494] shadow-[0_0_16px_rgba(240,179,62,0.6)] scale-110"
                          : "bg-gradient-to-br from-[#1E2330] to-[#0F1118] border border-[#F0B33E]/40 text-[#F0B33E]"
                      }`}
                    >
                      {item.step}
                    </span>

                    <div className="flex items-center gap-1.5">
                      <span
                        className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md font-semibold transition-colors ${
                          isActive
                            ? "bg-[#F0B33E]/20 border border-[#F0B33E]/50 text-[#F0B33E]"
                            : "bg-[#181C26] border border-[#2A3142] text-[#CBD5E1]"
                        }`}
                      >
                        {item.badge}
                      </span>
                    </div>
                  </div>

                  {/* Telemetry Tag */}
                  <div
                    className={`inline-flex items-center gap-1.5 text-[10px] font-mono font-medium px-2 py-0.5 rounded mb-2.5 transition-colors ${
                      isActive
                        ? "bg-[#F0B33E]/20 border border-[#F0B33E]/50 text-[#FFD875] shadow-xs"
                        : "bg-[#F0B33E]/10 border border-[#F0B33E]/20 text-[#F0B33E]"
                    }`}
                  >
                    <Zap className="w-3 h-3 text-[#F0B33E]" />
                    <span>{item.telemetry}</span>
                  </div>

                  {/* Step Title (Gold Highlight when active) */}
                  <h3
                    className={`text-lg sm:text-xl font-bold tracking-tight transition-colors duration-300 ${
                      isActive
                        ? "text-[#F0B33E] drop-shadow-[0_2px_12px_rgba(240,179,62,0.3)]"
                        : "text-white"
                    }`}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 text-xs sm:text-sm text-[#94A3B8] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Footer Gate & Metrics */}
                <div className="mt-6 pt-4 border-t border-[#262B38] flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2 text-[#36C98F]">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        isActive ? "bg-[#36C98F] animate-ping" : "bg-[#36C98F]"
                      }`}
                    />
                    <span className="truncate">{item.gate}</span>
                  </div>

                  {isActive && (
                    <span className="text-[10px] text-[#F0B33E] font-bold uppercase tracking-wider animate-in fade-in">
                      {item.metric}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
