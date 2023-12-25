import React, { useEffect, useState } from "react";

import "./ClientDetail.css";
import { Link,useParams } from "react-router-dom";

const ClientDetail = () => {
  const [rowData, setRowData] = useState(null);
  const { clientdetail } = useParams();
  const showData = async () => {
    const api = await fetch('https://sheet.best/api/sheets/fd7f3aad-fbb1-4d18-9801-a4c50750e615');
    const apiRes = await api.json();

    const mainData = apiRes.find((item) => item.ID === clientdetail);
    setRowData(mainData);
    console.log(mainData);
  };

  useEffect(() => {
    // showData()
  },[])
if(rowData==null){return(<><h1>Loading....</h1></>)}
 


  return (
    <>
      <div className="client_detail_container">
        <h1 className=".client_detail_heading">Company Details Form</h1>
        <Link to={"/client"}>Dashboard</Link>

        <form className="client_detail_form ">
        <div className="item">
              <label for="companyName">Company Name: {rowData['Company Name']}</label>
            </div>
          <div className="grid">
            
            <div className="item">
              <label for="companyName">Name: {rowData['Name']}</label>
            </div>
            <div className="item">
              <label for="mobileNo">Mobile Number: {rowData['Mobile']}</label>
            </div>
            <div className="item">
              <label for="email">Email:</label>
            </div>
            <div className="item">
              <label for="status">Status:</label>
            </div>
            <div className="item">
              <label for="ebaySpoc">Ebay SPOC:</label>
            </div>
            <div className="item">
              <label for="clientPartner">Client Partner:</label>
            </div>
            <div className="item">
              <label for="clientFeedback">Client Feedback:</label>
            </div>
            <div className="item">
              <label for="otherMarketplacePartner">
                Other Marketplace Technical Partner:
              </label>
            </div>
            <div className="item">
              <label for="otherMarketplaceFeedback">
                Other Marketplace Technical Partner Feedback:
              </label>
            </div>
            <div className="item">
              <label for="etsyTechnicalManager">Etsy Technical Manager:</label>
            </div>
            <div className="item">
              <label for="etsyTechnicalManagerFeedback">
                Etsy Technical Manager Feedback:
              </label>
            </div>
            <div className="item">
              <label for="clientCategory">Client Category:</label>
            </div>
            <div className="item">
              <label for="contactName">Contact Name:</label>
            </div>
            <div className="item">
              <label for="email2">Email 2:</label>
            </div>
            <div className="item">
              <label for="address">Address:</label>
            </div>
            <div className="item">
              <label for="otherDetails">Other Details:</label>
            </div>
            <div className="item">
              <label for="amazonTechnicalPartner">
                Amazon Technical Partner:
              </label>
            </div>
            <div className="item">
              <label for="amazonTechnicalPartnerFeedback">
                Amazon Technical Partner Feedback:
              </label>
            </div>
            <div className="item">
              <label for="flipkartTechnicalPartner">
                Flipkart Technical Partner:
              </label>
            </div>
            <div className="item">
              <label for="flipkartTechnicalPartnerFeedback">
                Flipkart Technical Partner Feedback:
              </label>
            </div>
            <div className="item">
              <label for="auditorSpoc">Auditor SPOC:</label>
            </div>
            <div className="item">
              <label for="teamName">Team Name:</label>
            </div>
            <div className="item">
              <label for="renewalDate">Renewal Date:</label>
            </div>
            <div className="item">
              <label for="mobile">Mobile:</label>
            </div>
            <div className="item">
              <label for="city">City:</label>
            </div>
            <div className="item">
              <label for="state">State:</label>
            </div>
            <div className="item">
              <label for="pincode">Pincode:</label>
            </div>
            <div className="item">
              <label for="website">Website:</label>
            </div>
            <div className="item">
              <label for="feedbackLink">Feedback Link:</label>
            </div>
            <div className="item">
              <label for="accountManagement">Account Management:</label>
            </div>
            <div className="item">
              <label for="accountManagementFeedback">
                Account Management Feedback:
              </label>
            </div>
            <div className="item">
              <label for="amazonGlobalTechnicalPartner">
                Amazon Global Technical Partner:
              </label>
            </div>
            <div className="item">
              <label for="amazonGlobalTechnicalPartnerFeedback">
                Amazon Global Technical Partner Feedback:
              </label>
            </div>
            <div className="item">
              <label for="auditorFeedbackRemark">
                Auditor Feedback Remark:
              </label>
            </div>
            <div className="item">
              <label for="prospectOfRenewal">Prospect of Renewal:</label>
            </div>
            <div className="item">
              <label for="pitch">Pitch:</label>
            </div>
          </div>
          <div className="item">
            <label for="feedback">Feedback:</label>
          </div>
          <div className="container">
            <h1 className="clientDetail_h1">Marketplace</h1>
            <div className="marketplace">
              <label for="flipkart">
                <input type="checkbox" id="flipkart" name="flipkart" /> Flipkart
              </label>
              <label for="snapdeal">
                <input type="checkbox" id="snapdeal" name="snapdeal" /> Snapdeal
              </label>
              <label for="shopclues">
                <input type="checkbox" id="shopclues" name="shopclues" />{" "}
                Shopclues
              </label>
              <label for="limeroad">
                <input type="checkbox" id="limeroad" name="limeroad" /> Limeroad
              </label>
              <label for="ebay">
                <input type="checkbox" id="ebay" name="ebay" /> eBay
              </label>
              <label for="etsy">
                <input type="checkbox" id="etsy" name="etsy" /> Etsy
              </label>
              <label for="meesho">
                <input type="checkbox" id="meesho" name="meesho" /> Meesho
              </label>
              <label for="shopee">
                <input type="checkbox" id="shopee" name="shopee" /> Shopee
              </label>
              <label for="myntra">
                <input type="checkbox" id="myntra" name="myntra" /> Myntra
              </label>
              <label for="jiomart">
                <input type="checkbox" id="jiomart" name="jiomart" /> Jiomart
              </label>
              <label for="walmart">
                <input type="checkbox" id="walmart" name="walmart" /> Walmart
              </label>
              <label for="amazonin">
                <input type="checkbox" id="amazonin" name="amazonin" />{" "}
                Amazon.in
              </label>
              <label for="amazoncom">
                <input type="checkbox" id="amazoncom" name="amazoncom" />{" "}
                Amazon.com
              </label>
              <label for="nykaa">
                <input type="checkbox" id="nykaa" name="nykaa" /> Nykaa
              </label>
            </div>

            <h1 className="clientDetail_h1">Client Report</h1>
            <table className="client-report">
              <thead>
                <tr>
                  <th>Reported by</th>
                  <th>Task</th>
                  <th>Add Task/View Task</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Working time: 41 Hours 8 Minutes</td>
                  <td>Task: Health Check</td>
                  <td>
                    <button className="add-task-btn">Add Task</button>
                    <button className="add-task-btn">View Task</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button className="client_detail_button" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="container_project">
        <h1 className="clientDetail_h1">Projected Work Table</h1>
        <table>
          <thead>
            <tr>
              <th>Package</th>
              <th>Details</th>
              <th>Listing QCC</th>
              <th>Listing QCC Done</th>
              <th>Billing Date</th>
              <th>Expired</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Startup Package</td>
              <td>3 Months</td>
              <td>175</td>
              <td>Child Listing - 338</td>
              <td>Jul 01 2023 / Sep 28 2023</td>
              <td>8 Days Left</td>
              <td>2000 Package Details</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="container_history">
        <h1 className="clientDetail_h1">Comment History</h1>
        <div className="comment">
          <div className="meta">Sapna Singh - Sep 19, 2023 - 12:00 A.M.</div>
          <div className="description">
            <p>Client calls - Sapna Singh</p>
            <p>Description: Call not received</p>
          </div>
        </div>
        <div className="comment">
          <div className="meta">John Doe - Sep 20, 2023 - 2:30 P.M.</div>
          <div className="description">
            <p>Client email - John Doe</p>
            <p>Description: Email response sent</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientDetail;
