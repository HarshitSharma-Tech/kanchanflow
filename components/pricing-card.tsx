"use client";

import React from "react";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./button";

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  description: string;
  monthlyPrice: number | null;
  annualPrice: number | null;
  priceNote?: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
}

interface PricingCardProps {
  plan: PricingPlan;
  isAnnual: boolean;
  onSelectPlan: (planId: string) => void;
}

export function PricingCard({
  plan,
  isAnnual,
  onSelectPlan,
}: PricingCardProps) {
  const isCustom = plan.monthlyPrice === null;
  const currentPrice = isAnnual ? plan.annualPrice : plan.monthlyPrice;
  const savings =
    !isCustom && plan.monthlyPrice && plan.annualPrice
      ? (plan.monthlyPrice - plan.annualPrice) * 12
      : 0;

  return (
    <div
      className={`relative h-full flex flex-col justify-between p-7 sm:p-8 rounded-2xl transition-all duration-300 ${
        plan.popular
          ? "bg-[#16263A] border-2 border-[#F0B33E] shadow-2xl gold-glow-card"
          : "bg-[#111B29] border border-[#2A3B50] hover:border-[#F0B33E]/40"
      }`}
    >
      {/* Popular tag */}
      {plan.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#F0B33E] text-[#0B111B] text-xs font-bold uppercase tracking-wider shadow-md flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Recommended For Most Plants</span>
        </div>
      )}

      <div>
        {/* Plan Header */}
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-[#F5F3ED] tracking-tight">
            {plan.name}
          </h3>
          {plan.badge && (
            <span
              className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded ${
                plan.popular
                  ? "bg-[#F0B33E]/20 text-[#F0B33E] border border-[#F0B33E]/40"
                  : "bg-[#16263A] text-[#A4B0BE] border border-[#2A3B50]"
              }`}
            >
              {plan.badge}
            </span>
          )}
        </div>

        <p className="mt-2 text-xs sm:text-sm text-[#A4B0BE] leading-relaxed min-h-[40px]">
          {plan.description}
        </p>

        {/* Price Display */}
        <div className="my-6 py-4 border-y border-[#2A3B50]/60">
          {!isCustom ? (
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#F5F3ED] font-mono tracking-tight">
                  ₹{currentPrice?.toLocaleString("en-IN")}
                </span>
                <span className="text-xs text-[#A4B0BE]">/ plant / month</span>
              </div>

              <div className="mt-1.5 flex items-center justify-between text-[11px]">
                <span className="text-[#A4B0BE]/70">
                  {isAnnual ? "Billed annually (indicative)" : "Billed monthly"}
                </span>
                {isAnnual && savings > 0 && (
                  <span className="font-mono text-[#36C98F] font-semibold">
                    Save ₹{savings.toLocaleString("en-IN")}/yr
                  </span>
                )}
              </div>
            </div>
          ) : (
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#F5F3ED] tracking-tight">
                Custom Architecture
              </div>
              <p className="mt-1 text-xs text-[#A4B0BE]">
                Tailored to machine clusters, ERP sync, & multi-site facilities
              </p>
            </div>
          )}
        </div>

        {/* Feature List */}
        <div className="space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#F5F3ED]/80">
            Included Capabilities:
          </div>
          <ul className="space-y-2.5 text-xs sm:text-sm text-[#A4B0BE]">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5">
                <CheckCircle2
                  className={`w-4 h-4 shrink-0 mt-0.5 ${
                    plan.popular ? "text-[#F0B33E]" : "text-[#36C98F]"
                  }`}
                />
                <span className={plan.popular ? "text-[#F5F3ED]" : ""}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Action */}
      <div className="mt-8 pt-4 border-t border-[#2A3B50]/50">
        <Button
          variant={plan.popular ? "primary" : "outline"}
          size="lg"
          className="w-full justify-center"
          onClick={() => onSelectPlan(plan.id)}
          icon={<ArrowRight className="w-4 h-4" />}
        >
          {plan.ctaText}
        </Button>
      </div>
    </div>
  );
}
