import React from "react";

interface LandscapeBackgroundProps {
  className?: string;
}

export const LandscapeBackground: React.FC<LandscapeBackgroundProps> = ({
  className = "w-full h-28 md:h-36",
}) => {
  return (
    <div
      className={`pointer-events-none select-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-full object-cover"
      >
        {/* Soft Background Wave */}
        <path
          d="M0 80 C 320 30, 640 120, 960 50 C 1200 10, 1360 70, 1440 80 L 1440 180 L 0 180 Z"
          fill="#DDEAF8"
          fillOpacity="0.7"
        />

        {/* Foreground Smooth Blue Wave */}
        <path
          d="M0 110 C 240 60, 520 130, 780 80 C 1040 30, 1260 100, 1440 90 L 1440 180 L 0 180 Z"
          fill="#E6F0FF"
          fillOpacity="0.9"
        />

        {/* Palace Silhouette Accent on Far Right Bottom */}
        <g opacity="0.3" fill="#D4AF37">
          <path d="M1350 90 h10 v-20 h-10 z M1370 90 h15 v-30 h-15 z M1372 55 a5 5 0 0 1 10 0 v5 h-10 z M1390 90 h12 v-18 h-12 z" />
        </g>
      </svg>
    </div>
  );
};
