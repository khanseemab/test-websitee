import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
// import brand from '../../assets/logo.png'
import { Dropdown } from "react-bootstrap";

function EmpSidebar() {
  return (
    <>
      <div className="container_sidebar ">
        {/* <div className="logos">
   <img src={brand} height={'55px'} alt='K2 e-commerce Solutions' />
   </div>  */}
        <div className="sidebar">
          <Link to={"#"} className="sidebar_element">
            My Team{" "}
          </Link>
          <Link to={"/emp-all-client"} className="sidebar_element">
            All Clients
          </Link>
          <Link to={"#"} className="sidebar_element">
            DSR{" "}
          </Link>
          <Link to={"/clientform"} className="sidebar_element">
            NC Data
          </Link>{" "}
          <Link to={"#"} className="sidebar_element">
            Ratio Sale{" "}
          </Link>
          <Link to={"#"} className="sidebar_element">
            Not Open Pool Data{" "}
          </Link>
          <Link to={"#"} className="sidebar_element">
            Open Pool Data{" "}
          </Link>
          <Link to={"https://forms.gle/aADmP93UAkdrDUed8"} className="sidebar_element" target="_blank">
            Close Deal
          </Link>
          <Link to={"#"} className="sidebar_element">
            Daily Calling (Scheduled){" "}
          </Link>
          <Dropdown className="text-white">
            <Dropdown.Toggle variant="none" className="sidebar_element">
              Generate Performa
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                as={Link}
                to="/performa"
                className="nav_items_dropdown"
              >
                Performa Invoice
              </Dropdown.Item>
              <Dropdown.Item
                as={Link}
                to="/performa"
                className="nav_items_dropdown"
              >
                Discounted Performa
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {/* <Link to={"#"} className="sidebar_element">
            Printed Invoice
          </Link> */}
          {/* <Link to={"/pay-slip"} className="sidebar_element">
            Generate Pay Slip
          </Link> */}
          {/* <Link to={"/print-invoice"} className="sidebar_element">
            Printed Slip
          </Link> */}
        </div>
      </div>
    </>
  );
}

export default EmpSidebar;
