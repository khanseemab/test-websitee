import React, { useEffect } from "react";
import './ServiceCard.css'
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const ServiceCard = ({ header, para, image, height }) => {

  useEffect(()=>{
    AOS.init({
      offset:200,
      duration:2000
    })
  })
  return (
    <>
      <div data-aos='zoom-in' className="col-lg-4 col-md-4 d-flex">
        <div className="services-card m-3 vh-8 d-flex flex-column">
          <img src={image} height={height} alt="error" />
          <h4>{header}</h4>
          <p>{para}</p>
          <Link to="https://wa.link/myxmqt" target="_blank">
            <button className="btn learn-more-btn" >
              Let's Connect
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
