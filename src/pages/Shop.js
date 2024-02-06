import React from "react";
import ProductSection from "./ProductSection";

const Shop = () => {
  return (
    <>
      <div className="why-choose-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <h2 className="section-title">Shop With Us</h2>
            </div>
          </div>
        </div>
      </div>
      <ProductSection />
    </>
  );
};

export default Shop;
