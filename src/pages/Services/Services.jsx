import React from "react";
import "./Services.css";
import HeaderMain from "../../components/Header/HeaderMain";
import homePageText from "../Home/data";
import {
  // AiOutlineRocket,
  // AiOutlineSketch,
  // AiOutlineRise,
  // AiOutlineSend,
  // AiOutlineMail,
  // AiOutlineBlock,
  AiOutlineNotification,
  AiOutlineFileSearch,
  AiOutlineTeam,
  AiOutlineSync,
  AiOutlineFundView,
  AiOutlineProject,
} from "react-icons/ai";
import Footer from "../../components/Footer/Footer";
import NewsLetter from "../../components/NewsLetter/NewsLetter";

const Services = () => {
  

  return (
    <>
      <HeaderMain />
      <div className="container">
        <div className="row">
          <div className="serviceshome">
            <div className="container">
              <div className="servicesheader">
                <h6>{homePageText.serviceshome_subheader}</h6>
                <h4>{homePageText.serviceshome_header}</h4>
                <p>{homePageText.serviceshome_subheader1}</p>
              </div>
              <div className="row">

                <div data-aos="zoom-in" className="col-lg-4 col-md-4 col-6">
                  <div className="services-box-home m-3 pt-5">
                    <AiOutlineNotification className="icon1" />
                    <h4>{homePageText.services_box_title1}</h4>
                    <p>{homePageText.services_box_des1}</p>
                    <button className="btn learn-more-btn">Learn More</button>
                  </div>
                </div>

                  <div data-aos="zoom-in" className="col-lg-4 col-md-4 col-6">
                  <div className="services-box-home m-3 pt-5">
                    <AiOutlineFundView className="icon2" />
                    <h4>{homePageText.services_box_title2}</h4>
                    <p>{homePageText.services_box_des2}</p>
                    <button className="btn learn-more-btn">Learn More</button>
                  </div>
                </div>

                <div data-aos="zoom-in"  className="col-lg-4 col-md-4 col-6">
                  <div className="services-box-home m-3 pt-5">
                    <AiOutlineFileSearch className="icon3" />
                    <h4>{homePageText.services_box_title3}</h4>
                    <p>{homePageText.services_box_des3}</p>
                    <button className="btn learn-more-btn">Learn More</button>
                  </div>
                </div>

                <div data-aos="zoom-in" className="col-lg-4 col-md-4 col-6">
                  <div className="services-box-home m-3 pt-5">
                    <AiOutlineTeam className="icon3" />
                    <h4>{homePageText.services_box_title4}</h4>
                    <p>{homePageText.services_box_des4}</p>
                    <button className="btn learn-more-btn">Learn More</button>
                  </div>
                </div>

                <div data-aos="zoom-in" className="col-lg-4 col-md-4 col-6">
                  <div  className="services-box-home m-3 pt-5">
                    <AiOutlineProject className="icon2" />
                    <h4>{homePageText.services_box_title5}</h4>
                    <p>{homePageText.services_box_des5}</p>
                    <button className="btn learn-more-btn">Learn More</button>
                  </div>
                </div>

                <div data-aos="zoom-in" className="col-lg-4 col-md-4 col-6">
                  <div className="services-box-home m-3 pt-5">
                    <AiOutlineSync className="icon1" />
                    <h4>{homePageText.services_box_title6}</h4>
                    <p>{homePageText.services_box_des6}</p>
                    <button className="btn learn-more-btn">Learn More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Services;

