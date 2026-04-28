"use client";

import { Parallax } from "react-parallax";
import { Users, MapPin, Building, Car, Calendar } from "lucide-react";

const services = [
  {
    title: "Group Tours",
    desc: "We can arrange tours for any group size inclusive of vans and luxury coaches.",
    Icon: Users,
    image: "/icons/peacock.jpeg",
  },
  {
    title: "Special Interest Holidays",
    desc: "We organize specialist wildlife, birding, golfing holidays and more.",
    Icon: MapPin,
    image: "/icons/tiger.jpeg",
  },
  {
    title: "Hotel Bookings",
    desc: "We guarantee to quote lower rates for any hotel in Sri Lanka.",
    Icon: Building,
    image: "/icons/bag.jpeg",
  },
  {
    title: "Vehicles For Tours",
    desc: "We provide fully licensed A/C vehicles with English speaking guides.",
    Icon: Car,
    image: "/icons/car.jpeg",
  },
  {
    title: "Day Trips From Colombo",
    desc: "Excursions to Sigiriya, Kandy, Galle from the capital city.",
    Icon: Calendar,
    image: "/icons/elephant.jpeg",
  },
];

const TwoColumnSection = () => {
  return (
    <section className="relative py-20 flex items-center bg-white">
      <div className="container mx-auto px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Parallax Image */}
          <div className="order-2 lg:order-1 p-0 ">
            <Parallax
              bgImage="/images/Millennium-Elephant-Foundation.jpeg"
              bgImageAlt="Restaurant interior"
              strength={75}
              className="h-100 sm:h-150 lg:h-[90dvh] 2xl:h-175 w-auto overflow-hidden"
            >
              <div className="h-full flex items-center justify-center" />
            </Parallax>
            <p className="text-center mt-2 text-sm text-gray-700">Millennium Elephant Foundation</p>
          </div>

          {/* Right Column - Text Content */}
          <div className="order-1 lg:order-2 space-y-10 py-8 lg:pt-12">
           
           

            {/* Main Heading */}
            <h2 className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-marcellus text-gray-900 text-center lg:text-left">
              Tourism Services We Offer In Sri Lanka
            </h2>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
              {services.map(({ title, desc, image }) => (
                <div key={title} className="flex gap-4">
                  
                  <img src={image} alt={title} className="h-6" />

                  <div className="space-y-2">
                    <h4 className="font-marcellus text-xl text-gray-900">
                      {title}
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoColumnSection;
