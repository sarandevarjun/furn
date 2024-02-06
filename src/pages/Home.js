import React from "react";
import ProductSection from "./ProductSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import WeHelpSection from "../components/WeHelpSection";
import PopularProduct from "../components/PopularProduct";
import TestimonialSection from "../components/TestimonialSection";
import BlogSection from "../components/BlogSection";
const Home = () => {
  return (
    <div>
      <ProductSection />
      <WhyChooseUsSection />
      <WeHelpSection />
      <PopularProduct />
      <TestimonialSection />
      <BlogSection />
    </div>
  );
};

export default Home;
