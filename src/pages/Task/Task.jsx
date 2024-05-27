import React from "react";
import "./Task.css";
// import EmpHeader from "../../components/Header/EmpHeader";
import TaskButton from "../../components/TaskButton/TaskButton";
const AllTask = () => {
  const UserName = localStorage.getItem("username");

  // ADD TASK
  let addTask = "https://forms.gle/M5FSYG6HvwTv9chq6";

  // ALL CLIENT
  let allClient = "#";
  if (UserName === "anjali.k2es@gmail.com") {
    allClient =
      "https://docs.google.com/spreadsheets/d/15tG7kj_jbRta4lv9ykEHceGpfJG2WzrkEdxUN_tnO8A/edit?pli=1#gid=584337717";
  } else if (UserName === "rachna.k2es@gmail.com") {
    allClient =
      "https://docs.google.com/spreadsheets/d/1e2sTirG-3sF7G0HcRyZxxllChXSLWHG8GmX1iDKSxD0/edit#gid=115835629";
  } else if (UserName === "himanshu.k2es@gmail.com") {
    allClient =
      "https://docs.google.com/spreadsheets/d/1jLDqGPA8AD_wEs0t4JxmVitYnu1MiEguNQxr_X6L-RE/edit#gid=409330358";
  } else if (UserName === "tarish@k2ecommercesolution.com") {
    allClient =
      "https://docs.google.com/spreadsheets/d/1jWZwiiTWbekSMpIWYlSu5BlspZziDRLT4OcuSpWqv68/edit#gid=1576935242";
  } else {
    allClient = "#";
  }

  // WORK REPORT
  let workReport = "#";

  if (UserName === "anjali.k2es@gmail.com") {
    workReport =
      "https://docs.google.com/spreadsheets/d/1UEXVQ1VjCaiD4OZ8KcsvryddBDN_LONQPUGyOXGIEmk/edit?usp=sharing";
  } else if (UserName === "rachna.k2es@gmail.com") {
    workReport =
      "https://docs.google.com/spreadsheets/d/1jIMl6XERzF7_hWrJKIh_RSMRuSdx0vk5sKWMCZAmp6c/edit?usp=sharing";
  } else if (UserName === "himanshu.k2es@gmail.com") {
    workReport =
      "https://docs.google.com/spreadsheets/d/1Po1E9FBUeb3AhqFf9Zbyj1XSaJ_3TB4Jsox-1PJQo50/edit?usp=sharing";
  } else if (UserName === "tarish@k2ecommercesolution.com") {
    workReport =
      "https://docs.google.com/spreadsheets/d/11FmugOQsYDsB-QanZarY2JHHEAy4ApWrtkQg5yG_tD8/edit?usp=sharing";
  } else {
    workReport = "#";
  }

  // CLIENT STATUS
  let clientStatus = "#";

  if (UserName === "anjali.k2es@gmail.com") {
    clientStatus =
      "https://docs.google.com/spreadsheets/d/1u8_4UlbUPXky6g9VDvbBtLFnipQsjJ3-a4FIscJkru8/edit?usp=sharing";
  } else if (UserName === "rachna.k2es@gmail.com") {
    clientStatus =
      "https://docs.google.com/spreadsheets/d/1w8l8AtE3p_RBbd0XOcZsC_acnFDcg3xqWN7C9eETPP4/edit?usp=sharing";
  } else if (UserName === "himanshu.k2es@gmail.com") {
    clientStatus =
      "https://docs.google.com/spreadsheets/d/1lsQBKoZojfIN65nySfSA4wNRXl-4bQ9-35rcWJ7XJkU/edit?usp=sharing";
  } else if (UserName === "tarish@k2ecommercesolution.com") {
    clientStatus =
      "https://docs.google.com/spreadsheets/d/1XOGj0tOyCS-VIfgeuBQqkDFPFa-54EYinA6-Mzohtfo/edit?usp=sharing";
  } else {
    clientStatus = "#";
  }

  // C. NOT OPEN
  let cNotOpen = "#";
  if (UserName === "anjali.k2es@gmail.com") {
    cNotOpen =
      "https://docs.google.com/spreadsheets/d/15tG7kj_jbRta4lv9ykEHceGpfJG2WzrkEdxUN_tnO8A/edit#gid=1936797505";
  } else if (UserName === "rachna.k2es@gmail.com") {
    cNotOpen =
      "https://docs.google.com/spreadsheets/d/1e2sTirG-3sF7G0HcRyZxxllChXSLWHG8GmX1iDKSxD0/edit#gid=602043963";
  } else if (UserName === "himanshu.k2es@gmail.com") {
    cNotOpen =
      "https://docs.google.com/spreadsheets/d/1jLDqGPA8AD_wEs0t4JxmVitYnu1MiEguNQxr_X6L-RE/edit#gid=985456493";
  } else if (UserName === "tarish@k2ecommercesolution.com") {
    cNotOpen =
      "https://docs.google.com/spreadsheets/d/1jWZwiiTWbekSMpIWYlSu5BlspZziDRLT4OcuSpWqv68/edit#gid=1241319331";
  } else if (UserName === "muskan.k2es@gmail.com") {
    cNotOpen =
      "https://docs.google.com/spreadsheets/d/15tG7kj_jbRta4lv9ykEHceGpfJG2WzrkEdxUN_tnO8A/edit#gid=1936797505";
  } 
  else {
    cNotOpen = "#";
  }

  // C WORKING
  let cWorking = "#";
  if (UserName === "anjali.k2es@gmail.com") {
    cWorking =
      "https://docs.google.com/spreadsheets/d/15tG7kj_jbRta4lv9ykEHceGpfJG2WzrkEdxUN_tnO8A/edit#gid=1251007563";
  }else if (UserName==="rachna.k2es@gmail.com"){
    cWorking ="https://docs.google.com/spreadsheets/d/1e2sTirG-3sF7G0HcRyZxxllChXSLWHG8GmX1iDKSxD0/edit#gid=908965078"
  } else if (UserName==="himanshu.k2es@gmail.com"){
    cWorking="https://docs.google.com/spreadsheets/d/1jLDqGPA8AD_wEs0t4JxmVitYnu1MiEguNQxr_X6L-RE/edit#gid=837797660"
  }else if (UserName === "tarish@k2ecommercesolution.com") {
    cWorking =
      "https://docs.google.com/spreadsheets/d/1jWZwiiTWbekSMpIWYlSu5BlspZziDRLT4OcuSpWqv68/edit#gid=33426310";
  }
  
  else if (UserName === "avi@k2ecommercesolution.com") {
    cWorking =
      "https://docs.google.com/spreadsheets/d/1aH4p6JHAODlHnGy6NJ9040CBokSnukLOq1WB9Y7nDhc/edit?usp=sharing";
  } else if (UserName === "mahima@k2ecommercesolution.com") {
    cWorking =
      "https://docs.google.com/spreadsheets/d/1NHowKR-UFvUkQ4n4HG1Zi6fNCR_zz_wiWw9cvB7D6PM/edit?usp=sharing";
  } else if (UserName === "atul@k2ecommercesolution.com") {
    cWorking =
      "https://docs.google.com/spreadsheets/d/1Z3QYZPrsWq2oBsP4_mpxK-8BA_-eiv9IVZSRIEj7yyM/edit?usp=sharing";
  } else if (UserName === "rajat@k2ecommercesolution.com") {
    cWorking =
      "https://docs.google.com/spreadsheets/d/14pxvpiUe8DE-wFeSfWkjRHP88QkPndoCa0esPXCSvqg/edit?usp=sharing";
  } else if (UserName === "aman@k2ecommercesolution.com") {
    cWorking =
      "https://docs.google.com/spreadsheets/d/1EmD-c-HdYi9UDy1OwF1trFC4EAiv5Z3ELkcIm5gGACM/edit?usp=sharing";
  } else if (UserName === "monal@k2ecommercesolution.com") {
    cWorking =
      "https://docs.google.com/spreadsheets/d/1i5WycxkMFTLwyXSyMMIis-EQ59N43p5oplPIm2GSAaY/edit?usp=sharing";
  } else {
    cWorking = "#";
  }

  // PENDING CLIENT
  let pendingClient = "#";
  if (UserName === "anjali.k2es@gmail.com") {
    pendingClient =
      "https://docs.google.com/spreadsheets/d/15tG7kj_jbRta4lv9ykEHceGpfJG2WzrkEdxUN_tnO8A/edit#gid=31353810";
  }else if (UserName==="rachna.k2es@gmail.com"){
    pendingClient="https://docs.google.com/spreadsheets/d/1e2sTirG-3sF7G0HcRyZxxllChXSLWHG8GmX1iDKSxD0/edit#gid=811646784"
  }
  else if (UserName==="himanshu.k2es@gmail.com"){
    pendingClient="https://docs.google.com/spreadsheets/d/1jLDqGPA8AD_wEs0t4JxmVitYnu1MiEguNQxr_X6L-RE/edit#gid=1597640465"
  }
  else if (UserName === "tarish@k2ecommercesolution.com") {
    pendingClient =
      "https://docs.google.com/spreadsheets/d/1jWZwiiTWbekSMpIWYlSu5BlspZziDRLT4OcuSpWqv68/edit#gid=824116213";
  }
  // PENDING MARKETPLACE

  let pendingMarketPlace = "#";
  if (UserName === "anjali.k2es@gmail.com") {
    pendingMarketPlace =
      "https://docs.google.com/spreadsheets/d/15tG7kj_jbRta4lv9ykEHceGpfJG2WzrkEdxUN_tnO8A/edit#gid=1836860086";
  } else if (UserName==="rachna.k2es@gmail.com"){
    pendingMarketPlace="https://docs.google.com/spreadsheets/d/1e2sTirG-3sF7G0HcRyZxxllChXSLWHG8GmX1iDKSxD0/edit#gid=783836997";
  }
  else if (UserName==="himanshu.k2es@gmail.com"){
    pendingMarketPlace="https://docs.google.com/spreadsheets/d/1jLDqGPA8AD_wEs0t4JxmVitYnu1MiEguNQxr_X6L-RE/edit#gid=407068419"
  }
  else if (UserName === "tarish@k2ecommercesolution.com") {
    pendingMarketPlace =
      "https://docs.google.com/spreadsheets/d/1jWZwiiTWbekSMpIWYlSu5BlspZziDRLT4OcuSpWqv68/edit#gid=575046743";
  }
  // PENDING FROM CP

  let pendingCP = "#";
  if (UserName === "anjali.k2es@gmail.com") {
    pendingCP =
      "https://docs.google.com/spreadsheets/d/15tG7kj_jbRta4lv9ykEHceGpfJG2WzrkEdxUN_tnO8A/edit#gid=820212999";
  } else if (UserName==="rachna.k2es@gmail.com"){
    pendingCP="https://docs.google.com/spreadsheets/d/1e2sTirG-3sF7G0HcRyZxxllChXSLWHG8GmX1iDKSxD0/edit#gid=1854318633";
  }
  else if (UserName==="himanshu.k2es@gmail.com"){
    pendingCP="https://docs.google.com/spreadsheets/d/1jLDqGPA8AD_wEs0t4JxmVitYnu1MiEguNQxr_X6L-RE/edit#gid=1086614524"
  }
  else if (UserName === "tarish@k2ecommercesolution.com") {
    pendingCP =
      "https://docs.google.com/spreadsheets/d/1jWZwiiTWbekSMpIWYlSu5BlspZziDRLT4OcuSpWqv68/edit#gid=1611512139";
  }
  // C CLOSED
   let cClosed="#";
   if (UserName === "anjali.k2es@gmail.com"){
    cClosed="https://docs.google.com/spreadsheets/d/15tG7kj_jbRta4lv9ykEHceGpfJG2WzrkEdxUN_tnO8A/edit#gid=14299903"
   } else if (UserName==="rachna.k2es@gmail.com"){
    cClosed="https://docs.google.com/spreadsheets/d/1e2sTirG-3sF7G0HcRyZxxllChXSLWHG8GmX1iDKSxD0/edit#gid=1245753751";
  }
  else if (UserName==="himanshu.k2es@gmail.com"){
    cClosed="https://docs.google.com/spreadsheets/d/1jLDqGPA8AD_wEs0t4JxmVitYnu1MiEguNQxr_X6L-RE/edit#gid=1976695990"
  }
  else if (UserName === "tarish@k2ecommercesolution.com") {
    cClosed =
      "https://docs.google.com/spreadsheets/d/1jWZwiiTWbekSMpIWYlSu5BlspZziDRLT4OcuSpWqv68/edit#gid=1679703706";
  }


  return (
    <>
      {/* <EmpHeader /> */}
      <div className="container text-white">
        <div className="all-tasks mt-4 p-3">
          <h4>All Tasks :</h4>
          <div className="row mt-3 ">
            <div className="col-md-2">
              <TaskButton taskLink={addTask} task="Add Task" />
            </div>
            <div className="col-md-2">
              <TaskButton taskLink={allClient} task="Clients" />
            </div>
            <div className="col-md-2">
              <TaskButton task="Client Time" />
            </div>
            <div className="col-md-2">
              <TaskButton task="Task Time" />
            </div>    
            <div className="col-md-2">
              <TaskButton task="QC Check" />
            </div>
            <div className="col-md-2">
              <TaskButton task="QC Done" />
            </div>
          </div>
          <div className="row mt-4 mx-auto">
            <div className="col-md-3 mx-auto">
              <TaskButton taskLink={clientStatus} task="Client Status" />
            </div>
            <div className="col-md-3 mx-auto">
              <TaskButton task="Submit Report" />
            </div>

            <div className="col-md-3 mx-auto">
              <TaskButton task="Reviews Task" />
            </div>
          </div>{" "}
        </div>
        <div className="all-tasks mt-5 p-2">
          <div className="row mt-3 ">
            <div className="col-md-2">
              <TaskButton task="Open by OAS" />
            </div>
            <div className="col-md-2">
              <TaskButton taskLink={cNotOpen} task="C. Not Open" />
            </div>
            <div className="col-md-2">
              <TaskButton taskLink={pendingClient} task="Pending Clients" />
            </div>
            <div className="col-md-2">
              <TaskButton taskLink={cWorking} task="C. Working" />
            </div>

            <div className="col-md-2">
              <TaskButton taskLink={pendingMarketPlace} task="Pending MarketPlace" />
            </div>
            <div className="col-md-2">
              <TaskButton taskLink={pendingCP} task="Pending From CP" />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-2">
              <TaskButton task="Reopen Tasks" />
            </div>
            <div className="col-md-2">
              <TaskButton taskLink={cClosed} task="C. Closed" />
            </div>{" "}
            <div className="col-md-2">
              <TaskButton task="Created Task" />
            </div>
            <div className="col-md-2">
              <TaskButton taskLink={workReport} task="Work Report" />
            </div>
            <div className="col-md-2">
              <TaskButton task="Breached Task" />
            </div>
            <div className="col-md-2">
              <TaskButton task="Self Created" />
            </div>
          </div>
          <div className="row mt-4 ">
            <div className="col-md-2">
              <TaskButton task="Not Open" />
            </div>
            <div className="col-md-2">
              <TaskButton task="Active" />
            </div>
            <div className="col-md-2">
              <TaskButton task="Closed" />
            </div>
            <div className="col-md-2">
              <TaskButton task="Terminated" />
            </div>
            <div className="col-md-2">
              <TaskButton task="Ticket" />
            </div>{" "}
            <div className="col-md-2">
              <TaskButton task="All Client Task" />
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default AllTask;
