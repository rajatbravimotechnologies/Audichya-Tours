import React from "react";
import { Users, Car, MapPin, Star } from "lucide-react";
import { motion } from "motion/react";

export const TrustBar: React.FC = () => {
  const stats = [
    {
      icon: Users,
      value: "5,000+",
      label: "Happy Travelers",
    },
    {
      icon: Car,
      value: "50+",
      label: "Vehicles Available",
    },
    {
      icon: MapPin,
      value: "150+",
      label: "Destinations Covered",
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Customer Rating",
    },
  ];

  return (
    <section className="bg-[#FFF9F0] border-y border-[#0F2D5B]/10 py-8 sm:py-10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1, ease: "easeOut" }}
                whileHover={{ y: -3 }}
                className="bg-white rounded-2xl p-5 border border-[#0F2D5B]/10 shadow-xs flex flex-col items-center text-center group transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-[#E6F0FF] text-[#0F2D5B] group-hover:bg-[#0F2D5B] group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-3 border border-[#0F2D5B]/10">
                  <Icon className="w-5 h-5 text-[#D4AF37] group-hover:text-[#D4AF37]" />
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-[#0F2D5B] tracking-tight mb-1">
                  {item.value}
                </h4>
                <p className="text-xs sm:text-sm text-[#64748B] font-bold uppercase tracking-wider">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
