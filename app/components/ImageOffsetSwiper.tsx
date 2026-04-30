"use client";

import React, { useCallback, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { useRouter } from "next/navigation";

type Slide = {
  id: string;
  src: string;
  alt?: string;
  badge?: string;
  title: string;
  subtitle?: string;
  href?: string;
};

export default function OutstandingViewsSwiper({ slides }: { slides: Slide[] }) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const router = useRouter();

  const handleCardClick = (href: string) => {
    window.scrollTo(0, 0);
    router.push(href);
  };

  const handleSwiper = useCallback((swiper: SwiperType) => {
    swiperRef.current = swiper;
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  }, []);

  const updateEdges = useCallback((swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  }, []);

  const prev = () => swiperRef.current?.slidePrev();
  const next = () => swiperRef.current?.slideNext();

  return (
    <section className="w-full bg-[#f7f5ef] py-10 overflow-hidden">
      <div className="relative mx-auto mt-10 max-w-350">
        {/* only-at-start left gap */}
        <div
          className={[
            "transition-[padding] duration-500 ease-out",
            isBeginning ? "pl-10 sm:pl-16 md:pl-24" : "pl-0",
          ].join(" ")}
        >
          <Swiper
            onSwiper={handleSwiper}
            onSlideChange={updateEdges}
            speed={650}
            slidesPerView={"auto"}
            spaceBetween={26}
            grabCursor
            longSwipesRatio={0.15}
            threshold={8}
            className="overflow-visible!"
          >
            {slides.map((s) => {
              const handleClick = s.href ? () => handleCardClick(s.href!) : undefined;
              const wrapperProps = s.href
                ? { onClick: handleClick, "aria-label": s.title, role: "button", tabIndex: 0 }
                : {};

              return (
                <SwiperSlide
                  key={s.id}
                  className="w-70! xs:!w-[320px] sm:w-90! md:w-105! lg:w-100!"
                >
                  <article className="group relative overflow-hidden bg-black/5 shadow-sm ring-1 ring-black/10">
                    <div
                      {...wrapperProps}
                      className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40 cursor-pointer"
                    >
                      {/* image */}
                      <div className="relative aspect-9/16 lg:aspect-2/3 w-full">
                        <img
                          src={s.src}
                          alt={s.alt ?? s.title}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                          draggable={false}
                        />
                        {/* overlay for readability */}
                        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/15 via-black/10 to-black/60" />
                      </div>

                      {/* content overlay */}
                      <div className="absolute inset-0 flex flex-col items-center justify-end p-7 sm:p-8 text-center">
                        {/* badge */}
                        {s.badge ? (
                          <p className="mb-auto mt-2 text-[11px] font-semibold tracking-[0.22em] text-white/80">
                            {s.badge}
                          </p>
                        ) : (
                          <div className="mb-auto mt-2 h-3.5" />
                        )}

                        <h3 className="font-marcellus text-3xl text-white sm:text-4xl">
                          {s.title}
                        </h3>

                        {s.subtitle ? (
                          <p className="mt-2 text-sm text-white/85 sm:text-base">
                            {s.subtitle}
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
                    </div>
                  </article>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* Prev/Next buttons */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className={[
            "absolute left-2 top-1/2 z-20 -translate-y-1/2",
            "h-12 w-12 rounded-full bg-white/50 border border-black/10 shadow-lg backdrop-blur-sm",
            "flex items-center justify-center",
            "transition-opacity",
            isBeginning ? "pointer-events-none" : "cursor-pointer",
          ].join(" ")}
        >
          <ChevronLeft className="w-5 h-5 text-black" />
        </button>

        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className={[
            "absolute right-2 top-1/2 z-20 -translate-y-1/2 cursor-pointer",
            "h-12 w-12 rounded-full bg-white/50 border border-black/10 shadow-lg backdrop-blur-sm",
            "flex items-center justify-center",
            "transition-opacity",
          ].join(" ")}
        >
          <ChevronRight className="w-5 h-5 text-black" />
        </button>
      </div>
    </section>
  );
}
