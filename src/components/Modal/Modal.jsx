import React, { useState } from "react";
import ReactDOM from "react-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import modalIMG from "../../assets/REVIEWS.png";
import { margin } from "@mui/system";

const MyModal = ({ open, onCloseModal }) => {
  const style = {
    backgroundColor: "#F3F7FF",
    margin: "0px",
    padding: "0px",
    // color: "white",
  };
  const styleIMG = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    paddingBottom: "15px",
  };
  return (
    <Modal open={open} onClose={onCloseModal} center>
      <div style={style}>
        <h3 className="mb-2 pt-5 pe-5 pb-3 ps-4 ">
          Welcome to K2 E-Commerce Solutions
        </h3>
        <p className="mb-2 pt-2 pe-5 pb-0 ps-4">
          Where Your Digital Dreams Take Flight! 🚀 From Web Design to Marketing
          Magic, We're Your All-in-One Solution for Online Success. Let's Build
          Your Empire, Pixel by Pixel, and Propel Your Business to New Heights!
          💼✨
        </p>
        <div style={styleIMG}>
          <img src={modalIMG} height={"250px"} alt="" />
        </div>
      </div>
    </Modal>
  );
};
export default MyModal;
