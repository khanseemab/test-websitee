import React, { useContext, useEffect, useState } from "react";
import EmpHeader from "../../components/Header/EmpHeader";
import EmpSidebar from "../../components/Sidebar/EmpSidebar";
import { Table } from "react-bootstrap";
import "./Client.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import MyContext from "../../MyContext";
import { Link, useParams } from "react-router-dom";

const EmpAllClient = () => {
  const [data, setData] = useState([
    {
      id: "1",
      product: "Motherboard",
      puk: "653",
      description:
        "A foundational electronic component for building PCs, facilitating communication between the CPU, RAM, and other hardware components",
      type: "Electronics",
      department: "Mechanical",
    },
    {
      id: "2",
      product: "CPU",
      puk: "032",
      description:
        "The central processing unit, often referred to as the brain of the computer, responsible for executing instructions",
      type: "Electronics",
      department: "RD",
    },
    {
      id: "3",
      product: "Monitor",
      puk: "567",
      description:
        "A display device used to visually interact with computers, showcasing high-definition images and video output",
      type: "Electronics",
      department: "Engineering",
    },
    {
      id: "4",
      product: "Keyboard",
      puk: "098",
      description:
        "An input device that enables users to type and execute commands, essential for text and data entry",
      type: "Electronics",
      department: "Technical",
    },
    {
      id: "5",
      product: "Mouse",
      puk: "124",
      description:
        "A handheld pointing device used to interact with on-screen elements and navigate user interfaces",
      type: "Electronics",
      department: "RD",
    },
    {
      id: "6",
      product: "Hair Dryer",
      puk: "622",
      description:
        "A personal care device designed to dry and style hair efficiently with controlled heat and airflow",
      type: "Electronics",
      department: "RD",
    },
    {
      id: "7",
      product: "Trimmer",
      puk: "400",
      description:
        "A grooming device used for precise hair cutting and shaping, often used for beards or fine detailing",
      type: "Electronics",
      department: "RD",
    },
    // {
    //   id: "8",
    //   product: "Heater",
    //   puk: "234",
    //   description:
    //     "An electronic device used for warming spaces, ideal for maintaining comfort during cold weather",
    //   type: "Electronics",
    //   department: "RD",
    // },
    // {
    //   id: "9",
    //   product: "Cooler",
    //   puk: "104",
    //   description:
    //     "A cooling device designed to regulate room temperature, offering relief during hot climates",
    //   type: "Electronics",
    //   department: "RD",
    // },
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
      {/* <div className="client_detail_main"> */}
      <div className="googleSheetData">
        <Table hover className="clientTable">
          <thead className="clientTableHead">
            <tr>
              <th>ID</th>
              <th>Product </th>
              <th>PUK</th>

              <th>Description</th>
              <th>Password</th>
              <th>Department</th>
              <th>Action</th>
            </tr>

            <tr></tr>
          </thead>
          <tbody>
            {data.map((elem, i) => {
              return (
                <>
                  <tr key={i}>
                    <td className="clientTableData">{elem["id"]}</td>
                    <td className="clientTableData">{elem["product"]}</td>
                    <td className="clientTableData">{elem["puk"]}</td>

                    <td className="clientTableData">{elem["description"]}</td>
                    <td className="clientTableData">{elem["type"]}</td>
                    <td className="clientTableData">{elem["department"]}</td>
                    <td className="clientTableButton">
                      <DeleteOutlineIcon
                        onClick={() => {
                          deleteData(i);
                        }}
                        style={{ cursor: "pointer", color: "red" }}
                      />
                    </td>
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
export default EmpAllClient;
