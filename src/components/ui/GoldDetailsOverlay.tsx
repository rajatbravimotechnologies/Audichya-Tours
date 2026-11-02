import React from "react";

interface GoldDetailsOverlayProps {
  className?: string;
}

export const GoldDetailsOverlay: React.FC<GoldDetailsOverlayProps> = ({ className = "" }) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none select-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* Top Left Accent Mark */}
      <div className="absolute top-12 left-8 md:left-16 flex items-center gap-2 opacity-40">
        <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
        <div className="w-12 h-[1px] bg-[#D4AF37]" />
        <div className="w-1 h-1 rotate-45 border border-[#D4AF37]" />
      </div>

      {/* Top Right Decorative Arch Accent */}
      <div className="absolute top-8 right-12 md:right-24 opacity-35 hidden sm:block">
        <svg width="60" height="30" viewBox="0 0 60 30" fill="none">
          <path d="M0 30 C 0 10, 60 10, 60 30" stroke="#D4AF37" strokeWidth="1" />
          <circle cx="30" cy="10" r="2" fill="#D4AF37" />
        </svg>
      </div>

      {/* Mid Left Subtle Dots */}
      <div className="absolute top-1/2 left-6 -translate-y-1/2 flex flex-col gap-3 opacity-30 hidden lg:flex">
        <div className="w-1 h-1 rounded-full bg-[#D4AF37]" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
        <div className="w-1 h-1 rounded-full bg-[#D4AF37]" />
      </div>

      {/* Mid Right Thin Line Accent */}
      <div className="absolute top-2/3 right-8 flex items-center gap-2 opacity-35 hidden md:flex">
        <div className="w-16 h-[1px] bg-gradient-to-l from-[#D4AF37] to-transparent" />
        <div className="w-2 h-2 rounded-full border border-[#D4AF37]" />
      </div>
    </div>
  );
};
