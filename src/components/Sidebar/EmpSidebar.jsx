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
        </div>
      </div>
    </>
  );
}

export default EmpSidebar;
