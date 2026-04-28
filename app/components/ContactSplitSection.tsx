"use client";

import React, { useMemo, useState } from "react";

type ContactCard = {
  title: string;
  subtitle: string;
  phone: string;
  email: string;
};

export default function ContactSplitSection() {
  const cards: ContactCard[] = useMemo(
    () => [
      {
        title: "Accommodation",
        subtitle: "Enquiries & Bookings",
        phone: "+679 345 7788",
        email: "stay@elis.com",
      },
      {
        title: "Restaurants",
        subtitle: "Enquiries & Bookings",
        phone: "+679 345 2255",
        email: "dine@elis.com",
      },
      {
        title: "Day Spa & Gym",
        subtitle: "Enquiries & Bookings",
        phone: "+679 345 6677",
        email: "wellness@elis.com",
      },
      {
        title: "Banquet & Weddings",
        subtitle: "Enquiries & Bookings",
        phone: "+679 334 2211",
        email: "events@elis.com",
      },
    ],
    [],
  );

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // hook your API here
    console.log("submit", form);
  }

  return (
    <section className="w-full bg-white">
      <div className="">
        {/* LEFT: contact info */}
        <div className="px-6 py-16 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="mx-auto max-w-165 border border-green-500 rounded-2xl p-8">
            <p className="text-sm font-semibold tracking-[0.18em] text-black/50 text-center lg:text-left">
              WELCOME TO ELEPHANT ISLAND
            </p>

            <h2 className="mt-6 font-marcellus text-4xl tracking-tight text-black/90 sm:text-5xl text-center lg:text-left">
              About Our Company
            </h2>

            <h6 className="font-bold text-xl text-center lg:text-left mt-4">
              Elephant Island
            </h6>
            <div className="text-center lg:text-left mt-2">
              <p>Start Of Business : 2001</p>
              <p>Years in Business : 25 Years</p>
              <p className="mt-4">
                Our company has so far hosted in excess of 35,000 visitors to
                Sri Lanka and The Maldives.
              </p>
            </div>
          </div>

          <div className="border border-green-500 rounded-2xl p-4 lg:col-span-2">
            {/* Day Title */}
            <h2 className="my-4 text-center text-xl font-marcellus font-bold tracking-wide lg:text-left">
              Sri Lanka Office
            </h2>
            {/* Google Map */}
            <div className="mb-4 overflow-hidden rounded-xl border border-zinc-200">
              <iframe
                title="Sri Lanka Office Location"
                src="https://www.google.com/maps?q=Office%2031%20Nugegoda%20Business%20Centre%2080%20Nawala%20Road%20Nugegoda%20Sri%20Lanka%2000800&output=embed"
                className="h-56 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Address */}
            <div className="mt-4 text-sm text-black/60">
              <p>Office 31</p>
              <p>Nugegoda Business Centre</p>
              <p>80 Nawala Road</p>
              <p>Nugegoda</p>
              <p>Colombo, Sri Lanka</p>
              <p>00800</p>
            </div>

            {/* Contact Info */}
            <div className="mt-6 space-y-2 text-[15px] leading-7 text-black/70">
              <p>
                <span className="font-semibold text-black/80">Email:</span>{" "}
                info@elephant-island.com
              </p>

              <p>
                <span className="font-semibold text-black/80">
                  Phone / WhatsApp:
                </span>{" "}
                +94 77 059 9092
              </p>

              <p className="text-blue-500 break-all">
                <span className="font-semibold text-black/80">Facebook:</span>{" "}
                <a
                  href="https://www.facebook.com/elephant.island.lk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.facebook.com/elephant.island.lk/
                </a>
              </p>

              <p className="text-blue-500 break-all">
                <span className="font-semibold text-black/80">Instagram:</span>{" "}
                <a
                  href="https://www.instagram.com/elephantisland.lk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.instagram.com/elephantisland.lk/
                </a>
              </p>
            </div>
          </div>

          <div className="border border-green-500 rounded-2xl p-4">
            <img src="/masks.jpeg" alt="" />

            {/* Caption */}
            <p className="mt-2 text-center text-sm text-gray-700">
              Masks At Ambalangoda
            </p>

            {/* Day Title */}
            <h2 className="mt-4 text-center text-xl font-marcellus font-bold tracking-wide">
              Trusted Hospitality Professionals
            </h2>

            <p className="text-center text-sm mt-2">
              We are an established Sri Lanka travel company that owns and
              operates 2 of the island’s premier luxury boutique hotels.
            </p>
          </div>

          <div className="border border-green-500 rounded-2xl p-4">
            <img src="/elephantStables.jpeg" alt="" />

            {/* Day Title */}
            <h2 className="mt-4 text-center text-xl font-marcellus font-bold tracking-wide">
              The Elephant Stables
            </h2>

            <p className="text-blue-500 text-center text-sm mt-1">
              <a href="www.elephantstables.com">www.elephantstables.com</a>
            </p>

            <p className="text-center text-sm mt-2">
              The former home of one of Sri Lanka’s most aristocratic families
              now converted in to a famous boutique hotel with designer
              interiors and stunning views.
            </p>
          </div>

          <div className="border border-green-500 rounded-2xl p-4">
            <img src="/riverdale.jpeg" alt="" />

            {/* Day Title */}
            <h2 className="mt-4 text-center text-xl font-marcellus font-bold tracking-wide">
              Riverdale Bungalow
            </h2>

            <p className="text-blue-500 text-center text-sm mt-1">
              <a href="www.riverdalebungalow.com">www.riverdalebungalow.com</a>
            </p>

            <p className="text-center text-sm mt-2">
              A famous colonial heritage bungalow where Sir David Lean filmed
              much of the classic film The Bridge On The River Kwai.
            </p>
          </div>

          <div className="border border-green-500 rounded-2xl p-4">
            <img src="/slil.jpeg" alt="" />

            {/* Day Title */}
            <h2 className="mt-4 text-center text-xl font-marcellus font-bold tracking-wide">
              Sri Lanka In Luxury
            </h2>

            <p className="text-blue-500 text-center text-sm mt-1">
              <a href="www.srilankainluxury.com">www.srilankainluxury.com</a>
            </p>

            <p className="text-center text-sm mt-2">
              We are also part of Sri Lanka In Luxury Ltd a leading luxury tour
              operator in the UK. All of our clients departing from the UK are
              additionally 100% Financially Protected by our ATOL License and
              TOPP policy with T@G Insurance Plc.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  type?: string;
}) {
  return (
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full rounded-none border border-black/10 bg-white px-4 py-4 text-[14px] text-black/70 outline-none transition focus:border-black/30"
    />
  );
}
