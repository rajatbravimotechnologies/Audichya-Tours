import React, { useRef, useState } from "react";
import { Compass, Sparkles, Navigation } from "lucide-react";

interface HeroSceneProps {
  className?: string;
}

/**
 * HeroScene – STAGE 1 3D Placeholder Component
 * 
 * ARCHITECTURE FOR STAGE 2:
 * In Stage 2, replace this placeholder with:
 * - `<Canvas>` from @react-three/fiber
 * - Three.js 3D car model (.gltf / .glb)
 * - 3D procedural winding road through Lake Pichola & Aravalli hills
 * - Scroll-driven camera sync via GSAP ScrollTrigger
 * - Realistic lighting, PBR materials, and environmental reflections
 * 
 * In Stage 1, this renders an elegant cinematic visual placeholder that occupies
 * the exact target 3D viewport without breaking hero layout integrity.
 */
export const HeroScene: React.FC<HeroSceneProps> = ({ className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full aspect-[4/3] lg:aspect-auto lg:h-[580px] rounded-3xl overflow-hidden border border-slate-200/80 bg-gradient-to-b from-[#002247] via-[#08305c] to-[#01142a] shadow-2xl transition-all duration-300 ${className}`}
      id="hero-3d-container"
    >
      {/* Background Starry / Twilight Atmosphere */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#007FF0_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Golden Hour Sky Gradient Glow */}
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#C2A03E]/20 blur-3xl pointer-events-none"
        style={{
          transform: `translate3d(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px, 0)`,
        }}
      />
      <div
        className="absolute top-1/3 -left-20 w-80 h-80 rounded-full bg-[#007FF0]/25 blur-3xl pointer-events-none"
        style={{
          transform: `translate3d(${-mousePos.x * 0.4}px, ${-mousePos.y * 0.4}px, 0)`,
        }}
      />

      {/* Layer 1: Udaipur Aravalli Hills Silhouette (Backdrop) */}
      <div
        className="absolute bottom-28 left-0 right-0 h-44 opacity-30 transition-transform duration-300 ease-out pointer-events-none"
        style={{
          transform: `translateX(${mousePos.x * 0.3}px)`,
        }}
      >
        <svg viewBox="0 0 1200 240" fill="none" className="w-full h-full preserve-3d" preserveAspectRatio="none">
          <path
            d="M0 160 Q 200 60 400 130 T 800 90 T 1200 150 L 1200 240 L 0 240 Z"
            fill="#002247"
          />
        </svg>
      </div>

      {/* Layer 2: Udaipur City Palace & Heritage Jharokhas Skyline */}
      <div
        className="absolute bottom-24 left-0 right-0 h-36 opacity-75 transition-transform duration-300 ease-out pointer-events-none"
        style={{
          transform: `translateX(${-mousePos.x * 0.5}px)`,
        }}
      >
        <svg viewBox="0 0 1000 160" fill="none" className="w-full h-full" preserveAspectRatio="none">
          {/* Palace Domes (Chhatris) & Fortified Turrets */}
          <path
            d="M 50 160 L 50 90 Q 75 70 100 90 L 100 160 M 130 160 L 130 70 Q 165 40 200 70 L 200 160 M 230 160 L 230 100 L 280 100 L 280 160 M 320 160 L 320 50 Q 360 20 400 50 L 400 160 M 440 160 L 440 85 Q 470 65 500 85 L 500 160 M 540 160 L 540 105 L 600 105 L 600 160 M 640 160 L 640 60 Q 690 30 740 60 L 740 160 M 780 160 L 780 95 Q 815 75 850 95 L 850 160 M 890 160 L 890 110 L 960 110 L 960 160"
            stroke="#C2A03E"
            strokeWidth="1.5"
            strokeOpacity="0.4"
            fill="#051c36"
          />
        </svg>
      </div>

      {/* Layer 3: Serene Lake Pichola Reflection Water */}
      <div className="absolute bottom-16 left-0 right-0 h-16 bg-gradient-to-b from-[#00346b]/60 to-[#001730] backdrop-blur-[1px] border-t border-[#007FF0]/20">
        <div className="w-full h-full opacity-20 bg-[repeating-linear-gradient(90deg,#007FF0_0_2px,transparent_2px_40px)]" />
      </div>

      {/* Layer 4: Perspective Road / Runway (Future 3D Spline Path) */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[160%] max-w-[900px] h-48 [perspective:500px]">
        <div className="w-full h-full [transform:rotateX(68deg)] origin-bottom bg-gradient-to-t from-slate-900 via-[#0a1e38] to-[#041122] rounded-t-[100px] border-t border-slate-700 shadow-2xl relative overflow-hidden">
          {/* Animated Center Road Dashes */}
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-1.5 bg-[repeating-linear-gradient(to_bottom,#007FF0_0,#007FF0_24px,transparent_24px,transparent_52px)] opacity-80" />
          {/* Curving Road Edges */}
          <div className="absolute inset-y-0 left-12 w-1 bg-[#C2A03E]/40" />
          <div className="absolute inset-y-0 right-12 w-1 bg-[#C2A03E]/40" />
        </div>
      </div>

      {/* Focal Point: Modern Chauffeur Cab Silhouette on the Journey */}
      <div
        className="absolute bottom-14 left-1/2 -translate-x-1/2 transition-transform duration-500 ease-out z-10"
        style={{
          transform: `translate(calc(-50% + ${mousePos.x * 0.8}px), ${-mousePos.y * 0.4}px)`,
        }}
      >
        <div className="relative group cursor-pointer">
          {/* Subtle Under-Car Glow */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-48 h-6 bg-[#007FF0]/50 blur-lg rounded-full" />

          {/* Premium Cab Vector Rendering */}
          <svg viewBox="0 0 240 85" fill="none" className="w-56 h-auto drop-shadow-2xl">
            {/* Body */}
            <path
              d="M 15 54 L 38 54 C 44 40 60 40 66 54 L 168 54 C 174 40 190 40 196 54 L 225 54 C 232 54 238 48 238 40 L 230 30 C 220 28 200 27 185 27 L 155 12 C 145 7 125 6 95 6 L 60 14 L 30 28 C 18 31 10 38 10 44 Z"
              fill="#FFFFFF"
            />
            {/* Windshields & Windows */}
            <path
              d="M 64 25 L 94 13 C 115 13 135 13 145 16 L 168 25 C 160 25 80 25 64 25 Z"
              fill="#002247"
            />
            <path
              d="M 98 15 L 140 17 L 140 25 L 98 25 Z"
              fill="#007FF0"
              opacity="0.3"
            />
            {/* Headlights (Warm Beam) */}
            <circle cx="232" cy="38" r="4" fill="#FFE58F" />
            <polygon points="236,38 280,30 280,50 236,42" fill="#FFE58F" opacity="0.15" />
            {/* Tail Light (Red Accent) */}
            <rect x="10" y="38" width="5" height="7" rx="1.5" fill="#EF4444" />
            {/* Wheels */}
            <circle cx="52" cy="54" r="14" fill="#002247" stroke="#94A3B8" strokeWidth="2" />
            <circle cx="52" cy="54" r="6" fill="#C2A03E" />
            <circle cx="182" cy="54" r="14" fill="#002247" stroke="#94A3B8" strokeWidth="2" />
            <circle cx="182" cy="54" r="6" fill="#C2A03E" />
            {/* Brand Detail on Door */}
            <line x1="95" y1="36" x2="135" y2="36" stroke="#007FF0" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Overlay Badge: Stage 2 3D Hook Status Indicator (Clean Non-Intrusive) */}
      <div className="absolute top-5 left-5 right-5 flex items-center justify-between text-xs text-white/90 z-20 pointer-events-none">
        <div className="flex items-center gap-2 bg-[#002247]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 shadow-sm">
          <Navigation className="w-3.5 h-3.5 text-[#007FF0] animate-pulse" />
          <span className="font-medium tracking-wide">Live Route View · Lake Pichola Loop</span>
        </div>

        <div className="hidden sm:flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/5 text-[11px] text-white/70">
          <Sparkles className="w-3 h-3 text-[#C2A03E]" />
          <span>Stage 2 R3F Ready</span>
        </div>
      </div>

      {/* Bottom Route Markers */}
      <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-[11px] text-white/80 z-20 pointer-events-none">
        <div className="flex items-center gap-2 font-mono">
          <span className="w-2 h-2 rounded-full bg-[#007FF0]" />
          <span>AIRPORT (UDR)</span>
          <span className="text-white/40">⟶</span>
          <span>CITY PALACE</span>
          <span className="text-white/40">⟶</span>
          <span className="text-[#C2A03E]">FATEH SAGAR</span>
        </div>

        <div className="hidden md:flex items-center gap-2 text-white/60">
          <Compass className="w-3.5 h-3.5 text-[#007FF0]" />
          <span>Chauffeur Guided · Rajasthan</span>
        </div>
      </div>
    </div>
  );
};
