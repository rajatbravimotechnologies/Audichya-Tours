import React from "react";
import { Star, CheckCircle, Quote, MapPin } from "lucide-react";
import { GalleryTestimonial } from "../../data/gallery";
import { motion } from "motion/react";

interface TestimonialCardProps {
  testimonial: GalleryTestimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  // Generate fallback initials if no avatar
  const initials = testimonial.name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group relative bg-white rounded-3xl p-6 sm:p-7 border border-[#002247]/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden text-left"
    >
      {/* Top Gold Subtle Gradient Accent */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#C2A03E]/40 to-transparent group-hover:via-[#C2A03E] transition-all duration-300" />

      <div>
        {/* Header: Avatar, Name, Location & Stars */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3.5">
            {testimonial.avatar ? (
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                loading="lazy"
                className="w-12 h-12 rounded-full object-cover border-2 border-[#C2A03E]/40 shadow-xs shrink-0"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-[#002247] text-[#C2A03E] font-bold text-sm flex items-center justify-center border-2 border-[#C2A03E]/40 shadow-xs shrink-0">
                {initials}
              </div>
            )}
            <div>
              <div className="flex items-center gap-1.5">
                <h4 className="text-sm font-bold text-[#002247] leading-tight">
                  {testimonial.name}
                </h4>
                {testimonial.verified && (
                  <CheckCircle className="w-3.5 h-3.5 text-[#007FF0] shrink-0" />
                )}
              </div>
              {testimonial.location && (
                <span className="text-[11px] font-medium text-slate-500 block mt-0.5">
                  {testimonial.location}
                </span>
              )}
            </div>
          </div>

          {/* Quote Icon */}
          <div className="w-8 h-8 rounded-full bg-[#FFF9F0] text-[#C2A03E] flex items-center justify-center shrink-0 border border-[#C2A03E]/20">
            <Quote className="w-4 h-4" />
          </div>
        </div>

        {/* 5-Star Rating */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-[#C2A03E] text-[#C2A03E]" />
          ))}
          <span className="text-[11px] font-bold text-[#002247] ml-1.5">5.0</span>
        </div>

        {/* Review Text */}
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal italic">
          "{testimonial.review}"
        </p>
      </div>

      {/* Footer: Destination & Date Tag */}
      <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between gap-2 flex-wrap text-[11px]">
        <div className="inline-flex items-center gap-1 text-[#007FF0] font-semibold bg-[#EAF5FF] px-2.5 py-1 rounded-lg">
          <MapPin className="w-3 h-3 shrink-0" />
          <span className="line-clamp-1">{testimonial.destination}</span>
        </div>
        <span className="text-slate-400 font-mono text-[10px]">
          {testimonial.dateNote}
        </span>
      </div>
    </motion.div>
  );
};

