import React, { useEffect,useState } from "react";
import "./Dashboard.css";
import AdminHeader from "../../components/Header/AdminHeader";
import AdminSidebar from "../../components/Sidebar/AdminSidebar";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firbase";

const AdminDashboard = () => {
  const [user,setUser]=useState(null);
  const [userEmail, setUserEmail] = useState(null);

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

const currentUser = auth.currentUser;
    if (currentUser) {
      const email = currentUser.email;
      setUserEmail(email);
    }

},[])
  return (
    <>
      <AdminHeader />

      <div className="container dashboard_container">
        <div className="row ">
          <div className="col-md-4">
            <AdminSidebar />
          </div>
          <div className="col-md-7 ms-4 ">
            <h2 className="welcome ms-3 mt-5">Welcome <span style={{color:"#fe4c1c"}}>{userEmail} </span> !!</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
