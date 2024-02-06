import React from "react";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import WeHelpSection from "../components/WeHelpSection";
import PopularProduct from "../components/PopularProduct";
import TestimonialSection from "../components/TestimonialSection";
const Services = () => {
  return (
    <>
      <div className="why-choose-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <h2 className="section-title">Our Services</h2>
            </div>
          </div>
        </div>
      </div>
      <WhyChooseUsSection />
      <WeHelpSection />
      <PopularProduct />
      <TestimonialSection />
    </>
  );
};

export default Services;
