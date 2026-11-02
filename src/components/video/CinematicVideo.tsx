import React, { useRef, useEffect, useState } from "react";

interface CinematicVideoProps {
  src: string;
  poster?: string;
  className?: string;
  overlayGradient?: boolean;
  priority?: boolean; // load immediately (for Hero)
  scaleOnScroll?: boolean;
  onEnded?: () => void;
  altText?: string;
}

export const CinematicVideo: React.FC<CinematicVideoProps> = ({
  src,
  poster,
  className = "",
  overlayGradient = false,
  priority = false,
  onEnded,
  altText = "AUDICHYA TOURS Experience",
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isIntersecting, setIsIntersecting] = useState(priority);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // IntersectionObserver for lazy-loading non-priority videos
  useEffect(() => {
    if (priority || prefersReducedMotion) {
      setIsIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            if (videoRef.current && videoRef.current.paused) {
              videoRef.current.play().catch(() => {
                // Autoplay blocked by browser policy, keep silent fallback
              });
            }
          } else {
            if (videoRef.current && !videoRef.current.paused) {
              videoRef.current.pause();
            }
          }
        });
      },
      { rootMargin: "300px 0px 300px 0px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority, prefersReducedMotion]);

  const handleLoadedData = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden bg-[#001429] ${className}`}
    >
      {/* Reduced Motion or Video Load Fallback Backdrop */}
      {poster && (
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
            isLoaded && !prefersReducedMotion && !hasError ? "opacity-0" : "opacity-100"
          }`}
          aria-hidden="true"
        >
          {/* Subtle Ambient SVG visual placeholder if real poster file isn't uploaded yet */}
          <div className="w-full h-full bg-gradient-to-br from-[#002247] via-[#051c36] to-[#011224] flex items-center justify-center p-6 text-center">
            <div className="max-w-xs text-white/40 text-xs font-mono tracking-wider uppercase">
              AUDICHYA TOURS · Journey Through Rajasthan
            </div>
          </div>
        </div>
      )}

      {/* Video Element */}
      {!prefersReducedMotion && !hasError && (
        <video
          ref={videoRef}
          src={isIntersecting ? src : undefined}
          poster={poster}
          autoPlay
          muted
          playsInline
          loop
          onLoadedData={handleLoadedData}
          onError={handleError}
          onEnded={onEnded}
          aria-label={altText}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}

      {/* Subtle Dark Cinematic Overlay Gradient */}
      {overlayGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30 pointer-events-none" />
      )}
    </div>
  );
};
