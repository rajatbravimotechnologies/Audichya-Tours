import React, { useState, useRef, useEffect } from "react";
import { JOURNEY_CHAPTERS, VideoAsset } from "../../config/videos";
import { CinematicVideo } from "../video/CinematicVideo";
import { MapPin, ArrowRight, Compass } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface DiscoverUdaipurProps {
  onSelectDestination: (destName: string) => void;
}

export const DiscoverUdaipurStory: React.FC<DiscoverUdaipurProps> = ({
  onSelectDestination,
}) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Monitor scroll progression through chapter steps
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalHeight = rect.height - window.innerHeight;
      if (totalHeight <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalHeight));

      const step = Math.min(
        JOURNEY_CHAPTERS.length - 1,
        Math.floor(progress * JOURNEY_CHAPTERS.length)
      );

      if (step !== activeIdx) {
        setActiveIdx(step);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIdx]);

  const currentChapter: VideoAsset = JOURNEY_CHAPTERS[activeIdx];

  return (
    <section
      id="explore"
      ref={containerRef}
      className="relative bg-[#001429] text-white border-t border-slate-800"
      style={{ height: `${JOURNEY_CHAPTERS.length * 90}vh` }}
    >
      {/* Sticky Full-Viewport Storytelling Canvas Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between p-4 sm:p-8 lg:p-12">
        {/* Section Header Bar */}
        <div className="relative z-30 max-w-7xl mx-auto w-full flex items-center justify-between pt-4 pb-2 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-pulse" />
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
              DISCOVER UDAIPUR
            </h2>
            <span className="text-xs text-slate-400 font-normal hidden sm:inline">
              · One city. Endless moments.
            </span>
          </div>

          {/* Chapter Progress Indicators */}
          <div className="flex items-center gap-2">
            {JOURNEY_CHAPTERS.map((ch, idx) => (
              <button
                key={ch.id}
                onClick={() => {
                  if (containerRef.current) {
                    const top =
                      containerRef.current.offsetTop +
                      (idx * (containerRef.current.offsetHeight - window.innerHeight)) /
                        JOURNEY_CHAPTERS.length;
                    window.scrollTo({ top, behavior: "smooth" });
                  }
                }}
                className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                  idx === activeIdx ? "w-8 bg-[#007FF0]" : "w-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Jump to chapter ${ch.chapterNumber}`}
              />
            ))}
          </div>
        </div>

        {/* Main Split Storytelling Area */}
        <div className="relative z-20 max-w-7xl mx-auto w-full my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-[calc(100vh-160px)]">
          {/* LEFT: Editorial Chapter Text Overlay (30-35% Width Desktop) */}
          <div className="lg:col-span-4 flex flex-col justify-center text-left space-y-4 sm:space-y-6 z-30 order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentChapter.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-4"
              >
                {/* Chapter Number Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-[#C2A03E]">
                  <span>CHAPTER {currentChapter.chapterNumber} / 05</span>
                </div>

                {/* Location Label */}
                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#007FF0]">
                  {currentChapter.locationLabel}
                </div>

                {/* Location Title */}
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-serif">
                  {currentChapter.title}
                </h3>

                {/* Tagline */}
                <p className="text-base sm:text-lg text-[#C2A03E] font-medium font-sans">
                  "{currentChapter.tagline}"
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed max-w-md">
                  {currentChapter.description}
                </p>

                {/* Action CTA */}
                <div className="pt-2">
                  <button
                    onClick={() => onSelectDestination(currentChapter.title)}
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#007FF0] hover:bg-[#006bd1] transition-all shadow-md cursor-pointer"
                  >
                    <span>Book Cab To {currentChapter.title.split(" ")[0]}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT: Large Cinematic Video Window (65-70% Width Desktop) */}
          <div className="lg:col-span-8 w-full h-[40vh] sm:h-[50vh] lg:h-[70vh] relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl order-1 lg:order-2">
            {JOURNEY_CHAPTERS.map((ch, idx) => (
              <div
                key={ch.id}
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-out ${
                  idx === activeIdx ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <CinematicVideo
                  src={ch.src}
                  poster={ch.poster}
                  priority={idx === 0}
                  className="w-full h-full"
                  altText={`Cinematic journey view of ${ch.title}`}
                />
              </div>
            ))}

            {/* Subtle Overlay Card Badge on Video */}
            <div className="absolute top-4 left-4 z-20 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-[10px] font-mono text-white/80 flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-[#007FF0]" />
              <span>{currentChapter.title}</span>
            </div>
          </div>
        </div>

        {/* Footer Sub-indicator */}
        <div className="relative z-30 max-w-7xl mx-auto w-full text-left text-[11px] text-white/50 border-t border-white/10 pt-2 flex items-center justify-between">
          <div className="flex items-center gap-2 font-mono">
            <Compass className="w-3.5 h-3.5 text-[#007FF0]" />
            <span>SCROLL PROGRESSION · CHAPTER {currentChapter.chapterNumber} OF 05</span>
          </div>
          <span className="hidden sm:inline text-white/40 font-sans">
            Chauffeur Guided Udaipur Sightseeing
          </span>
        </div>
      </div>
    </section>
  );
};
