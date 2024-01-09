import React, { useEffect,useContext } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { SalaryContext } from "./SalaryContext";
const EmployeeDetails = ({downloadPDF}) => {
  const { employee, handleInputNum, handleInput, totalPay } =
    useContext(SalaryContext);
const submitHandle=(e)=>{
  e.preventDefault();

}



  return (
    <>
      <Form className="row" onSubmit={submitHandle}>
        <h2 className="employee_heading">Employee Details </h2>
        <br />
        <br />
        <br />
        <Form.Group
          as={Row}
          className="mb-3 col-md-6 text-white"
          // controlId="formHorizontalName"
        >
          <Form.Label column sm={3} htmlFor="name">
            Emloyee Name
          </Form.Label>
          <Col sm={7}>
            <Form.Control
              type="text"
              name="name"
              id="name"
              value={employee.name}
              placeholder="Enter Employee Name"
              onChange={handleInput}
              autoComplete="false"
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3 col-md-6 text-white"
          // controlId="formHorizontalID"
        >
          <Form.Label column sm={3} htmlFor="id">
            Employee ID
          </Form.Label>
          <Col sm={7}>
            <Form.Control
              type="text"
              name="id"
              id="id"
              value={employee.id}
              placeholder="Enter Employee ID"
              onChange={handleInput}
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3 col-md-6 text-white"
          // controlId="formHorizontalDate"
        >
          <Form.Label column sm={3} htmlFor="payPeriod">
            Pay Period
          </Form.Label>
          <Col sm={5}>
            <Form.Control
              type="date"
              name="payPeriod"
              id="payPeriod"
              value={employee.payPeriod }
              placeholder="Enter Pay Period"
              onChange={handleInput}
              min="2022-01"  // Set the minimum date as per your requirement
            max="2024-12"
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3 col-md-6 text-white"
          // controlId="formHorizontalPaidDay"
        >
          <Form.Label column sm={3} htmlFor="paidDays">
            Paid Days
          </Form.Label>
          <Col sm={5}>
            <Form.Control
              type="number"
              name="paidDays"
              id="paidDays"
              value={employee.paidDays}
              placeholder="ex. 22"
              onChange={handleInputNum}
            />
          </Col>
        </Form.Group>
        <br />
        <br />
        <br />
        <h2 className="income_heading">Income Details</h2>
        <br />

        <Form.Group
          as={Row}
          className="mb-3 col-md-6 text-white"
          // controlId="formHorizontalIncome"
        >
          {/* <Form.Label column sm={5}>
            INCOME
          </Form.Label>
          <Col sm={7}>
            <Form.Label column>AMOUNT</Form.Label>
          </Col>  */}
          <div className="col-md-5">INCOME</div>
        <div className="col-md-7">AMOUNT</div>
        </Form.Group>

       
        <Form.Group
          as={Row}
          className="mb-3 col-md-6 text-white"
          // controlId="formHorizontalDeductions"
        >
          {/* <Form.Label column sm={5}>
            DEDUCTIONS
          </Form.Label>
          <Col sm={7}>
            <Form.Label column>AMOUNT</Form.Label>
          </Col>
           */}
          <div className="col-md-5">DEDUCTIONS</div>
        <div className="col-md-7">AMOUNT</div>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3 col-md-6 text-white"
          // controlId="formHorizontalSalary"
        >
          <Form.Label column sm={3} htmlFor="salary">
            Basic Salary
          </Form.Label>
          <Col sm={7}>
            <Form.Control
              type="number"
              name="salary"
              id="salary"
              value={employee.salary}
              onChange={handleInputNum}
              placeholder="Enter Salary"
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3 col-md-6 text-white"
          // controlId="formHorizontalIncomeTax"
        >
          <Form.Label column sm={3} htmlFor="incomeTax">
            Income Tax
          </Form.Label>
          <Col sm={7}>
            <Form.Control
              type="number"
              name="incomeTax"
              id="incomeTax"
              value={employee.incomeTax}
              onChange={handleInputNum}
              placeholder="Enter Income Tax"
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3 col-md-6 text-white"
          // controlId="formHorizontalHRA"
        >
          <Form.Label column sm={3} htmlFor="HRA">
            Rent Allowance
          </Form.Label>
          <Col sm={5}>
            <Form.Control
              type="number"
              name="HRA"
              id="HRA"
              value={employee.HRA}
              onChange={handleInputNum}
              placeholder="Enter House Rent Allowance"
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3 col-md-6 text-white"
          // controlId="formHorizontalPF"
        >
          <Form.Label column sm={3} htmlFor="PF">
            Provident Fund
          </Form.Label>
          <Col sm={5}>
            <Form.Control
              type="number"
              name="PF"
              id="PF"
              value={employee.PF}
              onChange={handleInputNum}
              placeholder="Enter Provident Fund"
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3 col-md-6 text-white"
          // controlId="formHorizontalIncentives"
        >
          <Form.Label column sm={3} htmlFor="incentives">
            Incentives
          </Form.Label>
          <Col sm={4}>
            <Form.Control
              type="number"
              name="incentives"
              id="incentives"
              value={employee.incentives}
              onChange={handleInputNum}
              placeholder="Enter Incentives"
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3 col-md-6 text-white"
          // controlId="formHorizontalTotal"
        >
          {/* <Form.Label column sm={8}>
            Total Net Payables : &nbsp;{" "}
            <span className="totalPay">₹{totalPay}</span>
          </Form.Label>
           */}
          <div className="col-md-8">Total Net Payables : &nbsp;{" "} <span className="totalPay">₹{totalPay}</span></div>
        
        </Form.Group>
        <button className=" cta col-md-2  justify-content-start align-items-start text-start">
  <span className="d-inline" onClick={downloadPDF}>Generate</span>
  <svg viewBox="0 0 13 10" height="10px" width="15px">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg>
</button>

      </Form>
    </>
  );
};

export default EmployeeDetails;
