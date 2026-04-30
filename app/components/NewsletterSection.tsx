"use client";

import { Parallax } from "react-parallax";

type NewsletterSectionProps = {
  strength?: number;
};

export default function NewsletterSection({
  strength = 100,
}: NewsletterSectionProps) {
  return (
    <Parallax
      bgImage="/banner.jpeg"
      strength={strength}
      bgImageStyle={{ objectFit: "cover" }}
    >
      <section className="relative">
        {/* overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-black/25" />

        {/* content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* LEFT */}
            <div>
              <p className="text-sm font-semibold tracking-[0.25em] text-white/80">
                Who We Are?
              </p>

              <h2 className="mt-6 font-marcellus text-2xl leading-[1.05] text-white sm:text-5xl lg:text-4xl">
                Our company has so far hosted in excess of 35,000 visitors to
                Sri Lanka.
              </h2>

              <div className="flex items-center gap-6 mt-6">
                <img src="/atol.png" className="w-20" alt="" />
                <div className="bg-white p-1 rounded">
                  <img src="/topp.jpg" className="w-32" alt="" />
                </div>
              </div>

              <p className="text-white mt-6 text-sm">
                Elephant Island Is A Brand Name Of Sri Lanka In Luxury Ltd.
              </p>

              <p className="text-xs font-semibold tracking-[0.25em] text-white mt-12 hidden lg:block">
                Established Since 2003
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-6 lg:right-6 lg:hidden">
          <p className="text-xs font-semibold tracking-[0.25em] text-white">
            Established Since 2003
          </p>
        </div>
      </section>
    </Parallax>
  );
}
