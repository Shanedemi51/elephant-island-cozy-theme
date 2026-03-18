"use client"
import HotelHeroSection from "../components/HotelHeroSection";
import Navbar from "../components/Navbar";
import ContactSplitSection from "../components/ContactSplitSection";
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
        title="About Us"
        subtitle=""
        tagline=""
        backgroundImage="/sea.jpeg"
      />
      <ContactSplitSection />
      <BookingHero backgroundImage="/road.jpg" />
      <ImageOffsetSwiper slides={tours} />
      <NewsletterSection />
      <SiteFooter />
    </>
  );
}
