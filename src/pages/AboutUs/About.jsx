import React, { useEffect } from "react";
import "./About.css";
import aboutus from "../../assets/Images/about-us.jpg";
import homePageText from "../Home/data";
import HeaderMain from "../../components/Header/HeaderMain";
import Footer from "../../components/Footer/Footer";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
const About = () => {
  

  
  return (
    <>
      <HeaderMain />
      <div className="abouthome">
        <div className="container-fluid">
          <div className="row">
            <div data-aos='zoom-in' className="col-lg-6 col-md-6 col-12 ">
              <img
                src={aboutus}
                className="img-fluid mt-5 pt-5"
                alt="aboutus"
              />
            </div>
            <div className="col-lg-6 col-md-6 col-12 mt-5">
              <div className="abouthome">
                <h6 className="mt-3">{homePageText.about_subheader}</h6>
                <h4 className="mt-3">{homePageText.about_header}</h4>
                <p className="mt-3 text-justify">{homePageText.about_des1}</p>
                <p className="text-justify">{homePageText.about_des2}</p>
                <p className="text-justify">{homePageText.about_des3}</p>
              </div>
            </div>
          </div>
          <div  data-aos='zoom-in' className="about_container mt-5">
            <div className="about_intro">
              <p>
                If you are looking for the best website design, development,
                E-commerce and marketing services to grow your business online,
                Our team is certified from amazon, Flipkart, Meesho and other
                E-Market Places we are here to help. We are a team of certified
                experts with tremendous experience to offer guaranteed solutions
                to the problems of our clients seeking good exposure on internet
                and required revenue growth in their E-commerce sales on amazon,
                flipkart, ebay, Etsy other E-commerce spaces. who’ll walk with
                you all through.
              </p>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div data-aos='zoom-in' className="col-lg-6 col-md-6 ">
                <img
                  src="https://drscottcolonna.com/wp-content/uploads/2022/07/Why-Determining-Core-Values-Will-Help-Grow-Your-Business-768x504.jpg"
                  className="img-fluid mt-5 pt-5"
                  alt="aboutus"
                />
              </div>
              <div className="col-lg-6 col-md-6 mt-5">
                {/* <div className="abouthome  "> */}

                <h4 className="mt-5 pt-5">OUR CORE VALUES</h4>
                <p className="mt-1 pt-2">– Committed to delivering the best</p>
                <p className="">– Honest and transparent services</p>
                <p className="">– We care for your business just like ours</p>
                <p className="">
                  – Keep learning and adapting to new technologies
                </p>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewsLetter/>
      <Footer />
    </>
  );
};

export default About;
