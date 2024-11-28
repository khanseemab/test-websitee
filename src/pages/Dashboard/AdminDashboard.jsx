import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import AdminHeader from "../../components/Header/AdminHeader";
import AdminSidebar from "../../components/Sidebar/AdminSidebar";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firbase";
import AdminAllClient from "../Client/AdminAllClients";

const AdminDashboard = () => {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);
  const userEmail = localStorage.getItem("username");

  var userName = "";
  if (userEmail === "arbaz@gmail.com") {
    userName = "Arbaz Alam";
  } else if (userEmail === "seemab2703@gmail.com") {
    userName = "Seemab Akhtar Khan";
  } else {
    userName = "Admin";
  }

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
        navigate("/login");
        console.log("Sign Out");
      }
    });

    // const currentUser = auth.currentUser;
    //     if (currentUser) {
    //       const email = currentUser.email;
    //       setAdmin(email);
    //     }
  }, []);
  return (
    <>
      <AdminHeader />

      <div className="dashboard_container text-white">
        <div className="row">
          <div className="col-md-3">
            <AdminSidebar />
          </div>
          <div className="col-md-8">
            <h2 className=" pt-5">
              Welcome Back <span style={{ color: "#fe4c1c" }}>{userName} </span>
              !!
            </h2>
            <AdminAllClient />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
