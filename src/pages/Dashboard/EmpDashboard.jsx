import React,{useState,useEffect} from "react";
import "./Dashboard.css";
import EmpHeader from "../../components/Header/EmpHeader";
import EmpSidebar from "../../components/Sidebar/EmpSidebar";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firbase";

const EmpDashboard = () => {

  const [user,setUser]=useState(null);
const [employee,setEmployee]=useState()
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

const currentUser= auth.currentUser;
if(currentUser){
  const email= currentUser.email
  setEmployee(email)
}
},[])

  return (
    <>
      <EmpHeader />

      <div className="container dashboard_container">
        <div className="row ">
          <div className="col-md-4">
            <EmpSidebar />
          </div>
          <div className="col-md-7 ms-4 ">
            <h2 className="welcome ms-3 mt-5">Welcome <span style={{color:"#fe4c1c"}}>{employee} </span>!!</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmpDashboard;
