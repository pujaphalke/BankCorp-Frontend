import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function ViewDocVerified() {

const[verified, setVerified]=useState([]);

    function showVerified()
    {
       axios.get("http://localhost:9093/application/getbyloanstatus/DocVerified")
       .then(response=>{
       setVerified(response.data);
       })
    }
useEffect(()=>{showVerified},[]);
  return (
    <>
       <div style={{ padding: "20px" }}>
      <table className="table table-hover  table-bordered rounded-3  border-dark">
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
          {verified.map((loanStatus, index) => (
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
              <td><Link className='btn btn-primary' to={`/dashboard/sanctionletter/${loanStatus.customerId}`}>Sanction Letter</Link></td>
               </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default ViewDocVerified
