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
        
          <Link
            to={
             "/admin-dashboard"
            }

            className="sidebar_element"
          >
            All Users
          </Link>
          
        </div>
      </div>
    </>
  );
}

export default AdminSidebar;
