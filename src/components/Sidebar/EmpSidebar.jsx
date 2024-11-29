import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

function EmpSidebar() {
  return (
    <>
      <div className="container_sidebar">
        <div className="sidebar">
          {/* Link to My Team with query parameter */}
          <Link
            to={{
              pathname: "/emp-dashboard",
              search: "?selected=team", // Query parameter for "My Team"
            }}
            className="sidebar_element"
          >
            My Team{" "}
          </Link>

          {/* Link to All Products with query parameter */}
          <Link
            to={{
              pathname: "/emp-dashboard",
              search: "?view=products", // Query parameter for "All Products"
            }}
            className="sidebar_element"
          >
            All Products
          </Link>

        </div>
      </div>
    </>
  );
}

export default EmpSidebar;
