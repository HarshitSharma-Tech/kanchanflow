"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  Calendar,
  Clock,
  ArrowRight,
  ShieldCheck,
  Factory,
  Sparkles,
  HelpCircle,
  AlertCircle,
  Layers,
  Cpu,
} from "lucide-react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { PricingCard, PricingPlan } from "@/components/pricing-card";
import { FAQAccordion, FAQItem } from "@/components/faq-accordion";
import { Button } from "@/components/button";

export function PricingView() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [selectedPlanId, setSelectedPlanId] = useState<string>("growth");

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    teamSize: "10-50",
    manufacturingType: "Precision Engineering & CNC",
    plan: "Growth Plan (Recommended)",
    notes: "",
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const plans: PricingPlan[] = [
    {
      id: "starter",
      name: "Starter",
      badge: "Small Job Shops",
      description:
        "For precision machining and fabrication units transitioning away from scattered Excel sheets and email quotes.",
      monthlyPrice: 6249,
      annualPrice: 4999,
      popular: false,
      ctaText: "Choose Starter Plan",
      features: [
        "Up to 3 Estimator & Commercial Seats",
        "250 Active RFQ Enquiries / month",
        "Single-Tier BOM & Cutting Cost Calculations",
        "Standard Revision History (Rev A, B, C)",
        "PDF Quotation Export with Company Logo",
        "Email & In-App Customer Support",
      ],
    },
    {
      id: "growth",
      name: "Growth",
      badge: "Standard Plant",
      description:
        "For growing manufacturing plants requiring multi-tier BOM calculations, margin protection, and seamless order handoffs.",
      monthlyPrice: 15499,
      annualPrice: 12499,
      popular: true,
      ctaText: "Choose Growth Plan",
      features: [
        "Up to 10 Seats (Sales, Engineering, & Shop Leads)",
        "Unlimited RFQs & Drawing Uploads",
        "Multi-Tier Hierarchical BOM Engine",
        "Machine Hour Rate (MHR) Center Configuration",
        "Automatic PO Price & Tax Reconciliation",
        "Shop Floor Traveler & Job Card Generation",
        "WhatsApp Dispatch Alerts & Customer Tracking",
        "Priority Engineering Onboarding (14 Days)",
      ],
    },
    {
      id: "enterprise",
      name: "Enterprise",
      badge: "Multi-Plant & OEMs",
      description:
        "For larger manufacturing groups requiring bi-directional ERP integration, multi-site capacity scheduling, and dedicated SLAs.",
      monthlyPrice: null,
      annualPrice: null,
      popular: false,
      ctaText: "Request Enterprise Consultation",
      features: [
        "Unlimited Machine Centers, Sites & Seats",
        "Custom Bi-Directional ERP Sync (SAP, Oracle, Tally)",
        "Multi-Facility Capacity & Load Forecasting",
        "Strict Role-Based Access & SAML SSO",
        "Custom Machine Telemetry & Edge Sensor Integration",
        "Dedicated Solution Architect & 99.9% Uptime SLA",
        "On-Premise or Private Cloud Deployment Options",
      ],
    },
  ];

  const pricingFaqs: FAQItem[] = [
    {
      question: "Are these prices official or illustrative?",
      answer:
        "These pricing tiers are illustrative benchmarks based on typical mid-market manufacturing CRM deployments. Final enterprise licensing depends on your specific plant machine centers, estimator seat requirements, and custom ERP integration scope.",
      category: "Pricing & Transparency",
    },
    {
      question: "Can we start with Starter and upgrade to Growth as our shop expands?",
      answer:
        "Yes, absolutely. All your quotation history, drawing revisions, client master lists, and cost formulas automatically transition without any disruption or data loss.",
      category: "Plan Flexibility",
    },
    {
      question: "What is included during the 14-day onboarding period?",
      answer:
        "Our manufacturing implementation team imports your existing machine hour rate cards, raw material pricing lists, scrap recovery parameters, and company quotation templates. We conduct hands-on training for both your commercial estimators and shop floor leads.",
      category: "Onboarding & Implementation",
    },
    {
      question: "Do you offer proof-of-concept (POC) pilots using our actual CAD drawings?",
      answer:
        "Yes! When you request a walkthrough, we can ingest 2 to 3 of your actual production drawings (Step/PDF) into a sandbox environment so you can experience KanchanFlow's BOM calculations and quotation creation firsthand.",
      category: "Pilot & Evaluation",
    },
    {
      question: "How does billing work and what payment intervals are supported?",
      answer:
        "We support both monthly and annual invoicing via corporate wire transfer, NEFT/RTGS, and corporate credit cards. Annual agreements include a 20% discount as well as complimentary initial data migration.",
      category: "Billing & Terms",
    },
  ];

  const handleSelectPlan = (planId: string) => {
    setSelectedPlanId(planId);
    const planObj = plans.find((p) => p.id === planId);
    if (planObj) {
      setFormData((prev) => ({
        ...prev,
        plan: `${planObj.name} Plan`,
      }));
    }
    // Scroll smoothly to enquiry form
    const formElement = document.getElementById("demo-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = "Full name is required";
    if (!formData.email.trim()) {
      errors.email = "Work email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid work email address";
    }
    if (!formData.company.trim()) errors.company = "Company name is required";
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
  };

  return (
    <div className="space-y-20 lg:space-y-28">
      {/* HERO SECTION */}
      <section className="relative pt-16 pb-12 lg:pt-20 lg:pb-16 bg-[#0B111B] text-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-industrial opacity-25 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#F0B33E]/5 blur-[120px] rounded-full pointer-events-none" />

        <Container>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0B33E]/10 border border-[#F0B33E]/30 text-xs font-semibold uppercase tracking-wider text-[#F0B33E]">
              <Factory className="w-3.5 h-3.5" />
              <span>Transparent Manufacturing Software</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F5F3ED] tracking-tight leading-tight">
              A clearer way to manage your{" "}
              <span className="text-[#F0B33E]">sales workflow.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#A4B0BE] leading-relaxed">
              Explore a plan structure designed around the real needs of machine shops, fabrication units, and industrial manufacturing enterprises.
            </p>

            {/* MONTHLY / ANNUAL SEGMENTED TOGGLE */}
            <div className="pt-6 flex flex-col items-center justify-center gap-2">
              <div
                role="radiogroup"
                aria-label="Billing interval"
                className="inline-flex items-center p-1.5 rounded-xl bg-[#16263A] border border-[#2A3B50] shadow-inner"
              >
                <button
                  type="button"
                  role="radio"
                  aria-checked={!isAnnual}
                  onClick={() => setIsAnnual(false)}
                  className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F0B33E] ${
                    !isAnnual
                      ? "bg-[#0B111B] text-[#F0B33E] shadow-sm"
                      : "text-[#A4B0BE] hover:text-[#F5F3ED]"
                  }`}
                >
                  Monthly Billing
                </button>

                <button
                  type="button"
                  role="radio"
                  aria-checked={isAnnual}
                  onClick={() => setIsAnnual(true)}
                  className={`relative px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F0B33E] flex items-center gap-2 ${
                    isAnnual
                      ? "bg-[#0B111B] text-[#F0B33E] shadow-sm"
                      : "text-[#A4B0BE] hover:text-[#F5F3ED]"
                  }`}
                >
                  <span>Annual Billing</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#36C98F]/20 text-[#36C98F] text-[10px] font-bold uppercase tracking-wider">
                    Save 20%
                  </span>
                </button>
              </div>

              <span className="text-xs text-[#A4B0BE]/70">
                Current selection:{" "}
                <span className="text-[#F0B33E] font-medium">
                  {isAnnual ? "Annual (20% Savings applied)" : "Monthly Flexible"}
                </span>
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* PRICING CARDS SECTION */}
      <section className="relative">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan) => (
              <PricingCard
                key={plan.id}
                plan={plan}
                isAnnual={isAnnual}
                onSelectPlan={handleSelectPlan}
              />
            ))}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-[#111B29]/60 border border-[#2A3B50]/60 max-w-3xl mx-auto text-center text-xs text-[#A4B0BE] space-y-1">
            <p className="font-semibold text-[#F5F3ED]">
              Illustrative Pricing Transparency Notice
            </p>
            <p>
              Rates shown are illustrative standard configurations for evaluation purposes. Final licensing agreements may vary based on plant location, machine telemetry volume, and custom ERP connectors.
            </p>
          </div>
        </Container>
      </section>

      {/* DEMO ENQUIRY INTERACTIVE FORM */}
      <section id="demo-form" className="relative py-12">
        <Container>
          <div className="max-w-3xl mx-auto rounded-2xl bg-[#111B29] border border-[#2A3B50] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            {/* Top gold bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F0B33E] to-transparent" />

            {!isSuccess ? (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="p-1 rounded bg-[#F0B33E]/10 text-[#F0B33E]">
                    <Factory className="w-4 h-4" />
                  </span>
                  <span className="text-xs font-semibold tracking-wider uppercase text-[#F0B33E]">
                    Plant Implementation Request
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F3ED] tracking-tight">
                  Request a Tailored Demo & Pricing Proposal
                </h2>
                <p className="mt-1.5 text-sm text-[#A4B0BE]">
                  Let us demonstrate KanchanFlow with your component drawings and configure a tailored proposal for your manufacturing unit.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="pricing-name"
                        className="block text-xs font-medium text-[#F5F3ED] mb-1"
                      >
                        Full Name <span className="text-[#F0B33E]">*</span>
                      </label>
                      <input
                        id="pricing-name"
                        type="text"
                        placeholder="e.g. Vikram Kulkarni"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (formErrors.name)
                            setFormErrors({ ...formErrors, name: "" });
                        }}
                        className={`w-full px-3.5 py-2.5 rounded-md bg-[#16263A] border text-sm text-[#F5F3ED] placeholder-[#A4B0BE]/50 focus:outline-none focus:ring-2 focus:ring-[#F0B33E] transition-all ${
                          formErrors.name ? "border-red-500" : "border-[#2A3B50]"
                        }`}
                      />
                      {formErrors.name && (
                        <p className="mt-1 text-xs text-red-400">
                          {formErrors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="pricing-email"
                        className="block text-xs font-medium text-[#F5F3ED] mb-1"
                      >
                        Work Email <span className="text-[#F0B33E]">*</span>
                      </label>
                      <input
                        id="pricing-email"
                        type="email"
                        placeholder="vikram@planttech.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (formErrors.email)
                            setFormErrors({ ...formErrors, email: "" });
                        }}
                        className={`w-full px-3.5 py-2.5 rounded-md bg-[#16263A] border text-sm text-[#F5F3ED] placeholder-[#A4B0BE]/50 focus:outline-none focus:ring-2 focus:ring-[#F0B33E] transition-all ${
                          formErrors.email ? "border-red-500" : "border-[#2A3B50]"
                        }`}
                      />
                      {formErrors.email && (
                        <p className="mt-1 text-xs text-red-400">
                          {formErrors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="pricing-company"
                        className="block text-xs font-medium text-[#F5F3ED] mb-1"
                      >
                        Manufacturing Enterprise <span className="text-[#F0B33E]">*</span>
                      </label>
                      <input
                        id="pricing-company"
                        type="text"
                        placeholder="e.g. Kulkarni CNC & Tooling Ltd"
                        value={formData.company}
                        onChange={(e) => {
                          setFormData({ ...formData, company: e.target.value });
                          if (formErrors.company)
                            setFormErrors({ ...formErrors, company: "" });
                        }}
                        className={`w-full px-3.5 py-2.5 rounded-md bg-[#16263A] border text-sm text-[#F5F3ED] placeholder-[#A4B0BE]/50 focus:outline-none focus:ring-2 focus:ring-[#F0B33E] transition-all ${
                          formErrors.company
                            ? "border-red-500"
                            : "border-[#2A3B50]"
                        }`}
                      />
                      {formErrors.company && (
                        <p className="mt-1 text-xs text-red-400">
                          {formErrors.company}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="pricing-plan"
                        className="block text-xs font-medium text-[#F5F3ED] mb-1"
                      >
                        Selected Plan of Interest
                      </label>
                      <select
                        id="pricing-plan"
                        value={formData.plan}
                        onChange={(e) =>
                          setFormData({ ...formData, plan: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-md bg-[#16263A] border border-[#2A3B50] text-sm text-[#F5F3ED] focus:outline-none focus:ring-2 focus:ring-[#F0B33E] transition-all"
                      >
                        <option value="Starter Plan">Starter Plan (Small Job Shop)</option>
                        <option value="Growth Plan (Recommended)">Growth Plan (Standard Plant)</option>
                        <option value="Enterprise Plan">Enterprise Plan (Multi-Site)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="pricing-team"
                        className="block text-xs font-medium text-[#F5F3ED] mb-1"
                      >
                        Estimated Team Size
                      </label>
                      <select
                        id="pricing-team"
                        value={formData.teamSize}
                        onChange={(e) =>
                          setFormData({ ...formData, teamSize: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-md bg-[#16263A] border border-[#2A3B50] text-sm text-[#F5F3ED] focus:outline-none focus:ring-2 focus:ring-[#F0B33E] transition-all"
                      >
                        <option value="1-10">1 – 10 (Sales & Estimators)</option>
                        <option value="10-50">10 – 50 staff</option>
                        <option value="50-200">50 – 200 staff</option>
                        <option value="200+">200+ staff</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="pricing-segment"
                        className="block text-xs font-medium text-[#F5F3ED] mb-1"
                      >
                        Manufacturing Vertical
                      </label>
                      <select
                        id="pricing-segment"
                        value={formData.manufacturingType}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            manufacturingType: e.target.value,
                          })
                        }
                        className="w-full px-3.5 py-2.5 rounded-md bg-[#16263A] border border-[#2A3B50] text-sm text-[#F5F3ED] focus:outline-none focus:ring-2 focus:ring-[#F0B33E] transition-all"
                      >
                        <option value="Precision Engineering & CNC">Precision CNC & Machining</option>
                        <option value="Sheet Metal Fabrication">Sheet Metal & Welding</option>
                        <option value="Automotive Suppliers">Automotive Components</option>
                        <option value="Industrial Machinery">Industrial Equipment & Tooling</option>
                        <option value="Electrical Switchgear">Electrical & Electronics</option>
                        <option value="Other">Other Manufacturing</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="pricing-notes"
                      className="block text-xs font-medium text-[#F5F3ED] mb-1"
                    >
                      Specific Workflow Questions or ERP Details (Optional)
                    </label>
                    <textarea
                      id="pricing-notes"
                      rows={3}
                      placeholder="e.g. Looking to integrate with Tally Prime and track drawing revisions for 5-axis parts..."
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-md bg-[#16263A] border border-[#2A3B50] text-sm text-[#F5F3ED] placeholder-[#A4B0BE]/50 focus:outline-none focus:ring-2 focus:ring-[#F0B33E] transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full justify-center"
                      disabled={isSubmitting}
                      icon={<ArrowRight className="w-4 h-4" />}
                    >
                      {isSubmitting
                        ? "Configuring Your Proposal..."
                        : "Submit Proposal & Demo Request"}
                    </Button>
                  </div>

                  <div className="flex items-center justify-center gap-4 text-xs text-[#A4B0BE] pt-1">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#36C98F]" /> Client-side validated
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#F0B33E]" /> 2-hour response commitment
                    </span>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-8 animate-in zoom-in-95 duration-200">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#36C98F]/10 border border-[#36C98F]/30 flex items-center justify-center text-[#36C98F] mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F3ED]">
                  Proposal Request Logged
                </h3>
                <p className="mt-2 text-sm text-[#A4B0BE] max-w-md mx-auto">
                  Thank you, <span className="text-[#F5F3ED] font-semibold">{formData.name}</span>! Our industrial sales engineer has received your enquiry for <span className="text-[#F0B33E] font-medium">{formData.company}</span>.
                </p>

                <div className="mt-6 p-5 rounded-xl bg-[#16263A] border border-[#2A3B50] text-left text-xs text-[#A4B0BE] space-y-2 max-w-md mx-auto">
                  <div className="font-semibold text-[#F5F3ED] uppercase tracking-wider text-[11px] mb-2 text-center">
                    Enquiry Details
                  </div>
                  <div className="flex justify-between">
                    <span>Target Plan:</span>
                    <span className="text-[#F0B33E] font-semibold">{formData.plan}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Manufacturing Segment:</span>
                    <span className="text-[#F5F3ED]">{formData.manufacturingType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Team Scope:</span>
                    <span className="text-[#F5F3ED]">{formData.teamSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Contact Email:</span>
                    <span className="text-[#F5F3ED]">{formData.email}</span>
                  </div>
                  <div className="flex justify-between pt-1 border-t border-[#2A3B50]/50">
                    <span>Status:</span>
                    <span className="text-[#36C98F] font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#36C98F] animate-pulse" />
                      Assigned to Solutions Specialist
                    </span>
                  </div>
                </div>

                <div className="mt-8 max-w-xs mx-auto">
                  <Button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        name: "",
                        email: "",
                        company: "",
                        teamSize: "10-50",
                        manufacturingType: "Precision Engineering & CNC",
                        plan: "Growth Plan (Recommended)",
                        notes: "",
                      });
                    }}
                    variant="secondary"
                    className="w-full"
                  >
                    Submit Another Request
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* PRICING FAQ ACCORDION */}
      <section id="pricing-faq" className="relative pb-16">
        <Container>
          <SectionHeading
            eyebrow="Licensing Clarity"
            title="Frequently Asked Questions About Pricing"
            description="Find direct answers about billing intervals, user seat expansions, implementation timelines, and security assurances."
          />

          <div className="mt-12">
            <FAQAccordion items={pricingFaqs} defaultOpenIndex={0} />
          </div>
        </Container>
      </section>
    </div>
  );
}
