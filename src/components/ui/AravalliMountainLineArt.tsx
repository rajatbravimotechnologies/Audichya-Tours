import React from "react";

interface AravalliMountainLineArtProps {
  className?: string;
  opacity?: number;
  color?: string;
}

export const AravalliMountainLineArt: React.FC<AravalliMountainLineArtProps> = ({
  className = "w-[500px] h-auto",
  opacity = 0.45,
  color = "#D4AF37",
}) => {
  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 600 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* Layer 1: Highest Peak Contour */}
        <path
          d="M-20 280 Q 100 180, 180 120 T 320 60 T 460 180 T 600 290"
          stroke={color}
          strokeWidth="1.2"
          strokeDasharray="5 3"
          strokeOpacity="0.7"
        />
        {/* Layer 2: Main Ridge with detailed hatching lines matching reference brochure */}
        <path
          d="M-40 320 Q 80 220, 160 140 Q 240 60, 310 40 Q 380 90, 450 160 Q 520 230, 620 320"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        {/* Ridge Hatching lines */}
        <path
          d="M160 140 L 190 280 M240 100 L 265 290 M310 40 L 330 300 M380 90 L 395 300 M450 160 L 460 310"
          stroke={color}
          strokeWidth="0.8"
          strokeOpacity="0.6"
        />
        {/* Secondary Front Foothill Ridge */}
        <path
          d="M-10 330 Q 110 240, 200 190 Q 290 140, 380 190 Q 470 240, 580 340"
          stroke={color}
          strokeWidth="1.5"
        />
        {/* Foothill Hatching */}
        <path
          d="M200 190 L 220 320 M290 140 L 305 320 M380 190 L 390 330"
          stroke={color}
          strokeWidth="0.8"
          strokeOpacity="0.5"
        />
      </svg>
    </div>
  );
};
