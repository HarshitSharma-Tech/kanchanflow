import type { Metadata } from "next";
import Link from "next/link";
import {
  FileSpreadsheet,
  Mail,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  Layers,
  TrendingUp,
  MessageSquare,
  BarChart3,
  Smartphone,
  Factory,
  Cog,
  Wrench,
  Cpu,
  Car,
  Zap,
  ArrowUpRight,
  ShieldCheck,
  ChevronRight,
  HelpCircle,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { VideoHero } from "@/components/video-hero";
import { HowItWorksReference } from "@/components/how-it-works-reference";
import { BuiltForManufacturing } from "@/components/built-for-manufacturing";
import { FeatureCard } from "@/components/feature-card";
import { FAQAccordion, FAQItem } from "@/components/faq-accordion";
import { SectionCTA } from "@/components/section-cta";
import { Button } from "@/components/button";

export const metadata: Metadata = {
  title: "KanchanFlow | Connected Manufacturing CRM & Quote-to-Order Platform",
  description:
    "Eliminate quotation delays and scattered spreadsheets. KanchanFlow unites customer enquiries, multi-tier BOM costing, revision tracking, and shop floor order handoffs.",
  openGraph: {
    title: "KanchanFlow — Manufacturing CRM Platform",
    description:
      "Bring customer enquiries, costing, quotations and order handoffs into one connected workflow built for precision engineering teams.",
    type: "website",
    url: "https://kanchanflow.com",
  },
};

export default function HomePage() {
  const homeFaqs: FAQItem[] = [
    {
      question: "How does KanchanFlow handle quotation revisions without losing past costing?",
      answer:
        "Every time an engineering drawing or raw material price shifts, KanchanFlow creates an immutable revision (e.g. Rev A, Rev B) while preserving prior component calculations, cycle times, and markups. Commercial teams and shop floor managers always know which drawing revision was officially approved by the customer.",
      category: "Quotation & Revisions",
    },
    {
      question: "Can we configure multi-tier BOMs with raw materials, machining, and subcontracting?",
      answer:
        "Yes. KanchanFlow's BOM module supports multi-tier component hierarchies. You can calculate raw material weight with cutting allowances, assign hourly machine rates (e.g., 3-axis VMC vs. 5-axis mill-turn), and include outside processing such as heat treatment, plating, and testing certificates.",
      category: "Costing & BOM",
    },
    {
      question: "How does KanchanFlow integrate with our existing ERP or Tally accounting system?",
      answer:
        "KanchanFlow serves as the high-velocity commercial front-end where quotations are won. Once an order is confirmed, the verified BOM, purchase order details, and customer master can be handed off directly to your ERP or exported into standard structured formats (JSON/CSV) without redundant manual entry.",
      category: "ERP Integration",
    },
    {
      question: "What is the typical onboarding timeline for an engineering or fabrication plant?",
      answer:
        "Most manufacturing facilities go live within 10 to 14 days. Our engineering specialists help you import your standard raw material libraries, hourly machining rate cards, and quotation templates so your sales team can begin issuing accurate quotes immediately.",
      category: "Onboarding",
    },
    {
      question: "Can our sales engineers and plant supervisors use KanchanFlow on mobile devices?",
      answer:
        "Yes. The responsive mobile interface allows technical sales engineers visiting client facilities to check drawing revisions, verify quotation statuses, update pipeline notes, and log approvals directly from smartphones and tablets without lag.",
      category: "Mobile Access",
    },
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Enquiry Capture & RFQ",
      description:
        "Log customer RFQs, 2D/3D CAD drawings, specifications, and delivery target dates in a single central repository.",
      badge: "Intake",
    },
    {
      step: "02",
      title: "Costing & BOM Calculation",
      description:
        "Break down raw materials, machine cycle times, tooling overheads, and target profit margins with automated formula guards.",
      badge: "Engineering",
    },
    {
      step: "03",
      title: "Quotation & Customer Approval",
      description:
        "Generate branded, audit-ready PDF quotes with clear revision tags. Track customer opens, questions, and approvals.",
      badge: "Commercial",
    },
    {
      step: "04",
      title: "Order Handoff to Production",
      description:
        "Convert approved quotes into verified production job cards and BOM releases for the shop floor without email misunderstandings.",
      badge: "Shop Floor",
    },
  ];

  const industries = [
    {
      name: "Precision Engineering & CNC",
      icon: <Cog className="w-6 h-6 text-[#F0B33E]" />,
      desc: "High-mix, low-volume machined components, mill-turn parts, and aerospace sub-assemblies.",
    },
    {
      name: "Metal Fabrication & Stamping",
      icon: <Wrench className="w-6 h-6 text-[#F0B33E]" />,
      desc: "Sheet metal laser cutting, CNC bending, welded chassis, and progressive stamping dies.",
    },
    {
      name: "Industrial Machinery & Tooling",
      icon: <Factory className="w-6 h-6 text-[#F0B33E]" />,
      desc: "Custom jigs, fixtures, special purpose machines (SPMs), and heavy processing equipment.",
    },
    {
      name: "Automotive Tier 1 & Tier 2",
      icon: <Car className="w-6 h-6 text-[#F0B33E]" />,
      desc: "PPAP documentation, forging, casting, transmission gears, and high-volume assembly lines.",
    },
    {
      name: "Electrical Equipment & Switchgear",
      icon: <Zap className="w-6 h-6 text-[#F0B33E]" />,
      desc: "Control panels, busbars, power distribution enclosures, and custom electrical cabinets.",
    },
    {
      name: "Engineered Components & Pumps",
      icon: <Cpu className="w-6 h-6 text-[#F0B33E]" />,
      desc: "Valves, hydraulic manifolds, fluid handling assemblies, and high-tolerance seals.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#0B111B] text-[#F5F3ED]">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* SECTION 1: HERO */}
        <VideoHero />

        {/* SECTION 2: HOW KANCHANFLOW WORKS (Reference Light/Cream Section) */}
        <HowItWorksReference />

        {/* SECTION 3: BUILT FOR MANUFACTURING (Reference Dark Feature Grid) */}
        <BuiltForManufacturing />

        {/* SECTION 4: PROBLEM & SOLUTION */}
        <section
          id="problem-solution"
          className="py-20 lg:py-24 bg-[#0A121E] border-y border-[#1E2E42] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-dot-industrial opacity-15 pointer-events-none" />
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-rose-500/5 blur-[140px] rounded-full pointer-events-none -z-0"
          />

          <Container>
            <SectionHeading
              eyebrow="The Problem"
              title="Manufacturing sales shouldn't run on scattered spreadsheets."
              description="When enquiries arrive by email and costing lives in disconnected Excel files, quotes take days to send and costly errors slip into production."
            />

            {/* Three Problems Grid - Distinct Color Coding */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Problem 1: Red Rose Theme */}
              <div className="p-7 rounded-2xl bg-gradient-to-b from-[#1C1217] to-[#120B0F] border border-rose-500/30 hover:border-rose-500/60 transition-all duration-300 shadow-xl group">
                <div className="w-12 h-12 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-400 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-rose-400 font-semibold mb-1">
                  Problem 01 • Inbox Clutter
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Quotes Get Lost in Email Threads
                </h3>
                <p className="mt-2.5 text-sm text-[#94A3B8] leading-relaxed">
                  Customer enquiries and drawing revisions get buried in inboxes. Quotations take days to prepare, and estimators risk pricing old drawing versions.
                </p>
                <div className="mt-6 pt-3 border-t border-rose-500/20 text-xs text-[#94A3B8] flex items-center justify-between">
                  <span>Typical delay:</span>
                  <span className="text-rose-400 font-bold font-mono">4 to 7 days lost</span>
                </div>
              </div>

              {/* Problem 2: Amber Bronze Theme */}
              <div className="p-7 rounded-2xl bg-gradient-to-b from-[#1E170F] to-[#130E09] border border-amber-500/30 hover:border-amber-500/60 transition-all duration-300 shadow-xl group">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <FileSpreadsheet className="w-6 h-6" />
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold mb-1">
                  Problem 02 • Estimating Drift
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Inconsistent Costing in Spreadsheets
                </h3>
                <p className="mt-2.5 text-sm text-[#94A3B8] leading-relaxed">
                  Every estimator maintains their own template. Machine hourly rates, material markups, and scrap allowances are applied inconsistently.
                </p>
                <div className="mt-6 pt-3 border-t border-amber-500/20 text-xs text-[#94A3B8] flex items-center justify-between">
                  <span>Margin risk:</span>
                  <span className="text-amber-400 font-bold font-mono">Unpredictable job profits</span>
                </div>
              </div>

              {/* Problem 3: Sky Cyan Theme */}
              <div className="p-7 rounded-2xl bg-gradient-to-b from-[#0F1B29] to-[#091018] border border-sky-500/30 hover:border-sky-500/60 transition-all duration-300 shadow-xl group">
                <div className="w-12 h-12 rounded-xl bg-sky-500/20 border border-sky-500/40 text-sky-400 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold mb-1">
                  Problem 03 • Shop Floor Gaps
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Missed Follow-Ups & Handoff Errors
                </h3>
                <p className="mt-2.5 text-sm text-[#94A3B8] leading-relaxed">
                  Sales teams don&apos;t know which quotations need a call today. When an order arrives, passing drawings to the shop floor causes misunderstandings.
                </p>
                <div className="mt-6 pt-3 border-t border-sky-500/20 text-xs text-[#94A3B8] flex items-center justify-between">
                  <span>Lost opportunities:</span>
                  <span className="text-sky-400 font-bold font-mono">Quotes go cold</span>
                </div>
              </div>
            </div>

            {/* The Connected KanchanFlow Solution Banner */}
            <div className="mt-12 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#0B251F] via-[#0F1F33] to-[#1C160B] border-2 border-[#36C98F]/50 shadow-2xl relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-3.5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#36C98F]/20 border border-[#36C98F]/40 text-xs font-semibold uppercase tracking-wider text-[#36C98F]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    The Connected Solution
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    One connected workflow from customer enquiry to shop release
                  </h3>
                  <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed font-normal">
                    KanchanFlow connects estimation, commercial quoting, and production handoffs. Your team always works from the latest drawing and verified cost formulas.
                  </p>
                </div>

                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                  <Button
                    href="/features"
                    variant="primary"
                    size="md"
                    className="w-full justify-center shadow-lg shadow-[#F0B33E]/20"
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Explore Connected Features
                  </Button>
                  <Button
                    href="/pricing"
                    variant="secondary"
                    size="md"
                    className="w-full justify-center bg-[#16263A] border-[#2A3F5E] text-white hover:border-[#F0B33E]/50"
                  >
                    Compare Pricing & ROI
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 3: SIX FEATURE CARDS */}
        <section id="features" className="py-20 lg:py-24 bg-[#0B111B] relative">
          <Container>
            <SectionHeading
              eyebrow="Core Capabilities"
              title="Engineered specifically for manufacturing workflows."
              description="Purpose-built modules to replace generic CRM tools that don't understand drawings, machining hours, or BOM components."
            />

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Feature 1 */}
              <FeatureCard
                icon={<FileCheck2 className="w-6 h-6" />}
                title="Quote-to-Order"
                badge="Core Flow"
                metrics="48h Turnaround"
                href="/features#quote-to-order"
                description="Log customer enquiries, create professional quotes, track revisions, and convert accepted quotes into shop orders."
              />

              {/* Feature 2 */}
              <FeatureCard
                icon={<Layers className="w-6 h-6" />}
                title="Bill of Materials (BOM)"
                badge="Costing"
                metrics="Accurate Margins"
                href="/features#bom-costing"
                description="Break down raw materials, machine hourly rates, and labor into a structured BOM that protects your margins."
              />

              {/* Feature 3 */}
              <FeatureCard
                icon={<TrendingUp className="w-6 h-6" />}
                title="Sales Pipeline"
                badge="Tracking"
                metrics="+32% Win Rate"
                href="/features#pipeline"
                description="See every active deal at a glance, prioritize high-value tenders, and know which quotes need a follow-up today."
              />

              {/* Feature 4 */}
              <FeatureCard
                icon={<MessageSquare className="w-6 h-6" />}
                title="WhatsApp Updates"
                badge="Messaging"
                metrics="Instant Delivery"
                href="/features#whatsapp"
                description="Keep customer chats tied to the quote. Send instant quote links and dispatch notifications directly on WhatsApp."
              />

              {/* Feature 5 */}
              <FeatureCard
                icon={<BarChart3 className="w-6 h-6" />}
                title="Reports & Insights"
                badge="Analytics"
                metrics="Clear Visibility"
                href="/features#reporting"
                description="Track quote conversion rates, see which parts generate the most profit, and measure estimator turnaround velocity."
              />

              {/* Feature 6 */}
              <FeatureCard
                icon={<Smartphone className="w-6 h-6" />}
                title="Mobile Access"
                badge="On the Move"
                metrics="Any Device"
                href="/features#mobile"
                description="Review customer history, active drawings, and quotation statuses on any smartphone or tablet while on the shop floor."
              />
            </div>
          </Container>
        </section>

        {/* SECTION 4: WORKFLOW TIMELINE */}
        <section
          id="workflow"
          className="py-20 lg:py-24 bg-[#111B29] border-y border-[#2A3B50] relative"
        >
          <div className="absolute inset-0 bg-grid-industrial opacity-25 pointer-events-none" />

          <Container>
            <SectionHeading
              eyebrow="Precision Process"
              title="Four connected steps from enquiry to shop release."
              description="A clear, repeatable cadence designed to eliminate confusion between customer communication, commercial estimation, and factory execution."
            />

            {/* Desktop Horizontal Timeline / Mobile Stack */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              {/* Connector line for desktop */}
              <div className="hidden md:block absolute top-1/4 left-12 right-12 h-0.5 bg-gradient-to-r from-[#F0B33E]/20 via-[#F0B33E]/60 to-[#F0B33E]/20 -z-0" />

              {workflowSteps.map((item, index) => (
                <div
                  key={item.step}
                  className="relative z-10 flex flex-col justify-between p-7 rounded-2xl glass-panel-luxury glass-panel-hover transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#16263A] to-[#0B111B] border border-[#2A3B50] font-mono text-sm font-black text-[#F0B33E] flex items-center justify-center shadow-md">
                        {item.step}
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-[#16263A] border border-[#2A3B50] text-[#F0B33E]">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#F5F3ED] tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-[#A4B0BE] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#2A3B50]/60 flex items-center gap-2 text-xs text-[#36C98F] font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Automated Audit Gate</span>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* SECTION 5: INDUSTRIES */}
        <section id="industries" className="py-20 lg:py-24 bg-[#0B111B] relative">
          <Container>
            <SectionHeading
              eyebrow="Specialized Verticals"
              title="Trusted across high-precision manufacturing segments."
              description="Whether producing tight-tolerance aerospace bushings or heavy fabricated frames, KanchanFlow adapts to your technical specifications."
            />

            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((ind) => (
                <div
                  key={ind.name}
                  className="p-7 rounded-2xl glass-panel-luxury glass-panel-hover flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#16263A] to-[#0B111B] border border-[#2A3B50] flex items-center justify-center mb-5 text-[#F0B33E] shadow-md">
                      {ind.icon}
                    </div>
                    <h3 className="text-lg font-bold text-[#F5F3ED] tracking-tight">
                      {ind.name}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-[#A4B0BE] leading-relaxed">
                      {ind.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#2A3B50]/60 flex items-center justify-between text-xs">
                    <span className="text-[#F0B33E] font-medium flex items-center gap-1.5 hover:underline cursor-pointer">
                      <span>Ready Templates</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                    <span className="font-mono text-[10px] text-[#A4B0BE]/70">
                      ISO 9001 / IATF
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* SECTION 6: PRICING TEASER */}
        <section
          id="pricing-preview"
          className="py-20 lg:py-24 bg-[#111B29] border-y border-[#2A3B50] relative"
        >
          <div className="absolute inset-0 bg-dot-industrial opacity-20 pointer-events-none" />

          <Container>
            <SectionHeading
              eyebrow="Predictable Licensing"
              title="Tailored plans for small job shops to multi-plant operations."
              description="Transparent, modular pricing designed to scale with your quotation volume, estimator seats, and engineering integrations."
            />

            {/* Three plan teaser cards */}
            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Starter */}
              <div className="p-7 rounded-xl bg-[#0B111B] border border-[#2A3B50] flex flex-col justify-between hover:border-[#F0B33E]/30 transition-all">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#A4B0BE]">
                    For Growing Job Shops
                  </span>
                  <h3 className="text-xl font-bold text-[#F5F3ED] mt-1">Starter</h3>
                  <p className="text-xs text-[#A4B0BE] mt-2 leading-relaxed">
                    Ideal for single-facility precision units moving away from spreadsheets and paper RFQ folders.
                  </p>
                  <div className="my-6 py-4 border-y border-[#2A3B50]/60">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-extrabold text-[#F5F3ED]">₹4,999</span>
                      <span className="text-xs text-[#A4B0BE]">/ plant / month*</span>
                    </div>
                    <span className="text-[10px] text-[#A4B0BE]/70 block mt-1">
                      *Illustrative pricing billed annually
                    </span>
                  </div>
                  <ul className="space-y-2.5 text-xs text-[#A4B0BE]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#36C98F]" /> Up to 3 Estimator Seats
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#36C98F]" /> 250 Active RFQs / month
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#36C98F]" /> Single-tier BOM calculations
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  <Button href="/pricing" variant="outline" className="w-full">
                    View Plan Details
                  </Button>
                </div>
              </div>

              {/* Growth - Featured */}
              <div className="p-7 rounded-xl bg-[#16263A] border-2 border-[#F0B33E] flex flex-col justify-between shadow-xl relative gold-glow-card">
                <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-[#F0B33E] text-[#0B111B] text-[10px] font-bold uppercase tracking-wider">
                  Most Popular
                </div>

                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#F0B33E]">
                    Standard Production Facility
                  </span>
                  <h3 className="text-xl font-bold text-[#F5F3ED] mt-1">Growth</h3>
                  <p className="text-xs text-[#A4B0BE] mt-2 leading-relaxed">
                    Comprehensive quote-to-order flow with multi-tier BOMs, revision governance, and mobile pipelines.
                  </p>
                  <div className="my-6 py-4 border-y border-[#2A3B50]/80">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-extrabold text-[#F0B33E]">₹12,499</span>
                      <span className="text-xs text-[#A4B0BE]">/ plant / month*</span>
                    </div>
                    <span className="text-[10px] text-[#A4B0BE]/70 block mt-1">
                      *Illustrative pricing billed annually
                    </span>
                  </div>
                  <ul className="space-y-2.5 text-xs text-[#F5F3ED]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#36C98F]" /> Up to 10 Seats (Sales & Shop)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#36C98F]" /> Unlimited RFQs & Revisions
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#36C98F]" /> Multi-Tier BOM & Scrap Formulas
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#36C98F]" /> WhatsApp Dispatch Alerts
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  <Button href="/pricing" variant="primary" className="w-full">
                    Explore Growth Plan
                  </Button>
                </div>
              </div>

              {/* Enterprise */}
              <div className="p-7 rounded-xl bg-[#0B111B] border border-[#2A3B50] flex flex-col justify-between hover:border-[#F0B33E]/30 transition-all">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#A4B0BE]">
                    Multi-Plant & Tier-1 OEMs
                  </span>
                  <h3 className="text-xl font-bold text-[#F5F3ED] mt-1">Enterprise</h3>
                  <p className="text-xs text-[#A4B0BE] mt-2 leading-relaxed">
                    For multi-facility manufacturing enterprises requiring custom ERP integration, SSO, and dedicated SLAs.
                  </p>
                  <div className="my-6 py-4 border-y border-[#2A3B50]/60">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-extrabold text-[#F5F3ED]">Custom Architecture</span>
                    </div>
                    <span className="text-[10px] text-[#A4B0BE]/70 block mt-1">
                      Tailored to active machine centers & plants
                    </span>
                  </div>
                  <ul className="space-y-2.5 text-xs text-[#A4B0BE]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#36C98F]" /> Unlimited Plant Sites & Seats
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#36C98F]" /> Bi-directional SAP/Oracle sync
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#36C98F]" /> Dedicated Solutions Architect
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  <Button href="/pricing" variant="outline" className="w-full">
                    Contact Enterprise Sales
                  </Button>
                </div>
              </div>
            </div>

            {/* Note on illustrative pricing */}
            <p className="mt-8 text-center text-xs text-[#A4B0BE]/70">
              Note: Plan tiers and figures are indicative illustrations for demonstration purposes. Final enterprise quotes are tailored to specific machine units and workflow customization.
            </p>
          </Container>
        </section>

        {/* SECTION 7: FAQ ACCORDION */}
        <section id="faq" className="py-20 lg:py-24 bg-[#0B111B] relative">
          <Container>
            <SectionHeading
              eyebrow="Frequently Asked Questions"
              title="Answers for manufacturing leaders."
              description="Everything you need to know about adopting KanchanFlow across your sales estimation, commercial engineering, and plant handoff operations."
            />

            <div className="mt-14">
              <FAQAccordion items={homeFaqs} defaultOpenIndex={0} />
            </div>
          </Container>
        </section>

        {/* SECTION 8: FINAL CTA */}
        <SectionCTA
          heading="Bring clarity to every quotation."
          copy="See how a connected sales workflow can help your manufacturing team move from enquiry to order with speed and precision."
          primaryCtaText="Book a Demo"
          secondaryCtaText="Explore Features"
          secondaryHref="/features"
        />
      </main>

      <Footer />
    </div>
  );
}
