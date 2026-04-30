import HotelHeroSection from "../components/HotelHeroSection";
import Navbar from "../components/Navbar";
import NewsletterSection from "../components/NewsletterSection";
import SiteFooter from "../components/footer";
import BookingHero from "../components/BookingHero";

export default function Contact() {
  return (
    <>
      <Navbar />
      <HotelHeroSection
        title="Contact Us"
        subtitle="Get in touch with us for your perfect island getaway"
        tagline="WE'RE HERE TO HELP"
        backgroundImage="/sea.jpeg"
      />
     
     
      <BookingHero backgroundImage="/road.jpg" />


      <NewsletterSection />
      <SiteFooter />
    </>
  );
}
