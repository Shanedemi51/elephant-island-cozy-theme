"use client";

import React from "react";

interface HotelHeroSectionProps {
  title: string;
  subtitle: string;
  tagline: string;
  backgroundImage: string;
  showBookingButton?: boolean;
}

export default function HotelHeroSection({
  title,
  subtitle,
  tagline,
  backgroundImage,
  showBookingButton = true,
}: HotelHeroSectionProps) {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4 max-w-4xl">
          <p className="text-sm md:text-base tracking-widest uppercase opacity-80 mb-6">
            {tagline}
          </p>
          <h1 className="text-5xl md:text-7xl mb-6 tracking-wide font-marcellus">
            {title}
          </h1>
          <p className="md:text-base mb-4">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
