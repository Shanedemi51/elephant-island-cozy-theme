"use client";

import Image from "next/image";
import HotelHeroSection from "../components/HotelHeroSection";
import Navbar from "../components/Navbar";
import NewsletterSection from "../components/NewsletterSection";
import SiteFooter from "../components/footer";
import BookingHero from "../components/BookingHero";
import ImageOffsetSwiper from "../components/ImageOffsetSwiper";
import { tours } from "../data/tours";

export default function About() {
  return (
    <>
      <Navbar />

      <HotelHeroSection
        title="What To See & Do In Sri Lanka?"
        subtitle=""
        tagline=""
        backgroundImage="/animated.jpeg"
      />

      {/* places */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 py-20 px-8">
        {/* weligama */}
        <div className="border border-green-500 rounded-2xl p-4">
          {/* Image */}
          <div className="relative w-full h-82">
            <Image
              src="/whatToSee/weligama.jpeg"
              alt="Beira Lake Pavilion At Colombo"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Caption */}
          <p className="mt-2 text-center text-sm text-gray-700">Weligama Bay</p>

          {/* Day Title */}
          <h2 className="mt-4 text-center text-xl font-marcellus font-bold tracking-wide">
            When To Go?
          </h2>

          <p className="text-center text-sm">
            The Weather And The Cheapest Times To Visit
          </p>

          {/* point 1 */}
          <div className="mt-6">
            {/* title */}
            <p className="font-semibold text-center leading-snug">
              NOVEMBER | DECEMBER | JANUARY | FEBRUARY | MARCH
            </p>

            <p className="mt-2 text-sm text-center">
              This is the most popular period to visit Sri Lanka with dry
              weather along the South West and Deep South beaches.
            </p>

            <p className="mt-4 text-lg text-center font-medium">$$$</p>
            <p className="mt-2 text-sm text-center">
              It is the most expensive time to visit Sri Lanka. Hotels charge on
              average around 50% more than ‘summer’ rates.
            </p>
          </div>
        </div>

        {/* roastPaan */}
        <div className="border border-green-500 rounded-2xl p-4">
          {/* Image */}
          <div className="relative w-full h-82">
            <Image
              src="/whatToSee/roastPaan.jpeg"
              alt="Beira Lake Pavilion At Colombo"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Caption */}
          <p className="mt-2 text-center text-sm text-gray-700">
            Delicious ‘Roast Paan’ Bread
          </p>

          {/* Day Title */}
          <h2 className="mt-4 text-center text-xl font-marcellus font-bold tracking-wide">
            APRIL | MAY | JUNE
          </h2>

          <p className="text-center text-sm">
            The monsoon brings rainfall to the South West and Deep South of the
            island.
          </p>

          <p className="mt-2 text-sm text-center">
            The East Coast of Sri Lanka however starts to experience fine
            weather.
          </p>

          {/* point 1 */}
          <div className="mt-6">
            <p className="mt-4 text-lg text-center font-medium">$</p>
            <p className="mt-2 text-sm text-center">
              This is the cheapest time to visit Sri Lanka. Hotels charge on
              average around 50% lower than ‘winter’ rates and flight fares are
              also at their lowest.
            </p>
          </div>
        </div>

        {/* pigeonIsland */}
        <div className="border border-green-500 rounded-2xl p-4">
          {/* Image */}
          <div className="relative w-full h-82">
            <Image
              src="/whatToSee/pigeonIsland.jpeg"
              alt="Beira Lake Pavilion At Colombo"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Caption */}
          <p className="mt-2 text-center text-sm text-gray-700">
            Pigeon Island, Nilaveli
          </p>

          {/* Day Title */}
          <h2 className="mt-4 text-center text-xl font-marcellus font-bold tracking-wide">
            July | August
          </h2>

          <p className="text-center text-sm">
            The East Coast of Sri Lanka experiences fine weather with some of
            the best beaches in the world!
          </p>

          <p className="mt-2 text-sm text-center">
            The South West and Deep South beaches also attract some tourists
            although the seas are rough with some rainfall.
          </p>

          {/* point 1 */}
          <div className="mt-6">
            <p className="mt-4 text-lg text-center font-medium">$$</p>
            <p className="mt-2 text-sm text-center">
              Hotel and flight prices go up during the summer holiday period
              from @ 10th July – 31 August.
            </p>
          </div>
        </div>

        {/* hotAirBalooning */}
        <div className="border border-green-500 rounded-2xl p-4">
          {/* Image */}
          <div className="relative w-full h-82">
            <Image
              src="/whatToSee/hotAirBalooning.jpeg"
              alt="Beira Lake Pavilion At Colombo"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Caption */}
          <p className="mt-2 text-center text-sm text-gray-700">
            Hot Air Ballooning
          </p>

          {/* Day Title */}
          <h2 className="mt-4 text-center text-xl font-marcellus font-bold tracking-wide">
            September | October
          </h2>

          <p className="text-center text-sm">
            The inter-monsoon changeover period brings mixed weather although
            The East Coast of Sri Lanka still experiences fine weather.
          </p>

          {/* point 1 */}
          <div className="mt-6">
            <p className="mt-4 text-lg text-center font-medium">$</p>
            <p className="mt-2 text-sm text-center">
              This is the another very cheap time to visit Sri Lanka. Hotels
              rates are around 50% lower than ‘winter’ rates with low flight
              fares.
            </p>
          </div>
        </div>

        {/* acVan */}
        <div className="border border-green-500 rounded-2xl p-4">
          {/* Image */}
          <div className="relative w-full h-82">
            <Image
              src="/whatToSee/acVan.jpeg"
              alt="Beira Lake Pavilion At Colombo"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Caption */}
          <p className="mt-2 text-center text-sm text-gray-700">
            Luxury AC Van
          </p>

          {/* Day Title */}
          <h2 className="mt-4 text-center text-xl font-marcellus font-bold tracking-wide">
            How To Travel Around The Island?
            <br />
            By Road
          </h2>

          <p className="text-center text-sm">
            Sri Lanka is a ‘touring’ destination, much like India where tourists
            travel in dedicated vehicles with their own exclusive driver-guides.
            All are fluent in English and also act as guides at each sightseeing
            location.
          </p>

          <p className="mt-4 text-sm text-center">
            There are no ‘tourist’ coaches between destinations unlike many
            other countries!
          </p>
        </div>

        {/* train */}
        <div className="border border-green-500 rounded-2xl p-4">
          {/* Image */}
          <div className="relative w-full h-82">
            <Image
              src="/whatToSee/train.jpeg"
              alt="Beira Lake Pavilion At Colombo"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Caption */}
          <p className="mt-2 text-center text-sm text-gray-700">
            Kandy Railway Station
          </p>

          {/* Day Title */}
          <h2 className="mt-4 text-center text-xl font-marcellus font-bold tracking-wide">
            By Train
          </h2>

          <p className="text-center text-sm">
            It is possible to travel by train on some of the most beautiful
            railway journeys in the world!
          </p>

          <p className="mt-4 text-sm text-center">
            Colombo-Kandy: Through tropical landscapes and the ’Kadugannawa’
            mountain pass.
          </p>

          <p className="mt-4 text-sm text-center">
            Kandy-Nuwara Eliya / Ella: The world-famous train through the Hill
            Country of the island.
          </p>

          <p className="mt-4 text-sm text-center">
            Colombo-Galle: With spectacular coastal views along the South West
            Coast.
          </p>
        </div>

        {/* sigiriya */}
        <div className="border border-green-500 rounded-2xl p-4">
          {/* Image */}
          <div className="relative w-full h-82">
            <Image
              src="/whatToSee/sigiriya.jpeg"
              alt="Beira Lake Pavilion At Colombo"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Caption */}
          <p className="mt-2 text-center text-sm text-gray-700">
            Sigiriya Fortress
          </p>

          {/* Day Title */}
          <h2 className="mt-4 text-center text-xl font-marcellus font-bold tracking-wide">
            Which Direction Should You Travel Around The Island?
          </h2>

          <p className="text-center text-sm">
            Generally speaking, people travel in a ‘clockwise’ direction after
            arrival at Colombo or the Airport.
          </p>

          <p className="mt-4 text-sm text-center">
            However, If you wish to stay on the East Coast of the island after
            your tour, it may be better to travel to on an ‘anti-clockwise’
            direction instead.
          </p>
        </div>

        {/* visa */}
        <div className="border border-green-500 rounded-2xl p-4">
          {/* Image */}
          <div className="relative w-full h-82">
            <Image
              src="/whatToSee/visa.jpeg"
              alt="Beira Lake Pavilion At Colombo"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Caption */}
          <p className="mt-2 text-center text-sm text-gray-700">
            Colombo Airport
          </p>

          {/* Day Title */}
          <h2 className="mt-4 text-center text-xl font-marcellus font-bold tracking-wide">
            Visa Requirements
          </h2>

          <p className="text-center text-sm mt-4">
            To enter Sri Lanka, visitors will need:
          </p>

          <ul className="text-sm text-center mt-2 font-medium">
            <li>+ A passport valid for 6+ months.</li>
            <li>+ A confirmed return ticket.</li>
            <li>+ An Electronic Travel Authorization (ETA).</li>
            <li className="text-blue-500">
              <a href="https://eta.gov.lk/slvisa/">
                https://eta.gov.lk/slvisa/
              </a>
            </li>
          </ul>

          <p className="mt-4 text-sm text-center">
            Most pay a fee but passport holders of some countries (China, India,
            Russia, etc.) get a free ETA.
          </p>

          <p className="mt-4 text-sm text-center">
            Please check your specific requirements on the official ETA website
            or consulate.
          </p>
        </div>
      </section>

      <BookingHero backgroundImage="/road.jpg" />
      <ImageOffsetSwiper slides={tours} />

      <NewsletterSection />
      <SiteFooter />
    </>
  );
}
