"use client";
import { Parallax } from "react-parallax";

type Card = {
  title: string;
  desc: string;
  img: string;
  link?: string;
};

export default function ParallaxFeatureSection({
  bgImage = "/images/parallax-bg.jpg",
  cards = [
    {
      title: "Spa & Wellness",
      desc: "Set in lush jungle, our modern spa embodies the calm of nature, offering extraordinary visual and auditory experiences that pamper and heal.",
      img: "/images/card-spa.jpg",
      link: "#",
    },
    {
      title: "Island Activities",
      desc: "A playground for the over-and-underwater world adventurers. Surfing, diving, snorkeling, fishing, sailing, nature trails & villages to explore.",
      img: "/images/card-activities.jpg",
      link: "#",
    },
    {
      title: "Gastronomic Dine",
      desc: "Our restaurants use fresh, organic ingredients that are locally produced and sourced. Delicious flavors and a warm atmosphere are the perfect way to unwind.",
      img: "/images/card-dine.jpg",
      link: "#",
    },
  ] as Card[],
}: {
  bgImage?: string;
  cards?: Card[];
}) {
  return (
    <section className="w-full bg-[#f7f5ef]">
      {/* Parallax top */}
      <Parallax
        bgImage={bgImage}
        bgImageAlt="Parallax Background"
        strength={100}
        className="relative"
      >
        {/* Height of parallax hero */}
        <div className="relative h-[75dvh] lg:h-screen">
          {/* dark overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* content */}
          <div className="relative z-10 flex h-full items-start pt-24 justify-center px-4">
            <div className="mx-auto max-w-3xl text-center text-white">
              <div className="flex justify-center mb-3">
                <img src="/island.png" className="w-10 invert" alt="" />
              </div>

              {/* big title */}
              <h2 className="font-marcellus text-4xl leading-[1.05] sm:text-6xl">
                One of the World&apos;s Most
                <br className="hidden md:block" />
                Desirable Locations
              </h2>

              {/* subtitle */}
              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/85">
                A Superb Mix Of Beaches, Wildlife, Culture, Food And Landscapes
                In The World&apos;s Most Beautiful Island.
              </p>
            </div>
          </div>
        </div>
      </Parallax>

      {/* Cards area (overlapping) */}
      <div className="relative">
        {/* Pull cards upward to overlap parallax */}
        <div className="-mt-28 sm:-mt-64">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
              {cards.map((c) => (
                <div key={c.title} className="text-center">
                  {/* image frame */}
                  <div className="relative border border-white overflow-hidden bg-white shadow-[0_18px_45px_rgba(0,0,0,0.1)]">
                    <img
                      src={c.img}
                      alt={c.title}
                      className="h-110 w-full object-cover"
                      draggable={false}
                    />
                  </div>

                  {/* title */}
                  <h3 className="mt-10 font-marcellus text-3xl text-[#1b1b1b]">
                    {c.title}
                  </h3>

                  {/* description */}
                  <p className="mx-auto mt-3 max-w-85 text-sm leading-6 text-[#1b1b1b]/70">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* bottom breathing space like screenshot */}
            <div className="h-16 sm:h-20" />
          </div>
        </div>
      </div>
    </section>
  );
}
