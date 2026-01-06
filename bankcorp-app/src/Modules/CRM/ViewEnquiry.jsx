import { React, useState, useEffect } from "react";
import axios from "axios";

function ViewEnquiry() {

  const [enquiry, setEnquiry] = useState([]);



  function getEnquiry(){
    axios.get("http://localhost:9091/enquiry/getByLoanStatus/Pending")
      .then((response) => {
        setEnquiry(response.data);
      
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
     getEnquiry();
  }, []);

  function forwardToOE(customerId){
    axios.get(`http://localhost:9091/enquiry/fto/${customerId}`)
    getEnquiry();
  }
  


  return (
    <div style={{ padding: "20px" }}>
     

      <table className="table table-hover table-bordered rounded-3  border-dark">
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>First Name</th>
            {/* <th>Last Name</th> */}
            <th>Age</th>
            <th>Gender</th>
            <th>Loan Tenure</th>
            <th>Loan Required</th>
            <th>Email</th>
            <th>Mobile No</th>
            <th>PAN Card</th>
            <th>Loan Status</th>
            {/* <th>Enquiry Date</th> */}
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {enquiry.map((enquiry, index) => (
            <tr key={index}>
              <td>{enquiry.customerId}</td>
              <td>{enquiry.firstName}</td>
              {/* <td>{enquiry.lastName}</td> */}
              <td>{enquiry.age}</td>
              <td>{enquiry.customerGender}</td>
              <td>{enquiry.loanTenure}</td>
              <td>{enquiry.loanRequired}</td>
              <td>{enquiry.email}</td>
              <td>{enquiry.mobileNo}</td>
              <td>{enquiry.pancardNo}</td>
              <td>{enquiry.loanStatus}</td>
              <td><button className="btn btn-primary" onClick={()=>forwardToOE(enquiry.customerId)}>FToOE</button></td>
            
              
              {/* <td>{enquiry.enquiryDate}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewEnquiry;
