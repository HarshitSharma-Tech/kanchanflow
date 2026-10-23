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
      className={`group relative h-full flex flex-col justify-between p-6 sm:p-7 rounded-xl bg-[#111B29] border border-[#2A3B50] hover:border-[#F0B33E]/50 transition-all duration-300 hover:shadow-[0_12px_30px_-10px_rgba(240,179,62,0.15)] ${className}`}
    >
      {/* Top accent hover glow line */}
      <div className="absolute top-0 left-6 right-6 h-[2px] bg-transparent group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-[#F0B33E] group-hover:to-transparent transition-all duration-300" />

      <div>
        <div className="flex items-center justify-between mb-5">
          {/* Icon frame */}
          <div className="w-12 h-12 rounded-lg bg-[#16263A] border border-[#2A3B50] flex items-center justify-center text-[#F0B33E] group-hover:border-[#F0B33E]/40 group-hover:bg-[#16263A]/80 transition-colors">
            {icon}
          </div>

          {badge && (
            <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#16263A] border border-[#2A3B50] text-[#A4B0BE]">
              {badge}
            </span>
          )}
        </div>

        <h3 className="text-lg font-bold text-[#F5F3ED] group-hover:text-[#F0B33E] transition-colors tracking-tight flex items-center justify-between">
          <span>{title}</span>
          {href && (
            <ArrowUpRight className="w-4 h-4 text-[#A4B0BE] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          )}
        </h3>

        <p className="mt-2.5 text-sm text-[#A4B0BE] leading-relaxed">
          {description}
        </p>
      </div>

      {metrics && (
        <div className="mt-6 pt-4 border-t border-[#2A3B50]/60 flex items-center justify-between text-xs text-[#A4B0BE]">
          <span className="font-mono text-[#36C98F] font-semibold">{metrics}</span>
          <span className="text-[11px] text-[#A4B0BE]/70">Workflow Impact</span>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F0B33E] rounded-xl"
      >
        {content}
      </Link>
    );
  }

  return content;
}
