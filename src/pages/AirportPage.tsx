import React from "react";
import { AirportTransfer } from "../components/sections/AirportTransfer";
import { BookingForm } from "../components/sections/BookingForm";
import { CinematicFinalCTA } from "../components/sections/CinematicFinalCTA";

interface AirportPageProps {
  onOpenBooking: (vehicle?: string, destination?: string) => void;
}

export const AirportPage: React.FC<AirportPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="w-full bg-[#FFF9F0]">
      {/* Header Banner with Clean Custom Image Background (No Overlay/Filters) */}
      <div className="relative text-white pt-28 lg:pt-36 pb-16 lg:pb-20 overflow-hidden bg-[#0F2D5B]">
        {/* Background Image - Clean with no filter */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/Airport-transfers-background.webp')` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-widest text-[#D4AF37] bg-[#0F2D5B]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#D4AF37]/30 shadow-sm">
            <span>AUDICHYA TOURS · 24/7 AIRPORT TAXI</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Udaipur Airport Taxi & Transfers
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white max-w-2xl mx-auto font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Maharana Pratap Airport (UDR) pickup & drop by Audichya Tours. Flight tracking, terminal meet & greet, and comfortable rides.
          </p>
        </div>
      </div>

      <AirportTransfer
        onOpenBooking={() => {
          onOpenBooking("Sedan", "Maharana Pratap Airport (UDR)");
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <BookingForm
          id="airport-booking"
          defaultVehicle="Sedan"
          defaultDestination="Maharana Pratap Airport (UDR)"
        />
      </div>

      <CinematicFinalCTA onOpenBooking={() => onOpenBooking()} />
    </div>
  );
};
