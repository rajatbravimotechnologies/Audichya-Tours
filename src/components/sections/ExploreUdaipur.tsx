import React, { useState } from "react";
import { destinationsData, DestinationItem, tourPackagesData, TourPackageItem } from "../../data/destinations";
import { ImagePlaceholder, ImageTheme } from "../ui/ImagePlaceholder";
import { ArrowRight, MapPin, Clock, Compass, CheckCircle2 } from "lucide-react";
import { UdaipurPalaceLineArt } from "../ui/UdaipurPalaceLineArt";
import { AravalliMountainLineArt } from "../ui/AravalliMountainLineArt";
import { GoldDetailsOverlay } from "../ui/GoldDetailsOverlay";

interface ExploreUdaipurProps {
  onSelectDestination: (destName: string) => void;
}

export const ExploreUdaipur: React.FC<ExploreUdaipurProps> = ({ onSelectDestination }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Destinations" },
    { id: "packages", label: "Tour Packages" },
    { id: "local", label: "Local Sightseeing" },
    { id: "outstation", label: "Outstation Tours" },
    { id: "palace", label: "Palaces & Forts" },
    { id: "lakes", label: "Lakes & Sunsets" },
    { id: "culture", label: "Temples & Heritage" },
  ];

  const filteredDestinations = destinationsData.filter((item) => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "local") return item.category === "local" || !item.category;
    if (selectedCategory === "outstation") return item.category === "outstation";
    if (selectedCategory === "palace")
      return (
        item.id.includes("palace") ||
        item.id.includes("fort") ||
        item.type.includes("Palace") ||
        item.type.includes("Fort") ||
        item.type.includes("UNESCO")
      );
    if (selectedCategory === "lakes")
      return item.id.includes("lake") || item.id.includes("pichola") || item.type.includes("Lake");
    if (selectedCategory === "culture")
      return (
        item.id.includes("temple") ||
        item.id.includes("haveli") ||
        item.id.includes("shilpgram") ||
        item.id.includes("cenotaph") ||
        item.id.includes("bagh") ||
        item.type.includes("Heritage") ||
        item.type.includes("Religious") ||
        item.type.includes("Pilgrimage") ||
        item.type.includes("Jain")
      );
    return true;
  });

  const getThemeForDest = (id: string): ImageTheme => {
    if (id.includes("city-palace")) return "city-palace";
    if (id.includes("pichola")) return "lake-pichola";
    if (id.includes("fateh")) return "fateh-sagar";
    if (id.includes("monsoon") || id.includes("sajjangarh")) return "monsoon-palace";
    if (id.includes("jagdish")) return "jagdish-temple";
    if (id.includes("saheliyon")) return "saheliyon-ki-bari";
    if (id.includes("bagore")) return "bagore-ki-haveli";
    if (id.includes("shilpgram")) return "shilpgram";
    return "hero";
  };

  return (
    <section id="explore" className="py-16 lg:py-24 bg-[#FFF9F0] border-t border-[#0F2D5B]/10 relative overflow-hidden">
      {/* Section uses clean website theme color #FFF9F0 with subtle vector line art */}
      {/* Background Layer Artwork */}
      <div className="absolute top-0 right-0 z-0 pointer-events-none">
        <UdaipurPalaceLineArt opacity={0.09} className="w-[420px] lg:w-[580px] h-auto" />
      </div>
      <div className="absolute top-6 left-0 z-0 pointer-events-none hidden sm:block">
        <AravalliMountainLineArt opacity={0.08} color="#D4AF37" className="w-[380px] h-auto" />
      </div>
      <GoldDetailsOverlay />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-6">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#D4AF37]">
              <span className="w-8 h-[1px] bg-[#D4AF37]" />
              <span>THE CITY OF LAKES & BEYOND</span>
              <span className="w-4 h-[1px] bg-[#D4AF37]" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F2D5B] tracking-tight leading-tight [text-wrap:balance]">
              Tour Packages & Sightseeing Destinations
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#64748B] font-normal leading-relaxed [text-wrap:balance]">
              From iconic local lakes & royal cenotaphs to majestic outstation forts & hill stations, book comfortable cabs for every route.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-white/80 rounded-2xl border border-[#0F2D5B]/10 self-start md:self-auto shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-[#0F2D5B] text-white shadow-xs"
                    : "text-[#102A43] hover:text-[#0F2D5B] hover:bg-[#E6F0FF]/60"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid: Destinations or Tour Packages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {selectedCategory === "packages" ? (
            tourPackagesData.map((pkg: TourPackageItem) => (
              <div
                key={pkg.id}
                className="group bg-white rounded-2xl overflow-hidden border border-[#0F2D5B]/10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#0F2D5B]/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-black text-[#D4AF37] tracking-wider border border-[#D4AF37]/30">
                      {pkg.code}
                    </div>
                    <div className="absolute top-3 right-3 bg-[#D4AF37] text-[#102A43] font-bold px-2 py-0.5 rounded text-[10px] uppercase tracking-wider shadow-xs">
                      Tour Package
                    </div>
                  </div>

                  <div className="p-5 text-left">
                    <div className="flex items-center gap-1 text-[11px] font-mono text-[#64748B] mb-1">
                      <Clock className="w-3 h-3 text-[#D4AF37]" /> {pkg.duration}
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[#0F2D5B] group-hover:text-[#D4AF37] transition-colors mb-2">
                      {pkg.title}
                    </h3>

                    <p className="text-xs text-[#64748B] leading-relaxed mb-3">
                      {pkg.description}
                    </p>

                    <div className="space-y-1 mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] block">Places Covered:</span>
                      <ul className="text-[11px] text-[#102A43] space-y-0.5">
                        {pkg.placesCovered.map((place, idx) => (
                          <li key={idx} className="flex items-center gap-1.5 truncate">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                            <span className="truncate">{place}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-0">
                  <button
                    onClick={() => onSelectDestination(pkg.title)}
                    className="w-full py-2.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#0F2D5B] hover:bg-[#D4AF37] hover:text-[#102A43] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <span>Book Tour Package</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            filteredDestinations.map((dest: DestinationItem) => {
              const theme = getThemeForDest(dest.id);
              return (
                <div
                  key={dest.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-[#0F2D5B]/10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    {/* Image Container */}
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <ImagePlaceholder
                        theme={theme}
                        title={dest.name}
                        subtitle={dest.tagline}
                        src={dest.image}
                        aspectRatio="4/3"
                      />
                      <div className="absolute top-3 left-3 bg-[#0F2D5B]/85 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold text-white tracking-wide border border-white/10">
                        {dest.type}
                      </div>
                      {dest.category === "outstation" && (
                        <div className="absolute top-3 right-3 bg-[#D4AF37] text-[#102A43] font-bold px-2 py-0.5 rounded text-[10px] uppercase tracking-wider shadow-xs">
                          Outstation
                        </div>
                      )}
                    </div>

                    {/* Card Content */}
                    <div className="p-5 text-left">
                      <div className="flex items-center justify-between text-xs text-[#64748B] mb-1">
                        <span className="font-hindi text-[#102A43] font-bold text-xs">{dest.hindiName}</span>
                        <span className="flex items-center gap-1 font-mono text-[11px]">
                          <Clock className="w-3 h-3 text-[#D4AF37]" /> {dest.idealDuration}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-[#0F2D5B] group-hover:text-[#D4AF37] transition-colors mb-2">
                        {dest.name}
                      </h3>

                      <p className="text-xs text-[#64748B] leading-relaxed mb-4 line-clamp-3">
                        {dest.description}
                      </p>

                      <div className="flex items-center gap-1.5 text-[11px] text-[#102A43] mb-2 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                        <span className="truncate">{dest.distanceFromCenter}</span>
                      </div>
                    </div>
                  </div>

                  {/* Explore & Book Button */}
                  <div className="px-5 pb-5 pt-0">
                    <button
                      onClick={() => onSelectDestination(dest.name)}
                      className="w-full py-2.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#0F2D5B] hover:bg-[#D4AF37] hover:text-[#102A43] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                    >
                      <span>Book Cab Here</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};
