import { siteConfig } from "./site";

const BASE_URL = "https://audichyatours.in";

/**
 * Standard Organization & LocalBusiness schema for Audichya Tours
 */
export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "TaxiService",
  "name": "Audichya Tours",
  "alternateName": "Audichya Tours & Travels Udaipur",
  "url": BASE_URL,
  "logo": `${BASE_URL}/logo.png`,
  "image": `${BASE_URL}/images/Udaipur Sunset by the Lake.png`,
  "telephone": "+91-9772771118",
  "email": "audichyapiyush1401@gmail.com",
  "priceRange": "$$",
  "currenciesAccepted": "INR",
  "paymentAccepted": "Cash, UPI, Bank Transfer",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "50, Jai Shree Vihar",
    "addressLocality": "Udaipur",
    "addressRegion": "Rajasthan",
    "postalCode": "313001",
    "addressCountry": "IN",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "24.5854",
    "longitude": "73.7125",
  },
  "areaServed": [
    { "@type": "City", "name": "Udaipur" },
    { "@type": "AdministrativeArea", "name": "Rajasthan" },
    { "@type": "Country", "name": "India" },
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59",
    },
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Udaipur Taxi & Tour Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Udaipur Local Sightseeing Taxi",
          "description": "Full day and half day chauffeur-driven sightseeing cabs covering City Palace, Lake Pichola, Saheliyon Ki Bari, and Fateh Sagar.",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Udaipur Airport Transfer Taxi",
          "description": "24/7 punctual pickup and drop taxi service between Maharana Pratap Airport (UDR) and all Udaipur hotels and resorts.",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Outstation Cab from Udaipur",
          "description": "One-way and round-trip intercity taxi service to Kumbhalgarh, Mount Abu, Chittorgarh, Jodhpur, Jaipur, and Ahmedabad.",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Railway Station Transfer Taxi",
          "description": "Guaranteed arrival and departure taxi service from Udaipur City (UDZ) and Rana Pratap Nagar railway stations.",
        },
      },
    ],
  },
});

/**
 * WebSite schema with potential site search
 */
export const getWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Audichya Tours",
  "url": BASE_URL,
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${BASE_URL}/tour-packages?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
});

/**
 * Taxi service catalogue schema for /taxi-services
 */
export const getTaxiServicesPageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Taxi & Chauffeur-Driven Transportation Service",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Audichya Tours",
    "telephone": "+91-9772771118",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Udaipur",
      "addressRegion": "Rajasthan",
      "addressCountry": "IN",
    },
  },
  "areaServed": {
    "@type": "City",
    "name": "Udaipur",
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Audichya Tours Taxi Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Udaipur Local Sightseeing Taxi",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Maharana Pratap Airport (UDR) Transfer Taxi",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Udaipur Railway Station Transfers",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "One-Way & Round-Trip Outstation Cabs",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Corporate & MICE Transportation Fleets",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Customized Taxi & Hourly Car Rentals",
        },
      },
    ],
  },
});

/**
 * Fleet catalogue schema for /fleet
 */
export const getFleetPageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Audichya Tours Fleet & Vehicle Rentals with Driver",
  "description": "Spotless, sanitized, air-conditioned sedans, MPVs, premium Innova Crystas, and luxury Force Urbanias with professional local chauffeurs.",
  "brand": {
    "@type": "Brand",
    "name": "Audichya Tours",
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "INR",
    "lowPrice": "1500",
    "highPrice": "18000",
    "offerCount": "9",
  },
});

/**
 * TouristTrip schema for individual tour packages
 */
export const getTouristTripSchema = (params: {
  title: string;
  description: string;
  slug: string;
  destinations?: string[];
}) => ({
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "name": params.title,
  "description": params.description,
  "url": `${BASE_URL}/tour-packages/${params.slug}`,
  "provider": {
    "@type": "TravelAgency",
    "name": "Audichya Tours",
    "telephone": "+91-9772771118",
  },
  ...(params.destinations && params.destinations.length > 0
    ? {
        "itinerary": {
          "@type": "ItemList",
          "numberOfItems": params.destinations.length,
          "itemListElement": params.destinations.map((dest, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "name": dest,
          })),
        },
      }
    : {}),
});
