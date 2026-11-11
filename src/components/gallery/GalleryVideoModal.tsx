import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, MapPin, Clock } from "lucide-react";
import { GalleryVideo, GalleryReel } from "../../data/gallery";

interface GalleryVideoModalProps {
  video: GalleryVideo | GalleryReel | null;
  onClose: () => void;
}

export const GalleryVideoModal: React.FC<GalleryVideoModalProps> = ({ video, onClose }) => {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (video) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [video, onClose]);

  if (!video) return null;

  const isReel = video.category === "reel";

  // Build clean autoplay embed URL
  const embedUrl = video.videoUrl.includes("?")
    ? `${video.videoUrl}&autoplay=1&rel=0`
    : `${video.videoUrl}?autoplay=1&rel=0`;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="gallery-video-title"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className={`relative bg-[#002247] rounded-3xl overflow-hidden shadow-2xl border border-[#C2A03E]/40 flex flex-col ${
            isReel ? "w-full max-w-sm sm:max-w-md max-h-[92vh]" : "w-full max-w-4xl"
          }`}
        >
          {/* Top Gold Accent Border */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#007FF0] via-[#C2A03E] to-[#007FF0] z-20" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-30 w-9 h-9 rounded-full bg-black/60 hover:bg-[#C2A03E] text-white hover:text-[#002247] transition-all flex items-center justify-center cursor-pointer shadow-lg border border-white/20"
            aria-label="Close video player"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Video Player Container */}
          <div
            className={`w-full bg-black relative flex items-center justify-center ${
              isReel ? "aspect-[9/16] max-h-[72vh]" : "aspect-video"
            }`}
          >
            <iframe
              src={embedUrl}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>

          {/* Video Metadata Footer */}
          <div className="p-4 sm:p-5 text-left bg-gradient-to-b from-[#002247] to-[#0B1726]">
            <div className="flex items-center gap-3 mb-2 flex-wrap text-xs">
              {video.locationTag && (
                <span className="inline-flex items-center gap-1 text-[#C2A03E] font-semibold bg-[#C2A03E]/10 px-2.5 py-1 rounded-md border border-[#C2A03E]/20">
                  <MapPin className="w-3 h-3" />
                  {video.locationTag}
                </span>
              )}
              <span className="inline-flex items-center gap-1 text-slate-300 text-[11px] font-mono">
                <Clock className="w-3 h-3 text-[#007FF0]" />
                {video.duration}
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#007FF0]/20 text-[#007FF0] border border-[#007FF0]/30">
                {isReel ? "Instagram Reel" : "Travel Video"}
              </span>
            </div>

            <h3
              id="gallery-video-title"
              className="text-base sm:text-lg font-bold text-white leading-snug"
            >
              {video.title}
            </h3>

            {video.description && (
              <p className="mt-1 text-xs sm:text-sm text-slate-300 line-clamp-2">
                {video.description}
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

