import React from "react";
import { About, Consultation, Footer, Gallery, Hero, Navbar, ProductCarousel, Testimonial } from "../components";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Consultation/>
      <ProductCarousel />
      <About />
      <Gallery />
      {/* <Advantage /> */}
      {/* <BuyFlow /> */}
      <Testimonial />
      <Footer />
    </div>
  );
};

export default LandingPage;
