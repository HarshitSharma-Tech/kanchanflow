import React from "react";

interface StatCardProps {
  value: string;
  label: string;
  subtext?: string;
  trend?: string;
  icon?: React.ReactNode;
}

export function StatCard({
  value,
  label,
  subtext,
  trend,
  icon,
}: StatCardProps) {
  return (
    <div className="relative p-5 sm:p-6 rounded-xl bg-[#111B29] border border-[#2A3B50] hover:border-[#F0B33E]/40 transition-colors">
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-wider font-semibold text-[#A4B0BE]">
          {label}
        </span>
        {icon && <span className="text-[#F0B33E]">{icon}</span>}
      </div>

      <div className="mt-3 flex items-baseline gap-2">
        <span className="text-2xl sm:text-3xl font-extrabold text-[#F5F3ED] tracking-tight">
          {value}
        </span>
        {trend && (
          <span className="text-xs font-mono font-medium text-[#36C98F]">
            {trend}
          </span>
        )}
      </div>

      {subtext && (
        <p className="mt-2 text-xs text-[#A4B0BE] leading-relaxed">
          {subtext}
        </p>
      )}
    </div>
  );
}
