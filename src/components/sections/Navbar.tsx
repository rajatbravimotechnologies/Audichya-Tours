import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "../ui/Logo";
import { siteConfig } from "../../config/site";
import {
  Menu,
  X,
  ArrowRight,
  PhoneCall,
  Home,
  LayoutGrid,
  Car,
  MapPin,
  Compass,
  Plane,
  Heart,
  Info,
} from "lucide-react";
import { motion, useScroll } from "motion/react";

interface NavbarProps {
  onOpenBooking: () => void;
}

const navIconMap: Record<string, React.FC<{ className?: string }>> = {
  Home: Home,
  Services: LayoutGrid,
  Fleet: Car,
  "Tour Packages": Compass,
  "Explore Udaipur": MapPin,
  "Airport Transfers": Plane,
  Weddings: Heart,
  About: Info,
  Contact: PhoneCall,
};

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-4 px-3 sm:px-6 lg:px-8 pointer-events-none">
        {/* Brand Royal Gold Scroll Progress Bar */}
        <motion.div
          style={{ scaleX: useScroll().scrollYProgress }}
          className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#D4AF37] via-[#0F2D5B] to-[#D4AF37] origin-left z-50 pointer-events-none"
        />

        {/* Floating Refined Navbar Container */}
        <div
          className={`w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] max-w-[1500px] mx-auto rounded-2xl sm:rounded-3xl bg-[#FFFFFF]/95 backdrop-blur-md transition-all duration-300 pointer-events-auto border border-[#0F2D5B]/10 box-border ${
            isScrolled
              ? "shadow-lg shadow-[#0F2D5B]/10 border-[#0F2D5B]/15 py-1.5 px-3 sm:px-6 bg-[#FFFFFF]/98"
              : "shadow-md shadow-[#0F2D5B]/5 py-2 px-3 sm:px-6 bg-[#FFFFFF]/95"
          }`}
        >
          <div className="flex items-center justify-between min-h-[56px] sm:min-h-[64px] w-full min-w-0">
            {/* Zone 1: Prominent Original Logo */}
            <Link
              to="/"
              className="flex items-center shrink-0 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-xl py-0.5"
              aria-label="AUDICHYA TOURS – Return to homepage"
            >
              <Logo
                imgClassName="h-12 sm:h-14 md:h-16 xl:h-20 w-auto max-h-[72px]"
              />
            </Link>

            {/* Zone 2: Inline Navigation Links */}
            <nav
              className="hidden xl:flex items-center gap-1 xl:gap-2 2xl:gap-3 text-[13.5px] font-bold text-[#102A43] min-w-0"
              aria-label="Main Navigation"
            >
              {siteConfig.navigation.map((item) => {
                const IconComponent = navIconMap[item.label] || Info;
                return (
                  <NavLink
                    key={item.label}
                    to={item.href}
                    className={({ isActive }) =>
                      `relative px-2.5 py-1.5 xl:px-3 xl:py-2 rounded-xl flex items-center gap-1.5 transition-all duration-200 whitespace-nowrap group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                        isActive
                          ? "bg-[#FFF9F0] text-[#0F2D5B] font-extrabold shadow-xs"
                          : "text-[#102A43] hover:text-[#0F2D5B] hover:bg-[#FFF9F0]/60"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <IconComponent
                          className={`w-4 h-4 shrink-0 transition-transform duration-200 group-hover:scale-110 ${
                            isActive ? "text-[#D4AF37]" : "text-[#64748B] group-hover:text-[#D4AF37]"
                          }`}
                        />
                        <span className="leading-none tracking-tight">{item.label}</span>
                        {isActive && (
                          <span className="absolute bottom-0 left-2 right-2 h-[2.5px] bg-[#D4AF37] rounded-full shadow-xs" />
                        )}
                      </>
                    )}
                  </NavLink>
                );
              })}
            </nav>

            {/* Zone 3: BOOK YOUR TAXI CTA Button */}
            <div className="hidden sm:flex items-center shrink-0">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 xl:px-6 xl:py-2.5 rounded-xl font-black text-xs tracking-wider uppercase text-white bg-[#0F2D5B] hover:bg-[#D4AF37] hover:text-[#102A43] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 shadow-md shadow-[#0F2D5B]/25 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] cursor-pointer"
              >
                <Car className="w-4 h-4" />
                <span>BOOK YOUR TAXI</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile / Tablet Hamburger Button */}
            <div className="flex items-center gap-2 xl:hidden shrink-0">
              <button
                onClick={onOpenBooking}
                className="sm:hidden px-3.5 py-1.5 rounded-xl text-[11px] font-black uppercase tracking-wider bg-[#0F2D5B] text-white shadow-md flex items-center gap-1"
              >
                <Car className="w-3.5 h-3.5" />
                <span>BOOK</span>
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl text-[#102A43] hover:text-[#0F2D5B] hover:bg-[#FFF9F0] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#0F2D5B]/60 backdrop-blur-sm transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Drawer Panel */}
        <div
          className={`absolute top-0 right-0 w-4/5 max-w-sm h-full bg-[#FFFFFF] shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 ease-out transform ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-[#0F2D5B]/10">
              <Logo imgClassName="h-10 w-auto" />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-xl text-[#64748B] hover:text-[#102A43] hover:bg-[#FFF9F0]"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="mt-6 flex flex-col gap-1.5">
              {siteConfig.navigation.map((item) => {
                const IconComponent = navIconMap[item.label] || Info;
                return (
                  <NavLink
                    key={item.label}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-xl text-sm font-bold flex items-center gap-3 transition-colors ${
                        isActive
                          ? "bg-[#FFF9F0] text-[#0F2D5B]"
                          : "text-[#102A43] hover:text-[#0F2D5B] hover:bg-[#FFF9F0]/50"
                      }`
                    }
                  >
                    <IconComponent className="w-4 h-4 text-[#D4AF37]" />
                    <span>{item.label}</span>
                  </NavLink>
                );
              })}
            </nav>
          </div>

          <div className="pt-6 border-t border-[#0F2D5B]/10 space-y-3">
            <a
              href={`tel:${siteConfig.contact.rawPhone}`}
              className="w-full py-3 px-4 rounded-xl font-bold text-xs text-[#102A43] bg-[#E6F0FF] hover:bg-[#D4AF37]/20 text-center flex items-center justify-center gap-2.5 border border-[#0F2D5B]/10"
            >
              <div className="w-6 h-6 rounded-lg bg-[#0F2D5B]/15 flex items-center justify-center text-[#0F2D5B]">
                <PhoneCall className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#64748B]">CALL US NOW</span>
                <span className="text-xs font-black text-[#0F2D5B]">{siteConfig.contact.displayPhone}</span>
              </div>
            </a>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 rounded-xl font-black text-xs uppercase tracking-wider text-white bg-[#0F2D5B] hover:bg-[#D4AF37] hover:text-[#102A43] text-center shadow-md shadow-[#0F2D5B]/25 flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              <Car className="w-4 h-4" />
              <span>BOOK YOUR TAXI</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
