export interface TourItineraryDay {
  day: number;
  title: string;
  description: string;
  highlights: string[];
}

export interface TourPackage {
  slug: string;
  category: "udaipur" | "rajasthan" | "multi-city" | "custom";
  categoryLabel: string;
  title: string;
  duration: string;
  destinationsCovered: string[];
  shortDescription: string;
  overview: string;
  image: string;
  heroImage: string;
  highlights: string[];
  dayWiseItinerary: TourItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  recommendedVehicles: string[];
}

export interface DestinationItem {
  id: string;
  name: string;
  tagline: string;
  image: string;
  tourCount: string;
  highlights: string[];
}

export const destinationShowcase: DestinationItem[] = [
  {
    id: "udaipur",
    name: "Udaipur",
    tagline: "The City of Lakes & Palaces",
    image: "/images/City Palace.webp",
    tourCount: "4 Curated Tours",
    highlights: ["City Palace", "Lake Pichola", "Jagdish Temple", "Fateh Sagar", "Sajjangarh"],
  },
  {
    id: "jaipur",
    name: "Jaipur",
    tagline: "The Pink City of Royalty",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
    tourCount: "3 Curated Tours",
    highlights: ["Hawa Mahal", "Amer Fort", "City Palace", "Jantar Mantar", "Nahargarh"],
  },
  {
    id: "jodhpur",
    name: "Jodhpur",
    tagline: "The Sun City & Blue Haven",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
    tourCount: "3 Curated Tours",
    highlights: ["Mehrangarh Fort", "Jaswant Thada", "Umaid Bhawan", "Clock Tower Bazaar"],
  },
  {
    id: "jaisalmer",
    name: "Jaisalmer",
    tagline: "The Golden Desert Citadel",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
    tourCount: "3 Curated Tours",
    highlights: ["Jaisalmer Fort", "Sam Sand Dunes", "Patwon Ki Haveli", "Desert Camel Safari"],
  },
  {
    id: "mount-abu",
    name: "Mount Abu",
    tagline: "Rajasthan's Lone Hill Retreat",
    image: "/images/Mount Abu.webp",
    tourCount: "2 Curated Tours",
    highlights: ["Nakki Lake", "Dilwara Temples", "Guru Shikhar", "Sunset Point"],
  },
  {
    id: "chittorgarh",
    name: "Chittorgarh",
    tagline: "The Bastion of Mewar Valour",
    image: "/images/Chittorgarh Fort.webp",
    tourCount: "2 Curated Tours",
    highlights: ["Chittorgarh Fort", "Vijay Stambh", "Kirti Stambh", "Rani Padmini Palace"],
  },
];

export const tourPackagesData: TourPackage[] = [
  // A. UDAIPUR TOUR PACKAGES
  {
    slug: "udaipur-one-day-tour",
    category: "udaipur",
    categoryLabel: "Udaipur Tour Packages",
    title: "Udaipur One Day Tour",
    duration: "1 Day (8 to 10 Hours)",
    destinationsCovered: ["City Palace", "Lake Pichola", "Jagdish Temple", "Saheliyon Ki Bari", "Fateh Sagar", "Sajjangarh Palace"],
    shortDescription: "Experience the timeless highlights of Udaipur in a single day with a private chauffeur covering royal palaces, pristine lakes, and panoramic sunset viewpoints.",
    overview: "Ideal for travelers short on time or arriving on weekend getaways. Discover Udaipur's most iconic royal residences, stroll along tree-lined lake promenades, and witness panoramic sunset views from Monsoon Palace high above the valley.",
    image: "/images/City Palace.webp",
    heroImage: "/images/Udaipur Sunset by the Lake.png",
    highlights: [
      "Guided vehicle access through heritage old city gates",
      "Boat ride vantage point at Lake Pichola & Jag Mandir",
      "Royal garden stroll at Saheliyon Ki Bari fountains",
      "Sunset view of the entire city from Sajjangarh Monsoon Palace",
    ],
    dayWiseItinerary: [
      {
        day: 1,
        title: "Iconic Udaipur Sightseeing & Sunset",
        description: "Morning pickup from your hotel or airport. Begin with City Palace & Jagdish Temple, enjoy an afternoon lakeside lunch, visit Saheliyon Ki Bari, and conclude with sunset at Sajjangarh Monsoon Palace before evening drop-off.",
        highlights: ["City Palace & Museum", "Jagdish Temple", "Saheliyon Ki Bari", "Fateh Sagar Lake Drive", "Sajjangarh Monsoon Palace Sunset"],
      },
    ],
    inclusions: [
      "Dedicated AC Chauffeur-driven cab (8-10 Hours / 80-100 KM)",
      "Fuel, toll taxes, parking fees, and driver allowances",
      "Door-to-door hotel / airport pickup and drop-off",
      "Bottled mineral water inside vehicle",
    ],
    exclusions: [
      "Monument entry tickets and boat ride fees",
      "Meals, beverages, and personal expenses",
      "Guide charges (available upon request)",
    ],
    recommendedVehicles: ["Maruti Suzuki Swift Dzire", "Toyota Etios", "Toyota Innova Crysta"],
  },
  {
    slug: "udaipur-2-days-1-night",
    category: "udaipur",
    categoryLabel: "Udaipur Tour Packages",
    title: "Udaipur 2 Days / 1 Night Tour",
    duration: "2 Days / 1 Night",
    destinationsCovered: ["City Palace", "Lake Pichola", "Fateh Sagar", "Bagore Ki Haveli", "Ahar Cenotaphs", "Karni Mata Ropeway"],
    shortDescription: "A relaxed weekend exploration covering royal palace galleries, heritage cultural folk performances, boat cruises, and ancient royal cenotaphs.",
    overview: "Designed for couples and families looking to delve deeper into Udaipur's rich history. Includes evening cultural dance performance at Bagore Ki Haveli, sunset ropeway views, and unhurried lake drives.",
    image: "/images/Lake Pichola.webp",
    heroImage: "/images/Discover Udaipur Background.webp",
    highlights: [
      "Dharohar folk dance & puppet show at Bagore Ki Haveli",
      "Panoramic sunset cable car ride to Karni Mata Temple",
      "Artisan handicraft shopping at Shilpgram & Bada Bazaar",
      "Chilled private cab reserved exclusively for your schedule",
    ],
    dayWiseItinerary: [
      {
        day: 1,
        title: "Royal Palaces, Lake Pichola & Evening Folk Dance",
        description: "Pickup from hotel/airport. Explore City Palace, Jagdish Temple, and Lake Pichola. Evening cultural folk show at historic Bagore Ki Haveli on Gangaur Ghat.",
        highlights: ["City Palace", "Lake Pichola Cruise", "Bagore Ki Haveli Dharohar Show"],
      },
      {
        day: 2,
        title: "Gardens, Cenotaphs, Fateh Sagar & Departure",
        description: "Morning visit to Saheliyon Ki Bari, Ahar Cenotaphs, and serene drive around Fateh Sagar Lake. Conclude with Karni Mata Ropeway before airport/railway drop.",
        highlights: ["Saheliyon Ki Bari", "Ahar Royal Cenotaphs", "Fateh Sagar Lake", "Karni Mata Ropeway"],
      },
    ],
    inclusions: [
      "Private AC vehicle reserved for 2 full days",
      "All interstate tolls, parking fees, fuel & chauffeur charges",
      "Hotel / Airport / Railway station transfers",
      "Flexible schedule tailored to your pace",
    ],
    exclusions: [
      "Hotel accommodation (can be assisted on request)",
      "Monument entrance fees & ropeway tickets",
      "Meals, drinks & shopping expenses",
    ],
    recommendedVehicles: ["Toyota Etios", "Toyota Innova Crysta", "The Force Urbania Luxury"],
  },
  {
    slug: "udaipur-3-days-2-nights",
    category: "udaipur",
    categoryLabel: "Udaipur Tour Packages",
    title: "Udaipur 3 Days / 2 Nights Complete Tour",
    duration: "3 Days / 2 Nights",
    destinationsCovered: ["City Palace", "Lake Pichola", "Fateh Sagar", "Sajjangarh", "Kumbhalgarh Fort", "Ranakpur Jain Temple"],
    shortDescription: "The quintessential Mewar holiday combining comprehensive Udaipur sightseeing with a day excursion to majestic Kumbhalgarh Fort and Ranakpur's marble marvels.",
    overview: "A rich 3-day itinerary blending the royal romantic atmosphere of Udaipur with the rugged mountain majesty of Kumbhalgarh's Great Wall and the intricate 1,444 marble pillars of Ranakpur.",
    image: "/images/Kumbhalgarh Fort.webp",
    heroImage: "/images/Kumbhalgarh Fort.webp",
    highlights: [
      "Full Udaipur heritage circuit plus mountain fort excursion",
      "World's second longest wall at UNESCO Kumbhalgarh Fort",
      "Intricate 15th-century marble craftsmanship at Ranakpur",
      "Comfortable long-distance SUV for hill routes",
    ],
    dayWiseItinerary: [
      {
        day: 1,
        title: "Udaipur Arrival & Old City Heritage",
        description: "Welcome pickup. Check into your hotel. Explore City Palace, Jagdish Temple, Lake Pichola boat ride, and sunset at Ambrai Ghat.",
        highlights: ["City Palace", "Lake Pichola", "Ambrai Ghat Sunset"],
      },
      {
        day: 2,
        title: "Excursion to Kumbhalgarh Fort & Ranakpur",
        description: "Scenic morning highway drive to Kumbhalgarh Fort through the Aravalli hills. Explore the historic ramparts, followed by Ranakpur Jain Temple before returning to Udaipur.",
        highlights: ["Kumbhalgarh UNESCO Fort", "Aravalli Mountain Route", "Ranakpur Jain Temple"],
      },
      {
        day: 3,
        title: "Udaipur Lakes, Gardens & Departure",
        description: "Visit Saheliyon Ki Bari, Shilpgram craft village, and Fateh Sagar Lake. Afternoon shopping at local art bazaars before transfer to airport or station.",
        highlights: ["Saheliyon Ki Bari", "Fateh Sagar", "Shilpgram Art Village", "Airport Drop"],
      },
    ],
    inclusions: [
      "Private AC Cab for all 3 days including outstation hill journey",
      "All tolls, hill permits, parking charges & driver allowances",
      "Door-to-door hotel and airport transfers",
      "Complimentary itinerary customization",
    ],
    exclusions: [
      "Hotel accommodations",
      "Entry tickets & temple camera fees",
      "Food and personal expenses",
    ],
    recommendedVehicles: ["Toyota Innova Crysta", "Toyota Innova Hycross", "Kia Carens"],
  },
  {
    slug: "udaipur-heritage-sightseeing-tour",
    category: "udaipur",
    categoryLabel: "Udaipur Tour Packages",
    title: "Udaipur Heritage & Sightseeing Tour",
    duration: "Full Day (Customizable)",
    destinationsCovered: ["City Palace", "Bagore Ki Haveli", "Jag Mandir", "Vintage Car Museum", "Doodh Talai", "Saheliyon Ki Bari"],
    shortDescription: "A specialized cultural journey honoring the centuries of Mewar royal architecture, vintage car collections, royal cenotaphs, and serene gardens.",
    overview: "Curated for culture enthusiasts, photographers, and history lovers wanting to discover the aristocratic heritage of the Mewar dynasty with an experienced chauffeur.",
    image: "/images/Bagore Ki Haveli.webp",
    heroImage: "/images/City Palace.webp",
    highlights: [
      "Classic Rolls-Royces & Cadillacs at Vintage Car Museum",
      "Royal haveli architecture and lakeside cenotaphs",
      "Traditional puppet crafts and local artisan bazaars",
    ],
    dayWiseItinerary: [
      {
        day: 1,
        title: "Full-Day Mewar Royal Heritage Immersion",
        description: "Begin with City Palace complex and Museum, followed by the Vintage Car Collection. Afternoon visit to Doodh Talai, Saheliyon Ki Bari, and sunset boat cruise at Jag Mandir.",
        highlights: ["City Palace Complex", "Vintage Car Museum", "Doodh Talai", "Jag Mandir Island"],
      },
    ],
    inclusions: [
      "Chauffeur-driven AC cab for the entire day",
      "All parking, city permits, fuel and driver allowance",
      "Dedicated hotel pickup and drop",
    ],
    exclusions: [
      "Museum entry tickets & boat tickets",
      "Meals & personal purchases",
    ],
    recommendedVehicles: ["Maruti Suzuki Swift Dzire", "Toyota Innova Crysta"],
  },

  // B. RAJASTHAN TOUR PACKAGES (Intercity Combinations)
  {
    slug: "udaipur-jodhpur-tour",
    category: "rajasthan",
    categoryLabel: "Rajasthan Tour Packages",
    title: "Udaipur – Jodhpur Tour",
    duration: "3 Days / 2 Nights",
    destinationsCovered: ["Udaipur", "Ranakpur", "Jodhpur", "Mehrangarh Fort", "Jaswant Thada", "Umaid Bhawan"],
    shortDescription: "Traverse from the City of Lakes to the majestic Blue City of Jodhpur, stopping en route at the architectural wonder of Ranakpur.",
    overview: "A classic two-city Rajasthan journey pairing Udaipur's romantic waterfronts with Jodhpur's towering Mehrangarh Fort, blue-walled alleys, and royal palaces.",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1600&q=80",
    highlights: [
      "Scenic intercity highway drive with Ranakpur Jain Temple en route",
      "Mehrangarh Fort panoramic viewpoint over the blue city",
      "White marble royal cenotaph at Jaswant Thada",
      "Umaid Bhawan Palace museum and heritage gardens",
    ],
    dayWiseItinerary: [
      {
        day: 1,
        title: "Udaipur Sightseeing & Lake Pichola",
        description: "Explore City Palace, Jagdish Temple, and evening boat cruise at Lake Pichola. Overnight stay in Udaipur.",
        highlights: ["City Palace", "Lake Pichola", "Overnight Udaipur"],
      },
      {
        day: 2,
        title: "Udaipur to Jodhpur via Ranakpur",
        description: "Drive towards Jodhpur (260 KM) through the Aravalli hills with a stop at Ranakpur's 1444 marble-pillar temple. Reach Jodhpur by evening.",
        highlights: ["Aravalli Highway", "Ranakpur Marble Temple", "Overnight Jodhpur"],
      },
      {
        day: 3,
        title: "Jodhpur Blue City Exploration & Departure",
        description: "Visit Mehrangarh Fort, Jaswant Thada, and Umaid Bhawan Palace museum. Conclude with drop at Jodhpur airport or railway station.",
        highlights: ["Mehrangarh Fort", "Jaswant Thada", "Umaid Bhawan Palace"],
      },
    ],
    inclusions: [
      "Private dedicated AC highway cab for all 3 days",
      "Intercity highway toll taxes, state permits & driver allowances",
      "Pickup from Udaipur and drop at Jodhpur (or return to Udaipur)",
    ],
    exclusions: [
      "Hotels and meals",
      "Monument tickets & audio guides",
    ],
    recommendedVehicles: ["Toyota Innova Crysta", "Toyota Innova Hycross", "The Force Urbania Luxury"],
  },
  {
    slug: "udaipur-jaipur-tour",
    category: "rajasthan",
    categoryLabel: "Rajasthan Tour Packages",
    title: "Udaipur – Jaipur Royal Tour",
    duration: "4 Days / 3 Nights",
    destinationsCovered: ["Udaipur", "Chittorgarh Fort", "Pushkar / Ajmer", "Jaipur", "Amer Fort", "Hawa Mahal"],
    shortDescription: "An exhilarating overland passage linking the City of Lakes with the Pink City of Jaipur, featuring Chittorgarh and holy Pushkar along the way.",
    overview: "Connect two of Rajasthan's grandest capitals. Discover historic forts, holy sacred lakes, magnificent Amber palaces, and vibrant Rajasthani bazaars.",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=80",
    highlights: [
      "UNESCO Chittorgarh Fort bastion & Vijay Stambh en route",
      "Sacred Brahma Temple & ghats at Pushkar",
      "Amber Fort elephant hill ride & palace mirror halls",
      "Hawa Mahal, City Palace, and Jantar Mantar observatory in Jaipur",
    ],
    dayWiseItinerary: [
      {
        day: 1,
        title: "Udaipur Palace & Lake Exploration",
        description: "Explore Udaipur's City Palace, Jagdish Temple, and an evening sunset boat cruise.",
        highlights: ["City Palace", "Lake Pichola", "Overnight Udaipur"],
      },
      {
        day: 2,
        title: "Udaipur to Pushkar/Ajmer via Chittorgarh",
        description: "Morning drive to Chittorgarh Fort. Tour Vijay Stambh & Rani Padmini Palace. Continue drive to Pushkar for evening lake aarti.",
        highlights: ["Chittorgarh Fort", "Pushkar Lake", "Overnight Pushkar"],
      },
      {
        day: 3,
        title: "Pushkar to Jaipur & Pink City Sightseeing",
        description: "Drive to Jaipur (145 KM). Afternoon visit to City Palace, Hawa Mahal, and local jewel & textile bazaars.",
        highlights: ["Jaipur City Palace", "Hawa Mahal", "Overnight Jaipur"],
      },
      {
        day: 4,
        title: "Amer Fort, Nahargarh & Departure",
        description: "Morning tour of magnificent Amer Fort and Nahargarh. Conclude with transfer to Jaipur airport or railway station.",
        highlights: ["Amer Fort", "Jantar Mantar", "Jaipur Airport Drop"],
      },
    ],
    inclusions: [
      "Private AC Cab for 4 full days with dedicated highway chauffeur",
      "All state border taxes, toll plazas, parking & fuel charges",
      "Pickup in Udaipur & drop in Jaipur (or return)",
    ],
    exclusions: ["Hotels, monuments & meals"],
    recommendedVehicles: ["Toyota Innova Crysta", "Toyota Innova Hycross", "The Force Urbania Luxury"],
  },
  {
    slug: "jodhpur-jaisalmer-tour",
    category: "rajasthan",
    categoryLabel: "Rajasthan Tour Packages",
    title: "Jodhpur – Jaisalmer Desert Tour",
    duration: "4 Days / 3 Nights",
    destinationsCovered: ["Jodhpur", "Mehrangarh Fort", "Jaisalmer", "Golden Fort", "Sam Sand Dunes", "Desert Camp"],
    shortDescription: "Experience the vibrant heart of the Thar Desert, from the blue alleys of Mehrangarh to the golden sandstone fort and starry night sand dunes.",
    overview: "Journey into the golden sands of western Rajasthan. Enjoy camel safaris across rolling dunes, live Rajasthani folk music under starry desert skies, and sleep in luxury desert Swiss tents.",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80",
    highlights: [
      "Golden sandstone living fort of Jaisalmer (Sonar Qila)",
      "Sam Sand Dunes camel ride and 4x4 dune bashing",
      "Cultural Kalbelia dance and campfire at luxury desert camp",
      "Mehrangarh Fort and Jaswant Thada in Jodhpur",
    ],
    dayWiseItinerary: [
      {
        day: 1,
        title: "Jodhpur Arrival & Fort Tour",
        description: "Pickup in Jodhpur. Explore Mehrangarh Fort, Jaswant Thada, and local spice markets. Overnight in Jodhpur.",
        highlights: ["Mehrangarh Fort", "Jaswant Thada", "Overnight Jodhpur"],
      },
      {
        day: 2,
        title: "Jodhpur to Jaisalmer (Thar Desert Gateway)",
        description: "Drive to Jaisalmer (285 KM). Check into hotel. Evening sunset view at Gadisar Lake. Overnight in Jaisalmer.",
        highlights: ["Thar Highway Drive", "Gadisar Lake Sunset", "Overnight Jaisalmer"],
      },
      {
        day: 3,
        title: "Jaisalmer Fort & Sam Sand Dunes Camp",
        description: "Morning visit to Jaisalmer Fort and Patwon Ki Haveli. Afternoon drive to Sam Sand Dunes. Enjoy camel safari, folk dance, and stay in desert tents.",
        highlights: ["Sonar Qila Fort", "Patwon Ki Haveli", "Sam Desert Camp & Safari"],
      },
      {
        day: 4,
        title: "Desert Sunrise & Departure",
        description: "Witness desert sunrise, visit Kuldhara abandoned ghost village, and transfer to Jaisalmer / Jodhpur station for departure.",
        highlights: ["Desert Sunrise", "Kuldhara Village", "Departure Transfer"],
      },
    ],
    inclusions: [
      "AC Vehicle dedicated for 4 days with experienced desert chauffeur",
      "All highway tolls, permits, parking & driver night charges",
      "Direct station / airport transfers",
    ],
    exclusions: ["Desert camp booking, meals & activities unless bundled"],
    recommendedVehicles: ["Toyota Innova Crysta", "Toyota Innova Hycross", "The Force Urbania Luxury"],
  },
  {
    slug: "jaipur-jodhpur-jaisalmer-tour",
    category: "rajasthan",
    categoryLabel: "Rajasthan Tour Packages",
    title: "Jaipur – Jodhpur – Jaisalmer Circuit",
    duration: "6 Days / 5 Nights",
    destinationsCovered: ["Jaipur", "Pushkar", "Jodhpur", "Jaisalmer", "Sam Sand Dunes", "Amer Fort"],
    shortDescription: "The ultimate Golden Triangle of Rajasthan: Pink City, Blue City, and Golden City woven into an unforgettable 6-day overland journey.",
    overview: "Cover the three crown jewels of Rajasthan in complete luxury. Wander palace halls in Jaipur, overlook blue vistas in Jodhpur, and sleep under desert stars in Jaisalmer.",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80",
    highlights: [
      "Amer Fort, Hawa Mahal & City Palace in Jaipur",
      "Mehrangarh Fort & Umaid Bhawan in Jodhpur",
      "Jaisalmer Fort, Havelis & Thar Desert luxury camp",
      "Seamless multi-day intercity travel in private chauffeur cab",
    ],
    dayWiseItinerary: [
      { day: 1, title: "Jaipur Arrival & City Sightseeing", description: "Arrival in Jaipur. Tour Hawa Mahal, City Palace, and Jantar Mantar.", highlights: ["Hawa Mahal", "City Palace"] },
      { day: 2, title: "Amer Fort & Drive to Jodhpur", description: "Morning visit to Amer Fort. Scenic highway drive to Jodhpur.", highlights: ["Amer Fort", "Highway Drive"] },
      { day: 3, title: "Jodhpur Forts & Drive to Jaisalmer", description: "Explore Mehrangarh Fort and Jaswant Thada, then continue to Jaisalmer.", highlights: ["Mehrangarh", "Jaisalmer Arrival"] },
      { day: 4, title: "Jaisalmer Havelis & Sam Desert Camp", description: "Tour Golden Fort and Patwon Ki Haveli. Evening camel safari and desert camp.", highlights: ["Jaisalmer Fort", "Sam Sand Dunes"] },
      { day: 5, title: "Desert Sunrise & Return Route", description: "Kuldhara village visit and return towards Jodhpur or Jaipur.", highlights: ["Kuldhara", "Return Drive"] },
      { day: 6, title: "Final Departure", description: "Conclude with airport / railway drop.", highlights: ["Departure Transfer"] },
    ],
    inclusions: [
      "AC Chauffeur Cab for 6 full days",
      "All intercity toll plazas, state border taxes, and parking",
    ],
    exclusions: ["Hotels, meals, safari fees, and entry passes"],
    recommendedVehicles: ["Toyota Innova Crysta", "The Force Urbania Luxury"],
  },

  // C. MULTI-CITY RAJASTHAN TOURS
  {
    slug: "royal-rajasthan-grand-tour",
    category: "multi-city",
    categoryLabel: "Multi-City Rajasthan Tours",
    title: "Royal Rajasthan Grand Tour",
    duration: "7 Days / 6 Nights",
    destinationsCovered: ["Udaipur", "Ranakpur", "Jodhpur", "Jaisalmer", "Pushkar", "Jaipur"],
    shortDescription: "A grand 7-day odyssey celebrating Rajasthan's supreme royalty: lakes, marble temples, mighty fortresses, desert dunes, and pink palace walls.",
    overview: "Our flagship multi-city journey crafted for travelers desiring an all-encompassing Rajasthan holiday. Travel stress-free in a private executive vehicle from city to city.",
    image: "/images/Discover Udaipur Background.webp",
    heroImage: "/images/Discover Udaipur Background.webp",
    highlights: [
      "5 iconic Rajasthan destinations in one seamless trip",
      "Lake Pichola boat cruise in Udaipur & UNESCO Kumbhalgarh wall",
      "Mehrangarh Fort in Jodhpur & Sam Desert Camp in Jaisalmer",
      "Amber Fort and Palace of Winds in Jaipur",
    ],
    dayWiseItinerary: [
      { day: 1, title: "Udaipur Arrival & Lake Pichola", description: "Arrive in Udaipur. Tour City Palace and evening lakeside cruise.", highlights: ["City Palace", "Lake Pichola"] },
      { day: 2, title: "Udaipur to Jodhpur via Ranakpur", description: "Drive to Jodhpur with a stop at Ranakpur Jain Temple.", highlights: ["Ranakpur", "Jodhpur"] },
      { day: 3, title: "Jodhpur to Jaisalmer Desert", description: "Tour Mehrangarh Fort, then proceed to the golden Thar desert.", highlights: ["Mehrangarh", "Jaisalmer"] },
      { day: 4, title: "Jaisalmer Fort & Sam Desert Dunes", description: "Wander Sonar Qila, Patwon Ki Haveli, and stay in desert luxury tents.", highlights: ["Golden Fort", "Sam Dunes Camp"] },
      { day: 5, title: "Jaisalmer to Pushkar / Ajmer", description: "Overland drive to holy Pushkar. Visit Brahma Temple and holy lake.", highlights: ["Pushkar Lake", "Brahma Temple"] },
      { day: 6, title: "Pushkar to Jaipur (Pink City)", description: "Drive to Jaipur. Explore City Palace, Hawa Mahal, and local craft bazaars.", highlights: ["Hawa Mahal", "City Palace"] },
      { day: 7, title: "Amer Fort & Jaipur Departure", description: "Tour majestic Amer Fort and Nahargarh before airport transfer.", highlights: ["Amer Fort", "Jaipur Departure"] },
    ],
    inclusions: [
      "Dedicated luxury AC vehicle and verified highway chauffeur for all 7 days",
      "All state taxes, parking, tolls & fuel costs included",
      "Door-to-door hotel and terminal transfers throughout Rajasthan",
    ],
    exclusions: ["Hotels, entrance tickets, and personal meals"],
    recommendedVehicles: ["Toyota Innova Crysta", "Toyota Innova Hycross", "The Force Urbania Luxury"],
  },
  {
    slug: "rajasthan-heritage-circuit",
    category: "multi-city",
    categoryLabel: "Multi-City Rajasthan Tours",
    title: "Rajasthan Heritage Circuit",
    duration: "5 Days / 4 Nights",
    destinationsCovered: ["Udaipur", "Kumbhalgarh", "Ranakpur", "Jodhpur", "Chittorgarh"],
    shortDescription: "A focused 5-day heritage trail dedicated to the legendary forts, palaces, and historical battlegrounds of Mewar and Marwar.",
    overview: "Walk the footsteps of Maharana Pratap and Rajput royalty. Explore the fortress walls of Kumbhalgarh, Chittorgarh's Vijay Stambh, and Jodhpur's Mehrangarh Citadel.",
    image: "/images/Chittorgarh Fort.webp",
    heroImage: "/images/Chittorgarh Fort.webp",
    highlights: [
      "Two UNESCO World Heritage Hill Forts: Kumbhalgarh & Chittorgarh",
      "Intricate 15th-century marble columns of Ranakpur",
      "City Palace Udaipur & Mehrangarh Fort Jodhpur",
    ],
    dayWiseItinerary: [
      { day: 1, title: "Udaipur Palace & Lakes", description: "Full day exploring Udaipur's City Palace and Lake Pichola.", highlights: ["City Palace", "Lake Pichola"] },
      { day: 2, title: "Kumbhalgarh & Ranakpur", description: "Ascend to Kumbhalgarh Fort and explore Ranakpur's marble marvel.", highlights: ["Kumbhalgarh", "Ranakpur"] },
      { day: 3, title: "Jodhpur Blue City", description: "Drive to Jodhpur, tour Mehrangarh Fort and Jaswant Thada.", highlights: ["Mehrangarh", "Jaswant Thada"] },
      { day: 4, title: "Jodhpur to Chittorgarh", description: "Drive to historic Chittorgarh, tour Vijay Stambh and palace ruins.", highlights: ["Chittorgarh Fort", "Vijay Stambh"] },
      { day: 5, title: "Return to Udaipur & Departure", description: "Morning scenic drive back to Udaipur for flight or train departure.", highlights: ["Udaipur Drop"] },
    ],
    inclusions: [
      "AC Chauffeur-driven cab for all 5 days",
      "All intercity tolls, permits, fuel & driver allowances",
    ],
    exclusions: ["Hotels, meals & monument tickets"],
    recommendedVehicles: ["Toyota Innova Crysta", "Toyota Etios", "Maruti Suzuki Ertiga"],
  },
  {
    slug: "udaipur-to-jaisalmer-desert-journey",
    category: "multi-city",
    categoryLabel: "Multi-City Rajasthan Tours",
    title: "Udaipur to Jaisalmer Desert Journey",
    duration: "4 Days / 3 Nights",
    destinationsCovered: ["Udaipur", "Jodhpur", "Jaisalmer", "Sam Sand Dunes", "Thar Desert"],
    shortDescription: "From the tranquil waters of Lake Pichola directly to the golden sand dunes of Jaisalmer, traveling through royal Jodhpur.",
    overview: "The perfect journey for travelers wanting the contrast of Udaipur's romantic lakes and Jaisalmer's mesmerizing golden desert dunes.",
    image: "/images/Udaipur Sunset by the Lake.png",
    heroImage: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80",
    highlights: [
      "Sunset boat ride on Lake Pichola in Udaipur",
      "Mehrangarh Fort visit in the Blue City of Jodhpur",
      "Camel ride and luxury Swiss tent stay in Sam Sand Dunes",
      "Golden sandstone carved havelis of Jaisalmer",
    ],
    dayWiseItinerary: [
      { day: 1, title: "Udaipur City Highlights", description: "City Palace, Jagdish Temple, and Lake Pichola sunset.", highlights: ["City Palace", "Pichola"] },
      { day: 2, title: "Udaipur to Jodhpur (Blue City)", description: "Scenic highway transfer to Jodhpur. Tour Mehrangarh Fort.", highlights: ["Mehrangarh", "Jodhpur Stay"] },
      { day: 3, title: "Jodhpur to Jaisalmer Desert Camp", description: "Drive to Sam Sand Dunes. Enjoy camel safari and cultural folk music night.", highlights: ["Sam Dunes", "Desert Camp"] },
      { day: 4, title: "Jaisalmer Fort & Departure", description: "Tour Jaisalmer Fort and Havelis before departure transfer.", highlights: ["Jaisalmer Fort", "Departure"] },
    ],
    inclusions: [
      "AC Cab dedicated for 4 full days with verified chauffeur",
      "All highway tolls, permits & driver allowances",
    ],
    exclusions: ["Hotels and desert camp bookings unless requested"],
    recommendedVehicles: ["Toyota Innova Crysta", "Toyota Innova Hycross", "The Force Urbania Luxury"],
  },
];

