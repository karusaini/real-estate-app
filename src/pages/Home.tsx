import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import HeroFilters from "../components/HeroFilters";
import WhatWeDo from "../components/WhatWeDo";
import FeaturedProperties from "../components/FeaturedProperties";
import StartJourney from "../components/StartJourney";
import AboutSection from "../components/AboutSection";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import BestPropertiesForSale from "../components/BestPropertiesForSale";
import BestPropertiesForRent from "../components/BestPropertiesForRent";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <section id="home">
        <HeroSection />
      </section>

      <section>
        <HeroFilters />
      </section>

      <section id="buy">
        <BestPropertiesForSale />
      </section>

      <section id="rent">
        <BestPropertiesForRent />
      </section>

      <section id="sell">
        <FeaturedProperties />
      </section>

      <section id="about">
        <WhatWeDo />
        <StartJourney />
        <AboutSection />
      </section>

      <section id="contact">
        <Newsletter />
        <Footer />
      </section>
    </div>
  );
}
