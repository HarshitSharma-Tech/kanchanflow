"use client";

import React, { useState } from "react";
import {
  FileText,
  Layers,
  ShoppingBag,
  Users,
  BarChart3,
  Search,
  CheckCircle2,
  Clock,
  Sparkles,
  TrendingUp,
  Cpu,
  Boxes,
  Compass,
  Sliders,
  Maximize2,
  RefreshCw,
} from "lucide-react";

interface QuotationItem {
  id: string;
  customer: string;
  partName: string;
  quantity: string;
  material: string;
  rawCost: number;
  machiningCost: number;
  treatmentCost: number;
  defaultMargin: number;
  status: "Approved" | "In Review" | "Costing BOM" | "Handoff Ready";
  plant: string;
  drawingRef: string;
}

export function DashboardMockup() {
  const [activeTab, setActiveTab] = useState<"Quotations" | "CAD Blueprint" | "BOM Costing">("Quotations");
  const [selectedQuoteId, setSelectedQuoteId] = useState<string>("QT-8421");
  const [filterStatus, setFilterStatus] = useState<string>("All");
  const [customMargin, setCustomMargin] = useState<number>(28);
  const [wireframeActive, setWireframeActive] = useState<boolean>(true);

  const quotations: QuotationItem[] = [
    {
      id: "QT-8421",
      customer: "Bharat Precision Dynamics",
      partName: "5-Axis CNC Impeller Housing (SS-316L)",
      quantity: "250 pcs",
      material: "Stainless Steel 316L (Forged)",
      rawCost: 210000,
      machiningCost: 142000,
      treatmentCost: 60000,
      defaultMargin: 28,
      status: "Approved",
      plant: "Plant 01 - CNC Machining",
      drawingRef: "DWG-IMP-316L-REV-C.step",
    },
    {
      id: "QT-8419",
      customer: "Larsen Industrial Tech",
      partName: "High-Pressure Hydraulic Manifold",
      quantity: "80 sets",
      material: "Alloy 7075-T6 Aerospace Grade",
      rawCost: 140000,
      machiningCost: 95000,
      treatmentCost: 30000,
      defaultMargin: 24,
      status: "Handoff Ready",
      plant: "Plant 02 - Precision Tooling",
      drawingRef: "DWG-MANIFOLD-7075.step",
    },
    {
      id: "QT-8415",
      customer: "Apex Automotive Systems",
      partName: "Precision Stamping Die Bracket Assembly",
      quantity: "1,200 pcs",
      material: "Cold Rolled Deep Draw Steel",
      rawCost: 480000,
      machiningCost: 280000,
      treatmentCost: 80000,
      defaultMargin: 22,
      status: "In Review",
      plant: "Plant 01 - Heavy Press",
      drawingRef: "DWG-DIE-BRACKET-08.dwg",
    },
    {
      id: "QT-8408",
      customer: "Tata Transmissions Ltd",
      partName: "Hardened Helical Planetary Pinion",
      quantity: "500 pcs",
      material: "EN353 Case Hardened Steel",
      rawCost: 160000,
      machiningCost: 110000,
      treatmentCost: 40000,
      defaultMargin: 27,
      status: "Costing BOM",
      plant: "Plant 03 - Gear & Heat Treat",
      drawingRef: "DWG-PINION-EN353-R2.step",
    },
  ];

  const selectedQuote =
    quotations.find((q) => q.id === selectedQuoteId) || quotations[0];

  const filteredQuotes =
    filterStatus === "All"
      ? quotations
      : quotations.filter((q) => q.status === filterStatus);

  // Dynamic calculations based on live margin slider
  const baselineCost =
    selectedQuote.rawCost + selectedQuote.machiningCost + selectedQuote.treatmentCost;
  const calculatedProfit = Math.round(baselineCost * (customMargin / 100));
  const finalCalculatedTotal = baselineCost + calculatedProfit;

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
    <div className="relative rounded-2xl border border-[#2A3B50] bg-[#111B29]/95 backdrop-blur-xl shadow-2xl overflow-hidden text-[#F5F3ED] font-sans gold-glow-card transition-all">
      {/* Top Window Chrome with Precision Telemetry */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#0B111B] border-b border-[#2A3B50]/80">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F0B33E] shadow-[0_0_6px_#F0B33E]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#2A3B50]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#2A3B50]" />
          </div>
          <span className="text-[11px] font-mono text-[#F5F3ED] ml-2 tracking-tight flex items-center gap-2">
            <span className="text-[#36C98F]">● LIVE</span>
            <span className="text-[#A4B0BE]">kanchanflow://plant-01/telemetry/quote-engine</span>
          </span>
        </div>

        <div className="flex items-center gap-3 text-xs text-[#A4B0BE]">
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#16263A] border border-[#F0B33E]/40 text-[10px] text-[#F0B33E] font-mono">
            <Sparkles className="w-3 h-3" /> Dynamic Margin Engine
          </span>
        </div>
      </div>

      {/* Main Split Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[540px]">
        {/* Left Navigation Sidebar */}
        <aside className="hidden md:flex md:col-span-3 flex-col border-r border-[#2A3B50]/70 bg-[#0B111B]/80 p-3.5">
          {/* Facility Header */}
          <div className="p-3 rounded-lg bg-gradient-to-br from-[#16263A] to-[#111B29] border border-[#2A3B50] mb-3">
            <div className="flex items-center justify-between text-[10px] uppercase tracking-wider font-semibold text-[#A4B0BE]">
              <span>Active Facility</span>
              <span className="text-[#36C98F] font-mono">Online</span>
            </div>
            <div className="text-xs font-bold text-[#F5F3ED] truncate mt-1">
              Pune Complex — CNC & Tooling
            </div>
            <div className="text-[10px] text-[#F0B33E] font-mono mt-0.5">
              Spindles: 18/20 Operating
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="space-y-1.5 text-xs">
            <button
              onClick={() => setActiveTab("Quotations")}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-md font-medium transition-colors ${
                activeTab === "Quotations"
                  ? "bg-[#16263A] text-[#F0B33E] border-l-2 border-[#F0B33E] shadow-sm"
                  : "text-[#A4B0BE] hover:text-[#F5F3ED] hover:bg-[#16263A]/40"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <FileText className="w-4 h-4 text-[#F0B33E]" />
                <span>Quotations</span>
              </div>
              <span className="px-1.5 py-0.2 rounded bg-[#F0B33E]/20 text-[#F0B33E] text-[10px] font-mono font-bold">
                14
              </span>
            </button>

            <button
              onClick={() => setActiveTab("CAD Blueprint")}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-md font-medium transition-colors ${
                activeTab === "CAD Blueprint"
                  ? "bg-[#16263A] text-[#F0B33E] border-l-2 border-[#F0B33E] shadow-sm"
                  : "text-[#A4B0BE] hover:text-[#F5F3ED] hover:bg-[#16263A]/40"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Compass className="w-4 h-4 text-[#36C98F]" />
                <span>CAD Blueprint</span>
              </div>
              <span className="px-1.5 py-0.2 rounded bg-[#36C98F]/20 text-[#36C98F] text-[10px] font-mono">
                3D STEP
              </span>
            </button>

            <button
              onClick={() => setActiveTab("BOM Costing")}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-md font-medium transition-colors ${
                activeTab === "BOM Costing"
                  ? "bg-[#16263A] text-[#F0B33E] border-l-2 border-[#F0B33E] shadow-sm"
                  : "text-[#A4B0BE] hover:text-[#F5F3ED] hover:bg-[#16263A]/40"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Layers className="w-4 h-4 text-[#A4B0BE]" />
                <span>BOM Hierarchy</span>
              </div>
              <span className="text-[#36C98F] text-[10px]">Tier 3</span>
            </button>

            <div className="pt-2 pb-1 px-3 text-[10px] uppercase tracking-wider font-semibold text-[#A4B0BE]/50">
              Commercial Operations
            </div>

            <div className="flex items-center gap-2.5 px-3 py-2 rounded-md text-[#A4B0BE] hover:bg-[#16263A]/40 cursor-pointer">
              <ShoppingBag className="w-4 h-4 text-[#A4B0BE]" />
              <span>Purchase Orders</span>
            </div>

            <div className="flex items-center gap-2.5 px-3 py-2 rounded-md text-[#A4B0BE] hover:bg-[#16263A]/40 cursor-pointer">
              <BarChart3 className="w-4 h-4 text-[#A4B0BE]" />
              <span>Margin Telemetry</span>
            </div>
          </nav>

          {/* User profile footer */}
          <div className="mt-auto pt-3 border-t border-[#2A3B50]/60 flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F0B33E] to-[#C98B19] text-[#0B111B] font-black text-xs flex items-center justify-center shadow-md">
              KD
            </div>
            <div className="overflow-hidden">
              <div className="text-xs font-bold text-[#F5F3ED] truncate">
                K. Deshmukh
              </div>
              <div className="text-[10px] text-[#A4B0BE] truncate">
                Head of Commercial Engineering
              </div>
            </div>
          </div>
        </aside>

        {/* Right Dashboard Content */}
        <main className="md:col-span-9 p-3.5 sm:p-5 flex flex-col space-y-4 overflow-x-hidden">
          {/* Top Bar with Filter & Search */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-[#2A3B50]/60">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-2.5 top-2.5 w-3.5 h-3.5 text-[#A4B0BE]" />
              <input
                type="text"
                readOnly
                placeholder="Filter by quote ID, drawing spec, or customer..."
                value=""
                className="w-full pl-8 pr-3 py-1.5 rounded-md bg-[#16263A]/80 border border-[#2A3B50] text-xs text-[#F5F3ED] placeholder-[#A4B0BE]/60 focus:outline-none"
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
                        ? "bg-[#0B111B] text-[#F0B33E] font-semibold shadow-sm"
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
            <div className="p-3 rounded-lg bg-[#16263A]/70 border border-[#2A3B50]">
              <span className="text-[10px] uppercase tracking-wider text-[#A4B0BE] font-semibold">
                Active Enquiries
              </span>
              <div className="text-lg font-bold text-[#F5F3ED] mt-0.5 flex items-baseline justify-between">
                <span>38 RFQs</span>
                <span className="text-[10px] text-[#36C98F] font-mono font-semibold">
                  +14%
                </span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-[#16263A]/70 border border-[#2A3B50]">
              <span className="text-[10px] uppercase tracking-wider text-[#A4B0BE] font-semibold">
                Pipeline Value
              </span>
              <div className="text-lg font-bold text-[#F0B33E] font-mono mt-0.5">
                ₹1.84 Cr
              </div>
            </div>

            <div className="p-3 rounded-lg bg-[#16263A]/70 border border-[#2A3B50]">
              <span className="text-[10px] uppercase tracking-wider text-[#A4B0BE] font-semibold">
                Realized Margin
              </span>
              <div className="text-lg font-bold text-[#36C98F] font-mono mt-0.5">
                {customMargin}.5%
              </div>
            </div>

            <div className="p-3 rounded-lg bg-[#16263A]/70 border border-[#2A3B50]">
              <span className="text-[10px] uppercase tracking-wider text-[#A4B0BE] font-semibold">
                Turnaround Time
              </span>
              <div className="text-lg font-bold text-[#F5F3ED] font-mono mt-0.5">
                1.8 Days
              </div>
            </div>
          </div>

          {/* Interactive Mode: Quotations or CAD Blueprint */}
          {activeTab === "CAD Blueprint" ? (
            /* CAD Blueprint Interactive Visualizer */
            <div className="rounded-lg border border-[#2A3B50] bg-[#0B111B] p-4 flex-1 flex flex-col justify-between">
              <div className="flex items-center justify-between pb-3 border-b border-[#2A3B50]/60">
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#F0B33E]" />
                  <span className="text-xs font-bold text-[#F5F3ED]">
                    CAD Geometry Specimen • {selectedQuote.drawingRef}
                  </span>
                </div>
                <button
                  onClick={() => setWireframeActive(!wireframeActive)}
                  className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#16263A] border border-[#2A3B50] text-[#F0B33E]"
                >
                  {wireframeActive ? "Wireframe Mesh: ON" : "Wireframe Mesh: OFF"}
                </button>
              </div>

              {/* Vector CAD Blueprint Drawing */}
              <div className="relative my-4 h-56 flex items-center justify-center bg-[#070D16] rounded border border-[#2A3B50]/40 overflow-hidden">
                {/* Engineering grid lines */}
                <div className="absolute inset-0 bg-grid-industrial opacity-50" />

                <svg
                  viewBox="0 0 300 160"
                  className="w-full h-full max-w-sm text-[#F0B33E] relative z-10"
                >
                  {/* Outer flange outline */}
                  <circle
                    cx="150"
                    cy="80"
                    r="60"
                    fill="none"
                    stroke="#F0B33E"
                    strokeWidth="1.5"
                    strokeDasharray={wireframeActive ? "none" : "4 2"}
                  />
                  {/* Inner bore */}
                  <circle
                    cx="150"
                    cy="80"
                    r="32"
                    fill="none"
                    stroke="#36C98F"
                    strokeWidth="1.5"
                  />
                  {/* Shaft pitch circle */}
                  <circle
                    cx="150"
                    cy="80"
                    r="46"
                    fill="none"
                    stroke="#A4B0BE"
                    strokeWidth="0.8"
                    strokeDasharray="2 3"
                  />
                  {/* Bolt holes */}
                  {[0, 60, 120, 180, 240, 300].map((deg) => {
                    const rad = (deg * Math.PI) / 180;
                    const x = 150 + 46 * Math.cos(rad);
                    const y = 80 + 46 * Math.sin(rad);
                    return (
                      <circle
                        key={deg}
                        cx={x}
                        cy={y}
                        r="4"
                        fill="#111B29"
                        stroke="#F0B33E"
                        strokeWidth="1.2"
                      />
                    );
                  })}
                  {/* Dimension lines */}
                  <line
                    x1="90"
                    y1="80"
                    x2="210"
                    y2="80"
                    stroke="#A4B0BE"
                    strokeWidth="0.75"
                    strokeDasharray="1 2"
                  />
                  <line
                    x1="150"
                    y1="20"
                    x2="150"
                    y2="140"
                    stroke="#A4B0BE"
                    strokeWidth="0.75"
                    strokeDasharray="1 2"
                  />
                  <text
                    x="215"
                    y="76"
                    fill="#F0B33E"
                    fontSize="7"
                    fontFamily="monospace"
                  >
                    Ø120.00 ±0.015
                  </text>
                  <text
                    x="155"
                    y="18"
                    fill="#36C98F"
                    fontSize="7"
                    fontFamily="monospace"
                  >
                    [ ⏥ | 0.005 | A ]
                  </text>
                </svg>

                <div className="absolute bottom-2 left-2 text-[10px] font-mono text-[#A4B0BE]">
                  Scale: 1:1 // Units: mm // Material: {selectedQuote.material}
                </div>
              </div>

              <div className="flex items-center justify-between text-xs pt-2 border-t border-[#2A3B50]/60">
                <span className="text-[#A4B0BE]">Extracted Cycle Time: 42.5 mins</span>
                <button
                  onClick={() => setActiveTab("Quotations")}
                  className="text-[#F0B33E] hover:underline flex items-center gap-1 font-semibold"
                >
                  Return to Quotation Breakdown →
                </button>
              </div>
            </div>
          ) : (
            /* Standard Quotations + Live Margin Simulator Split */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 flex-1">
              {/* Quotations List */}
              <div className="lg:col-span-7 rounded-lg border border-[#2A3B50] bg-[#0B111B]/60 overflow-hidden">
                <div className="px-3.5 py-2.5 border-b border-[#2A3B50]/60 flex items-center justify-between bg-[#16263A]/40">
                  <span className="text-xs font-bold text-[#F5F3ED] flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-[#F0B33E]" />
                    Commercial Quotations
                  </span>
                  <span className="text-[11px] text-[#A4B0BE] font-mono">
                    {filteredQuotes.length} Records
                  </span>
                </div>

                <div className="divide-y divide-[#2A3B50]/40">
                  {filteredQuotes.map((quote) => {
                    const isSelected = quote.id === selectedQuoteId;
                    return (
                      <div
                        key={quote.id}
                        onClick={() => {
                          setSelectedQuoteId(quote.id);
                          setCustomMargin(quote.defaultMargin);
                        }}
                        className={`p-3 cursor-pointer transition-all ${
                          isSelected
                            ? "bg-[#16263A] border-l-2 border-[#F0B33E]"
                            : "hover:bg-[#16263A]/40"
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[#F0B33E] font-bold text-[11px]">
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
                              Margin: {quote.defaultMargin}%
                            </span>
                            <span className="font-bold text-[#F5F3ED]">
                              ₹{(
                                (quote.rawCost + quote.machiningCost + quote.treatmentCost) *
                                (1 + quote.defaultMargin / 100)
                              ).toLocaleString("en-IN")}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic Live Cost & Margin Calculator */}
              <div className="lg:col-span-5 rounded-lg border border-[#2A3B50] bg-[#16263A]/50 p-3.5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-[#2A3B50]/60">
                    <div className="text-xs font-bold text-[#F5F3ED] flex items-center gap-1.5">
                      <Sliders className="w-3.5 h-3.5 text-[#36C98F]" />
                      Real-Time Cost Simulator
                    </div>
                    <button
                      onClick={() => setActiveTab("CAD Blueprint")}
                      className="text-[10px] font-mono text-[#F0B33E] hover:underline flex items-center gap-1 bg-[#F0B33E]/10 px-2 py-0.5 rounded"
                    >
                      <Compass className="w-3 h-3" /> View 3D CAD
                    </button>
                  </div>

                  {/* Interactive Target Margin Slider */}
                  <div className="mt-3 p-2.5 rounded bg-[#0B111B]/80 border border-[#2A3B50] space-y-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-[#A4B0BE] font-medium">
                        Target Gross Margin:
                      </span>
                      <span className="font-mono text-[#36C98F] font-bold text-sm">
                        {customMargin}%
                      </span>
                    </div>

                    <input
                      type="range"
                      min="15"
                      max="40"
                      step="1"
                      value={customMargin}
                      onChange={(e) => setCustomMargin(Number(e.target.value))}
                      className="w-full accent-[#F0B33E] cursor-pointer h-1.5 bg-[#16263A] rounded-lg"
                    />

                    <div className="flex justify-between text-[9px] text-[#A4B0BE]/70 font-mono">
                      <span>15% (Minimum)</span>
                      <span>28% (Standard)</span>
                      <span>40% (High Spec)</span>
                    </div>
                  </div>

                  {/* Itemized Breakdown with Dynamic Totals */}
                  <div className="mt-3 space-y-1.5 text-xs">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-[#A4B0BE]">Raw Forged Material:</span>
                      <span className="font-mono text-[#F5F3ED]">
                        ₹{selectedQuote.rawCost.toLocaleString("en-IN")}
                      </span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-[#A4B0BE]">5-Axis Machining (MHR):</span>
                      <span className="font-mono text-[#F5F3ED]">
                        ₹{selectedQuote.machiningCost.toLocaleString("en-IN")}
                      </span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-[#A4B0BE]">Plating & Heat Treat:</span>
                      <span className="font-mono text-[#F5F3ED]">
                        ₹{selectedQuote.treatmentCost.toLocaleString("en-IN")}
                      </span>
                    </div>
                    <div className="flex justify-between text-[11px] pt-1 border-t border-[#2A3B50]/50">
                      <span className="text-[#A4B0BE] font-semibold">Baseline Cost:</span>
                      <span className="font-mono text-[#F5F3ED] font-semibold">
                        ₹{baselineCost.toLocaleString("en-IN")}
                      </span>
                    </div>
                    <div className="flex justify-between text-[11px] text-[#36C98F] font-semibold">
                      <span>Calculated Gross Profit ({customMargin}%):</span>
                      <span className="font-mono">
                        +₹{calculatedProfit.toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Final Quoted Price Banner */}
                <div className="mt-4 pt-3 border-t border-[#2A3B50] bg-[#0B111B] p-3 rounded-lg border border-[#F0B33E]/40 shadow-inner">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-[#A4B0BE] uppercase tracking-wider font-semibold">
                        Quoted Batch Price
                      </div>
                      <div className="text-lg font-black text-[#F0B33E] font-mono">
                        ₹{finalCalculatedTotal.toLocaleString("en-IN")}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-[#36C98F] block font-semibold">
                        ✓ Rate Rule Locked
                      </span>
                      <span className="text-[9px] text-[#A4B0BE]">
                        Drawing: {selectedQuote.drawingRef.split("-")[1]}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Subtle bottom note for presentation accuracy */}
      <div className="px-4 py-2 bg-[#0B111B] border-t border-[#2A3B50]/60 text-[10px] text-[#A4B0BE] flex items-center justify-between">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#36C98F]" />
          KanchanFlow Precision CRM • Interactive Manufacturing Demo
        </span>
        <span className="font-mono text-[#F0B33E]">
          Active Drawing: {selectedQuote.drawingRef}
        </span>
      </div>
    </div>
  );
}
