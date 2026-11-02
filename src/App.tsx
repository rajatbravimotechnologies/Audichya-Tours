import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/sections/Navbar";
import { Footer } from "./components/sections/Footer";
import { MobileBottomBar } from "./components/sections/MobileBottomBar";
import { BookingModal } from "./components/ui/BookingModal";
import { ScrollToTop } from "./components/ui/ScrollToTop";
import { Preloader } from "./components/ui/Preloader";

// Page Components
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { FleetPage } from "./pages/FleetPage";
import { ExplorePage } from "./pages/ExplorePage";
import { AirportPage } from "./pages/AirportPage";
import { WeddingsPage } from "./pages/WeddingsPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";

import { FloatingContactWidget } from "./components/ui/FloatingContactWidget";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalVehicle, setModalVehicle] = useState("Sedan");
  const [modalDestination, setModalDestination] = useState("");

  const handleOpenModal = (vehicle?: string, destination?: string) => {
    if (vehicle) setModalVehicle(vehicle);
    if (destination) setModalDestination(destination);
    setIsModalOpen(true);
  };

  return (
    <BrowserRouter>
      <Preloader />
      <ScrollToTop />
      <FloatingContactWidget />
      <div className="min-h-screen bg-[#F7FAFC] text-[#0B1726] flex flex-col font-sans selection:bg-[#007FF0] selection:text-white">
        {/* Global Navigation Header */}
        <Navbar onOpenBooking={() => handleOpenModal()} />

        {/* Multi-Page Client-Side Routes */}
        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<HomePage onOpenBooking={handleOpenModal} />} />
            <Route path="/services" element={<ServicesPage onOpenBooking={handleOpenModal} />} />
            <Route path="/fleet" element={<FleetPage onOpenBooking={handleOpenModal} />} />
            <Route path="/explore" element={<ExplorePage onOpenBooking={handleOpenModal} />} />
            <Route path="/airport-transfers" element={<AirportPage onOpenBooking={handleOpenModal} />} />
            <Route path="/wedding-transportation" element={<WeddingsPage onOpenBooking={handleOpenModal} />} />
            <Route path="/about" element={<AboutPage onOpenBooking={handleOpenModal} />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        {/* Global Comprehensive Footer */}
        <Footer />

        {/* Fixed Mobile Quick Dispatch Bottom Bar */}
        <MobileBottomBar onOpenBooking={() => handleOpenModal()} />

        {/* Interactive Quick Booking Modal */}
        <BookingModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          preselectedVehicle={modalVehicle}
          preselectedDestination={modalDestination}
        />
      </div>
    </BrowserRouter>
  );
}
