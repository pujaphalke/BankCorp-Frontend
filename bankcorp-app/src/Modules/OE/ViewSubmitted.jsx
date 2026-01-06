import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

function ViewSubmitted() {

    const [applications, setAplications]=useState([]);

    function showSubmitted()
    {
        axios.get("http://localhost:9093/application/getbyloanstatus/Submitted")
        .then(response=>{
            setAplications(response.data);
        })
    }

    useEffect(showSubmitted,[]);
  return (
    <>
       <div style={{ padding: "20px" }}>
     <table className="table table-hover  table-bordered rounded-3  border-dark text-center">
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
            <th>Action</th> 
           
          </tr>
        </thead>

        <tbody>
          {applications.map((loanStatus, index) => (
            <tr key={index}>
              <td>{loanStatus.customerId}</td>
              <td>{loanStatus.firstName}</td>
              {/* <td>{enquiry.lastName}</td> */}
              <td>{loanStatus.age}</td>
              <td>{loanStatus.customerGender}</td>
              <td>{loanStatus.loanTenure}</td>
              <td>{loanStatus.loanRequired}</td>
              <td>{loanStatus.email}</td>
              <td>{loanStatus.mobileNo}</td>
              <td>{loanStatus.pancardNo}</td>
              <td>{loanStatus.loanStatus}</td>
              <td><Link className='btn btn-primary'to={`/dashboard/viewloanapplicationdetails/${loanStatus.customerId}`}>Show Details</Link></td> 
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default ViewSubmitted
