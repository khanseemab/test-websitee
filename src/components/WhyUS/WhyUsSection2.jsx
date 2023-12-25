import React from 'react'
import why1 from "../../assets/why-us-1.jpg";
import why2 from "../../assets/why-us-2.jpg";
import why3 from "../../assets/why-us-3.jpg";
const WhyUsSection2 = () => {
  return (
    <>
        <div className="container  why_us_container p-5 ">
        <div className="row p-4">
          <h2 className="col-md-6">
            Highly Motivated Team with Innovative Ideas
          </h2>
          <h5 className="col-md-6 mb-5 ">
            We love what we do and therefore come up with the best possible
            solutions to help you set and grow online quickly. We are your
            trusted partners you can count on.
          </h5>
          

          
 
          <img data-aos='zoom-in'  src={why1} className="col-md-4 m-auto" alt="error" />
          <img data-aos='zoom-in'  src={why2} className="col-md-4 m-auto" alt="error" />
          <img  data-aos='zoom-in'  src={why3} className="col-md-4 m-auto" alt="error" />
        </div>
      </div>
    </>
  )
}

export default WhyUsSection2;