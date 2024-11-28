import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import EmpHeader from "../../components/Header/EmpHeader";
import EmpSidebar from "../../components/Sidebar/EmpSidebar";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate, useLocation } from "react-router-dom";
import { auth } from "../../firbase";
import EmpAllClient from "../Client/EmpAllClient";
import EmpAllTeam from "../Client/EmpAllTeam";

const EmpDashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation(); // Get current location for query parameters
  const userEmail = localStorage.getItem("username");

  // Determine user name based on email
  var userName = "";
  if (userEmail === "faiz@gmail.com") {
    userName = "Faiz Alam";
  } else if (userEmail === "junaid@gmail.com") {
    userName = "Junaid Ahmad";
  }  else if (userEmail === "furqan@gmail.com") {
    userName = "Md Furqan";
  } else {
    userName = "Employee";
  }

  useEffect(() => {
    // Check authentication state
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
        navigate("/login");
        console.log("Sign Out");
      }
    });
  }, [navigate]);

  // Parse query parameters
  const params = new URLSearchParams(location.search);
  const view = params.get("view");
  const selected = params.get("selected");

  return (
    <>
      <EmpHeader />

      <div className="dashboard_container text-white">
        <div className="row">
          <div className="col-md-4">
            <EmpSidebar />
          </div>
          <div className="col-md-7 ms-4">
            <h2 className="mt-5">
              Welcome Back <span style={{ color: "#fe4c1c" }}>{userName}</span> !!
            </h2>
            
            {/* Conditionally render components based on query parameters */}
            {view === "products" && <EmpAllClient />}
            {selected === "team" && <EmpAllTeam />}
          </div>
        </div>
      </div>
    </>
  );
};

export default EmpDashboard;
