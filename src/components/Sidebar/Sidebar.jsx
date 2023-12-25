import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
// import brand from '../../assets/logo.png'
function Sidebar() {
  return (
    <>
      <div className="container_sidebar ">
        {/* <div className="logos">
   <img src={brand} height={'55px'} alt='K2 e-commerce Solutions' />
   </div>  */}
        <div className="sidebar">
          <Link to={"/clientform"} className="sidebar_element">
            NC Data
          </Link>{" "}
          <Link to={"/client"} className="sidebar_element">
            All Clients
          </Link>
          <Link to={"/performa"} className="sidebar_element">
            Generate Performa
          </Link>
          {/* <Link to={"#"} className="sidebar_element">
            Printed Invoice
          </Link> */}
          <Link to={"/invoice"} className="sidebar_element">
            Generate Pay Slip
          </Link>
          {/* <Link to={"/print-invoice"} className="sidebar_element">
            Printed Slip
          </Link> */}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
