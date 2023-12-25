import React from "react";
// import "../../pages/Pricing/Pricing.css";

const priceCard = ({ icon,planName,feature1,feature2,feature3,price }) => {
  return (
    <>
      <div data-aos='zoom-in' className="col-lg-4 col-md-4 col-6 mb-5">
        <div className="homeprice-box">
          {icon}
          <div className="homeprice-header">
            <h3> {planName}</h3>
          </div>
          <div className="homeprice-list">
            <ul>
              <li>{feature1}</li>
              <li>{feature2}</li>
              <li>{feature3}</li>
              {/* <li>Customer Managemet</li> */}
              <li>24/7 Support</li>
            </ul>
          </div>
          {/* <div className="homeprice-price">
            ₹{price}
            <span>Per Month</span>
          </div> */}
          <button className="btn learn-more-btn">Book Now</button>
        </div>
      </div>
    </>
  );
};

export default priceCard;
