import React, { useContext, useState } from "react";
import AdminHeader from "../../components/Header/AdminHeader";
import AdminSidebar from "../../components/Sidebar/AdminSidebar";
import { Table } from "react-bootstrap";
import "./Client.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import MyContext from "../../MyContext";

const AdminAllClient = () => {
  const { clientName, setClientName } = useContext(MyContext);

  const [data, setData] = useState([
    {
      id: "1",
      role: "Admin",
      name: "Seemab Khan",
      email: "seemab2703@gmail.com",
      password: "Seemab@Test",
      department: "Mechanical",
    },
    {
      id: "2",
      role: "Admin",
      name: "Arbaz Alam",
      email: "arbaz@gmail.com",
      password: "Arbaz@Test",
      department: "RD",
    },
    {
      id: "3",
      role: "User",
      name: "Himanshu",
      email: "himanshu@gmail.com",
      password: "Himanshu@Test",
      department: "Engineering",
    },
    {
      id: "4",
      role: "User",
      name: "Faiz Alam",
      email: "faiz@gmail.com",
      password: "Faiz@Test",
      department: "Engineering",
    },
    {
      id: "5",
      role: "User",
      name: "Daksh",
      email: "daksh@gmail.com",
      password: "Daksh@Test",
     
      department: "RD",
    },
    {
      id: "6",
      role: "User",
      name: "Rohan",
      email: "rohan@gmail.com",
      password: "Rohan@Test",
      department: "Technical",
    },
    {
      id: "7",
      role: "User",
      name: "Junaid Ahmad",
      email: "junaid@gmail.com",
      password: "Junaid@Test",
      department: "Technical",
    },
    {
      id: "8",
      role: "User",
      name: "Md Furqan",
      email: "furqan@gmail.com",
      password: "Furqan@Test",
      department: "RD",
    },
    {
      id: "9",
      role: "User",
      name: "Saurav",
      email: "saurav@gmail.com",
      password: "Saurav@Test",
    
      department: "Technical",
    },{
      id: "10",
      role: "User",
      name: "Masir",
      email: "masir@gmail.com",
      password: "Masir@Test",
    
      department: "Technical",
    },
  ]);

  const deleteData = async (rowIndex) => {
    try {
     

        // Update state to remove the deleted row
        setData((prevData) => prevData.filter((_, index) => index !== rowIndex));
        alert("Successfully Deleted");
     
    } catch (error) {
      console.error("Error while deleting:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <div className="client_detail_main">
        <div className="googleSheetData">
          <Table hover className="clientTable">
            <thead className="clientTableHead">
              <tr>
                <th>ID</th>
                <th>Role</th>
                <th>Name</th>
                <th>Email Address</th>
                <th>Password</th>
                <th>Department</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((elem, i) => (
                <tr key={i}>
                  <td className="clientTableData">{elem.id}</td>
                  <td className="clientTableData">{elem.role}</td>
                  <td className="clientTableData">{elem.name}</td>
                  <td className="clientTableData">{elem.email}</td>
                  <td className="clientTableData">{elem.password}</td>
                  <td className="clientTableData">{elem.department}</td>
                  <td className="clientTableButton">
                    <DeleteOutlineIcon
                      onClick={() => deleteData(i)}
                      style={{ cursor: "pointer", color: "red" }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default AdminAllClient;
