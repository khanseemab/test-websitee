import React from "react";
import "./Dashboard.css";
import AdminHeader from "../../components/Header/AdminHeader";
import AdminSidebar from "../../components/Sidebar/AdminSidebar";

const AdminDashboard = () => {
  return (
    <>
      <AdminHeader />

      <div className="container dashboard_container">
        <div className="row ">
          <div className="col-md-4">
            <AdminSidebar />
          </div>
          <div className="col-md-6 ms-4 ">
            <h1 className="welcome ms-3 mt-5">Welcome Admin !!</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
