export interface FleetItem {
  id: string;
  category: 'SEDAN' | 'PREMIUM SUV / MUV' | 'GROUP TRAVEL' | 'LARGE GROUP TRANSPORT' | 'FAMILY MUV';
  title: string;
  subtitle: string;
  description: string;
  passengers: string;
  luggage: string;
  climateControl: string;
  idealFor: string;
  features: string[];
  image: string;
  images?: string[];
  objectPosition?: string;
  objectFit?: 'cover' | 'contain';
}

export const fleetData: FleetItem[] = [
  {
    id: "dzire",
    category: "SEDAN",
    title: "Maruti Suzuki Swift Dzire",
    subtitle: "Smart & Economical City & Outstation Cab",
    description: "The most trusted sedan for Udaipur city tours, airport transfers, and outstation trips. Compact, reliable, and comfortable for small groups.",
    passengers: "Up to 4 Passengers",
    luggage: "2 Standard Luggage + 2 Handbags",
    climateControl: "Air-Conditioned Cabin",
    idealFor: "Airport transfers, local sightseeing, couples & executive city travel",
    features: [
      "Comfortable executive seating",
      "Chilled air-conditioned cabin",
      "Smooth city & highway maneuverability",
      "Punctual & courteous chauffeur"
    ],
    image: "/images/dzire.webp",
    objectPosition: "center"
  },
  {
    id: "etios",
    category: "SEDAN",
    title: "Toyota Etios",
    subtitle: "Spacious Cabin & Smooth Comfort",
    description: "A comfortable and economical choice for Udaipur airport transfers, local sightseeing, couples, and small family holiday tours.",
    passengers: "Up to 4 Passengers",
    luggage: "2 Standard Luggage + 2 Handbags",
    climateControl: "Air-Conditioned Cabin",
    idealFor: "Airport transfers, local sightseeing, couples & small families",
    features: [
      "Spotless sanitized interiors",
      "Air-conditioned cabin",
      "Smooth ride on city & highway routes",
      "Dedicated professional chauffeur"
    ],
    image: "/images/etios.webp",
    objectPosition: "center"
  },
  {
    id: "aura",
    category: "SEDAN",
    title: "Hyundai Aura",
    subtitle: "Modern Comfort & Refined Style",
    description: "Modern, quiet, and convenient sedan tailored for city sightseeing, railway transfers, business trips, and day excursions around Udaipur.",
    passengers: "Up to 4 Passengers",
    luggage: "2 Standard Luggage Bags",
    climateControl: "Air-Conditioned Cabin",
    idealFor: "City travel, airport transfers, business trips & outstation journeys",
    features: [
      "Modern quiet cabin design",
      "Chilled air-conditioned climate",
      "Smooth ride comfort",
      "Dedicated professional driver"
    ],
    image: "/images/Aura.webp",
    objectPosition: "center"
  },
  {
    id: "ertiga",
    category: "FAMILY MUV",
    title: "Maruti Suzuki Ertiga",
    subtitle: "Flexible 6-Seater Family Travel",
    description: "A spacious and versatile vehicle perfect for family holidays, local sightseeing, airport runs, and outstation journeys to Kumbhalgarh & Chittorgarh.",
    passengers: "6 Passengers",
    luggage: "2–3 Medium Suitcases + Roof Space",
    climateControl: "Dual AC with Rear Vents",
    idealFor: "Family city sightseeing, airport runs & day excursions",
    features: [
      "Flexible 3-row seating arrangement",
      "Dual air-conditioned cabin",
      "Economical family group travel",
      "Courteous local chauffeur"
    ],
    image: "/images/Ertiga.webp",
    objectPosition: "center"
  },
  {
    id: "carens",
    category: "FAMILY MUV",
    title: "Kia Carens",
    subtitle: "Premium 6–7 Seater Family Cruiser",
    description: "Modern styling, plush seating, and generous legroom make the Kia Carens a top choice for family tour packages and comfortable highway travel.",
    passengers: "6–7 Passengers",
    luggage: "3–4 Medium Bags + Overhead Space",
    climateControl: "Multi-Zone Automatic Climate Control",
    idealFor: "Family holiday tours, outstation trips & executive transfers",
    features: [
      "Plush captain & bench seats",
      "Multi-row roof AC vents",
      "Advanced safety & smooth highway suspension",
      "Experienced highway chauffeur"
    ],
    image: "/images/Ertiga.webp",
    objectPosition: "center"
  },
  {
    id: "innova-crysta",
    category: "PREMIUM SUV / MUV",
    title: "Toyota Innova Crysta",
    subtitle: "Premium Luxury & Highway Comfort",
    description: "The gold standard of luxury and comfort for Rajasthan tour packages, destination wedding guests, and long-distance outstation travel.",
    passengers: "6–7 Passengers",
    luggage: "4 Large Suitcases + Hand Luggage",
    climateControl: "Multi-row Air Conditioning Vents",
    idealFor: "Family holidays, palace wedding guests & outstation fort tours",
    features: [
      "Superior legroom & luxury captain seating",
      "Multi-row individual climate control",
      "Smooth long-distance suspension",
      "Experienced verified highway chauffeur"
    ],
    image: "/images/innova-crysta_2.webp",
    objectPosition: "center"
  },
  {
    id: "innova-hycross",
    category: "PREMIUM SUV / MUV",
    title: "Toyota Innova Hycross",
    subtitle: "Next-Gen Luxury & Ultra Comfort",
    description: "Ultra-modern luxury cabin, hybrid smoothness, and supreme legroom designed for VIP transfers, wedding rentals, and corporate travel in Udaipur.",
    passengers: "6–7 Passengers",
    luggage: "4 Large Suitcases + Handbags",
    climateControl: "Automatic Multi-Zone Climate Control",
    idealFor: "VIP delegates, luxury wedding transport & bespoke Rajasthan tours",
    features: [
      "Ultra-spacious ergonomic seating",
      "Whisper-quiet hybrid journey",
      "Premium ambient atmosphere",
      "Uniformed VIP executive chauffeur"
    ],
    image: "/images/innova-crysta_1.webp",
    objectPosition: "center"
  },
  {
    id: "tempo-traveller",
    category: "GROUP TRAVEL",
    title: "Force Tempo Traveller (9, 10, 12, 13, 17, 25 Seater)",
    subtitle: "Spacious Group & Family Travel",
    description: "Travel together comfortably in our extensive Tempo Traveller fleet with configurations from 9 to 25 seats for family tours, wedding convoys, and school or corporate trips.",
    passengers: "9, 10, 12, 13, 17 to 25 Seater Options",
    luggage: "Dedicated Large Luggage Boot & Overhead Racks",
    climateControl: "High-Power Dual-Blower Roof AC",
    idealFor: "Large family tours, wedding guest shuttles, corporate groups & school trips",
    features: [
      "Push-back luxury reclining seats",
      "Generous aisle & head room",
      "Individual roof AC vents & music system",
      "Experienced group tour chauffeur"
    ],
    image: "/images/Tempo Traveller.webp",
    objectPosition: "center"
  },
  {
    id: "force-urbania",
    category: "LARGE GROUP TRANSPORT",
    title: "The Force Urbania Luxury (9, 10, 12, 13, 17 Seater)",
    subtitle: "Largest Force Urbania Vendor in Udaipur",
    description: "Experience world-class luxury group travel. As the largest Force Urbania vendor in Udaipur, Audichya Tours offers 9, 10, 12, 13, and 17-seater Urbania vans for royal weddings, corporate events, and VIP group tours.",
    passengers: "9, 10, 12, 13 & 17 Seater Configurations",
    luggage: "Under-Floor & Overhead Heavy Luggage Bays",
    climateControl: "Individual High-Capacity Air Vents",
    idealFor: "Royal wedding convoys, corporate delegates, VIP multi-city tours & luxury excursions",
    features: [
      "Wide-body ultra-luxury reclining bucket seats",
      "Individual AC vents & USB charging ports",
      "Panoramic UV-cut travel windows",
      "Premier luxury coach captain"
    ],
    image: "/images/Urbania-1.webp",
    images: [
      "/images/Urbania-1.webp",
      "/images/Urbania-2.webp",
      "/images/Urbania-3.webp"
    ],
    objectPosition: "center"
  }
];
