import React from "react";
import "./Dashboard.css";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <>
      <Header />

      <div className="container dashboard_container" >
        <div className="row ">
          <div className="col-md-4">
            <Sidebar />
          </div>
          <div className="col-md-6 ms-4 ">
            <h1 className="welcome ms-5 mt-5">Welcome Back !!</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
