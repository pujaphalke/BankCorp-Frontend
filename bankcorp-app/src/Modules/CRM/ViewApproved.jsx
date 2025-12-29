import axios from 'axios'
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';

export function ViewApproved()
{

    const [viewLoanStatus,setViewLoanStatus]= useState([]);

    function viewApproved()
    {
        axios.get(`http://localhost:9091/enquiry/getByLoanStatus/CibilApproved`).then((response)=>{
            setViewLoanStatus(response.data);
        }).catch((error)=>{
           console.log(error);
           
        });
    }

    useEffect(()=>{
        viewApproved()
    },[]);

    
    return (<>
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
          {viewLoanStatus.map((loanStatus, index) => (
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
             
               <td><Link className='btn btn-primary' to={`/dashboard/loanapplication/${loanStatus.customerId}`}>Apply For Loan</Link></td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
           </>)
}