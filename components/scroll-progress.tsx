"use client";

import React, { useEffect, useState, useRef } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollProgress() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const showScrollTopRef = useRef(false);

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      const scrollY = window.scrollY;
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (progressBarRef.current && totalHeight > 0) {
        const progress = Math.min(1, Math.max(0, scrollY / totalHeight));
        progressBarRef.current.style.transform = `scaleX(${progress})`;
      }

      const shouldShow = scrollY > 400;
      if (shouldShow !== showScrollTopRef.current) {
        showScrollTopRef.current = shouldShow;
        setShowScrollTop(shouldShow);
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Precision molten gold reading beam at top edge - GPU transform scaleX */}
      <div
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-50 h-[2.5px] bg-transparent pointer-events-none"
      >
        <div
          ref={progressBarRef}
          className="h-full w-full origin-left bg-gradient-to-r from-[#F0B33E] via-[#FFD875] to-[#F0B33E] shadow-[0_0_12px_#F0B33E] will-change-transform"
          style={{ transform: "scaleX(0)" }}
        />
      </div>

      {/* Floating scroll-to-top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#12151D]/90 border border-[#F0B33E]/50 text-[#F0B33E] shadow-2xl backdrop-blur-md hover:bg-[#F0B33E] hover:text-[#08090C] transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F0B33E] animate-in fade-in zoom-in-75"
        >
          <ArrowUp className="w-4 h-4 stroke-[2.5]" />
        </button>
      )}
    </>
  );
}
