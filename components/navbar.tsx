"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";
import { Container } from "./container";
import { BrandLogo } from "./brand-logo";
import { Button } from "./button";

const MobileMenu = dynamic(
  () => import("./mobile-menu").then((mod) => mod.MobileMenu),
  { ssr: false }
);

const DemoModal = dynamic(
  () => import("./demo-modal").then((mod) => mod.DemoModal),
  { ssr: false }
);

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Capabilities", href: "/features#capabilities" },
    { label: "Workflow", href: "/#workflow" },
  ];

  const processedLinks = navLinks.map((link) => ({
    ...link,
    isActive:
      link.href === "/"
        ? pathname === "/"
        : pathname.startsWith(link.href.split("#")[0]) && link.href !== "/",
  }));

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-[#242836] bg-[#08090C]/90 backdrop-blur-md transition-all">
        <Container size="wide">
          <div className="flex h-18 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-8">
              <BrandLogo />

              {/* Desktop Nav Links */}
              <nav
                className="hidden md:flex items-center gap-1"
                aria-label="Main Navigation"
              >
                {processedLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`relative px-3.5 py-1.5 text-sm font-medium rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F0B33E] ${
                      link.isActive
                        ? "text-[#F0B33E]"
                        : "text-[#A4B0BE] hover:text-[#F5F3ED] hover:bg-[#181C26]/60"
                    }`}
                  >
                    {link.label}
                    {link.isActive && (
                      <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#F0B33E] rounded-full shadow-[0_0_8px_#F0B33E]" />
                    )}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <div className="hidden lg:flex items-center gap-2 text-xs text-[#A4B0BE] border-r border-[#2A3B50] pr-4">
                <span className="w-2 h-2 rounded-full bg-[#36C98F] animate-pulse" />
                <span>v2.4 Manufacturing Suite</span>
              </div>

              <Button
                variant="primary"
                size="sm"
                onClick={() => setDemoModalOpen(true)}
                icon={<ArrowRight className="w-3.5 h-3.5" />}
                className="hidden sm:inline-flex"
              >
                Book a Demo
              </Button>

              {/* Mobile menu button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-expanded={mobileMenuOpen}
                aria-label="Open mobile navigation menu"
                className="md:hidden p-2 text-[#A4B0BE] hover:text-[#F5F3ED] hover:bg-[#16263A] rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F0B33E]"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer (Only mounted when opened) */}
      {mobileMenuOpen && (
        <MobileMenu
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          links={processedLinks}
          onOpenDemo={() => setDemoModalOpen(true)}
        />
      )}

      {/* Global Book a Demo Modal (Only mounted when opened) */}
      {demoModalOpen && (
        <DemoModal
          isOpen={demoModalOpen}
          onClose={() => setDemoModalOpen(false)}
        />
      )}
    </>
  );
}
