import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  FileText,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Factory,
  Boxes,
  Clock,
  Zap,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { SectionCTA } from "@/components/section-cta";
import { Button } from "@/components/button";

export const metadata: Metadata = {
  title: "KanchanFlow Features | Connected Manufacturing CRM & Quote-to-Order",
  description:
    "Explore how KanchanFlow connects enquiry triage, BOM costing, drawing revision control, and shop floor order handoffs for precision manufacturers.",
  openGraph: {
    title: "KanchanFlow Features — The Connected Workflow for Manufacturing Sales",
    description:
      "Replace scattered spreadsheets and lost email threads with a single connected platform for precision manufacturing.",
    type: "website",
    url: "https://kanchanflow.com/features",
  },
};

export default function FeaturesPage() {
  const comparisonItems = [
    {
      dimension: "Revision Governance",
      traditional: "Multiple Excel versions saved in personal folders; outdated drawings frequently quoted.",
      kanchanflow: "Version-locked Rev A, B, C with instant cost deltas and customer approval verification.",
    },
    {
      dimension: "BOM Costing & Rates",
      traditional: "Fragile spreadsheet formulas with inconsistent machine hourly rates and manual scrap estimates.",
      kanchanflow: "Structured BOM with machine rate cards, swarf recovery offsets, and protected margin thresholds.",
    },
    {
      dimension: "Sales Pipeline Visibility",
      traditional: "Deals buried in sales rep email threads; no real-time visibility into quote status or follow-ups.",
      kanchanflow: "Live pipeline with manufacturing stages (RFQ Intake, Costing, Negotiation, Shop Release).",
    },
    {
      dimension: "Shop Floor Handoff",
      traditional: "Sales emails a scanned purchase order to production; critical drawing notes missed in transit.",
      kanchanflow: "1-click conversion to digital job travelers with approved drawings and direct ERP/Tally sync.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#08090C] text-[#F5F3ED]">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* ========================================================= */}
        {/* SECTION 1: HERO (Benefit-Focused, Warm Dark Aesthetic)    */}
        {/* ========================================================= */}
        <section className="relative pt-12 pb-16 lg:pt-18 lg:pb-22 border-b border-[#222633] overflow-hidden bg-[#08090C]">
          {/* Subtle Golden Ambient Spotlight */}
          <div
            aria-hidden="true"
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#F0B33E]/5 blur-[120px] rounded-full pointer-events-none -z-0"
          />

          <Container>
            <div className="max-w-3xl mx-auto text-center space-y-5">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181C26] border border-[#F0B33E]/30 text-xs font-semibold uppercase tracking-wider text-[#F0B33E] shadow-sm">
                <Factory className="w-3.5 h-3.5" />
                <span>PRECISION SALES FOR MANUFACTURING</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                The connected platform for{" "}
                <span className="text-[#F0B33E]">modern manufacturing sales.</span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed font-normal max-w-2xl mx-auto">
                Replace messy spreadsheets and buried email threads. KanchanFlow brings customer enquiries, BOM costing, drawing revisions, and shop floor handoffs into one connected workflow.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
                <Button href="/pricing" variant="primary" size="lg" className="shadow-lg shadow-[#F0B33E]/20 font-bold">
                  Book a Demo
                </Button>
                <Button
                  href="#capabilities"
                  variant="secondary"
                  size="lg"
                  className="bg-[#181C26] border-[#2E3547] text-white hover:border-[#F0B33E]/50"
                >
                  Explore Capabilities
                </Button>
              </div>

              {/* 3 Core Trust Pillars Banner */}
              <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-left">
                <div className="p-4 rounded-xl bg-[#12151D] border border-[#262B38] flex items-center gap-3 shadow-md">
                  <div className="w-9 h-9 rounded-lg bg-[#F0B33E]/15 border border-[#F0B33E]/30 flex items-center justify-center text-[#F0B33E] shrink-0">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-white">48h Turnaround</span>
                    <span className="text-xs text-[#94A3B8]">Quote 3x faster</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#12151D] border border-[#262B38] flex items-center gap-3 shadow-md">
                  <div className="w-9 h-9 rounded-lg bg-[#36C98F]/15 border border-[#36C98F]/30 flex items-center justify-center text-[#36C98F] shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-white">100% Traceability</span>
                    <span className="text-xs text-[#94A3B8]">Zero revision errors</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#12151D] border border-[#262B38] flex items-center gap-3 shadow-md">
                  <div className="w-9 h-9 rounded-lg bg-[#38BDF8]/15 border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8] shrink-0">
                    <LockIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-white">Protected Margins</span>
                    <span className="text-xs text-[#94A3B8]">Formula rate governance</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================= */}
        {/* CORE CAPABILITIES: Alternating, Rich Photography + UI     */}
        {/* ========================================================= */}
        <div id="capabilities" className="scroll-mt-20">
          {/* CAPABILITY 1: RFQ & Enquiry Intake */}
          <section id="quote-to-order" className="py-16 lg:py-20 border-b border-[#222633] bg-[#0C0E14] relative overflow-hidden">
            <Container size="wide">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                {/* Text Content */}
                <div className="lg:col-span-6 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-semibold uppercase tracking-wider text-[#F0B33E]">
                    <FileText className="w-3.5 h-3.5" />
                    <span>CENTRALIZED RFQ TRIAGE</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
                    Never lose an RFQ or revised drawing again.
                  </h2>

                  <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                    Customer RFQs arrive across emails, WhatsApp, and procurement portals. KanchanFlow captures every enquiry into a unified queue with technical 2D drawings and 3D CAD step files attached directly.
                  </p>

                  {/* 3 Key Benefits */}
                  <div className="space-y-3.5 pt-2">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#36C98F]/20 text-[#36C98F] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="text-sm font-bold text-white block">Centralized Drawing Attachment</strong>
                        <span className="text-xs text-[#94A3B8]">Keep Step, IGES, and PDF technical drawings linked directly to the quote record.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#36C98F]/20 text-[#36C98F] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="text-sm font-bold text-white">Instant Prioritization</strong>
                        <span className="text-xs text-[#94A3B8]">Filter by customer tier, target turnaround date, or volume before estimation begins.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#36C98F]/20 text-[#36C98F] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="text-sm font-bold text-white">Multi-Quantity Price Breaks</strong>
                        <span className="text-xs text-[#94A3B8]">Quote batch volumes (e.g. 50, 250, 1000 pcs) without duplicating calculation effort.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Rich Photo + Live UI Visual */}
                <div className="lg:col-span-6">
                  <div className="rounded-2xl bg-[#12151D] border border-[#262B38] overflow-hidden shadow-2xl">
                    <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-[#262B38]">
                      <Image
                        src="/images/capability-cad-drawing.webp"
                        alt="Centralized RFQ CAD Drawings & Inspection"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        loading="lazy"
                        className="object-cover filter contrast-[1.06] brightness-[0.95]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#12151D] via-transparent to-black/30" />
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#08090C]/90 backdrop-blur-md border border-[#F0B33E]/40 text-[#F0B33E] text-xs font-mono font-bold">
                        3D CAD Turbine Specimen Linked
                      </div>
                    </div>

                    <div className="p-5 sm:p-6 space-y-4">
                      <div className="flex items-center justify-between pb-3.5 border-b border-[#222633]">
                        <div className="flex items-center gap-2.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#36C98F]" />
                          <span className="font-mono text-sm font-bold text-[#F0B33E]">RFQ #9042</span>
                          <span className="text-sm font-semibold text-white">Mahindra Aerospace</span>
                        </div>
                        <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#181C26] text-[#94A3B8] border border-[#2E3547]">
                          Target: 5 Days
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3.5 rounded-xl bg-[#08090C] border border-[#222633]">
                          <span className="text-[10px] text-[#94A3B8] uppercase font-mono">Drawing Asset</span>
                          <div className="text-xs font-bold text-white mt-1 truncate">DWG-TITAN-PIN-REV-C.step</div>
                          <span className="inline-flex items-center gap-1 text-[11px] text-[#36C98F] mt-1.5 font-medium">
                            <CheckCircle2 className="w-3 h-3" /> CAD Specimen Linked
                          </span>
                        </div>

                        <div className="p-3.5 rounded-xl bg-[#08090C] border border-[#222633]">
                          <span className="text-[10px] text-[#94A3B8] uppercase font-mono">Volume Tiers</span>
                          <div className="text-xs font-bold text-white mt-1">150 / 500 / 1,000 pcs</div>
                          <span className="text-[11px] text-[#F0B33E] mt-1.5 block font-medium">Automated Price Breaks</span>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-[#181C26] border border-[#2E3547] flex items-center justify-between text-xs">
                        <span className="text-[#94A3B8]">Assigned Estimator: <strong className="text-white">Senior Tooling Lead</strong></span>
                        <span className="text-[#36C98F] font-semibold">Triage Ready →</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          {/* CAPABILITY 2: Quotation & BOM Costing (Alternating: Visual Left, Text Right) */}
          <section id="bom-costing" className="py-16 lg:py-20 border-b border-[#222633] bg-[#08090C] relative overflow-hidden content-visibility-auto">
            <Container size="wide">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                {/* Visual on Left */}
                <div className="lg:col-span-6 lg:order-1">
                  <div className="rounded-2xl bg-[#12151D] border border-[#262B38] overflow-hidden shadow-2xl">
                    <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-[#262B38]">
                      <Image
                        src="/images/capability-bom-costing.webp"
                        alt="Machined Brass and Copper Manifold BOM Costing"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        loading="lazy"
                        className="object-cover filter contrast-[1.06] brightness-[0.95]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#12151D] via-transparent to-black/30" />
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#08090C]/90 backdrop-blur-md border border-[#36C98F]/40 text-[#36C98F] text-xs font-mono font-bold">
                        Billet Materials & Spindle Time Engine
                      </div>
                    </div>

                    <div className="p-5 sm:p-6 space-y-4">
                      <div className="flex items-center justify-between pb-3.5 border-b border-[#222633]">
                        <div className="flex items-center gap-2">
                          <Layers className="w-4 h-4 text-[#36C98F]" />
                          <span className="text-sm font-bold text-white">Cost Breakdown • 5-Axis Impeller</span>
                        </div>
                        <span className="text-xs font-mono font-bold text-[#36C98F] px-2 py-0.5 rounded bg-[#36C98F]/15 border border-[#36C98F]/30">
                          Margin: 28%
                        </span>
                      </div>

                      {/* Cost Structure Bars */}
                      <div className="space-y-2.5 text-xs">
                        <div className="flex justify-between items-center">
                          <span className="text-[#94A3B8]">Forged Stainless Steel 316L:</span>
                          <span className="font-mono font-semibold text-white">₹2,10,000</span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-[#181C26] overflow-hidden">
                          <div className="h-full bg-[#F0B33E] rounded-full w-[45%]" />
                        </div>

                        <div className="flex justify-between items-center pt-1">
                          <span className="text-[#94A3B8]">5-Axis Machining (Spindle Rate):</span>
                          <span className="font-mono font-semibold text-white">₹1,42,000</span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-[#181C26] overflow-hidden">
                          <div className="h-full bg-[#36C98F] rounded-full w-[35%]" />
                        </div>

                        <div className="flex justify-between items-center pt-1">
                          <span className="text-[#94A3B8]">Plating & Heat Treatment:</span>
                          <span className="font-mono font-semibold text-white">₹60,000</span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-[#181C26] overflow-hidden">
                          <div className="h-full bg-[#38BDF8] rounded-full w-[20%]" />
                        </div>
                      </div>

                      {/* Bottom Price Summary */}
                      <div className="p-3.5 rounded-xl bg-[#08090C] border border-[#F0B33E]/40 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] text-[#94A3B8] uppercase block">Quoted Price (250 pcs)</span>
                          <span className="text-lg font-black text-[#F0B33E] font-mono">₹5,27,360</span>
                        </div>
                        <span className="text-xs font-semibold text-[#36C98F] flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Formula Locked
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Content on Right */}
                <div className="lg:col-span-6 lg:order-2 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold uppercase tracking-wider text-[#36C98F]">
                    <Layers className="w-3.5 h-3.5" />
                    <span>MULTI-TIER BOM ENGINE</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
                    Fast, accurate costing. Zero formula errors.
                  </h2>

                  <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                    Say goodbye to broken spreadsheet formulas. KanchanFlow combines raw material weights, machine hourly rates, and subcontracting vendor fees in one unified, auditable calculation tree.
                  </p>

                  {/* 3 Key Benefits */}
                  <div className="space-y-3.5 pt-2">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#36C98F]/20 text-[#36C98F] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="text-sm font-bold text-white block">Pre-Set Machine Hourly Rates</strong>
                        <span className="text-xs text-[#94A3B8]">Assign hourly rate cards across 3-axis VMCs, 5-axis mill-turn centers, and wire EDMs.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#36C98F]/20 text-[#36C98F] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="text-sm font-bold text-white">Scrap & Swarf Recovery Offsets</strong>
                        <span className="text-xs text-[#94A3B8]">Automatically factor metal swarf recycling values to protect your competitive edge.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#36C98F]/20 text-[#36C98F] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="text-sm font-bold text-white">Locked Profit Margins</strong>
                        <span className="text-xs text-[#94A3B8]">Enforce minimum margin approval thresholds before sales reps issue customer quotes.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          {/* CAPABILITY 3: Revision Governance (Text Left, Visual Right) */}
          <section className="py-16 lg:py-20 border-b border-[#222633] bg-[#0C0E14] relative overflow-hidden content-visibility-auto">
            <Container size="wide">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                {/* Text Content */}
                <div className="lg:col-span-6 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-xs font-semibold uppercase tracking-wider text-[#38BDF8]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>REVISION TRACEABILITY</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
                    Every revision. Every cost. Always traceable.
                  </h2>

                  <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                    When customers modify drawing tolerances or switch alloys, clone previous costing with one click. KanchanFlow isolates the cost deltas and ensures only customer-approved revisions reach the shop floor.
                  </p>

                  {/* 3 Key Benefits */}
                  <div className="space-y-3.5 pt-2">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#36C98F]/20 text-[#36C98F] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="text-sm font-bold text-white block">Immutable Version History</strong>
                        <span className="text-xs text-[#94A3B8]">Never overwrite prior pricing; retain complete audit logs for client and ISO reviews.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#36C98F]/20 text-[#36C98F] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="text-sm font-bold text-white">Visual Cost Deltas</strong>
                        <span className="text-xs text-[#94A3B8]">See immediately how material surcharges or machine cycle adjustments shifted the price.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#36C98F]/20 text-[#36C98F] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="text-sm font-bold text-white">Supervisory Approval Gates</strong>
                        <span className="text-xs text-[#94A3B8]">Protect commercial margins with configurable approval limits on discount deviations.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Rich Photo + Revision Delta Inspector */}
                <div className="lg:col-span-6">
                  <div className="rounded-2xl bg-[#12151D] border border-[#262B38] overflow-hidden shadow-2xl">
                    <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-[#262B38]">
                      <Image
                        src="/images/capability-revision-audit.webp"
                        alt="Optical CMM Laser Metrology Inspection"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        loading="lazy"
                        className="object-cover filter contrast-[1.06] brightness-[0.95]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#12151D] via-transparent to-black/30" />
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#08090C]/90 backdrop-blur-md border border-[#38BDF8]/40 text-[#38BDF8] text-xs font-mono font-bold">
                        CMM Laser Metrology • Tolerance Audit
                      </div>
                    </div>

                    <div className="p-5 sm:p-6 space-y-4">
                      <div className="flex items-center justify-between pb-3.5 border-b border-[#222633]">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#38BDF8]" />
                          <span className="text-sm font-bold text-white">Revision Comparison</span>
                        </div>
                        <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#181C26] text-[#F0B33E] border border-[#F0B33E]/30">
                          Rev A ➔ Rev B
                        </span>
                      </div>

                      {/* Side-by-Side Comparison */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3.5 rounded-xl bg-[#08090C] border border-[#222633] opacity-75">
                          <div className="flex items-center justify-between text-xs text-[#94A3B8]">
                            <span>Drawing Rev A</span>
                            <span className="line-through">₹4,85,000</span>
                          </div>
                          <div className="text-xs text-[#94A3B8] mt-1">Base Spec (No Heat Treat)</div>
                          <span className="text-[10px] text-[#94A3B8] mt-2 block font-mono">Superseded</span>
                        </div>

                        <div className="p-3.5 rounded-xl bg-[#181C26] border-2 border-[#36C98F]/40 shadow-sm">
                          <div className="flex items-center justify-between text-xs font-bold text-white">
                            <span>Drawing Rev B</span>
                            <span className="text-[#36C98F]">₹5,27,360</span>
                          </div>
                          <div className="text-xs text-white mt-1">Heat Treat Added</div>
                          <span className="text-[10px] text-[#36C98F] font-bold mt-2 block font-mono">
                            ✓ Customer Approved
                          </span>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-[#08090C] border border-[#222633] flex items-center justify-between text-xs font-mono">
                        <span className="text-[#94A3B8]">Delta: +₹42,360 (+8.7%)</span>
                        <span className="text-[#36C98F]">✓ Locked For Production</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          {/* CAPABILITY 4: Order Handoff & Production Release (Visual Left, Text Right) */}
          <section id="order-handoff" className="py-16 lg:py-20 border-b border-[#222633] bg-[#08090C] relative overflow-hidden content-visibility-auto">
            <Container size="wide">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                {/* Visual on Left */}
                <div className="lg:col-span-6 lg:order-1">
                  <div className="rounded-2xl bg-[#12151D] border border-[#262B38] overflow-hidden shadow-2xl">
                    <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-[#262B38]">
                      <Image
                        src="/images/capability-order-handoff.webp"
                        alt="5-Axis Robotic Automation Shop Floor Handoff"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        loading="lazy"
                        className="object-cover filter contrast-[1.06] brightness-[0.95]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#12151D] via-transparent to-black/30" />
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#08090C]/90 backdrop-blur-md border border-[#A855F7]/40 text-[#A855F7] text-xs font-mono font-bold">
                        5-Axis Robotic Cell • Production Handoff
                      </div>
                    </div>

                    <div className="p-5 sm:p-6 space-y-4">
                      <div className="flex items-center justify-between pb-3.5 border-b border-[#222633]">
                        <div className="flex items-center gap-2">
                          <Boxes className="w-4 h-4 text-[#A855F7]" />
                          <span className="text-sm font-bold text-white">Purchase Order ➔ Job Release</span>
                        </div>
                        <span className="text-xs font-mono font-bold text-[#36C98F] px-2 py-0.5 rounded bg-[#36C98F]/15 border border-[#36C98F]/30">
                          100% Rate Match
                        </span>
                      </div>

                      <div className="p-3.5 rounded-xl bg-[#08090C] border border-[#222633] space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-[#94A3B8]">Client PO #PO-9842:</span>
                          <span className="font-mono text-white font-semibold">Verified against Quote #QT-8421</span>
                        </div>
                        <div className="flex items-center justify-between text-xs pt-1 border-t border-[#222633]">
                          <span className="text-[#94A3B8]">Drawing Revision:</span>
                          <span className="font-mono text-[#36C98F] font-semibold">Rev B (Customer Approved)</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div className="p-3 rounded-lg bg-[#181C26] border border-[#2E3547]">
                          <span className="text-[10px] text-[#94A3B8] uppercase block">Shop Traveler</span>
                          <span className="font-bold text-white mt-0.5 block">Job Card #JC-104</span>
                        </div>
                        <div className="p-3 rounded-lg bg-[#181C26] border border-[#2E3547]">
                          <span className="text-[10px] text-[#94A3B8] uppercase block">ERP Sync</span>
                          <span className="font-bold text-[#36C98F] mt-0.5 block">Exported to Tally</span>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-[#36C98F]/10 border border-[#36C98F]/30 flex items-center justify-between text-xs">
                        <span className="text-white font-medium">Released to CNC Spindles</span>
                        <span className="text-[#36C98F] font-bold">Plant 01 Operating</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Content on Right */}
                <div className="lg:col-span-6 lg:order-2 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-semibold uppercase tracking-wider text-[#A855F7]">
                    <Boxes className="w-3.5 h-3.5" />
                    <span>SHOP FLOOR RELEASE</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
                    From approved quote to shop release in one click.
                  </h2>

                  <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                    When the customer sends a purchase order, KanchanFlow automatically validates unit prices and tax codes against the approved quote. With one click, release verified job travelers directly to machine operators.
                  </p>

                  {/* 3 Key Benefits */}
                  <div className="space-y-3.5 pt-2">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#36C98F]/20 text-[#36C98F] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="text-sm font-bold text-white block">Automated PO Line-Item Check</strong>
                        <span className="text-xs text-[#94A3B8]">Flag price discrepancies between customer POs and approved quotes before metal is cut.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#36C98F]/20 text-[#36C98F] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="text-sm font-bold text-white block">Digital Shop Travelers</strong>
                        <span className="text-xs text-[#94A3B8]">Generate job cards with approved drawing links, routing sequence, and quality checklists.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#36C98F]/20 text-[#36C98F] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="text-sm font-bold text-white block">Seamless ERP / Tally Export</strong>
                        <span className="text-xs text-[#94A3B8]">Export verified order headers and item masters into your ERP accounting ledger cleanly.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        </div>

        {/* ========================================================= */}
        {/* SECTION 5: HOW IT WORKS (Compact 4-Step Narrative Flow)  */}
        {/* ========================================================= */}
        <section id="workflow" className="py-16 lg:py-20 border-b border-[#222633] bg-[#0C0E14] relative scroll-mt-20">
          <Container>
            <SectionHeading
              eyebrow="CONNECTED CADENCE"
              title="Four connected steps from enquiry to production."
              description="A clear, repeatable workflow designed to eliminate friction between technical sales, commercial costing, and plant operations."
            />

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {/* Step 1 */}
              <div className="p-6 rounded-2xl bg-[#12151D] border border-[#262B38] hover:border-[#F0B33E]/50 transition-all shadow-lg flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-9 h-9 rounded-xl bg-[#F0B33E]/15 border border-[#F0B33E]/30 text-[#F0B33E] font-mono font-bold text-sm flex items-center justify-center">
                      01
                    </span>
                    <span className="text-[10px] font-mono uppercase text-[#94A3B8]">Intake</span>
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight">Enquiry & Drawing Capture</h3>
                  <p className="mt-2 text-xs text-[#94A3B8] leading-relaxed">
                    Log customer RFQs, 2D/3D CAD drawings, specifications, and delivery target dates in one shared queue.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#222633] text-[11px] text-[#36C98F] font-mono flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Centralized Asset Storage
                </div>
              </div>

              {/* Step 2 */}
              <div className="p-6 rounded-2xl bg-[#12151D] border border-[#262B38] hover:border-[#36C98F]/50 transition-all shadow-lg flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-9 h-9 rounded-xl bg-[#36C98F]/15 border border-[#36C98F]/30 text-[#36C98F] font-mono font-bold text-sm flex items-center justify-center">
                      02
                    </span>
                    <span className="text-[10px] font-mono uppercase text-[#94A3B8]">Estimation</span>
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight">BOM Costing & Rates</h3>
                  <p className="mt-2 text-xs text-[#94A3B8] leading-relaxed">
                    Calculate raw material weights, machine cycle times, tooling overheads, and target profit margins.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#222633] text-[11px] text-[#36C98F] font-mono flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Spindle Rate Governance
                </div>
              </div>

              {/* Step 3 */}
              <div className="p-6 rounded-2xl bg-[#12151D] border border-[#262B38] hover:border-[#38BDF8]/50 transition-all shadow-lg flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-9 h-9 rounded-xl bg-[#38BDF8]/15 border border-[#38BDF8]/30 text-[#38BDF8] font-mono font-bold text-sm flex items-center justify-center">
                      03
                    </span>
                    <span className="text-[10px] font-mono uppercase text-[#94A3B8]">Approval</span>
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight">Revision Governance</h3>
                  <p className="mt-2 text-xs text-[#94A3B8] leading-relaxed">
                    Issue branded quotes with immutable revision tags. Track cost deltas, customer opens, and final approvals.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#222633] text-[11px] text-[#36C98F] font-mono flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Immutable Version Log
                </div>
              </div>

              {/* Step 4 */}
              <div className="p-6 rounded-2xl bg-[#12151D] border border-[#262B38] hover:border-[#A855F7]/50 transition-all shadow-lg flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-9 h-9 rounded-xl bg-[#A855F7]/15 border border-[#A855F7]/30 text-[#A855F7] font-mono font-bold text-sm flex items-center justify-center">
                      04
                    </span>
                    <span className="text-[10px] font-mono uppercase text-[#94A3B8]">Execution</span>
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight">Order & Shop Handoff</h3>
                  <p className="mt-2 text-xs text-[#94A3B8] leading-relaxed">
                    Convert approved quotes into verified production job travelers and BOM releases for the shop floor.
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#222633] text-[11px] text-[#36C98F] font-mono flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 1-Click Shop Release
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================= */}
        {/* SECTION 6: BUSINESS OUTCOMES (Measurable Impact)          */}
        {/* ========================================================= */}
        <section className="py-16 lg:py-20 border-b border-[#222633] bg-[#08090C] relative">
          <Container>
            <SectionHeading
              eyebrow="MEASURABLE IMPACT"
              title="Real operational outcomes on your shop floor and bottom line."
              description="KanchanFlow is engineered specifically to eliminate quotation delays, protect commercial margins, and prevent machining rework."
            />

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Outcome 1 */}
              <div className="p-7 rounded-2xl bg-[#12151D] border border-[#262B38] space-y-4 shadow-xl hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 rounded-xl bg-[#F0B33E]/15 border border-[#F0B33E]/30 text-[#F0B33E] flex items-center justify-center font-bold text-lg font-mono">
                  3x
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">Faster Quote Turnaround</h3>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  Cut estimation turnaround from 5–7 days to under 48 hours. Send accurate, professional quotes before your competitors finish their initial spreadsheet.
                </p>
                <div className="pt-3 border-t border-[#222633] text-xs text-[#36C98F] font-mono font-medium">
                  Result: +32% Win Rate on High-Value RFQs
                </div>
              </div>

              {/* Outcome 2 */}
              <div className="p-7 rounded-2xl bg-[#12151D] border border-[#262B38] space-y-4 shadow-xl hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 rounded-xl bg-[#36C98F]/15 border border-[#36C98F]/30 text-[#36C98F] flex items-center justify-center font-bold text-lg font-mono">
                  100%
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">Protected Profit Margins</h3>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  Lock machine hourly rates, scrap recovery factors, and minimum margin approval gates so estimators never commit to unprofitable jobs.
                </p>
                <div className="pt-3 border-t border-[#222633] text-xs text-[#36C98F] font-mono font-medium">
                  Result: Zero Negative-Margin Jobs Released
                </div>
              </div>

              {/* Outcome 3 */}
              <div className="p-7 rounded-2xl bg-[#12151D] border border-[#262B38] space-y-4 shadow-xl hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 rounded-xl bg-[#38BDF8]/15 border border-[#38BDF8]/30 text-[#38BDF8] flex items-center justify-center font-bold text-lg font-mono">
                  0%
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">Outdated Drawing Errors</h3>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  Every quotation is version-locked to the customer-approved CAD drawing. Production operators always receive verified, approved drawing revisions.
                </p>
                <div className="pt-3 border-t border-[#222633] text-xs text-[#36C98F] font-mono font-medium">
                  Result: Complete Elimination of Scrap Rework
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================= */}
        {/* SECTION 7: STREAMLINED COMPARISON TABLE                    */}
        {/* ========================================================= */}
        <section className="py-16 lg:py-20 border-b border-[#222633] bg-[#0C0E14] relative">
          <Container>
            <SectionHeading
              eyebrow="CAPABILITY COMPARISON"
              title="Spreadsheets vs. Connected KanchanFlow Workflow"
              description="See how switching to a dedicated manufacturing platform eliminates traditional quoting bottlenecks."
            />

            {/* Desktop Clean Table */}
            <div className="mt-12 hidden md:block rounded-2xl border border-[#262B38] bg-[#12151D] overflow-hidden shadow-2xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#222633] bg-[#181C26] text-xs font-semibold text-white">
                    <th className="py-4 px-6 w-1/4">Operational Phase</th>
                    <th className="py-4 px-6 w-3/8 text-rose-400">Traditional Excel & Email Process</th>
                    <th className="py-4 px-6 w-3/8 text-[#F0B33E]">KanchanFlow Connected Platform</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#222633] text-xs sm:text-sm">
                  {comparisonItems.map((item, idx) => (
                    <tr
                      key={item.dimension}
                      className={idx % 2 === 0 ? "bg-[#12151D]" : "bg-[#0E1017]"}
                    >
                      <td className="py-4 px-6 font-bold text-white align-top">{item.dimension}</td>
                      <td className="py-4 px-6 text-[#94A3B8] align-top leading-relaxed">
                        <div className="flex items-start gap-2.5">
                          <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                          <span>{item.traditional}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-white align-top leading-relaxed bg-[#F0B33E]/5">
                        <div className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#36C98F] shrink-0 mt-0.5" />
                          <span className="font-medium">{item.kanchanflow}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Stacked Cards */}
            <div className="mt-8 md:hidden space-y-4">
              {comparisonItems.map((item) => (
                <div key={item.dimension} className="p-5 rounded-xl bg-[#12151D] border border-[#262B38] space-y-3">
                  <h3 className="font-bold text-white text-sm">{item.dimension}</h3>
                  <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/25 text-xs text-[#94A3B8] space-y-1">
                    <span className="text-rose-400 font-semibold block">Traditional Process:</span>
                    <p>{item.traditional}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-xs text-white space-y-1">
                    <span className="text-[#36C98F] font-semibold block">With KanchanFlow:</span>
                    <p>{item.kanchanflow}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ========================================================= */}
        {/* SECTION 8: FINAL CALL TO ACTION                           */}
        {/* ========================================================= */}
        <SectionCTA
          heading="Ready to eliminate quotation chaos?"
          copy="See how KanchanFlow brings clarity, speed, and margin control to your precision manufacturing sales."
          primaryCtaText="Book a Demo"
          secondaryCtaText="View Pricing Plans"
          secondaryHref="/pricing"
        />
      </main>

      <Footer />
    </div>
  );
}

function LockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}
