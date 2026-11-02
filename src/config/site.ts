/**
 * AUDICHYA TOURS – Global Site Configuration
 * 
 * Brand information, contact details, WhatsApp numbers,
 * booking drop-downs, and service parameters.
 */

import { fleetData } from "../data/fleet";

export interface SiteConfig {
  brand: {
    name: string;
    legalName: string;
    tagline: string;
    description: string;
    city: string;
    state: string;
    country: string;
  };
  contact: {
    phone1: string;
    rawPhone1: string;
    phone2: string;
    rawPhone2: string;
    displayPhone: string;
    rawPhone: string; // primary tel: link
    whatsappNumber: string; // International phone number without + or special chars
    whatsappDisplay: string;
    email: string;
    address: string;
    workingHours: string;
  };
  socials: {
    instagram?: string;
    facebook?: string;
    googleMaps?: string;
    tripadvisor?: string;
  };
  navigation: Array<{
    label: string;
    href: string;
  }>;
  bookingOptions: {
    popularPickups: string[];
    popularDrops: string[];
    vehicleTypes: Array<{
      id: string;
      name: string;
      category: string;
      capacity: string;
      luggage: string;
      idealFor: string;
    }>;
  };
}

export const siteConfig: SiteConfig = {
  brand: {
    name: "AUDICHYA TOURS",
    legalName: "AUDICHYA TOURS",
    tagline: "Live Your Travel Dreams Rajasthan.",
    description:
      "Audichya Tours helps travellers discover the beauty, culture and heritage of Udaipur and Rajasthan with convenient taxi services and personalized travel experiences. From local sightseeing and airport transfers to outstation journeys and holiday packages, we aim to make every journey comfortable, convenient and memorable.",
    city: "Udaipur",
    state: "Rajasthan",
    country: "India",
  },
  contact: {
    phone1: "+91 97727 71118",
    rawPhone1: "919772771118",
    phone2: "+91 90016 93314",
    rawPhone2: "919001693314",
    displayPhone: "+91 97727 71118",
    rawPhone: "919772771118",
    whatsappNumber: "919785557805",
    whatsappDisplay: "+91 97855 57805",
    email: "Audichyatours@gmail.com",
    address: "50, Jai Shree Vihar, Udaipur, Rajasthan, India, 313001",
    workingHours: "24/7 Taxi Services & Tour Assistance",
  },
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    googleMaps: "https://maps.google.com",
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Fleet", href: "/fleet" },
    { label: "Tour Packages", href: "/explore" },
    { label: "Airport Transfers", href: "/airport-transfers" },
    { label: "Weddings", href: "/wedding-transportation" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  bookingOptions: {
    popularPickups: [
      "Maharana Pratap Airport (UDR)",
      "Udaipur City Railway Station",
      "City Palace / Old City Area",
      "Lake Pichola Hotels / Jagdish Chowk",
      "Fateh Sagar Lake / Rani Road",
      "Sukhadia Circle / Saheli Nagar",
      "Hiran Magri / Goverdhan Vilas",
      "Badi Lake / Kodiyat Valley",
      "Custom Hotel / Homestay",
    ],
    popularDrops: [
      "Udaipur Local Sightseeing",
      "Udaipur Heritage Tour",
      "Udaipur to Mount Abu",
      "Udaipur to Chittorgarh",
      "Kumbhalgarh & Ranakpur Tour",
      "Udaipur Nathwara Haldighati Tour",
      "Udaipur Jawai (Leopard Safari) Tour",
      "Customized Rajasthan Multi-City Tour",
      "All India & Multi State Tours",
      "Jodhpur- Jaisalmer Tour",
      "Maharana Pratap Airport (UDR)",
      "Custom Destination / Outstation",
    ],
    vehicleTypes: fleetData.map((item) => ({
      id: item.id,
      name: item.title,
      category: item.category,
      capacity: item.passengers,
      luggage: item.luggage,
      idealFor: item.idealFor,
    })),
  },
};

/**
 * Builds a standardized WhatsApp click-to-chat URL with pre-filled travel details.
 */
export function buildWhatsAppBookingUrl(params: {
  serviceType?: string;
  pickup?: string;
  drop?: string;
  date?: string;
  time?: string;
  passengers?: string;
  vehicleType?: string;
  flightOrTrainNo?: string;
  packageType?: string;
  weddingVenue?: string;
  customNotes?: string;
}): string {
  const {
    serviceType,
    pickup,
    drop,
    date,
    time,
    passengers,
    vehicleType,
    flightOrTrainNo,
    packageType,
    weddingVenue,
    customNotes,
  } = params;

  const textLines = [
    `*Namaste AUDICHYA TOURS!*`,
    `I would like to inquire about a ${serviceType ? `*${serviceType}*` : "booking"}:`,
    ``,
    `📍 *Pickup Location:* ${pickup || "To be confirmed"}`,
    `🏁 *Destination:* ${drop || "To be confirmed"}`,
    `📅 *Travel Date:* ${date || "Flexible"}`,
    `⏰ *Travel Time:* ${time || "Flexible"}`,
    `👥 *Passengers:* ${passengers || "1-4"}`,
    `🚗 *Vehicle Type:* ${vehicleType || "Sedan / SUV"}`,
  ];

  if (flightOrTrainNo) {
    textLines.push(`🚆✈️ *Flight/Train No:* ${flightOrTrainNo}`);
  }
  if (packageType) {
    textLines.push(`⏱️ *Package Type:* ${packageType}`);
  }
  if (weddingVenue) {
    textLines.push(`🏰 *Wedding Venue:* ${weddingVenue}`);
  }
  if (customNotes) {
    textLines.push(`📝 *Note:* ${customNotes}`);
  }

  textLines.push(``);
  textLines.push(`Please share availability and transparent fare quote. Thank you!`);

  const message = encodeURIComponent(textLines.join("\n"));
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${message}`;
}

/**
 * Sends booking lead details asynchronously to Google Sheets Apps Script Webhook.
 */
export async function sendLeadToWebhook(params: {
  serviceType?: string;
  pickup?: string;
  drop?: string;
  date?: string;
  time?: string;
  passengers?: string;
  vehicleType?: string;
  flightOrTrainNo?: string;
  customNotes?: string;
}): Promise<void> {
  const webhookUrl =
    (import.meta.env.VITE_APP_SCRIPT_URL as string) ||
    "https://script.google.com/macros/s/AKfycby9DtaihMgH3S3OIvdRW0R_fyElDvW89RWJEogz3qZr-RdROGpAbEvVHtWtuLDeVnJytA/exec";

  if (!webhookUrl) return;

  try {
    const payload = {
      ...params,
      submittedAt: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    };

    // Use keepalive: true so opening WhatsApp in another tab doesn't cancel this background request
    await fetch(webhookUrl, {
      method: "POST",
      mode: "no-cors",
      keepalive: true,
      headers: {
        "Content-Type": "text/plain",
      },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    console.error("Background lead logging notice:", error);
  }
}
