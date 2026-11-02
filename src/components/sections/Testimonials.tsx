import React from "react";
import { testimonialsPlaceholderData } from "../../data/testimonials";
import { Quote, Star, CheckCircle } from "lucide-react";

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#E6F0FF] border-t border-[#0F2D5B]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
            <span className="w-5 h-[2px] bg-[#D4AF37]" />
            <span>Rider Experience</span>
            <span className="w-5 h-[2px] bg-[#D4AF37]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F2D5B] tracking-tight leading-tight [text-wrap:balance]">
            What Our Riders Say
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] font-normal [text-wrap:balance]">
            Real travel moments from airport pickups, outstation tours, and destination celebrations.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsPlaceholderData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-8 border border-[#0F2D5B]/10 shadow-sm flex flex-col justify-between text-left hover:shadow-md transition-shadow relative"
            >
              <div>
                {/* Quote Icon & Travel Category */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#E6F0FF] text-[#0F2D5B] flex items-center justify-center border border-[#0F2D5B]/10">
                    <Quote className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>
                </div>

                {/* Travel Type Badge */}
                <span className="text-[11px] font-bold text-[#D4AF37] tracking-wide block mb-3 uppercase">
                  {item.travelType}
                </span>

                {/* Quote Content */}
                <p className="text-sm text-[#102A43] leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-4 border-t border-[#0F2D5B]/10 flex items-center justify-between text-xs text-[#64748B]">
                <span className="font-bold text-[#0F2D5B]">{item.source}</span>
                <span className="flex items-center gap-1 text-[11px] text-[#D4AF37] font-semibold">
                  <CheckCircle className="w-3.5 h-3.5" />
                  {item.verifiedLabel}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
