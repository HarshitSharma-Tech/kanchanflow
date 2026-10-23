"use client";

import React, { useState } from "react";
import {
  FileText,
  Layers,
  CheckCircle2,
  Clock,
  AlertCircle,
  FileSpreadsheet,
  FileCheck2,
  ArrowRight,
  TrendingUp,
  Download,
  Upload,
  Cpu,
  Boxes,
  ShieldCheck,
  Smartphone,
  Eye,
  GitBranch,
  Search,
} from "lucide-react";

// Mockup 1: RFQ & Central Intake
export function RFQManagementMockup() {
  return (
    <div className="rounded-xl border border-[#2A3B50] bg-[#111B29] p-4 sm:p-5 shadow-xl text-xs font-sans">
      <div className="flex items-center justify-between pb-3 border-b border-[#2A3B50]/60">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#36C98F]" />
          <span className="font-mono text-[#F0B33E] font-semibold">RFQ-9042</span>
          <span className="text-[#F5F3ED] font-medium">Mahindra Aerospace & Defense</span>
        </div>
        <span className="px-2 py-0.5 rounded bg-[#16263A] border border-[#2A3B50] text-[#A4B0BE] text-[10px]">
          Target: 5 Business Days
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2.5">
        <div className="p-2.5 rounded bg-[#0B111B]/80 border border-[#2A3B50]/60">
          <div className="text-[10px] text-[#A4B0BE] uppercase">CAD Specimen</div>
          <div className="text-[#F5F3ED] font-semibold mt-0.5 truncate">
            DWG-TITAN-PIN-REV-C.step
          </div>
          <div className="text-[10px] text-[#36C98F] mt-1 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> 3D Geometry Extracted
          </div>
        </div>

        <div className="p-2.5 rounded bg-[#0B111B]/80 border border-[#2A3B50]/60">
          <div className="text-[10px] text-[#A4B0BE] uppercase">Batch Quantities</div>
          <div className="text-[#F5F3ED] font-semibold mt-0.5">
            150 / 500 / 1,000 pcs
          </div>
          <div className="text-[10px] text-[#F0B33E] mt-1">Multi-tier price breaks</div>
        </div>
      </div>

      <div className="mt-3 p-3 rounded bg-[#16263A]/70 border border-[#2A3B50] space-y-2">
        <div className="flex items-center justify-between text-[11px]">
          <span className="text-[#A4B0BE]">Tolerances:</span>
          <span className="font-mono text-[#F5F3ED]">±0.005 mm (Precision Ground)</span>
        </div>
        <div className="flex items-center justify-between text-[11px]">
          <span className="text-[#A4B0BE]">Material Grade:</span>
          <span className="font-mono text-[#F5F3ED]">Titanium Gr. 5 (Ti-6Al-4V)</span>
        </div>
        <div className="flex items-center justify-between text-[11px]">
          <span className="text-[#A4B0BE]">Certifications:</span>
          <span className="text-[#36C98F]">AS9100 Rev D + MTC 3.1</span>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-[#2A3B50]/50 flex items-center justify-between text-[11px] text-[#A4B0BE]">
        <span>Assigned: Senior Estimator (V. Patil)</span>
        <span className="text-[#36C98F] font-semibold">Triage Complete</span>
      </div>
    </div>
  );
}

// Mockup 2: Quotation Costing & Revisions
export function RevisionTrackingMockup() {
  const [activeRev, setActiveRev] = useState<"Rev A" | "Rev B">("Rev B");

  return (
    <div className="rounded-xl border border-[#2A3B50] bg-[#111B29] p-4 sm:p-5 shadow-xl text-xs font-sans">
      <div className="flex items-center justify-between pb-3 border-b border-[#2A3B50]/60">
        <div className="flex items-center gap-2">
          <GitBranch className="w-4 h-4 text-[#F0B33E]" />
          <span className="font-bold text-[#F5F3ED]">Revision Audit Comparison</span>
        </div>

        <div className="flex items-center gap-1 bg-[#0B111B] p-0.5 rounded border border-[#2A3B50]">
          {(["Rev A", "Rev B"] as const).map((rev) => (
            <button
              key={rev}
              onClick={() => setActiveRev(rev)}
              className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
                activeRev === rev
                  ? "bg-[#16263A] text-[#F0B33E] font-bold"
                  : "text-[#A4B0BE] hover:text-[#F5F3ED]"
              }`}
            >
              {rev}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-3 p-3 rounded bg-[#0B111B] border border-[#2A3B50]/80 space-y-2">
        <div className="flex justify-between items-center text-[11px]">
          <span className="text-[#A4B0BE]">Drawing Ref:</span>
          <span className="font-mono text-[#F5F3ED]">
            {activeRev === "Rev A" ? "FLG-880-DWG-A.pdf" : "FLG-880-DWG-B (Heat Treat Added)"}
          </span>
        </div>

        <div className="flex justify-between items-center text-[11px]">
          <span className="text-[#A4B0BE]">Raw Material Baseline:</span>
          <span className="font-mono text-[#F5F3ED]">
            {activeRev === "Rev A" ? "₹1,450 / pc" : "₹1,580 / pc (+SS-316 Surcharge)"}
          </span>
        </div>

        <div className="flex justify-between items-center text-[11px]">
          <span className="text-[#A4B0BE]">5-Axis Machining:</span>
          <span className="font-mono text-[#F5F3ED]">
            {activeRev === "Rev A" ? "38.0 mins (₹950)" : "44.5 mins (₹1,112)"}
          </span>
        </div>

        <div className="flex justify-between items-center text-[11px]">
          <span className="text-[#A4B0BE]">Surface Treatment:</span>
          <span className="font-mono text-[#F5F3ED]">
            {activeRev === "Rev A" ? "Standard Degreasing" : "Electroless Nickel Plating (25μm)"}
          </span>
        </div>

        <div className="pt-2 border-t border-[#2A3B50]/60 flex justify-between items-center font-bold">
          <span className="text-[#F0B33E]">Quoted Unit Price:</span>
          <span className="font-mono text-[#F0B33E] text-sm">
            {activeRev === "Rev A" ? "₹2,840.00" : "₹3,210.00"}
          </span>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between text-[10px] text-[#A4B0BE]">
        <span className="text-[#36C98F]">✓ Locked Revision Integrity</span>
        <span>Customer Accepted: Rev B</span>
      </div>
    </div>
  );
}

// Mockup 3: BOM Component Costing
export function BOMCostingMockup() {
  return (
    <div className="rounded-xl border border-[#2A3B50] bg-[#111B29] p-4 sm:p-5 shadow-xl text-xs font-sans">
      <div className="flex items-center justify-between pb-3 border-b border-[#2A3B50]/60">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-[#36C98F]" />
          <span className="font-bold text-[#F5F3ED]">Multi-Tier BOM Engine</span>
        </div>
        <span className="text-[10px] font-mono text-[#F0B33E] bg-[#F0B33E]/10 px-2 py-0.5 rounded border border-[#F0B33E]/30">
          Target Margin: 25.0%
        </span>
      </div>

      <div className="mt-3 space-y-2">
        {/* Component 1 */}
        <div className="p-2.5 rounded bg-[#0B111B]/80 border border-[#2A3B50]/60 flex items-center justify-between">
          <div>
            <div className="font-medium text-[#F5F3ED]">01. Main Forged Body</div>
            <div className="text-[10px] text-[#A4B0BE]">SS-316L • 14.2 kg billet • Scrap credit applied</div>
          </div>
          <div className="text-right font-mono">
            <div className="text-[#F5F3ED] font-semibold">₹3,420</div>
            <div className="text-[9px] text-[#36C98F]">Verified Rate</div>
          </div>
        </div>

        {/* Component 2 */}
        <div className="p-2.5 rounded bg-[#0B111B]/80 border border-[#2A3B50]/60 flex items-center justify-between">
          <div>
            <div className="font-medium text-[#F5F3ED]">02. 5-Axis CNC Mill-Turn Operations</div>
            <div className="text-[10px] text-[#A4B0BE]">Roughing + Finish Contour • 3.2 hrs machine time</div>
          </div>
          <div className="text-right font-mono">
            <div className="text-[#F5F3ED] font-semibold">₹2,880</div>
            <div className="text-[9px] text-[#A4B0BE]">₹900/hr</div>
          </div>
        </div>

        {/* Component 3 */}
        <div className="p-2.5 rounded bg-[#0B111B]/80 border border-[#2A3B50]/60 flex items-center justify-between">
          <div>
            <div className="font-medium text-[#F5F3ED]">03. Subcontract Heat Treatment & Anodizing</div>
            <div className="text-[10px] text-[#A4B0BE]">Vendor: Apex Plasma Coatings • Certified NABL</div>
          </div>
          <div className="text-right font-mono">
            <div className="text-[#F5F3ED] font-semibold">₹1,150</div>
            <div className="text-[9px] text-[#A4B0BE]">Includes Transit</div>
          </div>
        </div>
      </div>

      <div className="mt-3 pt-2.5 border-t border-[#2A3B50] flex justify-between items-center text-xs">
        <span className="text-[#A4B0BE]">Calculated Baseline: ₹7,450</span>
        <span className="font-bold text-[#F0B33E]">Total Quoted: ₹9,933 / unit</span>
      </div>
    </div>
  );
}

// Mockup 4: Sales Pipeline & Follow-Ups
export function SalesPipelineMockup() {
  return (
    <div className="rounded-xl border border-[#2A3B50] bg-[#111B29] p-4 sm:p-5 shadow-xl text-xs font-sans">
      <div className="flex items-center justify-between pb-3 border-b border-[#2A3B50]/60">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-[#F0B33E]" />
          <span className="font-bold text-[#F5F3ED]">Manufacturing Pipeline Velocity</span>
        </div>
        <span className="font-mono text-[#36C98F] text-[11px] font-semibold">
          ₹1.48 Cr Pipeline
        </span>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        {/* Stage 1 */}
        <div className="p-2 rounded bg-[#0B111B] border border-[#2A3B50]/60 space-y-1.5">
          <div className="flex justify-between items-center text-[10px] text-[#A4B0BE] border-b border-[#2A3B50]/40 pb-1">
            <span>BOM Costing</span>
            <span className="font-mono text-[#F0B33E]">4</span>
          </div>
          <div className="p-1.5 rounded bg-[#16263A]/80 border border-[#2A3B50] text-[10px]">
            <div className="font-medium text-[#F5F3ED] truncate">Tata Precision</div>
            <div className="text-[#F0B33E] font-mono">₹4.2L • High Pri</div>
          </div>
          <div className="p-1.5 rounded bg-[#16263A]/80 border border-[#2A3B50] text-[10px]">
            <div className="font-medium text-[#F5F3ED] truncate">Kirloskar Oil</div>
            <div className="text-[#A4B0BE] font-mono">₹2.8L</div>
          </div>
        </div>

        {/* Stage 2 */}
        <div className="p-2 rounded bg-[#0B111B] border border-[#2A3B50]/60 space-y-1.5">
          <div className="flex justify-between items-center text-[10px] text-[#A4B0BE] border-b border-[#2A3B50]/40 pb-1">
            <span>Negotiation</span>
            <span className="font-mono text-[#F0B33E]">6</span>
          </div>
          <div className="p-1.5 rounded bg-[#16263A] border border-[#F0B33E]/40 text-[10px]">
            <div className="font-medium text-[#F5F3ED] truncate">Bharat Forge</div>
            <div className="text-[#36C98F] font-mono">₹14.8L • 85% Win</div>
          </div>
          <div className="p-1.5 rounded bg-[#16263A]/80 border border-[#2A3B50] text-[10px]">
            <div className="font-medium text-[#F5F3ED] truncate">Larsen Valves</div>
            <div className="text-[#A4B0BE] font-mono">₹6.4L</div>
          </div>
        </div>

        {/* Stage 3 */}
        <div className="p-2 rounded bg-[#0B111B] border border-[#2A3B50]/60 space-y-1.5">
          <div className="flex justify-between items-center text-[10px] text-[#A4B0BE] border-b border-[#2A3B50]/40 pb-1">
            <span>PO Released</span>
            <span className="font-mono text-[#36C98F]">8</span>
          </div>
          <div className="p-1.5 rounded bg-[#16263A] border border-[#36C98F]/40 text-[10px]">
            <div className="font-medium text-[#F5F3ED] truncate">Apex Hydraulics</div>
            <div className="text-[#36C98F] font-mono">₹28.4L • In Shop</div>
          </div>
        </div>
      </div>

      <div className="mt-3 p-2 rounded bg-[#16263A]/50 border border-[#2A3B50] flex items-center justify-between text-[11px]">
        <span className="text-[#A4B0BE]">Upcoming Action:</span>
        <span className="text-[#F0B33E] font-medium">Follow-up with Bharat Forge Commercial Lead</span>
      </div>
    </div>
  );
}

// Mockup 5: PO Capture & Order Handoff
export function OrderHandoffMockup() {
  return (
    <div className="rounded-xl border border-[#2A3B50] bg-[#111B29] p-4 sm:p-5 shadow-xl text-xs font-sans">
      <div className="flex items-center justify-between pb-3 border-b border-[#2A3B50]/60">
        <div className="flex items-center gap-2">
          <FileCheck2 className="w-4 h-4 text-[#36C98F]" />
          <span className="font-bold text-[#F5F3ED]">PO Verification & Shop Floor Handoff</span>
        </div>
        <span className="px-2 py-0.5 rounded bg-[#36C98F]/15 text-[#36C98F] text-[10px] font-mono">
          PO Match Verified
        </span>
      </div>

      <div className="mt-3 space-y-2">
        <div className="p-2.5 rounded bg-[#0B111B] border border-[#2A3B50] flex items-center justify-between">
          <div>
            <div className="text-[10px] text-[#A4B0BE] uppercase">Customer PO Reference</div>
            <div className="text-[#F5F3ED] font-mono font-semibold">PO-BF-2026-8941.pdf</div>
          </div>
          <div className="text-right">
            <span className="text-[#36C98F] text-[10px] font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> Rate & Tax Matched
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-[11px]">
          <div className="p-2 rounded bg-[#16263A] border border-[#2A3B50]">
            <span className="text-[#A4B0BE] block text-[10px]">Production Job Card:</span>
            <span className="text-[#F0B33E] font-mono font-bold">JC-CNC-2026-081</span>
          </div>
          <div className="p-2 rounded bg-[#16263A] border border-[#2A3B50]">
            <span className="text-[#A4B0BE] block text-[10px]">Machine Center:</span>
            <span className="text-[#F5F3ED] font-medium">5-Axis Hermle C42</span>
          </div>
        </div>

        <div className="p-2.5 rounded bg-[#0B111B]/80 border border-[#2A3B50]/60 text-[11px] text-[#A4B0BE] space-y-1">
          <div className="flex justify-between">
            <span>Raw Material Allocation:</span>
            <span className="text-[#36C98F]">SS-316L In Stock (Heat # 4821)</span>
          </div>
          <div className="flex justify-between">
            <span>Quality Inspection Plan:</span>
            <span className="text-[#F5F3ED]">CMM 100% Dimensions + Hydro Test</span>
          </div>
        </div>
      </div>

      <div className="mt-3 pt-2.5 border-t border-[#2A3B50] flex justify-between items-center text-[11px]">
        <span className="text-[#A4B0BE]">Handoff Status:</span>
        <span className="text-[#36C98F] font-semibold">Released to Production Floor</span>
      </div>
    </div>
  );
}

// Mockup 6: Reporting & Mobile Telemetry
export function ReportingMobileMockup() {
  return (
    <div className="rounded-xl border border-[#2A3B50] bg-[#111B29] p-4 sm:p-5 shadow-xl text-xs font-sans">
      <div className="flex items-center justify-between pb-3 border-b border-[#2A3B50]/60">
        <div className="flex items-center gap-2">
          <Smartphone className="w-4 h-4 text-[#F0B33E]" />
          <span className="font-bold text-[#F5F3ED]">Mobile Sales & Plant Telemetry</span>
        </div>
        <span className="text-[10px] text-[#36C98F] font-mono flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#36C98F] animate-pulse" />
          Sync Active
        </span>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        <div className="p-2.5 rounded bg-[#0B111B] border border-[#2A3B50]">
          <span className="text-[10px] text-[#A4B0BE] uppercase block">Quote Turnaround</span>
          <span className="text-base font-bold text-[#F0B33E] font-mono">1.8 Days</span>
          <span className="text-[9px] text-[#36C98F] block">Reduced from 6.2d</span>
        </div>
        <div className="p-2.5 rounded bg-[#0B111B] border border-[#2A3B50]">
          <span className="text-[10px] text-[#A4B0BE] uppercase block">Win-Loss Ratio</span>
          <span className="text-base font-bold text-[#36C98F] font-mono">41.8%</span>
          <span className="text-[9px] text-[#36C98F] block">+12% vs last quarter</span>
        </div>
      </div>

      <div className="mt-3 p-2.5 rounded bg-[#16263A] border border-[#2A3B50] space-y-1.5 text-[11px]">
        <div className="text-[10px] text-[#A4B0BE] uppercase font-semibold">Live Shop Alerts</div>
        <div className="flex items-center justify-between text-[#F5F3ED]">
          <span className="truncate">PO-8419 released to CNC Shop</span>
          <span className="text-[10px] text-[#A4B0BE] font-mono">2m ago</span>
        </div>
        <div className="flex items-center justify-between text-[#F5F3ED]">
          <span className="truncate">Client approved Revision C (QT-8421)</span>
          <span className="text-[10px] text-[#A4B0BE] font-mono">14m ago</span>
        </div>
      </div>

      <div className="mt-3 pt-2.5 border-t border-[#2A3B50] flex justify-between items-center text-[10px] text-[#A4B0BE]">
        <span>Push Notifications: Enabled</span>
        <span className="text-[#F0B33E]">WhatsApp Dispatch Live</span>
      </div>
    </div>
  );
}
