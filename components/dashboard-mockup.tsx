"use client";

import React, { useState } from "react";
import {
  FileText,
  Layers,
  ShoppingBag,
  Users,
  BarChart3,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  AlertCircle,
  ArrowUpRight,
  ChevronRight,
  TrendingUp,
  Cpu,
  Boxes,
  DollarSign,
  Sparkles,
} from "lucide-react";

interface QuotationItem {
  id: string;
  customer: string;
  partName: string;
  quantity: string;
  material: string;
  machiningHours: string;
  costEstimate: string;
  margin: string;
  quoteTotal: string;
  status: "Approved" | "In Review" | "Costing BOM" | "Handoff Ready";
  plant: string;
}

export function DashboardMockup() {
  const [activeTab, setActiveTab] = useState<"Quotations" | "BOM Costing" | "Pipeline">("Quotations");
  const [selectedQuoteId, setSelectedQuoteId] = useState<string>("QT-8421");
  const [filterStatus, setFilterStatus] = useState<string>("All");

  const quotations: QuotationItem[] = [
    {
      id: "QT-8421",
      customer: "Bharat Precision Dynamics",
      partName: "5-Axis CNC Impeller Housing (SS-316L)",
      quantity: "250 pcs",
      material: "Stainless Steel 316L (Forged)",
      machiningHours: "42.5 hrs",
      costEstimate: "₹4,12,000",
      margin: "28.5%",
      quoteTotal: "₹5,76,200",
      status: "Approved",
      plant: "Plant 01 - CNC Machining",
    },
    {
      id: "QT-8419",
      customer: "Larsen Industrial Tech",
      partName: "High-Pressure Hydraulic Manifold",
      quantity: "80 sets",
      material: "Alloy 7075-T6 Aerospace Grade",
      machiningHours: "18.0 hrs",
      costEstimate: "₹2,65,000",
      margin: "24.2%",
      quoteTotal: "₹3,49,600",
      status: "Handoff Ready",
      plant: "Plant 02 - Precision Tooling",
    },
    {
      id: "QT-8415",
      customer: "Apex Automotive Systems",
      partName: "Precision Stamping Die Bracket Assembly",
      quantity: "1,200 pcs",
      material: "Cold Rolled Deep Draw Steel",
      machiningHours: "64.0 hrs",
      costEstimate: "₹8,40,000",
      margin: "22.8%",
      quoteTotal: "₹10,88,000",
      status: "In Review",
      plant: "Plant 01 - Heavy Press",
    },
    {
      id: "QT-8408",
      customer: "Tata Transmissions Ltd",
      partName: "Hardened Helical Planetary Pinion",
      quantity: "500 pcs",
      material: "EN353 Case Hardened Steel",
      machiningHours: "31.5 hrs",
      costEstimate: "₹3,10,000",
      margin: "27.0%",
      quoteTotal: "₹4,24,650",
      status: "Costing BOM",
      plant: "Plant 03 - Gear & Heat Treat",
    },
  ];

  const selectedQuote =
    quotations.find((q) => q.id === selectedQuoteId) || quotations[0];

  const filteredQuotes =
    filterStatus === "All"
      ? quotations
      : quotations.filter((q) => q.status === filterStatus);

  const getStatusBadge = (status: QuotationItem["status"]) => {
    switch (status) {
      case "Approved":
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-[#36C98F]/15 text-[#36C98F] border border-[#36C98F]/30">
            <CheckCircle2 className="w-3 h-3" /> Approved
          </span>
        );
      case "Handoff Ready":
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-[#F0B33E]/15 text-[#F0B33E] border border-[#F0B33E]/30">
            <Boxes className="w-3 h-3" /> Ready for Shop
          </span>
        );
      case "In Review":
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-[#16263A] text-[#A4B0BE] border border-[#2A3B50]">
            <Clock className="w-3 h-3" /> Client Review
          </span>
        );
      case "Costing BOM":
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-[#8F691E]/20 text-[#F0B33E] border border-[#F0B33E]/40">
            <Cpu className="w-3 h-3" /> BOM Costing
          </span>
        );
    }
  };

  return (
    <div className="relative rounded-2xl border border-[#2A3B50] bg-[#111B29] shadow-2xl overflow-hidden text-[#F5F3ED] font-sans gold-glow-card transition-all">
      {/* Top Window Chrome */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#0B111B] border-b border-[#2A3B50]/80">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2A3B50]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#2A3B50]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#2A3B50]" />
          </div>
          <span className="text-[11px] font-mono text-[#A4B0BE] ml-2 tracking-tight flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#36C98F]" />
            kanchanflow-manufacturing-core.internal
          </span>
        </div>

        <div className="flex items-center gap-3 text-xs text-[#A4B0BE]">
          <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#16263A] border border-[#2A3B50] text-[10px] text-[#F0B33E]">
            <Sparkles className="w-3 h-3" /> Live Telemetry
          </span>
          <span className="text-[11px] text-[#A4B0BE]/70">Shift 1 • Running</span>
        </div>
      </div>

      {/* Main Application Container */}
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[520px]">
        {/* Left Navigation Sidebar */}
        <aside className="hidden md:flex md:col-span-3 flex-col border-r border-[#2A3B50]/70 bg-[#0B111B]/60 p-3">
          {/* Plant Selector */}
          <div className="p-2.5 rounded-lg bg-[#16263A]/80 border border-[#2A3B50] mb-3">
            <div className="text-[10px] uppercase tracking-wider font-semibold text-[#A4B0BE]">
              Active Facility
            </div>
            <div className="text-xs font-bold text-[#F5F3ED] truncate mt-0.5">
              Pune Plant 01 — CNC & Tooling
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="space-y-1 text-xs">
            <button
              onClick={() => setActiveTab("Quotations")}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-md font-medium transition-colors ${
                activeTab === "Quotations"
                  ? "bg-[#16263A] text-[#F0B33E] border-l-2 border-[#F0B33E]"
                  : "text-[#A4B0BE] hover:text-[#F5F3ED] hover:bg-[#16263A]/50"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <FileText className="w-4 h-4 text-[#F0B33E]" />
                <span>Quotations</span>
              </div>
              <span className="px-1.5 py-0.2 rounded bg-[#F0B33E]/20 text-[#F0B33E] text-[10px] font-mono">
                14
              </span>
            </button>

            <button
              onClick={() => setActiveTab("BOM Costing")}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-md font-medium transition-colors ${
                activeTab === "BOM Costing"
                  ? "bg-[#16263A] text-[#F0B33E] border-l-2 border-[#F0B33E]"
                  : "text-[#A4B0BE] hover:text-[#F5F3ED] hover:bg-[#16263A]/50"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Layers className="w-4 h-4 text-[#36C98F]" />
                <span>BOM & Costing</span>
              </div>
              <span className="px-1.5 py-0.2 rounded bg-[#16263A] text-[#A4B0BE] text-[10px] font-mono">
                Live
              </span>
            </button>

            <button
              onClick={() => setActiveTab("Pipeline")}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-md font-medium transition-colors ${
                activeTab === "Pipeline"
                  ? "bg-[#16263A] text-[#F0B33E] border-l-2 border-[#F0B33E]"
                  : "text-[#A4B0BE] hover:text-[#F5F3ED] hover:bg-[#16263A]/50"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <ShoppingBag className="w-4 h-4 text-[#A4B0BE]" />
                <span>Orders & Handoff</span>
              </div>
              <span className="w-2 h-2 rounded-full bg-[#36C98F]" />
            </button>

            <div className="pt-2 pb-1 px-3 text-[10px] uppercase tracking-wider font-semibold text-[#A4B0BE]/60">
              Operations
            </div>

            <div className="flex items-center gap-2.5 px-3 py-2 rounded-md text-[#A4B0BE] hover:bg-[#16263A]/50 cursor-pointer">
              <Users className="w-4 h-4 text-[#A4B0BE]" />
              <span>Customers & Accounts</span>
            </div>

            <div className="flex items-center gap-2.5 px-3 py-2 rounded-md text-[#A4B0BE] hover:bg-[#16263A]/50 cursor-pointer">
              <BarChart3 className="w-4 h-4 text-[#A4B0BE]" />
              <span>Margin Analytics</span>
            </div>
          </nav>

          {/* User profile footer */}
          <div className="mt-auto pt-3 border-t border-[#2A3B50]/60 flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#F0B33E]/20 text-[#F0B33E] font-bold text-xs flex items-center justify-center border border-[#F0B33E]/40">
              KD
            </div>
            <div className="overflow-hidden">
              <div className="text-xs font-semibold text-[#F5F3ED] truncate">
                K. Deshmukh
              </div>
              <div className="text-[10px] text-[#A4B0BE] truncate">
                Head of Commercial & Sales
              </div>
            </div>
          </div>
        </aside>

        {/* Right Dashboard Content */}
        <main className="md:col-span-9 p-3 sm:p-5 flex flex-col space-y-4 overflow-x-hidden">
          {/* Top Bar with Search & Quick Metrics */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-[#2A3B50]/60">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-2.5 top-2.5 w-3.5 h-3.5 text-[#A4B0BE]" />
              <input
                type="text"
                readOnly
                placeholder="Search quotes, drawing #, or clients..."
                value=""
                className="w-full pl-8 pr-3 py-1.5 rounded-md bg-[#16263A]/70 border border-[#2A3B50] text-xs text-[#F5F3ED] placeholder-[#A4B0BE]/60 focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-[11px] bg-[#16263A] border border-[#2A3B50] rounded-md p-1">
                {(["All", "Approved", "In Review"] as const).map((status) => (
                  <button
                    key={status}
                    onClick={() => setFilterStatus(status)}
                    className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
                      filterStatus === status
                        ? "bg-[#0B111B] text-[#F0B33E] shadow-sm"
                        : "text-[#A4B0BE] hover:text-[#F5F3ED]"
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Metric KPI Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div className="p-3 rounded-lg bg-[#16263A]/60 border border-[#2A3B50]">
              <span className="text-[10px] uppercase tracking-wider text-[#A4B0BE] font-medium">
                Active Enquiries
              </span>
              <div className="text-lg font-bold text-[#F5F3ED] mt-0.5 flex items-baseline justify-between">
                <span>38 RFQs</span>
                <span className="text-[10px] text-[#36C98F] font-mono flex items-center">
                  <TrendingUp className="w-2.5 h-2.5 mr-0.5" /> +14%
                </span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-[#16263A]/60 border border-[#2A3B50]">
              <span className="text-[10px] uppercase tracking-wider text-[#A4B0BE] font-medium">
                Quotation Pipeline
              </span>
              <div className="text-lg font-bold text-[#F0B33E] mt-0.5">
                ₹1.84 Cr
              </div>
            </div>

            <div className="p-3 rounded-lg bg-[#16263A]/60 border border-[#2A3B50]">
              <span className="text-[10px] uppercase tracking-wider text-[#A4B0BE] font-medium">
                Average Gross Margin
              </span>
              <div className="text-lg font-bold text-[#36C98F] mt-0.5">
                25.8%
              </div>
            </div>

            <div className="p-3 rounded-lg bg-[#16263A]/60 border border-[#2A3B50]">
              <span className="text-[10px] uppercase tracking-wider text-[#A4B0BE] font-medium">
                Quote Turnaround
              </span>
              <div className="text-lg font-bold text-[#F5F3ED] mt-0.5 flex items-baseline justify-between">
                <span>1.8 Days</span>
                <span className="text-[10px] text-[#36C98F] font-mono">
                  -65% faster
                </span>
              </div>
            </div>
          </div>

          {/* Quotations Table & Breakdown Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 flex-1">
            {/* Quotations List */}
            <div className="lg:col-span-7 rounded-lg border border-[#2A3B50] bg-[#0B111B]/40 overflow-hidden">
              <div className="px-3.5 py-2.5 border-b border-[#2A3B50]/60 flex items-center justify-between bg-[#16263A]/30">
                <span className="text-xs font-semibold text-[#F5F3ED] flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-[#F0B33E]" />
                  Engineering Quotations
                </span>
                <span className="text-[11px] text-[#A4B0BE]">
                  {filteredQuotes.length} record{filteredQuotes.length > 1 ? "s" : ""}
                </span>
              </div>

              <div className="divide-y divide-[#2A3B50]/40">
                {filteredQuotes.map((quote) => {
                  const isSelected = quote.id === selectedQuoteId;
                  return (
                    <div
                      key={quote.id}
                      onClick={() => setSelectedQuoteId(quote.id)}
                      className={`p-3 cursor-pointer transition-all ${
                        isSelected
                          ? "bg-[#16263A] border-l-2 border-[#F0B33E]"
                          : "hover:bg-[#16263A]/40"
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[#F0B33E] font-medium text-[11px]">
                            {quote.id}
                          </span>
                          <span className="font-medium text-[#F5F3ED]">
                            {quote.customer}
                          </span>
                        </div>
                        {getStatusBadge(quote.status)}
                      </div>

                      <div className="text-[11px] text-[#A4B0BE] mt-1 truncate">
                        {quote.partName}
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-[#A4B0BE] mt-2 pt-1 border-t border-[#2A3B50]/30 font-mono">
                        <span>Qty: {quote.quantity}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-[#36C98F]">
                            Margin: {quote.margin}
                          </span>
                          <span className="font-bold text-[#F5F3ED]">
                            {quote.quoteTotal}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Live BOM & Margin Breakdown Inspector for Selected Quote */}
            <div className="lg:col-span-5 rounded-lg border border-[#2A3B50] bg-[#16263A]/40 p-3.5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-[#2A3B50]/60">
                  <div className="text-xs font-semibold text-[#F5F3ED] flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#36C98F]" />
                    BOM Cost Breakdown
                  </div>
                  <span className="font-mono text-[10px] text-[#F0B33E] bg-[#F0B33E]/10 px-1.5 py-0.5 rounded">
                    {selectedQuote.id}
                  </span>
                </div>

                <div className="mt-3 space-y-2 text-xs">
                  <div className="p-2 rounded bg-[#0B111B]/60 border border-[#2A3B50]/60">
                    <div className="text-[10px] uppercase tracking-wider text-[#A4B0BE]">
                      Raw Material Spec
                    </div>
                    <div className="font-medium text-[#F5F3ED] mt-0.5">
                      {selectedQuote.material}
                    </div>
                  </div>

                  <div className="space-y-1.5 pt-1">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-[#A4B0BE]">Raw Material Extrusion</span>
                      <span className="font-mono text-[#F5F3ED]">₹2,10,000</span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-[#A4B0BE]">CNC Milling & Turning</span>
                      <span className="font-mono text-[#F5F3ED]">₹1,42,000</span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-[#A4B0BE]">Heat Treatment & Anodize</span>
                      <span className="font-mono text-[#F5F3ED]">₹60,000</span>
                    </div>
                    <div className="flex justify-between text-[11px] pt-1 border-t border-[#2A3B50]/40">
                      <span className="text-[#A4B0BE]">Calculated Baseline Cost</span>
                      <span className="font-mono text-[#F5F3ED] font-semibold">
                        {selectedQuote.costEstimate}
                      </span>
                    </div>
                    <div className="flex justify-between text-[11px] text-[#36C98F]">
                      <span>Target Profit Margin ({selectedQuote.margin})</span>
                      <span className="font-mono font-semibold">+₹1,64,200</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Total Quotation Summary */}
              <div className="mt-3 pt-3 border-t border-[#2A3B50]/80 bg-[#0B111B]/80 p-2.5 rounded-lg border border-[#F0B33E]/30">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-[#A4B0BE] uppercase tracking-wider">
                      Final Quotation Price
                    </div>
                    <div className="text-base font-bold text-[#F0B33E] font-mono">
                      {selectedQuote.quoteTotal}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-[#36C98F] block font-medium">
                      ✓ Costing Verified
                    </span>
                    <span className="text-[10px] text-[#A4B0BE] block">
                      Ready for Export
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Subtle bottom note for presentation accuracy */}
      <div className="px-4 py-1.5 bg-[#0B111B] border-t border-[#2A3B50]/60 text-[10px] text-[#A4B0BE]/70 flex items-center justify-between">
        <span>KanchanFlow CRM • Interactive Demonstration with Illustrative Plant Data</span>
        <span className="font-mono text-[#F0B33E]">ERP / Shop Floor Synced</span>
      </div>
    </div>
  );
}
