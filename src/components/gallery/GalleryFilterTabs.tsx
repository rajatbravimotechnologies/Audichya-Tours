import React from "react";
import { MessageSquareQuote, Film, Sparkles, LayoutGrid } from "lucide-react";

export type GalleryCategory = "all" | "testimonials" | "videos" | "reels";

interface GalleryFilterTabsProps {
  activeCategory: GalleryCategory;
  onSelectCategory: (category: GalleryCategory) => void;
  counts: {
    all: number;
    testimonials: number;
    videos: number;
    reels: number;
  };
}

export const GalleryFilterTabs: React.FC<GalleryFilterTabsProps> = ({
  activeCategory,
  onSelectCategory,
  counts,
}) => {
  const tabs: Array<{
    id: GalleryCategory;
    label: string;
    icon: React.FC<{ className?: string }>;
    count: number;
  }> = [
    { id: "all", label: "All", icon: LayoutGrid, count: counts.all },
    { id: "testimonials", label: "Client Testimonials", icon: MessageSquareQuote, count: counts.testimonials },
    { id: "videos", label: "Travel Videos", icon: Film, count: counts.videos },
    { id: "reels", label: "Reels & Shorts", icon: Sparkles, count: counts.reels },
  ];

  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto p-1.5 sm:p-2 bg-white rounded-2xl sm:rounded-full border border-[#002247]/10 shadow-sm max-w-full scrollbar-none">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeCategory === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onSelectCategory(tab.id)}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl sm:rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-[#002247] text-white shadow-md border border-[#002247]"
                  : "bg-transparent text-slate-700 hover:text-[#002247] hover:bg-[#FFF9F0]"
              }`}
            >
              <Icon
                className={`w-3.5 h-3.5 ${
                  isActive ? "text-[#C2A03E]" : "text-slate-400"
                }`}
              />
              <span>{tab.label}</span>
              <span
                className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

