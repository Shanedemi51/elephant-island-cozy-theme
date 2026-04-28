"use client";

import { useState } from "react";
import { Parallax } from "react-parallax";
import ContactModal from "./ContactModal";

const TwoColumnSection = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  return (
    <section className="relative py-20 flex items-center bg-white">
      <div className="container mx-auto px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Parallax Image */}
          <div className="order-2 lg:order-1 lg:p-10">
            <Parallax
              bgImage="/images/gal-oya-lodge.jpeg"
              bgImageAlt="Restaurant interior"
              strength={75}
              className="h-100 sm:h-150 lg:h-[90dvh] 2xl:h-175 w-auto overflow-hidden hidden xl:block"
            >
              <div className="h-full flex items-center justify-center">
                {/* Optional: Add overlay or content here if needed */}
              </div>
            </Parallax>
            <p className="text-center mt-2 text-sm text-gray-700 hidden xl:block">Gal Oya Lodge</p>

            <img
              src="/images/gal-oya-lodge.jpeg"
              className="xl:hidden"
              alt=""
            />
            <p className="text-center mt-2 text-sm text-gray-700 xl:hidden">Gal Oya Lodge</p>

          </div>

          {/* Right Column - Text Content */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* Small Uppercase Heading */}
            <h3 className="text-sm font-semibold tracking-widest uppercase text-gray-600 text-center lg:text-left">
              Tailor Made Itineraries
            </h3>

            {/* Main Heading */}
            <h2 className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-marcellus text-gray-900 text-center lg:text-left">
              Let Us Design Your own Itinerary
            </h2>

            {/* Description Paragraphs */}
            <div className="space-y-4 xl:max-w-lg">
              <p className="text-lg font-normal text-gray-700 leading-relaxed text-center lg:text-left">
                Please contact us if you are interested in discussing a
                tailor-made itinerary with our travel experts as per your
                specific interests and requirements.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-marcellus font-medium text-black bg-custom-pink rounded-full transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* Button text */}
                <span className="px-4">Contact Us</span>


                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-none group-hover:transition-transform group-hover:duration-700" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
        formLocation="Design Your Itinerary Form"
      />
    </section>
  );
};

export default TwoColumnSection;
