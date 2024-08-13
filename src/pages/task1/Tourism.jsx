import React from "react";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import HeroSection from "./layout/HeroSection";
import MostPopularLoaction from "./layout/MostPopularLoaction";
import BookTrip from "./layout/BookTrip";
import Services from "./layout/Services";
import Gallery from "./layout/Gallery";
import Review from "./layout/Review";
import Contact from "./layout/Contact";

const Tourism = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MostPopularLoaction />
      <BookTrip />
      <Services />
      <Gallery />
      <Review />
      <Contact />
      <Footer />
    </>
  );
};

export default Tourism;
