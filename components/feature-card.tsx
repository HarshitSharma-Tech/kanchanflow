import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
  href?: string;
  metrics?: string;
  image?: string;
  className?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  badge,
  href,
  metrics,
  image,
  className = "",
}: FeatureCardProps) {
  const content = (
    <div
      className={`group relative h-full flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-[#12151D] border border-[#262B38] hover:border-[#F0B33E]/50 transition-all duration-300 shadow-xl hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.8),0_0_25px_rgba(240,179,62,0.12)] overflow-hidden ${className}`}
    >
      {/* Top accent radiant beam on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F0B33E]/0 to-transparent group-hover:via-[#F0B33E] transition-all duration-500 z-20" />

      <div>
        {/* If Image is provided: Showcase with high-contrast badge overlays */}
        {image && (
          <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#0A0D14] border border-[#262B38] mb-5 group-hover:border-[#F0B33E]/30 transition-colors">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-[1.08] brightness-[0.95]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#12151D] via-transparent via-55% to-black/40 z-10" />

            {/* Floating category badge & icon pill on top of image */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20">
              <div className="w-9 h-9 rounded-lg bg-[#0B0E14]/90 backdrop-blur-md border border-[#F0B33E]/40 flex items-center justify-center text-[#F0B33E] shadow-md">
                {icon}
              </div>

              {badge && (
                <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#0B0E14]/90 backdrop-blur-md border border-[#262B38] text-[#CBD5E1] font-semibold">
                  {badge}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Fallback header if no image is passed */}
        {!image && (
          <div className="flex items-center justify-between mb-5">
            <div className="w-12 h-12 rounded-xl bg-[#181C26] border border-[#F0B33E]/30 flex items-center justify-center text-[#F0B33E] shadow-md group-hover:border-[#F0B33E]/60 transition-colors">
              {icon}
            </div>

            {badge && (
              <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#181C26] border border-[#262B38] text-[#CBD5E1] font-semibold">
                {badge}
              </span>
            )}
          </div>
        )}

        {/* Card Title */}
        <h3 className="text-lg font-bold text-white group-hover:text-[#F0B33E] transition-colors tracking-tight flex items-center justify-between">
          <span>{title}</span>
          {href && (
            <ArrowUpRight className="w-4 h-4 text-[#94A3B8] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200" />
          )}
        </h3>

        {/* Card Description */}
        <p className="mt-2.5 text-xs sm:text-sm text-[#94A3B8] leading-relaxed font-normal">
          {description}
        </p>
      </div>

      {/* Operational Metric Footer */}
      {metrics && (
        <div className="mt-5 pt-3.5 border-t border-[#262B38] flex items-center justify-between text-xs">
          <span className="font-mono text-[#36C98F] font-bold tracking-tight flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#36C98F] animate-pulse" />
            <span>{metrics}</span>
          </span>
          <span className="text-[11px] font-medium text-[#94A3B8] flex items-center gap-1 group-hover:text-[#F0B33E] transition-colors">
            <span>Learn more</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
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
