"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Precision molten gold reading beam at top edge */}
      <div
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-50 h-[2.5px] bg-transparent pointer-events-none"
      >
        <div
          className="h-full bg-gradient-to-r from-[#F0B33E] via-[#FFD875] to-[#F0B33E] shadow-[0_0_12px_#F0B33E] transition-[width] duration-75 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating scroll-to-top button with molten gold ring */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#111B29]/90 border border-[#F0B33E]/50 text-[#F0B33E] shadow-2xl backdrop-blur-md hover:bg-[#F0B33E] hover:text-[#0B111B] transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F0B33E] animate-in fade-in zoom-in-75"
        >
          <ArrowUp className="w-4 h-4 stroke-[2.5]" />
        </button>
      )}
    </>
  );
}
