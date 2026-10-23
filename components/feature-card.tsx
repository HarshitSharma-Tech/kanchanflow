import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
  href?: string;
  metrics?: string;
  className?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  badge,
  href,
  metrics,
  className = "",
}: FeatureCardProps) {
  const content = (
    <div
      className={`group relative h-full flex flex-col justify-between p-7 sm:p-8 rounded-2xl glass-panel-luxury glass-panel-hover overflow-hidden ${className}`}
    >
      {/* Top accent radiant beam on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F0B33E]/0 to-transparent group-hover:via-[#F0B33E] transition-all duration-500" />

      {/* Engineering precision corner markers */}
      <span className="absolute top-2.5 right-2.5 font-mono text-[9px] text-[#2A3B50] group-hover:text-[#F0B33E]/40 transition-colors select-none">
        +
      </span>
      <span className="absolute bottom-2.5 left-2.5 font-mono text-[9px] text-[#2A3B50] group-hover:text-[#F0B33E]/40 transition-colors select-none">
        +
      </span>

      <div>
        <div className="flex items-center justify-between mb-6">
          {/* Luminous metallic icon frame */}
          <div className="w-13 h-13 rounded-xl bg-gradient-to-br from-[#16263A] to-[#0B111B] border border-[#2A3B50] flex items-center justify-center text-[#F0B33E] shadow-md group-hover:border-[#F0B33E]/60 group-hover:shadow-[0_0_20px_rgba(240,179,62,0.3)] transition-all duration-300">
            {icon}
          </div>

          {badge && (
            <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#16263A] border border-[#2A3B50] text-[#A4B0BE] group-hover:border-[#F0B33E]/40 group-hover:text-[#F0B33E] transition-colors">
              {badge}
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-[#F5F3ED] group-hover:text-[#F0B33E] transition-colors tracking-tight flex items-center justify-between">
          <span>{title}</span>
          {href && (
            <ArrowUpRight className="w-4 h-4 text-[#A4B0BE] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200" />
          )}
        </h3>

        <p className="mt-3 text-sm text-[#A4B0BE] leading-relaxed font-normal">
          {description}
        </p>
      </div>

      {metrics && (
        <div className="mt-8 pt-4 border-t border-[#2A3B50]/60 flex items-center justify-between text-xs">
          <span className="font-mono text-[#36C98F] font-bold tracking-tight">
            {metrics}
          </span>
          <span className="text-[11px] font-mono text-[#A4B0BE]/70">
            OPERATIONAL IMPACT
          </span>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F0B33E] rounded-2xl"
      >
        {content}
      </Link>
    );
  }

  return content;
}
