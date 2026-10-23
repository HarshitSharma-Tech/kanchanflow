import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  icon,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F0B33E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B111B] disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs gap-1.5 tracking-wide",
    md: "px-4.5 py-2.5 text-sm gap-2 tracking-normal",
    lg: "px-6 py-3.5 text-base gap-2.5 font-semibold",
  };

  const variantStyles = {
    primary:
      "bg-[#F0B33E] text-[#0B111B] font-semibold hover:bg-[#E09F26] shadow-sm hover:shadow-[0_0_20px_rgba(240,179,62,0.35)] border border-[#F0B33E]",
    secondary:
      "bg-[#16263A] text-[#F5F3ED] hover:bg-[#1C324D] border border-[#2A3B50] hover:border-[#F0B33E]/40",
    outline:
      "bg-transparent text-[#F5F3ED] border border-[#2A3B50] hover:border-[#F0B33E] hover:text-[#F0B33E] hover:bg-[#F0B33E]/5",
    ghost:
      "bg-transparent text-[#A4B0BE] hover:text-[#F5F3ED] hover:bg-[#16263A]/50",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
        {icon && <span className="shrink-0">{icon}</span>}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
      {icon && <span className="shrink-0">{icon}</span>}
    </button>
  );
}
