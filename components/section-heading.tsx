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
          className={`inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full text-xs font-semibold tracking-wider uppercase border border-[#F0B33E]/40 bg-[#F0B33E]/10 text-[#F0B33E] ${
            isCenter ? "justify-center" : ""
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#F0B33E]" />
          <span>{eyebrow}</span>
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
