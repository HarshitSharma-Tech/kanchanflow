import React from "react";
import Link from "next/link";

interface BrandLogoProps {
  className?: string;
  isLink?: boolean;
}

export function BrandLogo({ className = "", isLink = true }: BrandLogoProps) {
  const content = (
    <div className={`flex items-center gap-2.5 group select-none ${className}`}>
      {/* Precision Geometric Industrial Mark */}
      <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-[#16263A] to-[#0B111B] border border-[#2A3B50] flex items-center justify-center p-1.5 shadow-sm group-hover:border-[#F0B33E]/60 transition-colors">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-[#F0B33E]"
        >
          {/* Precision interlocking flow geometry */}
          <path
            d="M3 8L12 3L21 8V16L12 21L3 16V8Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
            className="opacity-40"
          />
          <path
            d="M7 10.5L12 7.5L17 10.5L12 13.5L7 10.5Z"
            fill="currentColor"
            fillOpacity="0.2"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path
            d="M7 14L12 17L17 14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {/* Subtle molten gold dot indicator */}
        <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#F0B33E] ring-2 ring-[#0B111B]" />
      </div>

      {/* Wordmark */}
      <div className="flex items-baseline tracking-tight">
        <span className="text-lg font-bold text-[#F5F3ED] tracking-tight">
          Kanchan
        </span>
        <span className="text-lg font-bold text-[#F0B33E] tracking-tight">
          Flow
        </span>
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#36C98F] ml-1 self-center" />
      </div>
    </div>
  );

  if (isLink) {
    return (
      <Link
        href="/"
        className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F0B33E] rounded-md"
        aria-label="KanchanFlow Homepage"
      >
        {content}
      </Link>
    );
  }

  return content;
}
