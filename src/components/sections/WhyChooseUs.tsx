import React from "react";
import { Sparkles, MapPin, Clock, PhoneCall, Compass, Car, Users, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

interface FeatureCard {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
}

const features: FeatureCard[] = [
  {
    number: "01",
    title: "CONVENIENT DIRECT BOOKING",
    description: "Instant phone and WhatsApp booking with immediate confirmation. No intermediaries or complicated apps.",
    icon: PhoneCall,
    accentColor: "#0F2D5B",
  },
  {
    number: "02",
    title: "PERSONALIZED TRAVEL PLANNING",
    description: "Customized Rajasthan and multi-city tour itineraries tailored around your specific pace and preferences.",
    icon: Compass,
    accentColor: "#D4AF37",
  },
  {
    number: "03",
    title: "LUXURY FLEET & PREMIUM CARS",
    description: "Spotless sedans, Innova Crysta, Innova Hycross, and luxury Force Urbania vans maintained to high standards.",
    icon: Car,
    accentColor: "#0F2D5B",
  },
  {
    number: "04",
    title: "LOCAL SIGHTSEEING EXPERTS",
    description: "Experienced chauffeurs with deep knowledge of Mewar heritage, scenic sunset routes, and culture.",
    icon: MapPin,
    accentColor: "#D4AF37",
  },
  {
    number: "05",
    title: "FAMILY-FRIENDLY TRAVEL OPTIONS",
    description: "Thoughtful child and senior friendly amenities, spacious legroom, and relaxed travel pacing for all ages.",
    icon: Users,
    accentColor: "#0F2D5B",
  },
  {
    number: "06",
    title: "COMFORTABLE VEHICLE OPTIONS",
    description: "From Dzire and Etios to 6-seater MUVs and luxury Urbania coaches, find the exact capacity for your trip.",
    icon: Sparkles,
    accentColor: "#D4AF37",
  },
  {
    number: "07",
    title: "FLEXIBLE TOUR ENQUIRIES",
    description: "Custom pick-up times, adjustable stops, and quick transparent quotes without hidden charges.",
    icon: Clock,
    accentColor: "#0F2D5B",
  },
  {
    number: "08",
    title: "SAFE FAMILY TOUR PACKAGES",
    description: "Verified drivers, commercial permits, 24/7 journey support desk, and safe driving across hill & highway roads.",
    icon: ShieldCheck,
    accentColor: "#D4AF37",
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#FFFFFF] border-t border-[#0F2D5B]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Motion Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
            <span className="w-5 h-[2px] bg-[#D4AF37]" />
            <span>AUDICHYA TOURS ADVANTAGE</span>
            <span className="w-5 h-[2px] bg-[#D4AF37]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F2D5B] tracking-tight leading-tight uppercase [text-wrap:balance]">
            WHY CHOOSE AUDICHYA TOURS
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] font-normal [text-wrap:balance]">
            From local sightseeing and airport transfers to outstation journeys and holiday packages, we aim to make every journey comfortable, convenient and memorable.
          </p>
        </motion.div>

        {/* 4 Feature Cards with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="group relative bg-[#FFF9F0] rounded-2xl p-8 border border-[#0F2D5B]/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header: Editorial Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-sm font-bold text-[#64748B] group-hover:text-[#D4AF37] transition-colors">
                      {feature.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#E6F0FF] text-[#0F2D5B] group-hover:bg-[#0F2D5B] group-hover:text-white transition-all duration-300 flex items-center justify-center shadow-xs border border-[#0F2D5B]/10">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base font-bold uppercase tracking-wider text-[#102A43] mb-3 group-hover:text-[#0F2D5B] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#64748B] leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>

                {/* Subtle Bottom Accent Indicator */}
                <div className="pt-6 mt-6 border-t border-[#0F2D5B]/10 flex items-center text-xs font-semibold text-[#102A43] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[#D4AF37]">Our Standard ⟶</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
