"use client";

import React, { useMemo, useState } from "react";
import { Parallax } from "react-parallax";

const COUNTRIES = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

type FormData = {
  name: string;
  email: string;
  phone: string;
  travellingWith: "" | "partner" | "family" | "friends" | "solo";
  accommodation: "" | "budget" | "standard" | "firstClass" | "luxury";
  details: string;
  country: string;
};

const inputClass =
  "mt-2 w-full bg-white text-black placeholder:text-black/25 border-t border-slate-200";
const fieldWrapClass = "border border-[#B8A77C]/60 p-3 bg-white rounded-lg";

export default function BookingHero({
  backgroundImage,
}: {
  backgroundImage: string;
}) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    travellingWith: "",
    accommodation: "",
    details: "",
    country: "",
  });

  const steps = useMemo(
    () => [
      {
        id: 1 as const,
        title: "Your Details",
        subtitle: "Tell us who you are",
      },
      {
        id: 2 as const,
        title: "Trip Preferences",
        subtitle: "Help us tailor it",
      },
      { id: 3 as const, title: "Travel Info", subtitle: "Final details" },
    ],
    [],
  );

  const current = steps.find((s) => s.id === step)!;

  function set<K extends keyof FormData>(key: K, value: FormData[K]) {
    setForm((p) => ({ ...p, [key]: value }));
  }

  function next() {
    if (step < 3) setStep((s) => (s + 1) as 1 | 2 | 3);
  }
  function prev() {
    if (step > 1) setStep((s) => (s - 1) as 1 | 2 | 3);
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: send form to your API / email service
    console.log("Enquiry:", form);
  }

  return (
    <section className="relative w-full">
      <Parallax
        bgImage={backgroundImage}
        bgImageAlt="Hero background"
        strength={50}
        className="min-h-[85vh]"
      >
        {/* Parallax needs height from inner content */}
        <div className="relative min-h-[85vh] z-30">
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-[#333]" />

          <div className="relative mx-auto flex min-h-[85vh] max-w-7xl items-center px-4 py-16 md:px-6">
            <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
              {/* Left text */}
              <div className="lg:col-span-7 text-center p-4 lg:text-left">
                

                <h1 className="font-marcellus text-4xl leading-[1.02] text-white md:text-5xl">
                  Contact Our Sri Lanka Travel Experts
                </h1>

                <h2 className="font-marcellus text-xl leading-[1.02] text-white md:text-2xl mt-6">
                  Tel : +94 77 707 2265
                </h2>

                 <h2 className="font-marcellus text-xl leading-[1.02] text-white md:text-2xl mt-6">
                  Email : info@elephant-island.com
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">

                    <div>
                      <img src="/team/shane.jpeg" className="w-full rounded-full" alt="" />
                      <h6 className="text-white text-xl mt-2 text-center">Shane</h6>
                    </div>

                    <div>
                      <img src="/team/ashan.jpeg" className="w-full rounded-full" alt="" />
                      <h6 className="text-white text-xl mt-2 text-center">Ashan</h6>
                    </div>

                    <div>
                      <img src="/team/rangila.jpeg" className="w-full rounded-full" alt="" />
                      <h6 className="text-white text-xl mt-2 text-center">Rangila</h6>
                    </div>

                    <div>
                      <img src="/team/riyaz.jpeg" className="w-full rounded-full" alt="" />
                      <h6 className="text-white text-xl mt-2 text-center">Riyaz</h6>
                    </div>

                </div>
               
              </div>

              {/* Right booking card */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="w-full max-w-md bg-[#7F8454] backdrop-blur md:p-2 rounded-2xl">
                  <div className="border border-[#A39F58]/70 p-6 md:p-8 rounded-2xl">
                    <p className="text-center text-xs font-semibold tracking-[0.22em] text-white/85">
                      PLAN YOUR TRIP
                    </p>
                    <h2 className="mt-3 text-center font-marcellus text-4xl text-white md:text-3xl">
                      ENQUIRE NOW
                    </h2>

                    {/* Step header */}
                    <div className="mt-6">
                      <div className="flex items-center justify-between text-xs text-white/70">
                        <span>Step {step} of 3</span>
                        <span className="font-semibold text-white/80">
                          {current.title}
                        </span>
                      </div>

                      {/* Progress bar */}
                      <div className="mt-2 h-1 w-full bg-white/10">
                        <div
                          className="h-1 bg-[#B8A77C]"
                          style={{ width: `${(step / 3) * 100}%` }}
                        />
                      </div>

                      <p className="mt-2 text-sm text-white/75">
                        {current.subtitle}
                      </p>
                    </div>

                    <form className="mt-6 space-y-4" onSubmit={onSubmit}>
                      {/* STEP 1: Your Details (3 fields) */}
                      {step === 1 && (
                        <>
                          <div className={fieldWrapClass}>
                            <label className="block font-marcellus text-sm text-black">
                              Your Name<span className="">*</span>
                            </label>
                            <input
                              type="text"
                              required
                              value={form.name}
                              onChange={(e) => set("name", e.target.value)}
                              placeholder="Enter your name"
                              className={inputClass}
                            />
                          </div>

                          <div className={fieldWrapClass}>
                            <label className="block font-marcellus text-sm text-black">
                              Your E-Mail
                              <span className="">*</span>
                            </label>
                            <input
                              type="email"
                              required
                              value={form.email}
                              onChange={(e) => set("email", e.target.value)}
                              placeholder="Enter your email"
                              className={inputClass}
                            />
                          </div>

                          <div className={fieldWrapClass}>
                            <label className="block font-marcellus text-sm text-black">
                              Your Phone / WhatsApp
                            </label>
                            <input
                              type="tel"
                              value={form.phone}
                              onChange={(e) => set("phone", e.target.value)}
                              placeholder="+IDD XX XXX XXXX"
                              className={inputClass}
                            />
                          </div>
                        </>
                      )}

                      {/* STEP 2: Trip Preferences (3 fields) */}
                      {step === 2 && (
                        <>
                          <div className={fieldWrapClass}>
                            <label className="block font-marcellus text-sm text-black">
                              Who Will You Be Travelling With?
                            </label>
                            <select
                              value={form.travellingWith}
                              onChange={(e) =>
                                set(
                                  "travellingWith",
                                  e.target.value as FormData["travellingWith"],
                                )
                              }
                              className="mt-2 w-full bg-transparent outline-none"
                            >
                              <option className="text-black" value="">
                                Select
                              </option>
                              <option className="text-black" value="partner">
                                Partner
                              </option>
                              <option className="text-black" value="family">
                                Family
                              </option>
                              <option className="text-black" value="friends">
                                Friends
                              </option>
                              <option className="text-black" value="solo">
                                Solo
                              </option>
                            </select>
                          </div>

                          <div className={fieldWrapClass}>
                            <label className="block font-marcellus text-sm text-black">
                              Standard Of Accommodation
                            </label>
                            <select
                              value={form.accommodation}
                              onChange={(e) =>
                                set(
                                  "accommodation",
                                  e.target.value as FormData["accommodation"],
                                )
                              }
                              className="mt-2 w-full bg-transparent outline-none"
                            >
                              <option className="text-black" value="">
                                Select
                              </option>
                              <option className="text-black" value="budget">
                                Budget
                              </option>
                              <option className="text-black" value="standard">
                                Standard (3 Star)
                              </option>
                              <option className="text-black" value="firstClass">
                                First Class (4/5 Star)
                              </option>
                              <option className="text-black" value="luxury">
                                Luxury
                              </option>
                            </select>
                          </div>

                          <div className={fieldWrapClass}>
                            <label className="block font-marcellus text-sm text-black">
                              Your Country
                            </label>
                            <select
                              value={form.country}
                              onChange={(e) => set("country", e.target.value)}
                              className="mt-2 w-full bg-transparent outline-none"
                            >
                              <option className="text-black" value="">
                                Select country
                              </option>
                              {COUNTRIES.map((c) => (
                                <option
                                  key={c}
                                  className="text-black"
                                  value={c}
                                >
                                  {c}
                                </option>
                              ))}
                            </select>
                          </div>
                        </>
                      )}

                      {/* STEP 3: Travel Info (1 field, but still 3 “questions” via placeholder prompts) */}
                      {step === 3 && (
                        <>
                          <div className={fieldWrapClass}>
                            <label className="block font-marcellus text-sm text-black">
                              Tell Us As Much As Possible
                            </label>
                            <textarea
                              rows={6}
                              value={form.details}
                              onChange={(e) => set("details", e.target.value)}
                              placeholder={
                                "1) Your dates of travel: MM/YY or DD/MM/YY\n2) How many people are travelling?\n3) If with kids: number & ages?"
                              }
                              className="mt-2 w-full resize-none bg-transparent placeholder:text-slate-300 outline-none"
                            />
                          </div>
                        </>
                      )}

                      {/* Buttons */}
                      <div className="mt-2 flex items-center gap-3">
                        <button
                          type="button"
                          onClick={prev}
                          disabled={step === 1}
                          className="w-1/3 border border-[#B8A77C]/70 py-3 text-center font-medium text-white/90 transition disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer"
                        >
                          Back
                        </button>

                        {step < 3 ? (
                          <button
                            type="button"
                            onClick={next}
                            className="w-2/3 bg-[#E8A7C5] py-3 text-center font-medium text-white transition hover:brightness-95 cursor-pointer"
                          >
                            Next
                          </button>
                        ) : (
                          <button
                            type="submit"
                            className="w-2/3 bg-[#E8A7C5] py-3 text-center font-medium text-white transition hover:brightness-95 cursor-pointer"
                          >
                            Send Enquiry
                          </button>
                        )}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/50 via-black/25 to-transparent z-10" />
      </Parallax>
    </section>
  );
}
