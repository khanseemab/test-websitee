import React from "react";
import HeaderMain from "../../components/Header/HeaderMain";

import CurrentQR from "../../components/Cards/CurrentQR";

import cred from "../../assets/QR/currentAccountQR.png";

const CurrentAccount = () => {
  return (
    <>
      <HeaderMain />

      <div className="container saving_account  text-white">
        {/* <h1 className="mt-4"> K2 E-COMMERCE SOLUTIONS</h1> */}
        <h2 className="mt-md-4 mb-md-2">Current Account Details</h2>
        <p className="mt-md-3 mb-md-2">
          THANK YOU for choosing K2 E-COMMERCE SOLUTIONS for your Service
          needs.We appreciate yout trust in our Services.
          <br />
          To Facilitate the payment of Service charges, we would like to provide
          you with our Account details. Please find the required Information
          below:
          <br />
          <span className="" style={{ color: "#fe4c1c", fontSize: "15px" }}>
            {" "}
            NOTE : Only for GST payments
          </span>
        </p>
        <p></p>
        <div className="row mt-4">
          <div className="col-md-12">
            <div class="notification m-auto mb-5">
              <div className="notiglow"></div>
              <div className="notiborderglow"></div>
              <div className="notititle">Bank Details</div>

              <div className="notibody row">
                <div className="col-7">
                  Account Holder : K2 E COMMERCE SOLUTIONS
                </div>
                <div className="col-5">Account Number : 27650210002339</div>
                <div className="col-7">IFSC : UCBA0002765</div>
                <div className="col-5">Bank Name : UCO BANK</div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <p>
             
              Alternatively, you can also make the payment through UPI (Unified
              Payments Interface) using the following details:
            </p>
            <h5>
              <span style={{ color: "#fe4c1c" }}>UPI ID</span> :
              8057615105@ucobank
            </h5> 
            <br/> 
            <p>We kindly request you to ensure the accuracy of the provided details before proceeding with the payment. once the payment has been made, please share the transaction details or any reference number with us for our records. if you have any further queries or require any assistance regarding the payment process, please do not hesitate to contact us. we are always ready to help. 
            Thank You once again for your business. we look forward to continuing our successful partnership.
            <br/> <br/>
best regards, <br/>
K2 E COMMERCE SOLUTIONS</p>
          </div>
          <div data-aos="zoom-in" className="offset-md-1 col-md-3 mt-md-3">
            <CurrentQR src={cred} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentAccount;
