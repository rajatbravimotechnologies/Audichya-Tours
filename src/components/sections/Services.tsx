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

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
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

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FFF9F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
            <span className="w-5 h-[2px] bg-[#D4AF37]" />
            <span>Comprehensive Travel Services</span>
            <span className="w-5 h-[2px] bg-[#D4AF37]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F2D5B] tracking-tight leading-tight [text-wrap:balance]">
            Wherever You Need to Go
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] font-normal [text-wrap:balance]">
            From prompt airport pickups to heritage lake cruises, outstation forts, and grand palace celebrations.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service: ServiceItem) => {
            const Icon = iconMap[service.iconName];
            return (
              <div
                key={service.id}
                className="group bg-white rounded-3xl p-8 border border-[#0F2D5B]/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon & Tagline */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#FFF9F0] text-[#0F2D5B] group-hover:bg-[#0F2D5B] group-hover:text-white transition-all duration-300 flex items-center justify-center shadow-xs border border-[#0F2D5B]/10">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#64748B]">
                      AT-{service.id.slice(0, 3).toUpperCase()}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-lg font-extrabold uppercase tracking-wider text-[#0F2D5B] mb-1 group-hover:text-[#D4AF37] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#D4AF37] mb-3 whitespace-pre-line">
                    {service.tagline}
                  </p>

                  {/* Main Description */}
                  <p className="text-sm text-[#64748B] mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-2 mb-8 text-xs text-[#102A43]">
                    {service.highlights.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action */}
                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#0F2D5B] text-white hover:bg-[#D4AF37] hover:text-[#0F2D5B] transition-all duration-200 shadow-md text-center flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none"
                >
                  <span>Book This Service</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
