import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface PreloaderProps {
  onComplete?: () => void;
  minDuration?: number; // duration in ms
}

export const Preloader: React.FC<PreloaderProps> = ({
  onComplete,
  minDuration = 1200,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, minDuration);

    return () => clearTimeout(timer);
  }, [minDuration, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FFF9F0] text-[#0F2D5B] selection:bg-[#D4AF37]"
        >
          {/* Minimal Luxury Content Container */}
          <div className="flex flex-col items-center text-center p-6 space-y-6">
            {/* Official Logo Image */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative"
            >
              <img
                src="/logo.png"
                alt="AUDICHYA TOURS Logo"
                className="h-20 sm:h-28 w-auto object-contain drop-shadow-md"
              />
            </motion.div>

            {/* Elegant & Perfectly Aligned Loading Bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center w-full max-w-[220px] sm:max-w-[280px] pt-1"
            >
              <div className="w-full h-1.5 bg-[#0F2D5B]/20 rounded-full overflow-hidden shadow-inner">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.2,
                    ease: "easeInOut",
                  }}
                  className="w-full h-full bg-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.8)]"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
