import React, { useEffect } from "react";
import "./WhyUs.css";

import HeaderMain from "../../components/Header/HeaderMain";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import Footer from "../../components/Footer/Footer";

import WhyUsSection1 from "../../components/WhyUS/WhyUsSection1";
import WhyUsSection2 from "../../components/WhyUS/WhyUsSection2";

const WhyUs = () => {
  
  return (
    <>
      <HeaderMain />
      <div className="container">
        <div data-aos="zoom-in" className=" row why_us_container mt-5 mb-5">
          <div className="p-5">
            <h1 className="mb-3">Why Choose Us?</h1>
            <h6 className="mb-3">
              We are the right term for your business. We have the expertise and
              knowledge to offer impartial advice and services at an honest
              price.
            </h6>
            <p>
              With us you’ll feel heard. We listen to our client requirements
              and then select the right solution that fits. We care for your
              business as our own. We take a sincere interest in it and
              genuinely want to help your company reach its potential.
            </p>
          </div>
        </div>
      </div>
     
        <WhyUsSection2 />
     

      <WhyUsSection1 />

      <NewsLetter />
      <Footer />
    </>
  );
};

export default WhyUs;
