import HotelHeroSection from "../components/HotelHeroSection";
import Navbar from "../components/Navbar";
import IntroText from "../components/IntroText";
import TourGrid from "../components/TourGrid";
import { tours } from "../data/tours";
import NewsletterSection from "../components/NewsletterSection";
import SiteFooter from "../components/footer";

export default function Tours() {
  return (
    <>
      <Navbar />

      <HotelHeroSection
        title="Our Tours"
        subtitle="Please Look At Our Featured Tour Itineraries For Travel Ideas. Then Speak To Us About Your Particular Interests, Your Travel Budgets And How Much Time You have To Spend On The Island."
        tagline="UNFORGETTABLE EXPERIENCES"
        backgroundImage="/ourTours.jpeg"
      />

      <IntroText
        label="Explore"
        title="Amazing Tours & Experiences"
        description="From wildlife safaris to cultural tours, beach relaxation to mountain adventures - we offer carefully crafted experiences that showcase the best of Sri Lanka's diverse landscapes and rich heritage."
      />

      <TourGrid tours={tours} />

      <NewsletterSection />
      <SiteFooter />
    </>
  );
}
