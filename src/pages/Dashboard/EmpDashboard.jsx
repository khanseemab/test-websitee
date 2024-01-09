import React from "react";
import "./Dashboard.css";
import EmpHeader from "../../components/Header/EmpHeader";
import EmpSidebar from "../../components/Sidebar/EmpSidebar";

const EmpDashboard = () => {
  return (
    <>
      <EmpHeader />

      <div className="container dashboard_container">
        <div className="row ">
          <div className="col-md-4">
            <EmpSidebar />
          </div>
          <div className="col-md-6 ms-4 ">
            <h1 className="welcome ms-3 mt-5">Welcome Back !!</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmpDashboard;
