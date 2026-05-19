import { Link } from "react-router-dom";
import { useState } from "react";

// ─────────────────────────
// IMPORTS KOMPONEN MODULAR
// ─────────────────────────
import Navbar from "../components/layout/Navbar";
import ProjectoryModal from "../components/3d/ProjectoryModal";
import TestimonialSection from "../components/home/TestimonialSection";
import Footer from "../components/layout/Footer";
import { Button } from "../components/ui/Button";

// ──────────────────────
// IMPORT DATA KONSTANTA
// ──────────────────────
import {
  FONT_LIBERTINUS,
  FEATURES,
  HERO_COLLECTION,
  GRID_COLLECTIONS,
} from "../constants/Data";

export default function Home() {
  // State untuk mengontrol apakah pop-up 3D (Projectory) sedang dibuka atau tidak
  const [isProjectoryOpen, setIsProjectoryOpen] = useState(false);

  return (
    <section className="w-full font-['Inter'] overflow-x-hidden bg-[#F9F9F9] pb-0 mb-0">
      {/* Reusable Navbar Section */}
      <Navbar />

      {/* 2. Main Hero Section */}
      <div className="w-full bg-[#1C1C1C]">
        <div className="max-w-6xl mx-auto px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
            {/* Hero Image */}
            <div className="relative w-full flex items-center justify-center">
              <img
                src="/Sofa-Hero.svg"
                alt="Premium Dark Sofa"
                className="w-full h-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)] hover:scale-102 transition-transform duration-500"
              />
            </div>
            {/* Hero Typography & CTA */}
            <div className="flex flex-col items-start text-white">
              <h2
                className="text-4xl sm:text-5xl lg:text-[64px] font-normal leading-[1.1] tracking-wide mb-5 whitespace-nowrap"
                style={FONT_LIBERTINUS}
              >
                FUTURE OF{"\n"}LIVING
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 max-w-107.5 leading-relaxed tracking-wide mb-10 opacity-80">
                Experience furniture like never before with interactive 3D
                modeling. Precision-engineered designs meeting the transparency
                of digital craftsmanship.
              </p>

              {/* Komponen Button */}
              <div className="flex flex-row items-center gap-4 w-full">
                <Button variant="primary" className="flex-1 sm:flex-none">
                  SHOP NOW
                </Button>
                <Button
                  variant="outline-white"
                  className="flex-1 sm:flex-none"
                  onClick={() => setIsProjectoryOpen(true)}
                >
                  PROJECTORY (360°)
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Banner (100% Teak Wood, Quality, Balinese) */}
      <div className="w-full bg-[#D9D9D9]">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {FEATURES.map((feature) => (
              <div
                key={feature.alt}
                className={`flex items-center gap-4 ${feature.align}`}
              >
                <img
                  src={feature.image}
                  alt={feature.alt}
                  className={`${feature.imgClass} object-contain shrink-0`}
                />
                <div className="flex flex-col">
                  <span
                    className="text-2xl md:text-3xl leading-none text-black-900"
                    style={{ fontFamily: "'Gasoek One', sans-serif" }}
                  >
                    {feature.title}
                  </span>
                  <span
                    className={`text-sm md:text-base ${feature.subtitleWeight} ${feature.subtitleColor} leading-tight`}
                  >
                    {feature.subtitle}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Category Collections */}
      <div className="w-screen relative left-1/2 -translate-x-1/2 bg-[#1C1C1C] py-16 overflow-hidden font-['Inter']">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-white font-bold text-2xl md:text-3xl tracking-widest uppercase text-center mb-10">
            Find Your Needs With Us
          </h2>

          <div className="flex flex-col gap-6">
            {/* Hero Card Atas */}
            <Link
              to={HERO_COLLECTION.to}
              className="relative overflow-hidden rounded-[10px] cursor-pointer group w-full h-120 block bg-gray-800"
            >
              <img
                src={HERO_COLLECTION.image}
                alt={HERO_COLLECTION.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-left">
                <h3 className="text-white font-bold text-2xl leading-tight mb-1 drop-shadow-md">
                  {HERO_COLLECTION.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed transition-all duration-300 opacity-80 group-hover:opacity-100">
                  {HERO_COLLECTION.desc}
                </p>
              </div>
            </Link>

            {/* Grid Baris Bawah */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {GRID_COLLECTIONS.map((collection) => (
                <Link
                  key={collection.to}
                  to={collection.to}
                  className="relative overflow-hidden rounded-[10px] cursor-pointer group h-70 block w-full bg-gray-800"
                >
                  <img
                    src={collection.image}
                    alt={collection.alt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-left z-10">
                    <h3 className="text-white font-bold text-2xl leading-tight mb-1 drop-shadow-md">
                      {collection.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-all duration-300">
                      {collection.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal Projectory Muncul Jika isProjectoryOpen === true) */}
      <ProjectoryModal 
        isOpen={isProjectoryOpen} 
        onClose={() => setIsProjectoryOpen(false)} 
      />

      {/* Testimonials Section */}
      <TestimonialSection />

      {/* Reusable Footer Section */}
      <Footer />
    </section>
  );
}
