import React, { useEffect,useState } from "react";
import "./Dashboard.css";
import AdminHeader from "../../components/Header/AdminHeader";
import AdminSidebar from "../../components/Sidebar/AdminSidebar";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firbase";
import Task from "../Task/Task";

const AdminDashboard = () => {
  const [user,setUser]=useState(null);
  const [admin, setAdmin] = useState(null);
  const userEmail = localStorage.getItem('username');

  var userName=""
if (userEmail==="nabeel123@gmail.com"){
  userName="Nabeel Ahmad"
}else if (userEmail==="seemab.k2es@gmail.com"){
  userName="Seemab Akhtar Khan"
}

const navigate=useNavigate()


useEffect(()=>{
onAuthStateChanged(auth,user=>{
  
if(user){
  setUser(user)
}else{
  setUser(null)
  navigate("/login")
  console.log("Sign Out")
}
})

// const currentUser = auth.currentUser;
//     if (currentUser) {
//       const email = currentUser.email;
//       setAdmin(email);
//     }

},[])
  return (
    <>
      <AdminHeader />

      <div className=" dashboard_container">
        <div className="row ">
          <div className="col-md-4">
            <AdminSidebar />
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

export default AdminDashboard;
