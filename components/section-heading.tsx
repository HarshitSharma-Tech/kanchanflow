import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`max-w-3xl ${
        isCenter ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 mb-4 rounded-full text-xs font-semibold tracking-wider uppercase border border-[#F0B33E]/40 bg-gradient-to-r from-[#F0B33E]/15 via-[#F0B33E]/5 to-[#F0B33E]/15 text-[#F0B33E] shadow-[0_0_15px_rgba(240,179,62,0.12)] ${
            isCenter ? "justify-center" : ""
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#F0B33E] animate-pulse shadow-[0_0_8px_#F0B33E]" />
          <span>{eyebrow}</span>
          <span className="text-[#A4B0BE]/40">•</span>
          <span className="font-mono text-[10px] text-[#A4B0BE]/80">ISO 9001 / AS9100</span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#F5F3ED] leading-[1.2]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-[#A4B0BE] leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
}
