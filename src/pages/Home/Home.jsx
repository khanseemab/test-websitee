import React from "react";
import homePageText from "./data";
import "./Home.css";
import connect from "../../assets/connect.png";
import pricing from "../../assets/package.png";
import testimonial from "../../assets/testimonial.png";
import whyUS from "../../assets/whyUS.png";

// import  team1  from "../../assets/Images/team_1.jpg";
// import  team2  from "../../assets/Images/team_2.jpg";
// import  team3  from "../../assets/Images/team_3.jpg";
// import  team4  from "../../assets/Images/team_4.jpg";
// import  team5  from "../../assets/Images/team_5.jpg";
// import  team6  from "../../assets/Images/team_6.jpg";
import aboutus from "../../assets/Images/about-us.jpg";
import test from "../../assets/Images/test.jpg";
// import data from "../Services/CatalogueServices/data";

import HeaderMain from "../../components/Header/HeaderMain";
// import HeaderMain from "../../components/Header/HeaderMain";
import Footer from "../../components/Footer/Footer";
import Features from "../../components/Feature/Features";

// import ServiceCard from "../../components/ServiceCard/ServiceCard";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import { Link } from "react-router-dom";
// import ControlledCarousel from "../../components/Carousel/Carousel";
// import { FaRegHandshake } from "react-icons/fa6";
// import { TbCoinRupee } from "react-icons/tb";
// import { FaRegCircleUser } from "react-icons/fa6";
// import { RiQuestionnaireLine } from "react-icons/ri";

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
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

import WhyUsSection1 from "../../components/WhyUS/WhyUsSection1";
import WhyUsSection2 from "../../components/WhyUS/WhyUsSection2";

import Lottie from "lottie-react";
import animationData from "../../assets/Animation/Animation.json";

const Home = () => {
  const scrollToTestimonial = () => {
    const testimonialElement = document.getElementById("testimonial");
    testimonialElement.scrollIntoView({ behavior: "smooth" });
  };

  // const styles = {
  //   outlinedButton: {
  //     // Define your default styles for the outlined button
  //     border: '1px solid #2196F3',
  //     color: '#2196F3',
  //     transition: 'color 0.3s, border 0.3s', // Add a transition effect
  //   },
  //   hoverEffect: {
  //     color: '#1565C0', // Change the color on hover
  //     border: '1px solid #1565C0', // Change the border color on hover
  //   },
  // };

  return (
    <>
      {/*Main Section start */}
      {/* <div className="row"> */}
      {/* <div className="sticky-top HeaderMain1"> */}
      <HeaderMain />
      {/* <HeaderMain/> */}
      {/* </div> */}
     {/* </div> */}
        
   <div className="container-fluid">
      <div className="container_main_page ">
     
          <div className="row mt-md-3 ">
            <marquee
              behavior="scroll"
              direction="left"
              scrollamount="5"
              className="text-white"
            >
              <div className="text-loop">
                {/* K2 E-COMMERCE SOLUTIONS &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; K2
                E-COMMERCE SOLUTIONS&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; K2
                E-COMMERCE SOLUTIONS&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; K2
                E-COMMERCE SOLUTIONS&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; K2
                E-COMMERCE SOLUTIONS&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; K2
                E-COMMERCE SOLUTIONS&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; K2
                E-COMMERCE SOLUTIONS&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; K2
                E-COMMERCE SOLUTIONS&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; K2
                E-COMMERCE SOLUTIONS&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; K2
                E-COMMERCE SOLUTIONS&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; K2
                E-COMMERCE SOLUTIONS&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; K2
                E-COMMERCE SOLUTIONS&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; K2
                E-COMMERCE SOLUTIONS&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; K2
                E-COMMERCE SOLUTIONS&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; K2
                E-COMMERCE SOLUTIONS&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; K2
                E-COMMERCE SOLUTIONS&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; K2
                E-COMMERCE SOLUTIONS&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; K2
                E-COMMERCE SOLUTIONS&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; K2
                E-COMMERCE SOLUTIONS&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; K2
                E-COMMERCE SOLUTIONS&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; K2
                E-COMMERCE SOLUTIONS&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; K2
                E-COMMERCE SOLUTIONS&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; K2
                E-COMMERCE SOLUTIONS&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; K2
                E-COMMERCE SOLUTIONS&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; K2
                E-COMMERCE SOLUTIONS&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; K2
                E-COMMERCE SOLUTIONS&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; K2
                E-COMMERCE SOLUTIONS&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; K2
                E-COMMERCE SOLUTIONS&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; K2
                E-COMMERCE SOLUTIONS&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; K2
                E-COMMERCE SOLUTIONS&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  */}
                <span style={{ color: "#fe4c1c" }}>K2 </span>E-COMMERCE{" "}
                <span style={{ color: "green" }}>SOLUTIONS</span>
              </div>
            </marquee>
            <div className="col-md-6 p-0 mt-0 order-md-2">
              {/* <img src={test} className="img-fluid" alt="test" /> */}
              <div className="mt-md-0 ">
                {/* <ControlledCarousel /> */}
                <Lottie animationData={animationData} />
              </div>
            </div>
            <div data-aos="fade-right" className=" col-md-6   mt-md-4 order-md-1">
             <div className="cards_main"> <div className=" row  mt-5">
                <Link
                  className="card_home col-md-6 "
                  to={"https://wa.link/oq74n9"}
                > 
                 
                  {/* <FaRegHandshake className="home_icons" /> */}
                  <img
                    src={connect}
                    height={"70px"}
                    alt="K2 e-commerce Solutions connect"
                  /><br /> Let's Connect
                  
                </Link>
                <Link className="card_home1 col-md-6" to={"/why-us"}>
                  
                  {/* <RiQuestionnaireLine className="home_icons" /> */}
                  <img
                    src={whyUS}
                    height={"70px"}
                    alt="K2 e-commerce Solutions connect"
                  /> <br /> Why US ?
                 
                </Link>
              </div>
              <div className="row ">
                <Link
                  className="card_home2 col-md-6  "
                  to="#"
                  onClick={scrollToTestimonial}
                >
                 
                  {/* <FaRegCircleUser className="home_icons" /> */}
                  <img
                    src={testimonial}
                    height={"70px"}
                    alt="K2 e-commerce Solutions connect testimonial"
                  /><br /> Testimonial
                  
                </Link>
                <Link className="card_home col-md-6 " to={"/services/pricing"}>
                 
                  {/* <TbCoinRupee className="home_icons" /> */}
                  <img
                    src={pricing}
                    height={"70px"}
                    alt="K2 e-commerce Solutions connect package"
                  /><br /> Packages
                  
                </Link>
              </div></div>
            </div>
          
          </div>
        </div>
      </div>
      <div data-aos="zoom-in" className="col-md-12 mt-md-2">
        <Features />
      </div>
      {/* <div className="container">
        <div className="row">
          {data.map((elem) => {
            const { id, image, header, para } = elem;
            return (
              <ServiceCard key={id} image={image} header={header} para={para} />
            );
          })}
        </div>
       </div> */}

      {/* Header 2  about */}
      <div className="abouthome ">
        <div className="container-fluid ">
          <div className="row">
            <div data-aos="flip-left" className="col-lg-6 col-md-6 col-12 pt-5">
              <img
                src={aboutus}
                className="img-fluid mt-5 pt-5"
                alt="aboutus"
              />
            </div>
            <div
              // data-aos="fade-left"
              className="col-lg-6 col-md-6 col-12 mt-5"
            >
              <div className="abouthome ">
                <h6 className="mt-3">{homePageText.about_subheader}</h6>
                <h4 className="mt-3">{homePageText.about_header}</h4>
                <p className="mt-3 text-justify">{homePageText.about_des1}</p>
                <p className="text-justify">{homePageText.about_des2}</p>
                <p className="text-justify">{homePageText.about_des3}</p>
                <Link to={"/about"}>
                  <button className="btn readmore mt-3">Read More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Card start*/}
      {/* <div className="  mb-5  p-0">
        <div className="row"> */}
          <div className="serviceshome">
            <div className="container">
              <div className="servicesheader">
                <h6>{homePageText.serviceshome_subheader}</h6>
                <h4 className="servicesHeader">
                  {homePageText.serviceshome_header}
                </h4>
                <p>{homePageText.serviceshome_subheader1}</p>
              </div>
              <div className="row">
                <div data-aos="zoom-in-up" className="col-lg-4 col-md-4 col-6 ">
                  <div className="services-box-home m-3">
                    <AiOutlineNotification className="icon1" />
                    <h4>{homePageText.services_box_title1}</h4>
                    <p>{homePageText.services_box_des1}</p>
                    <button className="btn learn-more-btn">Learn More</button>
                  </div>
                </div>

                <div data-aos="zoom-in-up" className="col-lg-4 col-md-4 col-6">
                  <div className="services-box-home m-3">
                    <AiOutlineFundView className="icon2" />
                    <h4>{homePageText.services_box_title2}</h4>
                    <p>{homePageText.services_box_des2}</p>
                    <Link to={"/services/web-dev"}>
                      <button className="btn learn-more-btn">Learn More</button>
                    </Link>
                  </div>
                </div>

                <div data-aos="zoom-in-up" className="col-lg-4 col-md-4 col-6">
                  <div className="services-box-home m-3">
                    <AiOutlineFileSearch className="icon3" />
                    <h4>{homePageText.services_box_title3}</h4>
                    <p>{homePageText.services_box_des3}</p>
                    <Link to={"/services/sem"}>
                      <button className="btn learn-more-btn">Learn More</button>
                    </Link>
                  </div>
                </div>

                <div data-aos="zoom-in-up" className="col-lg-4 col-md-4 col-6">
                  <div className="services-box-home m-3">
                    <AiOutlineTeam className="icon3" />
                    <h4>{homePageText.services_box_title4}</h4>
                    <p>{homePageText.services_box_des4}</p>
                    <Link to={"/services/smo"}>
                      <button className="btn learn-more-btn">Learn More</button>
                    </Link>
                  </div>
                </div>

                <div data-aos="zoom-in-up" className="col-lg-4 col-md-4 col-6">
                  <div className="services-box-home m-3">
                    <AiOutlineProject className="icon2" />
                    <h4>{homePageText.services_box_title5}</h4>
                    <p>{homePageText.services_box_des5}</p>
                    <Link to={"/services/digital-marketing"}>
                      <button className="btn learn-more-btn">Learn More</button>
                    </Link>
                  </div>
                </div>

                <div data-aos="zoom-in-up" className="col-lg-4 col-md-4 col-6">
                  <div className="services-box-home m-3">
                    <AiOutlineSync className="icon1" />
                    <h4>{homePageText.services_box_title6}</h4>
                    <p>{homePageText.services_box_des6}</p>
                    <Link to={"/services/seo"}>
                      <button className="btn learn-more-btn">Learn More</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* </div>
      </div> */}

      {/* Services Card end*/}

      {/*Main Section ends */}

      <section>
        <div className="mt-5 mb-3">
          <WhyUsSection1 />
        </div>

        {/* Header 4 test */}
        <div className="container">
        <div className="home-test mt-0" id="testimonial">
          
            <div className="row">
              <div className="col-md-6 ">
                <div className="">
                  <h6>TESTIMONIALS</h6>
                  <h4>What Our Clients Are Saying?</h4>
                  <p>
                    k2 E-Commerce performance is unremarkable and they have show
                    a good a good growth in last 1 year. Our brand has shown
                    growth unexpected.
                    <br />
                    <i>
                      <AccountCircleRoundedIcon /> Harshita Singh- HAPPY
                      OVERSEAS
                    </i>
                  </p>
                  <p>
                    Great Experience, very much happy with the phone and the
                    deal I got from the company. I wanted someone who can
                    managed my amazon account and increase my total sale and
                    they have exceeded my expectation, Speaking with the service
                    team helped me get exactly what I was looking for.
                    <br />
                    <i>
                      <AccountCircleRoundedIcon /> Dawood Akhtar – NILE
                      CORPORATION
                    </i>
                  </p>
                </div>
              </div>
              <div data-aos="flip-right" className="col-md-6 pt-5">
                <img src={test} className="img-fluid" alt="test" />
              </div>
            </div>
          </div>
        </div>

        {/* Header 5 team */}
        {/* <div id="team" className="hometeam">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-6">
                <div className="hometeamheader">
                  <h6>OUR TEAM</h6>
                  <h4>We Help to Acheive Your Business Goal</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>
                  <button className="btn learn-more-btn">View All</button>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="hometeam-box">
                  <div className="our-team">
                    <div className="pic">
                      <img src={team1} alt="team"/>
                    </div>
                    <div className="team-content">
                      <h3 className="title">MARTIN SMITH</h3>
                      <span className="post">Founder & CEO</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-6">
                <div className="hometeam-box">
                <div className="our-team">
                    <div className="pic">
                      <img src={team2} alt="team"/>
                    </div>
                    <div className="team-content">
                      <h3 className="title">Olivia</h3>
                      <span className="post">Marketing Lead</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-6">
                <div className="hometeam-box">
                <div className="our-team">
                    <div className="pic">
                      <img src={team3} alt="team" />
                    </div>
                    <div className="team-content">
                      <h3 className="title">FRANKLIN HARBET</h3>
                      <span className="post">Web Designer</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-3 col-md-4 col-6">
                <div className="hometeam-box">
                <div className="our-team">
                    <div className="pic">
                      <img src={team4} alt="team"/>
                    </div>
                    <div className="team-content">
                      <h3 className="title">Miranda joy</h3>
                      <span className="post">Web Developer</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-3 col-md-4 col-6">
                <div className="hometeam-box">
                <div className="our-team">
                    <div className="pic">
                      <img src={team5} alt="team"/>
                    </div>
                    <div className="team-content">
                      <h3 className="title">LINDA ANDERSON</h3>
                      <span className="post">Support</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-3 col-md-4 col-6">
                <div className="hometeam-box">
                <div className="our-team">
                    <div className="pic">
                      <img src={team6} alt="team"/>
                    </div>
                    <div className="team-content">
                      <h3 className="title">KRISTIANA</h3>
                      <span className="post">Support</span>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div> */}
      </section>
      <div className="mt-0">
        <WhyUsSection2 />
      </div>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
