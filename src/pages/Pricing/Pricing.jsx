import React from "react";
import "./Pricing.css";
import PriceCard from "../../components/PriceCard/PriceCard";
import HeaderMain from "../../components/Header/HeaderMain";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import priceData from "./priceData";
import Footer from "../../components/Footer/Footer";
const Pricing = () => {
  return (
    <>
      <HeaderMain />
      <div className="homeprice">
        <div className="container">
          <div className="">
            <h6>PACKAGES</h6>
            <h4>Our Flexible Pricing Plan</h4>
            <p>Best and affordable packages in India</p>
          </div>
          <div className="row mt-1">
            {priceData.map((pricElem) => {
              const { icon, planName, feature1, feature2, feature3, price } =
                pricElem;
              return (
                <PriceCard
                  icon={icon}
                  planName={planName}
                  feature1={feature1}
                  feature2={feature2}
                  feature3={feature3}
                  price={price}
                />
              );
            })}
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Pricing;
