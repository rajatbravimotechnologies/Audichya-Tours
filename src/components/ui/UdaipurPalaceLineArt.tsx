import React from "react";

interface UdaipurPalaceLineArtProps {
  className?: string;
  opacity?: number;
}

export const UdaipurPalaceLineArt: React.FC<UdaipurPalaceLineArtProps> = ({
  className = "w-[650px] lg:w-[1050px] h-auto",
  opacity = 0.95,
}) => {
  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <img
        src="/images/udaipur-palace-line.png"
        alt=""
        className="w-full h-auto object-contain mix-blend-multiply"
      />
    </div>
  );
};
