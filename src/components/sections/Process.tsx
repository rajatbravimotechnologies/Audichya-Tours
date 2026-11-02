import React from "react";
import { Car, CalendarCheck, Compass, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export const Process: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "CHOOSE YOUR RIDE",
      description: "Select your vehicle class based on group size, luggage, and journey requirements.",
      icon: Car,
    },
    {
      number: "02",
      title: "BOOK YOUR JOURNEY",
      description: "Share your pickup location, destination, travel date and preferred time for quick confirmation via WhatsApp or phone.",
      icon: CalendarCheck,
    },
    {
      number: "03",
      title: "ENJOY UDAIPUR",
      description: "Sit back and relax while our verified local chauffeur delivers a seamless trip.",
      icon: Compass,
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FFF9F0] border-t border-[#0F2D5B]/10">
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
            <span>Effortless 3-Step Process</span>
            <span className="w-5 h-[2px] bg-[#D4AF37]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F2D5B] tracking-tight leading-tight [text-wrap:balance]">
            How It Works
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] font-normal [text-wrap:balance]">
            Three simple steps to secure your premium transportation across Udaipur and Rajasthan.
          </p>
        </motion.div>

        {/* 3 Step Timeline */}
        <div className="relative">
          {/* Connecting Line (Desktop Horizontal) */}
          <div className="hidden lg:block absolute top-1/2 left-1/6 right-1/6 -translate-y-1/2 h-[2px] bg-gradient-to-r from-[#0F2D5B]/20 via-[#D4AF37]/40 to-[#0F2D5B]/20 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15, ease: "easeOut" }}
                  whileHover={{ y: -6 }}
                  className="group bg-white rounded-3xl p-8 border border-[#0F2D5B]/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left"
                >
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0F2D5B] bg-[#E6F0FF] px-3 py-1 rounded-full border border-[#0F2D5B]/10">
                        STEP {step.number}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-white border border-[#0F2D5B]/10 text-[#0F2D5B] group-hover:bg-[#0F2D5B] group-hover:text-white transition-all duration-300 flex items-center justify-center shadow-xs">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    <h3 className="text-lg font-extrabold text-[#102A43] mb-3 tracking-wide">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#64748B] leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#0F2D5B]/10 flex items-center justify-between text-xs font-semibold text-[#64748B] group-hover:text-[#D4AF37] transition-colors">
                    <span>{idx === 2 ? "Ready to travel" : `Proceed to Step 0${idx + 2}`}</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
