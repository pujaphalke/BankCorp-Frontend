import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function ViewSanctionAccepted() {

  const[viewSanctioned, setViewSanctioned]=useState([]);
  function showSanctionAccepted()
  {
   axios.get("http://localhost:9093/application/getbyloanstatus/SanctionAccepted")
   .then(response=>{
    setViewSanctioned(response.data);
    console.log(response.data);
    
   })
  }

  useEffect(showSanctionAccepted,[]);
  return (
    <>
       <div style={{ padding: "20px" }}>
     <table className="table table-hover  table-bordered rounded-3  border-dark text-center">
        <thead>
          <tr>
            <th>CustomerID</th>
            <th>Sanction ID</th>
            <th>First Name</th>
            <th>Last Name</th> 
            <th>Mobile No</th>
            <th>Loan Amount Sanctioned</th>
            <th>Rate Of Interest</th>
            <th>Loan Tenure</th>
            <th>Monthly EMI Amount</th>
            <th>Terms Condition</th>
            <th>Loan Status</th>
            <th>Action</th> 
           
          </tr>
        </thead>

        <tbody>
          {viewSanctioned.map((loanStatus, index) => (
            <tr key={index}>
              <td>{loanStatus.customerId}</td>
              <td>{loanStatus.sanction.sanctionId}</td>
              <td>{loanStatus.firstName}</td>
              <td>{loanStatus.lastName}</td>
              <td>{loanStatus.mobileNo}</td>
              <td>{loanStatus.sanction.loanAmountSanctioned}</td>
              <td>{loanStatus.sanction.rateOfInterest}</td>
              <td>{loanStatus.sanction.loanTenure}</td>
              <td>{loanStatus.sanction.monthlyEmiAmount}</td>
               <td>{loanStatus.sanction.termsCondition}</td>
              <td>{loanStatus.loanStatus}</td>
              <td><Link className='btn btn-primary'to={`/dashboard/loandisbursement/${loanStatus.customerId}`}>Loan Disbursement</Link></td> 
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default ViewSanctionAccepted
