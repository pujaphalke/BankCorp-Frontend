
 import axios from 'axios'
import React, { useEffect, useState } from 'react'

 function CibilCheck() {

  const [loanStatus , setLoanStatus] = useState([]);

    function getForwardToOe()
    {

      axios.get(`http://localhost:9091/enquiry/getByLoanStatus/forwardToOE`).then((response)=>{
         console.log(response.data);
         
         setLoanStatus(response.data);
      }).catch((error)=>{
        console.log(error);
        
      });
    }

    function updateCibilScore(customerId)
    {
      axios.get(`http://localhost:9091/enquiry/updatecibil/${customerId}`);
      getForwardToOe();
    }
  
    useEffect(()=>{
      getForwardToOe()
    },[]);

    return (<>
    
      <div style={{ padding: "20px" }}>
     

      <table className="table table-hover" >
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
          {loanStatus.map((status, index) => (
            <tr key={index}>
              <td>{status.customerId}</td>
              <td>{status.firstName}</td>
              {/* <td>{enquiry.lastName}</td> */}
              <td>{status.age}</td>
              <td>{status.customerGender}</td>
              <td>{status.loanTenure}</td>
              <td>{status.loanRequired}</td>
              <td>{status.email}</td>
              <td>{status.mobileNo}</td>
              <td>{status.pancardNo}</td>
              <td>{status.loanStatus}</td>
              <td><button className="btn btn-primary" onClick={()=>updateCibilScore(status.customerId)}>Cibil Score</button></td>
            
              
              {/* <td>{enquiry.enquiryDate}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>



    

        







  )
}

export default CibilCheck