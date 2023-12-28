import React, { useEffect, useContext } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { PerformaContext } from "./PerformaContext";
const PerformaDetails = ({ downloadPDF }) => {
  const { performa, handleInputNum, handleInput } = useContext(PerformaContext);
  const submitHandle = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Form className="row" onSubmit={submitHandle}>
        <h2 className="employee_heading">Buyer Details </h2>
        <br />
        <br />
        <br />
        <Form.Group
          as={Row}
          className="mb-3 col-md-6 text-white"
          // controlId="formHorizontalName"
        >
          <Form.Label column sm={3} htmlFor="name">
            Company Name
          </Form.Label>
          <Col sm={7}>
            <Form.Control
              type="text"
              name="name"
              id="name"
              value={performa.name}
              placeholder="Enter Company Name"
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
          <Form.Label column sm={2} htmlFor="GSTIN">
            GSTIN{" "}
          </Form.Label>
          <Col sm={6}>
            <Form.Control
              type="text"
              name="GSTIN"
              id="GSTIN"
              value={performa.GSTIN}
              placeholder="Enter GSTIN "
              onChange={handleInput}
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3 col-md-6 text-white"
          // controlId="formHorizontalName"
        >
          <Form.Label column sm={3} htmlFor="address">
            Address{" "}
          </Form.Label>
          <Col sm={7}>
            <Form.Control
              type="text"
              name="address"
              id="address"
              value={performa.address}
              placeholder="Enter Buyer Address"
              onChange={handleInput}
              autoComplete="false"
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3 col-md-6 text-white"
          // controlId="formHorizontalDate"
        >
          <Form.Label column sm={2} htmlFor="state">
            STATE{" "}
          </Form.Label>
          <Col sm={5}>
            <Form.Control
              type="text"
              name="state"
              id="state"
              value={performa.state}
              placeholder="Enter State Name"
              onChange={handleInput}
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3 col-md-6 text-white"
          // controlId="formHorizontalPaidDay"
        >
          <Form.Label column sm={3} htmlFor="code">
            State Code
          </Form.Label>
          <Col sm={5}>
            <Form.Control
              type="number"
              name="code"
              id="code"
              value={performa.code}
              placeholder="Enter State Code"
              onChange={handleInputNum}
            />
          </Col>
        </Form.Group>
        <br />
        <br />
        <br />
        <h2 className="income_heading">Description</h2>
        <br />

     

        <Form.Group
          as={Row}
          className="mb-3 col-md-9 text-white"
          // controlId="formHorizontalSalary"
        >
          <Form.Label column sm={2} htmlFor="serviceName">
            Service Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="serviceName"
              id="serviceName"
              value={performa.serviceName}
              onChange={handleInput}
              placeholder="Enter Service Name"
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3 col-md-6 text-white"
          // controlId="formHorizontalIncomeTax"
        >
          <Form.Label column sm={3} htmlFor="amount">
            Amount
          </Form.Label>
          <Col sm={7}>
            <Form.Control
              type="number"
              name="amount"
              id="amount"
              value={performa.amount}
              onChange={handleInputNum}
              placeholder="Enter Total Amount"
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3 col-md-6 text-white"
          // controlId="formHorizontalHRA"
        >
          <Form.Label column sm={2} htmlFor="discount">
            Discount
          </Form.Label>
          <Col sm={5}>
            <Form.Control
              type="number"
              name="discount"
              id="discount"
              value={performa.discount}
              onChange={handleInputNum}
              placeholder="Enter Discount"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3 col-md-6 text-white">
  <Form.Label column sm={3} htmlFor="gstRate">
    GST
  </Form.Label>
  <Col sm={7}>
    <Form.Select
      name="gstRate"
      id="gstRate"
      value={performa.gstRate}
      onChange={handleInputNum}
    >
          <option value="" disabled>Select GST Rate</option>

      <option value="18">18%</option>
      <option value="9">9%</option>
    </Form.Select>
  </Col>
</Form.Group><Form.Group as={Row} className="mb-3 col-md-6 text-white">
  <Form.Label column sm={2} htmlFor="exevutive">
    Executive
  </Form.Label>
  <Col sm={6}>
    <Form.Control
      name="exevutive"
      id="exevutive"
      value={performa.exevutive}
      onChange={handleInput}
      placeholder="Enter Executive Name"

    >
    </Form.Control>
  </Col>
</Form.Group>

        <Form.Group>
          <Form.Label column sm={2}></Form.Label>
          <Col sm={7}>
            <button className=" cta col-md-3 mt-3 justify-content-start align-items-start text-start">
              <span className="d-inline" onClick={downloadPDF}>
                Generate
              </span>
              <svg viewBox="0 0 13 10" height="10px" width="15px">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button>
          </Col>
        </Form.Group>
      </Form>
    </>
  );
};

export default PerformaDetails;
