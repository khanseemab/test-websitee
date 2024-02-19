import React from "react";
import "./Payment.css";
import HeaderMain from "../../components/Header/HeaderMain";
import QR from "../../components/Cards/SavingsQR";
import qrData from "./qrData";

const SavingAccount = () => {
  return (
    <>
      <HeaderMain />
      <div className="container saving_account ">
        {/* <h1 className="mt-4"> K2 E-COMMERCE SOLUTIONS</h1> */}
        <h2 className="mt-md-4 mb-md-2">Savings Account Details</h2>
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
            NOTE : Only for without GST payments
          </span>
        </p>
        <p></p>
        <div className="row mt-4">
          <div className="col-md-12">
            <div class="notification m-auto mb-5">
              <div class="notiglow"></div>
              <div class="notiborderglow"></div>
              <div class="notititle">Bank Details</div>


              <div class="notibody row">
                <div className="col-6">Account Holder : NABEEL AHAMAD</div>
                <div className="col-6">Account Number : 50100352685283</div>
                <div className="col-6">IFSC : HDFC0000863</div>
                <div className="col-6">Branch : BIJNOR</div>
                <div className="col-6">MMID : 9240110</div>
                <div className="col-6">Account Type : SAVING</div>
              </div>
            </div>
          </div>
          {qrData.map((currElem, id) => {
            const { name, src, upi } = currElem;
            return (
              <div data-aos="zoom-in" className="col-md-3" key={id}>
                <QR name={name} src={src} upi={upi} />{" "}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SavingAccount;
