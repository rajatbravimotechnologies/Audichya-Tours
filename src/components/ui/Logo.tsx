import React from "react";

interface LogoProps {
  className?: string;
  showWordmark?: boolean;
  lightMode?: boolean; // when rendered on dark blue background
  imgClassName?: string;
  wordmarkClassName?: string;
}

/**
 * Official AUDICHYA TOURS Logo
 */
export const Logo: React.FC<LogoProps> = ({
  className = "",
  imgClassName = "h-14 sm:h-16 md:h-20 xl:h-24 w-auto",
}) => {
  return (
    <div className={`inline-flex items-center shrink-0 min-w-0 ${className}`}>
      {/* Official Brand Logo Image */}
      <img
        src="/logo.png"
        alt="AUDICHYA TOURS Logo"
        className={`${imgClassName} object-contain shrink-0 filter drop-shadow-md transition-all duration-300`}
      />
    </div>
  );
};
