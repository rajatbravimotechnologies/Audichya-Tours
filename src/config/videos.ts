/**
 * AUDICHYA TOURS – Video Asset Catalog & Mapping
 * Maps 9 narrative chapters across the cinematic video assets.
 */

export interface VideoAsset {
  id: string;
  chapterNumber: string;
  title: string;
  locationLabel: string;
  tagline: string;
  description: string;
  src: string;
  poster: string;
}

export const HERO_VIDEOS = [
  {
    id: "hero-aerial",
    src: "/videos/Ultra-realistic_cinematic_aerial_establishing_shot_20260930114809.mp4",
  },
  {
    id: "hero-reveal",
    src: "/videos/Premium_luxury_automotive_commercial_shot_20260930114708.mp4",
  },
  {
    id: "hero-drive",
    src: "/videos/Photorealistic_cinematic_driving_sequence._The_20260930114702.mp4",
  },
];

export const JOURNEY_CHAPTERS: VideoAsset[] = [
  {
    id: "pichola",
    chapterNumber: "01",
    title: "LAKE PICHOLA",
    locationLabel: "UDAIPUR • RAJASTHAN",
    tagline: "Where the city meets the lake.",
    description:
      "Experience serene lakeside drives along Lake Pichola as reflection glimmers off historic palaces and heritage ghats.",
    src: "/videos/Ultra-realistic_cinematic_driving_scene._The_20260930114707.mp4",
    poster: "/images/posters/pichola.jpg",
  },
  {
    id: "city-palace",
    chapterNumber: "02",
    title: "CITY PALACE",
    locationLabel: "ROYAL HERITAGE",
    tagline: "Discover Udaipur's royal heritage.",
    description:
      "Glide past Rajasthan's largest palace complex in comfort and quiet executive elegance with your dedicated chauffeur.",
    src: "/videos/Premium_cinematic_hero_shot_of_20260930114654.mp4",
    poster: "/images/posters/city-palace.jpg",
  },
  {
    id: "old-udaipur",
    chapterNumber: "03",
    title: "OLD UDAIPUR & JAGDISH",
    locationLabel: "CULTURAL HEART",
    tagline: "Timeless lanes and vibrant bazaars.",
    description:
      "Navigate historic city gateways, intricate temple carvings, and bustling spice markets with local driver expertise.",
    src: "public/videos/Photorealistic_cinematic_driving_sequence._The_20260930114702.mp4",
    poster: "/images/posters/old-udaipur.jpg",
  },
  {
    id: "sajjangarh",
    chapterNumber: "04",
    title: "SAJJANGARH MONSOON PALACE",
    locationLabel: "PANORAMIC SUNSET",
    tagline: "High above the lakes.",
    description:
      "Ascend Bansdara Peak for breathtaking panoramic golden hour views over Udaipur's lakes and hill sanctuary.",
    src: "public/videos/Epic_but_realistic_cinematic_travel-commercial_20260930114658.mp4",
    poster: "/images/posters/sajjangarh.jpg",
  },
  {
    id: "aravalli",
    chapterNumber: "05",
    title: "ARAVALLI HILLS & FORTS",
    locationLabel: "OUTSTATION & EXPEDITIONS",
    tagline: "Winding mountain highways.",
    description:
      "Embark on outstation excursions to Kumbhalgarh Fort and Ranakpur with smooth, hill-tested suspension and power.",
    src: "/videos/Ultra-realistic_cinematic_aerial_establishing_shot_20260930114712.mp4",
    poster: "/images/posters/aravalli.jpg",
  },
];

export const FINAL_CTA_VIDEO = {
  id: "final-cta-cab",
  src: "/videos/Premium_luxury_automotive_commercial_shot_20260930114708.mp4",
  poster: "/images/posters/final-cta.jpg",
};
