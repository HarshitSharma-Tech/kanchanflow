"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { X, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "./button";
import { BrandLogo } from "./brand-logo";

interface NavLink {
  label: string;
  href: string;
  isActive: boolean;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
  onOpenDemo: () => void;
}

export function MobileMenu({
  isOpen,
  onClose,
  links,
  onOpenDemo,
}: MobileMenuProps) {
  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-50 md:hidden bg-[#0B111B]/95 backdrop-blur-xl animate-in fade-in duration-200 flex flex-col"
    >
      {/* Top bar with logo and close button */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-[#2A3B50]/60">
        <div onClick={onClose}>
          <BrandLogo />
        </div>
        <button
          onClick={onClose}
          aria-label="Close navigation menu"
          className="p-2 text-[#A4B0BE] hover:text-[#F5F3ED] hover:bg-[#16263A] rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F0B33E]"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Nav Links */}
      <div className="flex-1 overflow-y-auto px-6 py-8 space-y-3">
        <p className="text-xs uppercase tracking-wider font-semibold text-[#A4B0BE]/70 mb-4 px-2">
          Navigation
        </p>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className={`flex items-center justify-between p-3.5 rounded-lg text-base font-medium transition-all ${
              link.isActive
                ? "bg-[#16263A] text-[#F0B33E] border border-[#F0B33E]/30"
                : "text-[#F5F3ED] hover:bg-[#111B29] hover:text-[#F0B33E]"
            }`}
          >
            <span>{link.label}</span>
            {link.isActive ? (
              <span className="w-2 h-2 rounded-full bg-[#F0B33E]" />
            ) : (
              <ArrowRight className="w-4 h-4 text-[#A4B0BE]/40" />
            )}
          </Link>
        ))}

        <div className="pt-6 mt-6 border-t border-[#2A3B50]">
          <div className="p-4 rounded-lg bg-[#111B29] border border-[#2A3B50]/80 mb-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#36C98F] mb-1">
              <ShieldCheck className="w-4 h-4" /> Built for Precision Manufacturing
            </div>
            <p className="text-xs text-[#A4B0BE]">
              Streamline RFQs, multi-tier BOM calculations, and clean handoffs from shop floor to shipment.
            </p>
          </div>

          <Button
            size="lg"
            variant="primary"
            className="w-full justify-center"
            onClick={() => {
              onClose();
              onOpenDemo();
            }}
          >
            Book a Demo
          </Button>
        </div>
      </div>
    </div>
  );
}
