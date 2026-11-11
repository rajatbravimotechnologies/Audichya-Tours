import React, { useState } from "react";
import { GalleryHero } from "../components/gallery/GalleryHero";
import { GalleryFilterTabs, GalleryCategory } from "../components/gallery/GalleryFilterTabs";
import { TestimonialCard } from "../components/gallery/TestimonialCard";
import { VideoCard } from "../components/gallery/VideoCard";
import { ReelCard } from "../components/gallery/ReelCard";
import { GalleryVideoModal } from "../components/gallery/GalleryVideoModal";
import { CinematicFinalCTA } from "../components/sections/CinematicFinalCTA";
import {
  galleryTestimonials,
  travelVideos,
  reelsAndShorts,
  GalleryVideo,
  GalleryReel,
} from "../data/gallery";
import { MessageSquareQuote, Film, Sparkles, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface GalleryPageProps {
  onOpenBooking: (vehicle?: string, destination?: string) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");
  const [activeVideo, setActiveVideo] = useState<GalleryVideo | GalleryReel | null>(null);

  const counts = {
    all: galleryTestimonials.length + travelVideos.length + reelsAndShorts.length,
    testimonials: galleryTestimonials.length,
    videos: travelVideos.length,
    reels: reelsAndShorts.length,
  };

  const handlePlayVideo = (video: GalleryVideo | GalleryReel) => {
    setActiveVideo(video);
  };

  return (
    <div className="w-full bg-[#FFF9F0] min-h-screen text-[#002247]">
      {/* 1. Cinematic Hero Section */}
      <GalleryHero />

      {/* 2. Category Filter Navigation Bar */}
      <section className="py-8 bg-[#FFF9F0] border-b border-[#002247]/10 sticky top-16 sm:top-20 z-30 backdrop-blur-md bg-[#FFF9F0]/95 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryFilterTabs
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            counts={counts}
          />
        </div>
      </section>

      {/* 3. Dynamic Filter Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <AnimatePresence mode="wait">
          {/* CATEGORY: ALL */}
          {activeCategory === "all" && (
            <motion.div
              key="all-section"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-20 lg:space-y-28"
            >
              {/* SECTION 1: Client Testimonials */}
              <div className="text-left">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#002247]/10">
                  <div>
                    <div className="inline-flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-widest text-[#C2A03E]">
                      <MessageSquareQuote className="w-4 h-4" />
                      <span>REAL VISITOR EXPERIENCES</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#002247] tracking-tight font-serif">
                      Client Testimonials
                    </h2>
                    <p className="mt-1 text-sm text-slate-600 max-w-xl">
                      Read genuine customer reviews, stories and feedback from travellers exploring Udaipur and Rajasthan with Audichya Tours.
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveCategory("testimonials")}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#007FF0] hover:text-[#002247] transition-colors cursor-pointer shrink-0"
                  >
                    <span>View All Testimonials ({galleryTestimonials.length})</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {galleryTestimonials.slice(0, 3).map((testimonial) => (
                    <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                  ))}
                </div>
              </div>

              {/* SECTION 2: Travel Videos (16:9) */}
              <div className="text-left">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#002247]/10">
                  <div>
                    <div className="inline-flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-widest text-[#C2A03E]">
                      <Film className="w-4 h-4" />
                      <span>CINEMATIC TRAVEL SHOWCASES</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#002247] tracking-tight font-serif">
                      Travel Videos
                    </h2>
                    <p className="mt-1 text-sm text-slate-600 max-w-xl">
                      Full-length cinematic destination films, scenic mountain drives, and premium fleet walkthroughs.
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveCategory("videos")}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#007FF0] hover:text-[#002247] transition-colors cursor-pointer shrink-0"
                  >
                    <span>View All Videos ({travelVideos.length})</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {travelVideos.map((video) => (
                    <VideoCard key={video.id} video={video} onPlay={handlePlayVideo} />
                  ))}
                </div>
              </div>

              {/* SECTION 3: Reels & Shorts (9:16) */}
              <div className="text-left">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#002247]/10">
                  <div>
                    <div className="inline-flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-widest text-[#C2A03E]">
                      <Sparkles className="w-4 h-4" />
                      <span>VERTICAL TRAVEL HIGHLIGHTS</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#002247] tracking-tight font-serif">
                      Reels & Shorts
                    </h2>
                    <p className="mt-1 text-sm text-slate-600 max-w-xl">
                      Short-form vertical highlights, Instagram reels, golden hour sunsets, and royal moments.
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveCategory("reels")}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#007FF0] hover:text-[#002247] transition-colors cursor-pointer shrink-0"
                  >
                    <span>View All Reels ({reelsAndShorts.length})</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                  {reelsAndShorts.slice(0, 4).map((reel) => (
                    <ReelCard key={reel.id} reel={reel} onPlay={handlePlayVideo} />
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* CATEGORY: CLIENT TESTIMONIALS */}
          {activeCategory === "testimonials" && (
            <motion.div
              key="testimonials-section"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="text-left"
            >
              <div className="mb-10 text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-widest text-[#C2A03E]">
                  <MessageSquareQuote className="w-4 h-4" />
                  <span>CLIENT TESTIMONIALS</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002247] tracking-tight font-serif">
                  Stories of Comfort & Royalty
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Hear firsthand experiences from families, honeymooners, and executives who explored Udaipur with our verified chauffeurs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryTestimonials.map((testimonial) => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
              </div>
            </motion.div>
          )}

          {/* CATEGORY: TRAVEL VIDEOS */}
          {activeCategory === "videos" && (
            <motion.div
              key="videos-section"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="text-left"
            >
              <div className="mb-10 text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-widest text-[#C2A03E]">
                  <Film className="w-4 h-4" />
                  <span>CINEMATIC TRAVEL VIDEOS</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002247] tracking-tight font-serif">
                  Destination & Fleet Showcases
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Immerse yourself in high-definition video journeys through Udaipur's lakes, forts, and luxury fleet interiors.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {travelVideos.map((video) => (
                  <VideoCard key={video.id} video={video} onPlay={handlePlayVideo} />
                ))}
              </div>
            </motion.div>
          )}

          {/* CATEGORY: REELS & SHORTS */}
          {activeCategory === "reels" && (
            <motion.div
              key="reels-section"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="text-left"
            >
              <div className="mb-10 text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-widest text-[#C2A03E]">
                  <Sparkles className="w-4 h-4" />
                  <span>REELS & SHORTS</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002247] tracking-tight font-serif">
                  Quick Travel Moments & Reels
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Vertical bite-sized travel clips, behind-the-wheel perspectives, and sunset vibes from Rajasthan.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {reelsAndShorts.map((reel) => (
                  <ReelCard key={reel.id} reel={reel} onPlay={handlePlayVideo} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* 4. Accessible Video Lightbox Modal */}
      <GalleryVideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />

      {/* 5. Luxury Final CTA */}
      <CinematicFinalCTA onOpenBooking={() => onOpenBooking()} />
    </div>
  );
};

