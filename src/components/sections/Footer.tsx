import React from "react";
import { Link } from "react-router-dom";
import { siteConfig } from "../../config/site";
import { Logo } from "../ui/Logo";
import { Phone, Mail, MapPin, MessageCircle, ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerServices = [
    { label: "Udaipur Local Sightseeing", href: "/taxi-services" },
    { label: "Airport Pickup & Drop", href: "/taxi-services" },
    { label: "Rajasthan Heritage Tours", href: "/tour-packages" },
    { label: "Outstation Taxi", href: "/taxi-services" },
    { label: "Tour Packages", href: "/tour-packages" },
    { label: "Luxury Urbania & Tempo Fleet", href: "/fleet" },
  ];

  return (
    <footer id="contact" className="bg-[#0F2D5B] text-white pt-16 pb-24 lg:pb-12 border-t border-[#D4AF37]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          {/* Brand Info Column */}
          <div className="lg:col-span-4 text-left">
            <div className="mb-4">
              <Link to="/">
                <Logo imgClassName="h-14 sm:h-16 w-auto" />
              </Link>
            </div>
            <p className="text-sm text-[#E6F0FF] font-normal leading-relaxed mb-6 max-w-sm">
              {siteConfig.brand.description}
            </p>
            <div className="text-xs font-serif text-[#D4AF37] tracking-wider uppercase font-bold">
              "{siteConfig.brand.tagline}"
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-[#E6F0FF]">
              {siteConfig.navigation.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="hover:text-[#D4AF37] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs text-[#E6F0FF]">
              {footerServices.map((service) => (
                <li key={service.label}>
                  <Link
                    to={service.href}
                    className="hover:text-[#D4AF37] transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Contact & Inquiries
            </h4>
            <ul className="space-y-3 text-xs text-[#E6F0FF]">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[#E6F0FF]/70 text-[10px] uppercase font-mono">Direct Phone</span>
                  <a href={`tel:${siteConfig.contact.rawPhone1}`} className="hover:text-[#D4AF37] transition-colors font-medium">
                    {siteConfig.contact.phone1}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[#E6F0FF]/70 text-[10px] uppercase font-mono">WhatsApp</span>
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#D4AF37] transition-colors"
                  >
                    {siteConfig.contact.whatsappDisplay}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[#E6F0FF]/70 text-[10px] uppercase font-mono">Email</span>
                  <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-[#D4AF37] transition-colors">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[#E6F0FF]/70 text-[10px] uppercase font-mono">Location</span>
                  <span>{siteConfig.contact.address}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Quiet Sub-footer */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#E6F0FF]">
          <div>
            © {new Date().getFullYear()} {siteConfig.brand.legalName}. All rights reserved.
          </div>

          {/* Developer Credit Watermark */}
          <div className="flex items-center gap-1.5 text-[#E6F0FF]">
            <span>Maintained & Developed by</span>
            <a
              href="https://bravimotechnologies.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4AF37] hover:text-white font-bold transition-colors underline decoration-[#D4AF37]/40 underline-offset-4 flex items-center gap-1"
            >
              <span>Bravimo Technologies</span>
            </a>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <span className="hover:text-[#D4AF37] cursor-pointer">Terms & Conditions</span>
            <span>·</span>
            <span className="hover:text-[#D4AF37] cursor-pointer">Privacy Policy</span>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[#D4AF37] hover:text-white font-semibold transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
