import React, { useContext, useEffect, useState } from "react";
import EmpHeader from "../../components/Header/EmpHeader";
import EmpSidebar from "../../components/Sidebar/EmpSidebar";
import { Table } from "react-bootstrap";
import "./Client.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import MyContext from "../../MyContext";
import { Link, useParams } from "react-router-dom";

const EmpAllTeam = () => {
  const [data, setData] = useState([
   
    
    {
      id: "1",
      role: "User",
      name: "Faiz Alam",
      email: "faiz@gmail.com",
      password: "Faiz@Test",
      department: "Engineering",
    },
    {
      id: "2",
      role: "User",
      name: "Saurav",
      email: "saurav@gmail.com",
      password: "Saurav@Test",
    
      department: "Technical",
    },
    {
      id: "3",
      role: "User",
      name: "Md Furqan",
      email: "furqan@gmail.com",
      password: "Furqan@Test",
      department: "RD",
    },
    {
      id: "4",
      role: "User",
      name: "Rohan",
      email: "rohan@gmail.com",
      password: "Rohan@Test",
      department: "Technical",
    },
    {
      id: "5",
      role: "User",
      name: "Daksh",
      email: "daksh@gmail.com",
      password: "Daksh@Test",
     
      department: "RD",
    }, {
      id: "6",
      role: "User",
      name: "Himanshu",
      email: "himanshu@gmail.com",
      password: "Himanshu@Test",
      department: "Engineering",
    }, {
      id: "7",
      role: "User",
      name: "Junaid Ahmad",
      email: "junaid@gmail.com",
      password: "Junaid@Test",
      department: "RD",
    },
    {
      id: "8",
      role: "User",
      name: "Masir",
      email: "masir@gmail.com",
      password: "Masir@Test",
    
      department: "Technical",
    },
  ]);



  return (
    <>
      {/* <div className="client_detail_main"> */}
        <div className="googleSheetData">
          <Table hover className="clientTable">
            <thead className="clientTableHead">
              <tr>
                <th>ID</th>
                <th>Role</th>
                <th>Name </th>
                <th>Email Address</th>

                <th>Password</th>
                <th>Department</th>

              </tr>

              <tr></tr>
            </thead>
            <tbody>
              {data.map((elem, i) => {
                return (
                  <>
                    <tr key={i}>
                      <td className="clientTableData">{elem["id"]}</td>
                      <td className="clientTableData">{elem["role"]}</td>
                      <td className="clientTableData">{elem["name"]}</td>

                      <td className="clientTableData">{elem["email"]}</td>
                      <td className="clientTableData">{elem["password"]}</td>
                      <td className="clientTableData">{elem["department"]}</td>
                     
                    </tr>
                  </>
                );
              })}
            </tbody>
          </Table>
        </div>
      {/* </div> */}
    </>
  );
};
export default EmpAllTeam;
