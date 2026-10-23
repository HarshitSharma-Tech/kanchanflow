import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "./container";

interface WorkflowStepItem {
  step: string;
  title: string;
  image: string;
  description: string;
  alt: string;
}

const steps: WorkflowStepItem[] = [
  {
    step: "01",
    title: "Customer Enquiry",
    image: "/images/step-01-enquiry.jpg",
    description: "Capture and manage enquiries in one place.",
    alt: "Customer RFQ drawing and precision manifold block on workbench",
  },
  {
    step: "02",
    title: "Quotation & Costing",
    image: "/images/step-02-costing.jpg",
    description: "Prepare accurate quotations with real costing.",
    alt: "Laptop displaying KanchanFlow manufacturing CRM costing dashboard",
  },
  {
    step: "03",
    title: "Follow-ups & Insights",
    image: "/images/step-03-followup.jpg",
    description: "Track follow-ups and get complete visibility.",
    alt: "Mobile device tracking active sales pipeline and quotation status",
  },
  {
    step: "04",
    title: "Confirmed Order",
    image: "/images/step-04-order.jpg",
    description: "Convert to order and handoff to production seamlessly.",
    alt: "5-axis CNC machining center milling precision component for confirmed order",
  },
];

function WorkflowCard({
  item,
  isDuplicate = false,
}: {
  item: WorkflowStepItem;
  isDuplicate?: boolean;
}) {
  return (
    <div className="flex flex-col bg-white rounded-2xl p-3.5 border border-[#E8E2D8] shadow-sm hover:shadow-md hover:border-[#D0C7B8] transition-all relative group/card w-[260px] sm:w-[280px] shrink-0 text-left">
      {/* Card Header: Step Badge + Title */}
      <div className="flex items-center gap-2.5 mb-3">
        <span className="px-2 py-0.5 rounded-md bg-[#F5E6CD] text-[#8C5815] text-xs font-mono font-bold shrink-0">
          {item.step}
        </span>
        <h3 className="text-sm font-bold text-[#111622] tracking-tight truncate">
          {item.title}
        </h3>
      </div>

      {/* Thumbnail Image Container */}
      <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#ECE8E1] border border-[#E3DDD2] mb-3">
        <Image
          src={item.image}
          alt={isDuplicate ? "" : item.alt}
          fill
          sizes="(max-width: 640px) 260px, 280px"
          className="object-cover group-hover/card:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Description */}
      <p className="text-xs text-[#5C6573] leading-relaxed">
        {item.description}
      </p>
    </div>
  );
}

function ArrowConnector() {
  return (
    <div
      aria-hidden="true"
      className="w-7 h-7 rounded-full bg-white border border-[#E8E2D8] flex items-center justify-center text-[#8C7A6B] shadow-xs shrink-0 select-none"
    >
      <ArrowRight className="w-3.5 h-3.5" />
    </div>
  );
}

export function HowItWorksReference() {
  return (
    <section
      id="workflow-overview"
      className="py-16 lg:py-20 bg-[#FAF8F5] text-[#111622] border-b border-[#E8E2D8] relative overflow-hidden"
    >
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Heading & CTA (strictly fixed in place) */}
          <div className="lg:col-span-4 xl:col-span-3 space-y-4 shrink-0 z-20">
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#8C7A6B]">
              <span className="w-4 h-0.5 bg-[#8C7A6B]" />
              <span>HOW KANCHANFLOW WORKS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111622] leading-[1.18] tracking-tight">
              A smooth flow for your entire sales process.
            </h2>

            <p className="text-sm text-[#5C6573] leading-relaxed font-normal">
              From the first enquiry to the final order, KanchanFlow keeps everything organized, transparent, and connected.
            </p>

            <div className="pt-2">
              <Link
                href="/features#workflow"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#111622] text-white text-sm font-semibold hover:bg-[#1E293B] active:scale-95 transition-all shadow-md group"
              >
                <span>See Full Workflow</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Continuous Smooth Conveyor Belt Marquee */}
          <div className="lg:col-span-8 xl:col-span-9 overflow-hidden relative py-2 select-none">
            {/* Left & Right Subtle Edge Fade Masks for Seamless Motion */}
            <div
              aria-hidden="true"
              className="absolute left-0 top-0 bottom-0 w-8 sm:w-14 bg-gradient-to-r from-[#FAF8F5] to-transparent z-10 pointer-events-none"
            />
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 bottom-0 w-8 sm:w-14 bg-gradient-to-l from-[#FAF8F5] to-transparent z-10 pointer-events-none"
            />

            {/* Conveyor Belt Track: Moving right-to-left continuously, pauses on hover */}
            <div className="flex w-max animate-workflow-marquee hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]">
              {/* Set 1 */}
              <div className="flex items-center gap-3.5 sm:gap-4 shrink-0 pr-3.5 sm:pr-4">
                {steps.map((item) => (
                  <React.Fragment key={`set1-${item.step}`}>
                    <WorkflowCard item={item} />
                    <ArrowConnector />
                  </React.Fragment>
                ))}
              </div>

              {/* Set 2 (Exact duplicate for seamless infinite loop) */}
              <div
                aria-hidden="true"
                className="flex items-center gap-3.5 sm:gap-4 shrink-0 pr-3.5 sm:pr-4"
              >
                {steps.map((item) => (
                  <React.Fragment key={`set2-${item.step}`}>
                    <WorkflowCard item={item} isDuplicate />
                    <ArrowConnector />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
