import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import EmpHeader from "../../components/Header/EmpHeader";
import EmpSidebar from "../../components/Sidebar/EmpSidebar";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firbase";
import Task from "../Task/Task";

const EmpDashboard = () => {
  const [user, setUser] = useState(null);
  const [employee, setEmployee] = useState();
  const navigate = useNavigate();
  const userEmail = localStorage.getItem("username");
  var userName = "";
  if (userEmail === "tarish@k2ecommercesolution.com") {
    userName = "Tarish Ali";
  } else if (userEmail === "monal@k2ecommercesolution.com") {
    userName = "Monal tiwari";
  } else if (userEmail === "atul@k2ecommercesolution.com") {
    userName = "Atul sehgal";
  } else if (userEmail === "rachna.k2es@gmail.com") {
    userName = "Rachna Mishra";
  } else if (userEmail === "mahima@k2ecommercesolution.com") {
    userName = "Mahima rajput";
  } else if (userEmail === "avi@k2ecommercesolution.com") {
    userName = "Avi rajput";
  } else if (userEmail === "rajat@k2ecommercesolution.com") {
    userName = "Rajat kumar";
  } else if (userEmail === "himanshu.k2es@gmail.com") {
    userName = "Himanshu negi";
  } else if (userEmail === "anjali.k2es@gmail.com") {
    userName = "Anjali sharma";
  } else if (userEmail === "aman@k2ecommercesolution.com") {
    userName = "Aman Kumar";
  } else {
    userName = " LOGIN FIRST";
  }

  useEffect(() => {
    //   const storedUsername = localStorage.getItem('username');
    //   const storedPassword = localStorage.getItem('password');

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
        navigate("/login");
        console.log("Sign Out");
      }
    });

    // const currentUser= auth.currentUser;
    // if(currentUser){
    //   const email= currentUser.email
    //   setEmployee(email)
    // }
  }, []);

  return (
    <>
      <EmpHeader />

      <div className=" dashboard_container text-white">
        <div className="row ">
          <div className="col-md-4">
            <EmpSidebar />
          </div>
          <div className="col-md-7 ms-4 ">
            <h2 className="welcome  mt-5">
              Welcome Back <span style={{ color: "#fe4c1c" }}>{userName} </span>
              !!
            </h2>
          </div>
          <div className="col-md-3"></div>
          <div className="col-md-9">
            <Task />{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default EmpDashboard;
