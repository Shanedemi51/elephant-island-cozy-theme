"use client";

import { useState } from "react";
import { Parallax } from "react-parallax";
import ContactModal from "./ContactModal";

const TwoColumnSectionReverse = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  return (
    <section className="relative pb-20 flex items-center bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text Content */}
          <div className="order-1 lg:order-1 space-y-6">
            {/* Small Uppercase Heading */}
            <h3 className="text-sm font-semibold tracking-widest uppercase text-gray-600 text-center lg:text-left">
              I Already Have An Itinerary
            </h3>

            {/* Main Heading */}
            <h2 className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-marcellus text-gray-900 text-center lg:text-left">
              Get Me A Cheaper Holiday!
            </h2>

            {/* Description Paragraphs */}
            <div className="space-y-4 xl:max-w-lg">
              <p className="text-lg font-normal text-gray-700 leading-relaxed text-center lg:text-left">
                If you have already been quoted for a Sri Lanka itinerary, we
                are usually able to offer a much lower price. Please send us any
                quotes you have received.
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

          {/* Right Column - parallex Image */}
          <div className="order-2 lg:order-2 lg:p-10">
           <Parallax
              bgImage="/images/Nine-Arch-Bridge-ella.jpeg"
              bgImageAlt="Restaurant interior"
              strength={75}
              className="h-100 sm:h-150 lg:h-[90dvh] 2xl:h-175 w-auto overflow-hidden hidden xl:block"
            >
              <div className="h-full flex items-center justify-center">
                {/* Optional: Add overlay or content here if needed */}
              </div>
            </Parallax>
            <p className="text-center mt-2 text-sm text-gray-700 hidden xl:block">Nine Arch Bridge, Ella</p>

            <img src="/images/Nine-Arch-Bridge-ella.jpeg" className="xl:hidden" alt="" />
            <p className="text-center mt-2 text-sm text-gray-700 xl:hidden">Nine Arch Bridge, Ella</p>

          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
        showItineraryUpload
        formLocation="Cheaper Offer Form"
      />
    </section>
  );
};

export default TwoColumnSectionReverse;
