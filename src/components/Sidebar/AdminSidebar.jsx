import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
// import brand from '../../assets/logo.png'
import { Dropdown } from "react-bootstrap";

function AdminSidebar() {
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
          <Link to={"#"} className="sidebar_element">
            Close Deal
          </Link>
          <Dropdown className="text-white">
            <Dropdown.Toggle variant="none" className="sidebar_element ms-2">
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
          <Dropdown className="text-white ">
            <Dropdown.Toggle variant="none" className="sidebar_element m-auto">
              Generate Tax Invoice
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                as={Link}
                to="/igst-invoice"
                className="nav_items_dropdown"
              >
                IGST Invoice
              </Dropdown.Item>
              <Dropdown.Item
                as={Link}
                to="/sgst-cgst-invoice"
                className="nav_items_dropdown"
              >
                SGST-CGST Invoice
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {/* <Link to={"/tax-invoice"} className="sidebar_element">
Tax Invoice          </Link> */}
          <Link to={"/pay-slip"} className="sidebar_element">
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

export default AdminSidebar;
