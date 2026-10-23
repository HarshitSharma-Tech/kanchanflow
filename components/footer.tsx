"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Shield,
  Layers,
  ArrowUpRight,
  ExternalLink,
  Cpu,
  Mail,
  MapPin,
} from "lucide-react";
import { Container } from "./container";
import { BrandLogo } from "./brand-logo";
import { Button } from "./button";
import { DemoModal } from "./demo-modal";

export function Footer() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <>
      <footer className="relative border-t border-[#2A3B50] bg-[#0B111B] text-[#A4B0BE] overflow-hidden">
        {/* Subtle engineering line background */}
        <div className="absolute inset-0 bg-grid-industrial opacity-40 pointer-events-none" />

        {/* Top CTA banner inside footer */}
        <div className="relative border-b border-[#2A3B50]/60 bg-gradient-to-r from-[#111B29] via-[#16263A] to-[#111B29] py-12">
          <Container>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold uppercase tracking-wider text-[#F0B33E] bg-[#F0B33E]/10 border border-[#F0B33E]/20 mb-2">
                  <Cpu className="w-3.5 h-3.5" /> Next-Gen Shop Floor CRM
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#F5F3ED]">
                  Ready to eliminate quotation delays in your plant?
                </h3>
                <p className="mt-1 text-sm text-[#A4B0BE]">
                  Join forward-thinking precision engineering and fabrication teams running on KanchanFlow.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => setDemoModalOpen(true)}
                  icon={<ArrowUpRight className="w-4 h-4" />}
                >
                  Request Plant Walkthrough
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  href="/pricing"
                >
                  View Plans
                </Button>
              </div>
            </div>
          </Container>
        </div>

        {/* Main Footer Links */}
        <div className="relative py-14">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
              {/* Brand Column */}
              <div className="lg:col-span-2 space-y-4">
                <BrandLogo />
                <p className="text-sm text-[#A4B0BE] max-w-sm leading-relaxed">
                  KanchanFlow is the unified manufacturing CRM engineered specifically for precision engineering, sheet metal, and industrial suppliers to manage RFQs, multi-level BOM costing, quotations, and seamless order handoffs.
                </p>

                <div className="pt-2 flex flex-col gap-2 text-xs text-[#A4B0BE]">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#F0B33E] shrink-0" />
                    <span>Industrial Tech Hub • Pune & Bengaluru, India</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#F0B33E] shrink-0" />
                    <a
                      href="mailto:contact@kanchanflow.com"
                      className="hover:text-[#F0B33E] transition-colors focus-visible:outline-none focus-visible:underline"
                    >
                      solutions@kanchanflow.com
                    </a>
                  </div>
                </div>

                {/* Trust badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#16263A] border border-[#2A3B50] text-xs text-[#F5F3ED] mt-3">
                  <Shield className="w-4 h-4 text-[#36C98F]" />
                  <span>ISO 27001 & SOC-2 Aligned Data Security</span>
                </div>
              </div>

              {/* Product Links */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-[#F5F3ED] mb-4">
                  Product
                </h4>
                <ul className="space-y-2.5 text-sm">
                  <li>
                    <Link
                      href="/features#quote-to-order"
                      className="hover:text-[#F0B33E] transition-colors focus-visible:outline-none focus-visible:underline"
                    >
                      Quote-to-Order Flow
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/features#bom-costing"
                      className="hover:text-[#F0B33E] transition-colors focus-visible:outline-none focus-visible:underline"
                    >
                      BOM & Component Costing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/features#pipeline"
                      className="hover:text-[#F0B33E] transition-colors focus-visible:outline-none focus-visible:underline"
                    >
                      Manufacturing Pipeline
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/features#order-handoff"
                      className="hover:text-[#F0B33E] transition-colors focus-visible:outline-none focus-visible:underline"
                    >
                      Shop Floor Order Handoff
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/features#whatsapp"
                      className="hover:text-[#F0B33E] transition-colors focus-visible:outline-none focus-visible:underline"
                    >
                      WhatsApp Dispatch Alerts
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/features#reporting"
                      className="hover:text-[#F0B33E] transition-colors focus-visible:outline-none focus-visible:underline"
                    >
                      Margin & Revision Analytics
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Manufacturing Solutions */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-[#F5F3ED] mb-4">
                  Industries
                </h4>
                <ul className="space-y-2.5 text-sm">
                  <li>
                    <Link
                      href="/#industries"
                      className="hover:text-[#F0B33E] transition-colors focus-visible:outline-none focus-visible:underline"
                    >
                      Precision Engineering & CNC
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#industries"
                      className="hover:text-[#F0B33E] transition-colors focus-visible:outline-none focus-visible:underline"
                    >
                      Sheet Metal Fabrication
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#industries"
                      className="hover:text-[#F0B33E] transition-colors focus-visible:outline-none focus-visible:underline"
                    >
                      Industrial Machinery
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#industries"
                      className="hover:text-[#F0B33E] transition-colors focus-visible:outline-none focus-visible:underline"
                    >
                      Automotive Component Tiers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#industries"
                      className="hover:text-[#F0B33E] transition-colors focus-visible:outline-none focus-visible:underline"
                    >
                      Electrical Switchgear & OEM
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pricing"
                      className="hover:text-[#F0B33E] transition-colors focus-visible:outline-none focus-visible:underline"
                    >
                      Pricing & ROI Calculator
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Resources & Platform */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-[#F5F3ED] mb-4">
                  Resources
                </h4>
                <ul className="space-y-2.5 text-sm">
                  <li>
                    <Link
                      href="/features#capabilities"
                      className="hover:text-[#F0B33E] transition-colors focus-visible:outline-none focus-visible:underline"
                    >
                      Spreadsheet vs CRM Matrix
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#faq"
                      className="hover:text-[#F0B33E] transition-colors focus-visible:outline-none focus-visible:underline"
                    >
                      Implementation FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pricing#pricing-faq"
                      className="hover:text-[#F0B33E] transition-colors focus-visible:outline-none focus-visible:underline"
                    >
                      Licensing & Deployment
                    </Link>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => setDemoModalOpen(true)}
                      className="text-left hover:text-[#F0B33E] transition-colors focus-visible:outline-none focus-visible:underline flex items-center gap-1 text-[#F0B33E]"
                    >
                      <span>Book Plant Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </li>
                  <li>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#F5F3ED] transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>GitHub Integration</span>
                      <ExternalLink className="w-3 h-3 text-[#A4B0BE]" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-12 pt-8 border-t border-[#2A3B50]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A4B0BE]">
              <p>
                © 2026 KanchanFlow Inc. All rights reserved. Precision manufacturing CRM platform.
              </p>

              <div className="flex items-center gap-6">
                <Link
                  href="/#faq"
                  className="hover:text-[#F5F3ED] transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/#faq"
                  className="hover:text-[#F5F3ED] transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/#faq"
                  className="hover:text-[#F5F3ED] transition-colors"
                >
                  Security Statement
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </footer>

      {/* Global Book a Demo Modal */}
      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
      />
    </>
  );
}
