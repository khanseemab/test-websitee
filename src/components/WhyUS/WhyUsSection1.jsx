import React from "react";
import connect from "../../assets/project.jpg";
import { Link } from "react-router-dom";

const WhyUsSection1 = () => {
  return (
    <>
      <div className="container-fluid whyus_connect ">
        <div className="row whyUs_project  p-5">
          <div className="col-md-6 p-5">
            <h2>Have a Project in mind?</h2>
            <p>
              We can help you bring your ideas to life. Let’s talk about what we
              can build and raise together.
            </p><Link to='https://wa.link/oq74n9'>
            <button className="whyus_connect_button glow-button">connect</button></Link>
          </div>
          <div data-aos='zoom-in'  className="col-md-6">
            <img src={connect} height={"290px"} alt="Lets Connect" />
          </div>
        </div>
        <div className="row ">
          <div className="head col-md-5 mt-5 mb-5 ms-5">
            <h1>Let us together build a flourishing business</h1>
          </div>
          <div className="head col-md-6 m-auto">
            <p>
              When connected with us, you aren’t growing your business alone. We
              have your back and put in our best to contribute to the growth of
              your entire team and organization. So, if you are looking for the
              right agency that’ll help you build a good online presence and
              bring in more conversions and revenue, we are right here!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUsSection1;
