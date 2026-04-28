"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Tour = {
  id: string;
  src: string;
  alt?: string;
  badge?: string;
  title: string;
  subtitle?: string;
  href?: string;
};

export default function TourGrid({ tours }: { tours: Tour[] }) {
  return (
    <section className="w-full bg-[#f7f5ef] py-16">
      <div className="mx-auto max-w-350 px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => {
            const Wrapper: React.ElementType = tour.href ? Link : "div";
            const wrapperProps = tour.href
              ? { href: tour.href, "aria-label": tour.title }
              : {};

            return (
              <article
                key={tour.id}
                className="group relative overflow-hidden bg-black/5 shadow-sm ring-1 ring-black/10 rounded-lg"
              >
                <Wrapper
                  {...wrapperProps}
                  className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40"
                >
                  {/* image */}
                  <div className="relative aspect-2/3 w-full">
                    <img
                      src={tour.src}
                      alt={tour.alt ?? tour.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                      draggable={false}
                    />
                    {/* overlay for readability */}
                    <div className="pointer-events-none absolute inset-0 bg-linear-to-brom-black/20 via-black/10 to-black/70" />
                  </div>

                  {/* content overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center">
                    {/* badge */}
                    {tour.badge ? (
                      <p className="mb-auto mt-2 text-[11px] font-semibold tracking-[0.22em] text-white/80">
                        {tour.badge}
                      </p>
                    ) : (
                      <div className="mb-auto mt-2 h-3.5" />
                    )}

                    <h3 className="font-marcellus text-2xl text-white sm:text-3xl">
                      {tour.title}
                    </h3>

                    {tour.subtitle ? (
                      <p className="mt-2 text-sm text-white/85 sm:text-base">
                        {tour.subtitle}
                      </p>
                    ) : null}
                    {/* button */}
                    <div className="mt-6 inline-flex items-center justify-between gap-3 rounded-full bg-white/20 w-40 text-sm font-medium text-white backdrop-blur-md ring-1 ring-white/25 transition group-hover:bg-white/25">
                      <div className="pl-4">More info</div>

                      <div>
                        <span className="inline-flex p-4 items-center justify-center rounded-full ring-1 ring-white/20 bg-custom-pink">
                          <ChevronRight className="w-3 h-3 text-black" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Wrapper>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
