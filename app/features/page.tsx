import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  Layers,
  ShoppingBag,
  TrendingUp,
  Cpu,
  Boxes,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ShieldCheck,
  Smartphone,
  Factory,
  Sparkles,
  GitBranch,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { SectionCTA } from "@/components/section-cta";
import { Button } from "@/components/button";
import {
  RFQManagementMockup,
  RevisionTrackingMockup,
  BOMCostingMockup,
  SalesPipelineMockup,
  OrderHandoffMockup,
  ReportingMobileMockup,
} from "@/components/feature-interactive-mockups";

export const metadata: Metadata = {
  title: "Manufacturing CRM Features & Capabilities | KanchanFlow",
  description:
    "Explore KanchanFlow's specialized modules: RFQ enquiry triage, multi-tier BOM costing, quotation revision control, shop floor order handoffs, and real-time plant analytics.",
  openGraph: {
    title: "KanchanFlow Features — The Workflow Behind Better Manufacturing Sales",
    description:
      "From the first enquiry to confirmed production release, keep every detail connected.",
    type: "website",
    url: "https://kanchanflow.com/features",
  },
};

export default function FeaturesPage() {
  const comparisonItems = [
    {
      dimension: "Quote Revision Tracking",
      traditional:
        "Estimators save multiple Excel versions (v1_final_final.xlsx) in personal folders; outdated drawings frequently get quoted or sent to production.",
      kanchanflow:
        "Every revision (Rev A, B, C) is version-locked with delta comparisons, preserving prior cycle times and highlighting CAD drawing changes.",
    },
    {
      dimension: "Opportunity & Pipeline Visibility",
      traditional:
        "Sales reps keep isolated email threads; leadership lacks real-time insight into pending RFQ values or which quotes require urgent follow-up.",
      kanchanflow:
        "Stage-based pipeline reflecting actual manufacturing phases (RFQ Triage, Costing, Negotiation, PO Received) with automated win-probability weighting.",
    },
    {
      dimension: "BOM & Cost Breakdown Organisation",
      traditional:
        "Ad-hoc spreadsheet templates with fragile formulas; metal price fluctuations and machine hour rates are inconsistently applied.",
      kanchanflow:
        "Structured multi-tier BOM engine combining verified raw material index rates, machine center hourly rates, and subcontractor processes.",
    },
    {
      dimension: "Commercial Follow-Up Tracking",
      traditional:
        "Over 30% of sent quotations go cold because commercial teams rely on manual calendar reminders and handwritten notebooks.",
      kanchanflow:
        "Automated follow-up scheduling, customer quote view tracking, and instant alerts when high-value tenders require commercial touchpoints.",
    },
    {
      dimension: "Order Handoff to Shop Floor",
      traditional:
        "Sales emails a scanned PO to production; critical engineering tolerances, heat-treat specs, and packaging notes get missed in transit.",
      kanchanflow:
        "1-click conversion from approved quote to verified production job card and bill of materials release, completely eliminating re-keying errors.",
    },
    {
      dimension: "Margin Protection & Formula Governance",
      traditional:
        "Sales reps apply arbitrary discounts in spreadsheets without knowing true machine depreciation or scrap recovery offsets.",
      kanchanflow:
        "Locked minimum margin rules and supervisory approval gates prevent commercial teams from committing to loss-making production runs.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#0B111B] text-[#F5F3ED]">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* FEATURES HERO */}
        <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 bg-[#0B111B] border-b border-[#2A3B50] overflow-hidden">
          <div className="absolute inset-0 bg-grid-industrial opacity-30 pointer-events-none" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#F0B33E]/5 blur-[120px] rounded-full pointer-events-none" />

          <Container>
            <div className="max-w-3xl mx-auto text-center space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0B33E]/10 border border-[#F0B33E]/30 text-xs font-semibold uppercase tracking-wider text-[#F0B33E]">
                <Factory className="w-3.5 h-3.5" />
                <span>Purpose-Built Manufacturing Architecture</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F5F3ED] tracking-tight leading-tight">
                The workflow behind{" "}
                <span className="gold-gradient-text">better manufacturing sales.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#A4B0BE] leading-relaxed font-normal">
                From the first customer enquiry to the confirmed production order, keep engineering specs, costing formulas, and commercial handoffs tightly connected.
              </p>

              <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
                <Button href="/pricing" variant="primary" size="lg">
                  View Plan Options
                </Button>
                <Button href="#capabilities" variant="outline" size="lg">
                  Explore Feature Matrix
                </Button>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="mt-14 max-w-4xl mx-auto p-6 rounded-2xl glass-panel-luxury border-2 border-[#F0B33E]/40 shadow-2xl gold-glow-card grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              <div>
                <span className="block text-2xl font-bold text-[#F0B33E] font-mono">
                  65%
                </span>
                <span className="text-xs text-[#A4B0BE]">Faster Quote Turnaround</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-[#36C98F] font-mono">
                  0%
                </span>
                <span className="text-xs text-[#A4B0BE]">Outdated Drawing Errors</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-[#F5F3ED] font-mono">
                  100%
                </span>
                <span className="text-xs text-[#A4B0BE]">Revision Traceability</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-[#F0B33E] font-mono">
                  14 Days
                </span>
                <span className="text-xs text-[#A4B0BE]">Average Plant Rollout</span>
              </div>
            </div>
          </Container>
        </section>

        {/* ALTERNATING FEATURE SECTIONS */}
        <div className="divide-y divide-[#2A3B50]/60">
          {/* SECTION 1: RFQ & Enquiry Management */}
          <section id="quote-to-order" className="py-20 lg:py-24 bg-[#111B29] relative">
            <Container>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0B33E]/10 border border-[#F0B33E]/30 text-xs font-semibold uppercase tracking-wider text-[#F0B33E]">
                    <FileText className="w-3.5 h-3.5" />
                    <span>Centralized RFQ Triage</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F5F3ED] tracking-tight">
                    Never lose an engineering RFQ or revised drawing again.
                  </h2>

                  <p className="text-sm sm:text-base text-[#A4B0BE] leading-relaxed">
                    Customer RFQs arrive across emails, WhatsApp, and procurement portals. KanchanFlow brings them into a unified triage queue where 2D drawings, 3D CAD step files, target dates, and quantity tiers are immediately logged.
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#36C98F]/20 text-[#36C98F] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="text-xs sm:text-sm text-[#F5F3ED] block">
                          Instant Drawing & CAD Association
                        </strong>
                        <span className="text-xs text-[#A4B0BE]">
                          Keep Step, IGES, and PDF technical drawings linked directly to the quote record.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#36C98F]/20 text-[#36C98F] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="text-xs sm:text-sm text-[#F5F3ED] block">
                          Automated Estimator Load Balancing
                        </strong>
                        <span className="text-xs text-[#A4B0BE]">
                          Assign incoming RFQs to senior estimators based on material capability and current queue.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#36C98F]/20 text-[#36C98F] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="text-xs sm:text-sm text-[#F5F3ED] block">
                          Multi-Quantity Price Breaks
                        </strong>
                        <span className="text-xs text-[#A4B0BE]">
                          Quote batch volumes (e.g. 50, 250, 1000 pcs) without duplicating calculation effort.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <RFQManagementMockup />
                </div>
              </div>
            </Container>
          </section>

          {/* SECTION 2: Quotation Costing & Revisions */}
          <section className="py-20 lg:py-24 bg-[#0B111B] relative">
            <Container>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 lg:order-2 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0B33E]/10 border border-[#F0B33E]/30 text-xs font-semibold uppercase tracking-wider text-[#F0B33E]">
                    <GitBranch className="w-3.5 h-3.5" />
                    <span>Revision Governance</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F5F3ED] tracking-tight">
                    Quote with total revision confidence across engineering iterations.
                  </h2>

                  <p className="text-sm sm:text-base text-[#A4B0BE] leading-relaxed">
                    When customers modify a radius, change material grades, or request tighter GD&T tolerances, clone prior costing with one click. KanchanFlow isolates the deltas and ensures only customer-approved revisions proceed to production.
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#36C98F]/20 text-[#36C98F] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="text-xs sm:text-sm text-[#F5F3ED] block">
                          Immutable Revision History (Rev A, B, C)
                        </strong>
                        <span className="text-xs text-[#A4B0BE]">
                          Never overwrite prior pricing; maintain full auditability for client reviews and ISO audits.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#36C98F]/20 text-[#36C98F] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="text-xs sm:text-sm text-[#F5F3ED] block">
                          Visual Cost Delta Inspector
                        </strong>
                        <span className="text-xs text-[#A4B0BE]">
                          Inspect exactly how raw material surcharges or machine cycle adjustments affected the margin.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#36C98F]/20 text-[#36C98F] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="text-xs sm:text-sm text-[#F5F3ED] block">
                          Supervisory Markup Locking
                        </strong>
                        <span className="text-xs text-[#A4B0BE]">
                          Protect commercial margins with configurable approval thresholds for discount deviations.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 lg:order-1">
                  <RevisionTrackingMockup />
                </div>
              </div>
            </Container>
          </section>

          {/* SECTION 3: BOM and Component Costing */}
          <section id="bom-costing" className="py-20 lg:py-24 bg-[#111B29] relative">
            <Container>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#36C98F]/15 border border-[#36C98F]/30 text-xs font-semibold uppercase tracking-wider text-[#36C98F]">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Multi-Tier BOM Engine</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F5F3ED] tracking-tight">
                    Precise component costing from raw material to surface treatment.
                  </h2>

                  <p className="text-sm sm:text-base text-[#A4B0BE] leading-relaxed">
                    Say goodbye to broken spreadsheet formulas. KanchanFlow incorporates verified metal density tables, scrap recovery values, hourly machining rates by machine center, and subcontracting vendor fees in one unified calculation tree.
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#36C98F]/20 text-[#36C98F] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="text-xs sm:text-sm text-[#F5F3ED] block">
                          Machine Hour Rate (MHR) Cards
                        </strong>
                        <span className="text-xs text-[#A4B0BE]">
                          Assign pre-set rates for 3-axis VMCs, 5-axis mill-turn centers, CNC press brakes, and wire EDMs.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#36C98F]/20 text-[#36C98F] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="text-xs sm:text-sm text-[#F5F3ED] block">
                          Raw Material & Scrap Offsets
                        </strong>
                        <span className="text-xs text-[#A4B0BE]">
                          Automatically factor swarf and metal scrap recovery value into the net component cost.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#36C98F]/20 text-[#36C98F] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="text-xs sm:text-sm text-[#F5F3ED] block">
                          Subcontracting & Special Processes
                        </strong>
                        <span className="text-xs text-[#A4B0BE]">
                          Seamlessly calculate heat treatment, anodizing, plating, and laboratory certification tariffs.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <BOMCostingMockup />
                </div>
              </div>
            </Container>
          </section>

          {/* SECTION 4: Sales Pipeline & Follow-Ups */}
          <section id="pipeline" className="py-20 lg:py-24 bg-[#0B111B] relative">
            <Container>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 lg:order-2 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0B33E]/10 border border-[#F0B33E]/30 text-xs font-semibold uppercase tracking-wider text-[#F0B33E]">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Shop Floor Pipeline</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F5F3ED] tracking-tight">
                    Track commercial opportunities through actual production stages.
                  </h2>

                  <p className="text-sm sm:text-base text-[#A4B0BE] leading-relaxed">
                    Generic CRMs use software stages like &quot;lead&quot; and &quot;demo&quot;. KanchanFlow tracks opportunities through real manufacturing stages: RFQ Intake, BOM Costing, Negotiation, Customer Approval, and PO Released to Plant.
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#36C98F]/20 text-[#36C98F] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="text-xs sm:text-sm text-[#F5F3ED] block">
                          High-Value Tender Follow-up Triggers
                        </strong>
                        <span className="text-xs text-[#A4B0BE]">
                          Alert commercial teams when high-margin quotes remain uncontacted after 48 hours.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#36C98F]/20 text-[#36C98F] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="text-xs sm:text-sm text-[#F5F3ED] block">
                          Capacity & Revenue Forecasting
                        </strong>
                        <span className="text-xs text-[#A4B0BE]">
                          Forecast upcoming shop floor machine load before quotes are even confirmed.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#36C98F]/20 text-[#36C98F] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="text-xs sm:text-sm text-[#F5F3ED] block">
                          Client Account Tiers
                        </strong>
                        <span className="text-xs text-[#A4B0BE]">
                          Segment tier-1 automotive suppliers, defense contractors, and local OEMs for customized service.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 lg:order-1">
                  <SalesPipelineMockup />
                </div>
              </div>
            </Container>
          </section>

          {/* SECTION 5: Purchase Order Capture & Order Handoff */}
          <section id="order-handoff" className="py-20 lg:py-24 bg-[#111B29] relative">
            <Container>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#36C98F]/15 border border-[#36C98F]/30 text-xs font-semibold uppercase tracking-wider text-[#36C98F]">
                    <Boxes className="w-3.5 h-3.5" />
                    <span>Zero-Friction Shop Release</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F5F3ED] tracking-tight">
                    Turn confirmed purchase orders into production job cards without errors.
                  </h2>

                  <p className="text-sm sm:text-base text-[#A4B0BE] leading-relaxed">
                    When the client sends a PO, KanchanFlow automatically validates unit rates, terms, and tax codes against the approved quotation. With one click, release a verified job traveler to the shop floor.
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#36C98F]/20 text-[#36C98F] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="text-xs sm:text-sm text-[#F5F3ED] block">
                          Automated Rate & Specification Check
                        </strong>
                        <span className="text-xs text-[#A4B0BE]">
                          Flag discrepancies between client PO line items and quoted figures before manufacturing starts.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#36C98F]/20 text-[#36C98F] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="text-xs sm:text-sm text-[#F5F3ED] block">
                          Instant Shop Traveler / Job Card
                        </strong>
                        <span className="text-xs text-[#A4B0BE]">
                          Print or push digital job cards with approved drawing links, routing sequence, and quality checklists.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#36C98F]/20 text-[#36C98F] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="text-xs sm:text-sm text-[#F5F3ED] block">
                          ERP / Tally Export Gateway
                        </strong>
                        <span className="text-xs text-[#A4B0BE]">
                          Export verified order headers and item masters into your ERP accounting ledger cleanly.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <OrderHandoffMockup />
                </div>
              </div>
            </Container>
          </section>

          {/* SECTION 6: Reporting and Mobile Access */}
          <section id="reporting" className="py-20 lg:py-24 bg-[#0B111B] relative">
            <Container>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 lg:order-2 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0B33E]/10 border border-[#F0B33E]/30 text-xs font-semibold uppercase tracking-wider text-[#F0B33E]">
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Mobile & Shop Telemetry</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F5F3ED] tracking-tight">
                    Real-time commercial intelligence in the boardroom and on the go.
                  </h2>

                  <p className="text-sm sm:text-base text-[#A4B0BE] leading-relaxed">
                    Equip field sales engineers and plant supervisors with fast mobile access. Check quote statuses while meeting procurement officers, review BOM drawings, and receive instant WhatsApp alerts when purchase orders are issued.
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#36C98F]/20 text-[#36C98F] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="text-xs sm:text-sm text-[#F5F3ED] block">
                          Live Estimator & Win-Rate Analytics
                        </strong>
                        <span className="text-xs text-[#A4B0BE]">
                          Track quote conversion rate by customer, machine process, and quoting engineer.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#36C98F]/20 text-[#36C98F] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="text-xs sm:text-sm text-[#F5F3ED] block">
                          WhatsApp Dispatch & Delivery Updates
                        </strong>
                        <span className="text-xs text-[#A4B0BE]">
                          Send automated dispatch notes, inspection reports, and quotation links directly via WhatsApp.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#36C98F]/20 text-[#36C98F] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="text-xs sm:text-sm text-[#F5F3ED] block">
                          Instant Mobile Approvals
                        </strong>
                        <span className="text-xs text-[#A4B0BE]">
                          Managing directors can approve high-value quotes and special markups directly from mobile.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 lg:order-1">
                  <ReportingMobileMockup />
                </div>
              </div>
            </Container>
          </section>
        </div>

        {/* SECTION 7: COMPARISON TABLE */}
        <section
          id="capabilities"
          className="py-20 lg:py-24 bg-[#111B29] border-t border-[#2A3B50] relative"
        >
          <div className="absolute inset-0 bg-dot-industrial opacity-25 pointer-events-none" />

          <Container>
            <SectionHeading
              eyebrow="Capability Comparison"
              title="Spreadsheets & Email vs. Connected KanchanFlow Workflow"
              description="A clear, realistic comparison of how switching to a dedicated manufacturing CRM resolves traditional quotation friction."
            />

            {/* Desktop Table */}
            <div className="mt-14 hidden md:block rounded-xl border border-[#2A3B50] bg-[#0B111B] overflow-hidden shadow-2xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#2A3B50] bg-[#16263A]/80 text-xs font-semibold text-[#F5F3ED]">
                    <th className="py-4 px-6 w-1/4">Operational Dimension</th>
                    <th className="py-4 px-6 w-3/8 text-red-400/90">
                      Traditional Excel & Email Process
                    </th>
                    <th className="py-4 px-6 w-3/8 text-[#F0B33E]">
                      KanchanFlow Connected Platform
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2A3B50]/60 text-xs sm:text-sm">
                  {comparisonItems.map((item, idx) => (
                    <tr
                      key={item.dimension}
                      className={idx % 2 === 0 ? "bg-[#0B111B]" : "bg-[#111B29]/40"}
                    >
                      <td className="py-4 px-6 font-semibold text-[#F5F3ED] align-top">
                        {item.dimension}
                      </td>
                      <td className="py-4 px-6 text-[#A4B0BE] align-top leading-relaxed">
                        <div className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                          <span>{item.traditional}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-[#F5F3ED] align-top leading-relaxed bg-[#F0B33E]/5">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#36C98F] shrink-0 mt-0.5" />
                          <span>{item.kanchanflow}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Responsive Stacked Cards */}
            <div className="mt-10 md:hidden space-y-4">
              {comparisonItems.map((item) => (
                <div
                  key={item.dimension}
                  className="p-5 rounded-xl bg-[#0B111B] border border-[#2A3B50] space-y-3"
                >
                  <h3 className="font-bold text-[#F5F3ED] text-base">
                    {item.dimension}
                  </h3>

                  <div className="p-3 rounded bg-red-500/10 border border-red-500/20 text-xs text-[#A4B0BE] space-y-1">
                    <span className="text-red-400 font-semibold block">
                      Traditional Excel & Email:
                    </span>
                    <p>{item.traditional}</p>
                  </div>

                  <div className="p-3 rounded bg-[#36C98F]/10 border border-[#36C98F]/30 text-xs text-[#F5F3ED] space-y-1">
                    <span className="text-[#36C98F] font-semibold block">
                      With KanchanFlow:
                    </span>
                    <p>{item.kanchanflow}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* SECTION 8: FINAL CTA */}
        <SectionCTA
          heading="Experience the connected manufacturing workflow."
          copy="Schedule a customized 30-minute demonstration with our manufacturing solutions team."
          primaryCtaText="Book a Demo"
          secondaryCtaText="View Pricing Plans"
          secondaryHref="/pricing"
        />
      </main>

      <Footer />
    </div>
  );
}
