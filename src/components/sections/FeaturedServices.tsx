import React from "react";
import { servicesData, ServiceItem } from "../../data/services";
import {
  MapPin,
  Plane,
  Camera,
  Compass,
  Sparkles,
  Building2,
  Train,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { motion } from "motion/react";

interface FeaturedServicesProps {
  onSelectService: (serviceTitle: string) => void;
  onExploreAllServices: () => void;
}

const iconMap = {
  MapPin,
  Plane,
  Camera,
  Compass,
  Sparkles,
  Building2,
  Train,
};

export const FeaturedServices: React.FC<FeaturedServicesProps> = ({
  onSelectService,
  onExploreAllServices,
}) => {
  return (
    <section id="services-preview" className="py-20 lg:py-28 bg-[#FFF9F0] border-t border-[#0F2D5B]/10 relative overflow-hidden">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: `url('/images/Journeys Designed Around You.jpg')` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading with Motion Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
            <span className="w-5 h-[2px] bg-[#D4AF37]" />
            <span>TRAVEL YOUR WAY</span>
            <span className="w-5 h-[2px] bg-[#D4AF37]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F2D5B] tracking-tight leading-tight [text-wrap:balance]">
            Journeys Designed Around You
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] font-normal [text-wrap:balance]">
            Whether you're arriving in Udaipur, exploring the city or planning a special occasion, we make every journey comfortable and convenient.
          </p>
        </motion.div>

        {/* 3 Featured Service Cards Grid with Staggered Fade-Up */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.slice(0, 3).map((service: ServiceItem, idx: number) => {
            const Icon = (iconMap as Record<string, React.ElementType>)[service.iconName] || MapPin;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.12, ease: "easeOut" }}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-3xl p-7 border border-[#0F2D5B]/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-2xl bg-[#E6F0FF] text-[#0F2D5B] group-hover:bg-[#0F2D5B] group-hover:text-white transition-all duration-300 flex items-center justify-center shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#102A43] bg-[#D4AF37]/20 px-2.5 py-1 rounded-full border border-[#D4AF37]/30 whitespace-pre-line text-right leading-tight">
                      {service.tagline}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold uppercase tracking-wider text-[#0F2D5B] mb-2 group-hover:text-[#D4AF37] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#64748B] mb-6 leading-relaxed font-normal">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-8 text-xs text-[#102A43]">
                    {service.highlights.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#0F2D5B] hover:bg-[#D4AF37] hover:text-[#102A43] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Book This Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Section CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 text-center"
        >
          <button
            onClick={onExploreAllServices}
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-[#0F2D5B] bg-white border border-[#0F2D5B] hover:bg-[#E6F0FF] transition-all duration-200 shadow-xs cursor-pointer"
          >
            <span>EXPLORE ALL SERVICES</span>
            <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:text-[#0F2D5B] transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
