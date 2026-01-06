import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function ViewSanction() {

    const[customer,setCustomer]= useState([]);
     
   const userJson=localStorage.getItem('user');
   const{userId}=JSON.parse(userJson);
   
     function getCustomerData()
  {
    axios.get(`http://localhost:9095/customer/getsanction/${userId}`).then(res=>{
          setCustomer(res.data);
          console.log(res.data);
          
    })
  }

  useEffect(getCustomerData,[]);


  function acceptSanction()
  {
    axios.get(`http://localhost:9095/customer/accept/${userId}`).then(res=>{
          console.log(res.data);
          
    })
  }

  function rejectSanction()
  {
    axios.get(`http://localhost:9095/customer/reject/${userId}`).then(res=>{
          console.log(res.data);
          
    })
  }


//   return (
//     <div>
//     <div style={{ padding: "20px" }}>
//       <table className="table table-hover  table-bordered rounded-3  border-dark">

//         <thead>
//           <tr>
//             <th>Customer ID</th>
//             <th>First Name</th>
//             <th>Last Name</th> 
//             <th>Mobile No</th>
//             <th>loan Amount Sanctioned</th>
//             <th>rate Of Interest</th>
//             <th>Loan Tenure</th>
//             <th>monthlyEmiAmount</th>
//             <th>termsCondition</th>
//             <th>Loan Status</th>
//             <th colSpan={2}>Action</th>
//           </tr>
//         </thead>

//         <tbody>
//             <tr>
//               <td>{customer.sanctionId}</td>
//               <td>{customer.firstName}</td>
//               <td>{customer.lastName}</td> 
//               <td>{customer.mobileNo}</td>
//               <td>{customer.loanAmountSanctioned}</td>
//               <td>{customer.rateOfInterest}</td>
//               <td>{customer.loanTenure}</td>
//               <td>{customer.monthlyEmiAmount}</td>
//               <td>{customer.termsCondition}</td>
//               <td>{customer.loanStatus}</td>
//               <td><button className='btn btn-primary'>Accept</button></td>
//               <td><button className='btn btn-primary'>Reject</button></td>
//             </tr>
//           </tbody>
          
//       </table>
//     </div>
//  </div>
//   )

return (
  <div className="container mt-4">
    <div className="card border-dark p-4">
      
      <h4 className="text-center mb-4">
        Loan Sanction Letter
      </h4>

      <p>
        <strong>Date:</strong> {new Date().toLocaleDateString()}
      </p>

      <p>
        <strong>Sanction ID:</strong> {customer.sanctionId}
      </p>

      <p>
        Dear <strong>{customer.firstName} {customer.lastName}</strong>,
      </p>

      <p>
        We are pleased to inform you that your loan application has been
        reviewed and approved by our bank. Below are the details of your
        sanctioned loan:
      </p>

      <div className="mt-3">
        <p><strong>Mobile Number:</strong> {customer.mobileNo}</p>
        <p><strong>Loan Amount Sanctioned:</strong> ₹ {customer.loanAmountSanctioned}</p>
        <p><strong>Rate of Interest:</strong> {customer.rateOfInterest} %</p>
        <p><strong>Loan Tenure:</strong> {customer.loanTenure} months</p>
        <p><strong>Monthly EMI Amount:</strong> ₹ {customer.monthlyEmiAmount}</p>
        <p><strong>Terms & Conditions:</strong> {customer.termsCondition}</p>
        <p><strong>Loan Status:</strong> {customer.loanStatus}</p>
      </div>

      <p className="mt-3">
        Kindly review the above details carefully. You may accept or reject
        the loan sanction by selecting one of the options below.
      </p>

      <p>
        Thank you for choosing our bank. We look forward to serving you.
      </p>

      <p className="mt-4">
        Sincerely, <br />
        <strong>BankCorp Loan Department</strong>
      </p>

      <div className="d-flex justify-content-center gap-3 mt-4">
        <button className="btn btn-success" onClick={acceptSanction} >
          Accept
        </button>
        <button className="btn btn-danger" onClick={rejectSanction}>
          Reject
        </button>
      </div>

    </div>
  </div>
);


}
export default ViewSanction