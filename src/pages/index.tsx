import React from "react";
import {
  About,
  Consultation,
  Footer,
  Gallery,
  Hero,
  Navbar,
  ProductCarousel,
  Testimonial,
} from "../components";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div id="konsultasi">
        <Consultation />
      </div>
      <ProductCarousel />
      <About />
      <Gallery />
      {/* <Advantage /> */}
      {/* <BuyFlow /> */}
      <Testimonial />
      <Footer />
    </>
  );
};

export default LandingPage;
