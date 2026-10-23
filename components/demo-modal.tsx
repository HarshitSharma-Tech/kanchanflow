"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle2, Factory, Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "./button";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    teamSize: "10-50",
    manufacturingType: "Precision Engineering",
    notes: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Work email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid work email address";
    }
    if (!formData.company.trim()) newErrors.company = "Company name is required";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate clean client-side submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      email: "",
      company: "",
      teamSize: "10-50",
      manufacturingType: "Precision Engineering",
      notes: "",
    });
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#08090C]/85 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-lg bg-[#12151D] border border-[#262B38] rounded-xl shadow-2xl p-6 sm:p-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle top gold accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F0B33E] to-transparent" />

        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close demo booking modal"
          className="absolute top-5 right-5 text-[#A4B0BE] hover:text-[#F5F3ED] hover:bg-[#181C26] p-1.5 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F0B33E]"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="p-1 rounded bg-[#F0B33E]/10 text-[#F0B33E]">
                <Factory className="w-4 h-4" />
              </span>
              <span className="text-xs font-semibold tracking-wider uppercase text-[#F0B33E]">
                Personalized Walkthrough
              </span>
            </div>

            <h3
              id="demo-modal-title"
              className="text-2xl font-bold text-[#F5F3ED] tracking-tight"
            >
              Book a KanchanFlow Demo
            </h3>
            <p className="mt-1 text-sm text-[#A4B0BE]">
              Discover how KanchanFlow unifies enquiries, costing, and order handoffs for your shop floor.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="demo-name"
                    className="block text-xs font-medium text-[#F5F3ED] mb-1"
                  >
                    Full Name <span className="text-[#F0B33E]">*</span>
                  </label>
                  <input
                    id="demo-name"
                    type="text"
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: "" });
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-md bg-[#181C26] border text-sm text-[#F5F3ED] placeholder-[#A4B0BE]/50 focus:outline-none focus:ring-2 focus:ring-[#F0B33E] transition-all ${
                      errors.name ? "border-red-500" : "border-[#2E3547]"
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="demo-email"
                    className="block text-xs font-medium text-[#F5F3ED] mb-1"
                  >
                    Work Email <span className="text-[#F0B33E]">*</span>
                  </label>
                  <input
                    id="demo-email"
                    type="email"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: "" });
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-md bg-[#181C26] border text-sm text-[#F5F3ED] placeholder-[#A4B0BE]/50 focus:outline-none focus:ring-2 focus:ring-[#F0B33E] transition-all ${
                      errors.email ? "border-red-500" : "border-[#2E3547]"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="demo-company"
                    className="block text-xs font-medium text-[#F5F3ED] mb-1"
                  >
                    Manufacturing Company <span className="text-[#F0B33E]">*</span>
                  </label>
                  <input
                    id="demo-company"
                    type="text"
                    placeholder="e.g. Apex Precision Ltd"
                    value={formData.company}
                    onChange={(e) => {
                      setFormData({ ...formData, company: e.target.value });
                      if (errors.company) setErrors({ ...errors, company: "" });
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-md bg-[#181C26] border text-sm text-[#F5F3ED] placeholder-[#A4B0BE]/50 focus:outline-none focus:ring-2 focus:ring-[#F0B33E] transition-all ${
                      errors.company ? "border-red-500" : "border-[#2E3547]"
                    }`}
                  />
                  {errors.company && (
                    <p className="mt-1 text-xs text-red-400">{errors.company}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="demo-team"
                    className="block text-xs font-medium text-[#F5F3ED] mb-1"
                  >
                    Team Size
                  </label>
                  <select
                    id="demo-team"
                    value={formData.teamSize}
                    onChange={(e) =>
                      setFormData({ ...formData, teamSize: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-md bg-[#181C26] border border-[#2E3547] text-sm text-[#F5F3ED] focus:outline-none focus:ring-2 focus:ring-[#F0B33E] transition-all"
                  >
                    <option value="1-10">1 – 10 engineers / staff</option>
                    <option value="10-50">10 – 50 staff</option>
                    <option value="50-200">50 – 200 staff</option>
                    <option value="200+">200+ staff (Enterprise)</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="demo-industry"
                  className="block text-xs font-medium text-[#F5F3ED] mb-1"
                >
                  Manufacturing Segment
                </label>
                <select
                  id="demo-industry"
                  value={formData.manufacturingType}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      manufacturingType: e.target.value,
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-md bg-[#181C26] border border-[#2E3547] text-sm text-[#F5F3ED] focus:outline-none focus:ring-2 focus:ring-[#F0B33E] transition-all"
                >
                  <option value="Precision Engineering">Precision Engineering & CNC</option>
                  <option value="Metal Fabrication">Sheet Metal Fabrication & Welding</option>
                  <option value="Automotive Suppliers">Automotive & Tier-1/2 Suppliers</option>
                  <option value="Industrial Components">Industrial Machinery & Components</option>
                  <option value="Electrical Equipment">Electrical Panels & Electronics</option>
                  <option value="Other">Other Manufacturing</option>
                </select>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full justify-center"
                  disabled={isSubmitting}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  {isSubmitting ? "Reserving Slot..." : "Schedule Guided Demo"}
                </Button>
              </div>

              <div className="flex items-center justify-center gap-4 text-xs text-[#A4B0BE] pt-1">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#F0B33E]" /> 30-min walkthrough
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#36C98F]" /> No credit card required
                </span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#36C98F]/10 border border-[#36C98F]/30 flex items-center justify-center text-[#36C98F] mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-[#F5F3ED]">
              Demo Request Received
            </h3>
            <p className="mt-2 text-sm text-[#A4B0BE] max-w-sm mx-auto">
              Thank you, <span className="text-[#F5F3ED] font-medium">{formData.name}</span>! Our manufacturing solution specialist will reach out to <span className="text-[#F0B33E]">{formData.email}</span> within 2 business hours to confirm your custom walkthrough for <span className="text-[#F5F3ED]">{formData.company}</span>.
            </p>

            <div className="mt-6 p-4 rounded-lg bg-[#181C26] border border-[#2E3547] text-left text-xs text-[#A4B0BE] space-y-1.5">
              <div className="font-semibold text-[#F5F3ED] uppercase tracking-wider text-[11px] mb-2 text-center">
                Demo Booking Summary
              </div>
              <div className="flex justify-between">
                <span>Industry:</span>
                <span className="text-[#F5F3ED]">{formData.manufacturingType}</span>
              </div>
              <div className="flex justify-between">
                <span>Team size:</span>
                <span className="text-[#F5F3ED]">{formData.teamSize}</span>
              </div>
              <div className="flex justify-between">
                <span>Status:</span>
                <span className="text-[#36C98F] font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#36C98F] animate-pulse" />
                  Reserved (Demonstration Environment)
                </span>
              </div>
            </div>

            <div className="mt-6">
              <Button onClick={handleReset} variant="secondary" className="w-full">
                Close & Return to Site
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
