# KanchanFlow — Premium Manufacturing CRM Platform

> **Connected Quote-to-Order Workflow for Precision Engineering, CNC Machining, and Sheet Metal Fabrication.**  
> Built as an advanced frontend engineering evaluation combining industrial precision with luxury enterprise design.

---

## 1. Project Overview

**KanchanFlow** unifies customer RFQs, multi-tier Bill of Materials (BOM) costing, quotation revisions, sales pipelines, and production floor order handoffs into one connected platform. 

In traditional manufacturing environments, sales engineers calculate costs across isolated Excel spreadsheets, drawing revisions get mixed up in personal email chains, and purchase orders are manually re-typed into shop floor job cards. KanchanFlow eliminates this chaos through immutable revision governance, automated machine hour rate (MHR) costing, and direct handoffs from customer sign-off to production travelers.

---

## 2. Technology Stack

- **Framework**: Next.js 16.4.2 (App Router, Turbopack, Partial Prerendering)
- **Language**: TypeScript 5 (Strict type checking)
- **Styling**: Tailwind CSS v4 (Design tokens via `@theme`, custom grid utilities, and zero runtime overhead)
- **Icons**: Lucide React (`lucide-react`)
- **Typography**: Next.js Font Optimization (`Geist` Sans and `Geist Mono`)
- **Motion & Physics**: 
  - Canvas-based ultra-delicate golden sparkles with mouse-follow gravity physics
  - Scroll-driven reading progress beam and floating return-to-top control
  - Native CSS 3D hover-lifts and hardware-accelerated transitions
- **Deployment Target**: Vercel (zero-config, edge-ready)

---

## 3. Brand Identity & Design System

### A. Color Palette Design Tokens
| Token Name | Hex Code | Role in System |
| :--- | :--- | :--- |
| **Deep Charcoal** | `#0B111B` | Primary page canvas, high-contrast dark foundation |
| **Graphite Surfaces** | `#111B29` | Background for base cards, navigation, and tables |
| **Elevated Panels** | `#16263A` | Layered modal dialogs, drawer sidebars, and active elements |
| **Molten Gold** | `#F0B33E` | Primary brand accent, button fills, and revision highlights |
| **Luminous Gold** | `#FFD875` | High-point gradient highlights and sparkle twinkles |
| **Warm White** | `#F5F3ED` | Primary heading and body text typography |
| **Muted Steel** | `#A4B0BE` | Secondary descriptions, technical annotations, and labels |
| **Subtle Borders** | `#2A3B50` | Engineering grid lines and structural card delimiters |
| **Success Green** | `#36C98F` | Positive audit gates, approved statuses, and margin gains |

### B. Typography
- **Headings & Wordmarks**: `Geist Sans` (`--font-geist-sans`), tracked tightly with bold metallic gradients.
- **Telemetry & Dimensions**: `Geist Mono` (`--font-geist-mono`), used for quote IDs, GD&T tolerances, machine cycle times, and currency amounts.

### C. Unique Aesthetic Features
1. **Interactive Golden Sparkle Physics** (`GoldenSparkles`):
   - Delicate stardust and diamond sparkles that fall at an ultra-slow pace.
   - Gently follows mouse movement via proximity easing without blocking clicks or selections (`pointer-events-none`).
2. **Scroll-Driven Reading Beam** (`ScrollProgress`):
   - A razor-thin molten gold beam tracking scroll depth along the top viewport edge.
   - Includes a floating glassmorphic return-to-top button appearing after 400px of scroll.
3. **Interactive CAD Blueprint Visualizer**:
   - In-dashboard vector wireframe schematic featuring pitch circle diameters, bolt hole patterns, and geometric tolerance callouts ($[\perp \mid 0.008 \mid A]$).
4. **Live Target Margin Simulator**:
   - Interactive slider adjusting profit margins from 15% to 40% with real-time recalculations of gross profit and final quoted batch prices.

---

## 4. Implemented Pages & Architecture

### Page 1: Home (`/`)
- **Hero Section**: Value proposition with molten gold gradient headline, live shop floor telemetry badge (`CHAKAN FACILITY // 24/24 WORKCENTERS CONNECTED`), and dual CTAs.
- **Interactive Industrial Dashboard**:
  - Live quote selector (`QT-8421`, `QT-8419`, `QT-8415`, `QT-8408`).
  - Interactive CAD Blueprint wireframe viewer with wireframe toggle.
  - Live Margin Slider updating pricing in real time.
- **Problem & Solution**: Three-column breakdown of Excel and email fragmentation, juxtaposed with KanchanFlow's connected workflow card.
- **Six Core Feature Cards**: Quote-to-Order, Bill of Materials, Sales Pipeline, WhatsApp Business, Reports & Insights, and Mobile Access.
- **Workflow Timeline**: 4-stage process (`Enquiry Capture` → `Costing & BOM` → `Customer Approval` → `Order Handoff`).
- **Verticals Grid**: 6 precision manufacturing segments (Precision CNC, Metal Fabrication, Automotive Tier 1/2, Tooling, Electrical Switchgear, Pumps).
- **Pricing Teaser**: Three plans with indicative pricing and quick CTA routing.
- **FAQ Accordion**: 5 realistic manufacturing questions with full keyboard support and ARIA semantics.
- **Global CTA & Footer**: High-contrast final banner with plant walkthrough modal trigger.

### Page 2: Features (`/features`)
- **Hero & Metrics**: Quick telemetry counters (65% turnaround velocity, 0% drawing errors, 100% traceability).
- **Six Alternating Feature Deep-Dives with Interactive UI Mockups**:
  1. *RFQ & Central Intake*: CAD specimen metadata, batch quantity tiers, and triage assignment.
  2. *Revision Tracking & Audit*: Interactive `Rev A` vs `Rev B` delta inspector with locked price rules.
  3. *Multi-Tier BOM Engine*: Raw material billets, 5-axis machine hours, and subcontract coating calculations.
  4. *Sales Pipeline Velocity*: Multi-stage manufacturing opportunities board.
  5. *Purchase Order Handoff*: Automatic PO-to-Quote rate reconciliation and 1-click Shop Traveler job card creation.
  6. *Mobile & Shop Telemetry*: Real-time mobile activity stream and WhatsApp dispatch updates.
- **Responsive Capability Comparison Table**: Full comparison between traditional Excel/Email workflows and KanchanFlow across 6 operational dimensions.

### Page 3: Pricing (`/pricing`)
- **Interactive Monthly / Annual Billing Toggle**:
  - Segmented radio group dynamically updating displayed rates.
  - Automatically calculates and displays annual savings (20% discount).
- **Three Transparent Tier Cards**:
  - **Starter**: ₹4,999/mo (Job shops, single-tier BOMs).
  - **Growth (Recommended)**: ₹12,499/mo (Standard plants, multi-tier BOMs, WhatsApp dispatches).
  - **Enterprise**: Custom Architecture (Multi-plant, bi-directional SAP/Oracle sync).
- **Interactive Demo & Proposal Enquiry Form**:
  - Fully labelled accessible inputs: Name, Work Email, Company, Team Size, Plan of Interest, Manufacturing Segment, and Notes.
  - Client-side validation with field-level inline error states.
  - Visible submission confirmation state displaying summary and assigned response window.
- **Pricing FAQ**: 5 detailed FAQs covering data security, onboarding scope, and proof-of-concept pilots.

---

## 5. Local Development & Installation

### Prerequisites
- Node.js `v18.18+` or `v20+` (tested on Node `v24.19.0`)
- npm `v9+` or `v11+`

### Installation Steps
```bash
# Clone the repository
git clone https://github.com/your-username/kanchanflow.git
cd kanchanflow

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 6. Build & Verification Commands

```bash
# Run production build (validates TypeScript, ESLint, and Next.js static generation)
npm run build

# Run production server locally
npm run start

# Run linting checks
npm run lint
```

### Build Output Verification
```
Route (app)
┌ ○ /
├ ○ /_not-found
├ ○ /features
├ ○ /pricing
├ ○ /robots.txt
└ ƒ /sitemap.xml

○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand
✓ 0 errors, 0 warnings
```

---

## 7. Accessibility, Responsiveness & SEO

- **Accessibility (a11y)**:
  - Accessible `SkipToContent` navigation link.
  - Full keyboard control on mobile menu (Escape key handling, background scroll lock).
  - ARIA attributes (`aria-expanded`, `aria-controls`, `aria-labelledby`) on accordions and modals.
  - Focus-visible golden outline rings (`focus-visible:ring-2 focus-visible:ring-[#F0B33E]`).
  - Supports `prefers-reduced-motion` to disable particle animation and transitions.
- **Responsive Viewport Coverage**:
  - Mobile (360px – 480px)
  - Tablet (768px – 1024px)
  - Desktop (1280px – 1440px+)
- **SEO Optimization**:
  - Route-specific OpenGraph meta tags, titles, and descriptions.
  - Dynamic `sitemap.xml` (`app/sitemap.ts`) and `robots.txt` (`app/robots.ts`).

---

## 8. Deployment on Vercel

KanchanFlow is completely zero-config and deployable on Vercel:

1. Push your repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import the `kanchanflow` repository.
4. Framework Preset will automatically detect **Next.js**.
5. Click **Deploy**.

---

## 9. What Could Be Improved With More Time

1. **WebGL / Three.js 3D Model Ingestion**: Support dragging and dropping actual `.step` or `.stl` files for interactive 3D orbit and wall-thickness heatmaps.
2. **Interactive Multi-Currency Toggle**: Allow switching between INR (₹), USD ($), and EUR (€) with dynamic live forex conversion rates.
3. **Offline PWA Support**: Service worker caching enabling plant engineers to browse cached drawing revisions even in shielded machine shop environments.
4. **Export Simulation**: Enable client-side generation of real branded PDF quotation documents using `pdf-lib`.

---

## 10. License

Developed for KanchanFlow Frontend Engineering Internship Assessment. © 2026 KanchanFlow Inc. All rights reserved.
