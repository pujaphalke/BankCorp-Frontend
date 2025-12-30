import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function ViewLoanApplicationDetails() {

     const customerData ={
       
    customerAddress: {
        localAddress: {
            areaName:"",
            cityName:"",
            district:"",
            state:"",
            pincode:0,
            houseNumber:0,
            streetName:""
        },

        permanentAddress: {
             areaName:"",
            cityName:"",
            district:"",
            state:"",
            pincode:0,
            houseNumber:0,
            streetName:""
        }
    },

    dependantInfo: {
        noOfFamilyMembers:0,
        noOfChild:0,
        maritalStatus:"",
        dependantMember:0,
        familyIncome:0
    },

    accountDetails: {
        accountType:"",
        accountBalance:0,
        accountHolderName:"",
        accountStatus:"",
        accountNumber:0
    },

    guarantorDetails: {
        guarantorName:"",
        guarantorDateOfBirth:0,
        guarantorRelationwithCustomer:"",
        guarantorMobileNo:0,
        guarantoraadharNo:0,
        guarantormortgageDetails:"",
        guarantorJobDetails:"",
        guarantorLocalAddress:"",
        guarantorPermanentAddress:""
    },
    documents:{
            addressProof:"",    
            panCard:"",
            incomeTax:"",
            addharCard:"",
            photo:"",
            signature:"",
            bankCheque:"",
            salarySlips:""
    }
};

    const [loanDetails, setLoanDetails]=useState(customerData);
                 
    const {customerId}=useParams();

    function showLoanApplication()
    {
        axios.get(`http://localhost:9093/application/getbyId/${customerId}`)
        .then(response=>{
            console.log(response.data);
            
           setLoanDetails(response.data);
           })
    }
  
    useEffect(showLoanApplication,[]);

  return (
    <>
      <div className='py-2 px-4'>
       <table className="table table-hover  table-bordered rounded-3  border-dark text-center">
        <thead>
          <tr>
            <th colSpan={11}>Personal Details</th>
            </tr>
            <tr>
            <th>Customer ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Loan Tenure</th>
            <th>Loan Required</th>
            <th>Email</th>
            <th>Mobile No</th>
            <th>PAN Card</th>
            <th>Loan Status</th>
            </tr> 
           </thead>
           <tbody>
           <tr>
              <td>{loanDetails.customerId}</td>
              <td>{loanDetails.firstName}</td>
              <td>{loanDetails.lastName}</td>
              <td>{loanDetails.age}</td>
              <td>{loanDetails.customerGender}</td>
              <td>{loanDetails.loanTenure}</td>
              <td>{loanDetails.loanRequired}</td>
              <td>{loanDetails.email}</td>
              <td>{loanDetails.mobileNo}</td>
              <td>{loanDetails.pancardNo}</td>
              <td>{loanDetails.loanStatus}</td>
             </tr>
          </tbody>
      </table>
    </div>


     <div className='py-2 px-4' >
      <table className="table table-hover  table-bordered rounded-3  border-dark text-center">
        <thead>
           <tr>
            <th colSpan={7}>Customer Address</th>
            </tr>
          <tr>
            <th>Area Name</th>
            <th>City Name</th>
            <th>District</th>
            <th>State</th>
            <th>Pincode</th>
            <th>House Number</th>
            <th>Streetname</th>  
          </tr>
        </thead>
        <tbody>
         <tr>
              <td>{loanDetails.customerAddress.localAddress.areaName}</td>
              <td>{loanDetails.customerAddress.localAddress.cityName}</td>
              <td>{loanDetails.customerAddress.localAddress.district}</td>
              <td>{loanDetails.customerAddress.localAddress.state}</td>
              <td>{loanDetails.customerAddress.localAddress.pincode}</td>
              <td>{loanDetails.customerAddress.localAddress.houseNumber}</td>
              <td>{loanDetails. customerAddress.localAddress.streetName}</td>
               </tr> 
        </tbody>
      </table>
      </div>

    <div className='py-2 px-4'>
      <table className="table table-hover  table-bordered rounded-3  border-dark text-center">
        <thead>
           <tr>
            <th colSpan={5}>DependantInfo</th>
            </tr>
          <tr>
            <th>No of Family Members</th>
            <th>No of Child</th>
            <th>Marital Status</th>
            <th>Dependant Member</th>
            <th>Family Income</th>
            </tr>
        </thead>

        <tbody>
         <tr>
              <td>{loanDetails.dependantInfo.noOfFamilyMembers}</td>
              <td>{loanDetails.dependantInfo.noOfChild}</td>
              <td>{loanDetails.dependantInfo.maritalStatus}</td>
              <td>{loanDetails.dependantInfo.dependantMember}</td>
              <td>{loanDetails.dependantInfo.familyIncome}</td>
             </tr> 
        </tbody>
      </table>
    </div>

     <div className='py-2 px-4'>
      <table className="table table-hover  table-bordered rounded-3  border-dark text-center">
        <thead>
          <tr>
            <th colSpan={5}>Account Details</th>
            </tr>
          <tr>
            <th>Account Type</th>
            <th>Account Balance</th>
            <th>Account Holdername</th>
            <th>Account Status</th>
            <th>Account Number</th>
            </tr>
        </thead>
        <tbody>
         <tr>
              <td>{loanDetails.accountDetails.accountType}</td>
              <td>{loanDetails.accountDetails.accountBalance}</td>
              <td>{loanDetails.accountDetails.accountHolderName}</td>
              <td>{loanDetails.accountDetails.accountStatus}</td>
              <td>{loanDetails.accountDetails.accountNumber}</td>
             </tr> 
        </tbody>
      </table>
    </div>

    <div className='py-2 px-4'>
      <table className="table table-hover  table-bordered rounded-3  border-dark text-center">
        <thead>
          <tr>
            <th colSpan={9}>Guarantor Details</th>
            </tr>
          <tr>
            <th>Guarantor Name</th>
            <th>Guarantor DOB</th>
            <th>Guarantor Relation</th>
            <th>Guarantor Mobile</th>
            <th>Guarantor Adhar No</th>
            <th>Guarantor Mortage Details</th>
            <th>Guarantor Job Details</th>
            <th>Guarantor Local Address</th>
            <th>Guarantor Permananent Address</th>
            </tr>
        </thead>
       <tbody>
         <tr>
              <td>{loanDetails.guarantorDetails.guarantorName}</td>
              <td>{loanDetails.guarantorDetails.guarantorDateOfBirth}</td>
              <td>{loanDetails.guarantorDetails.guarantorRelationwithCustomer}</td>
              <td>{loanDetails.guarantorDetails.guarantorMobileNo}</td>
              <td>{loanDetails.guarantorDetails.guarantoraadharNo}</td>
              <td>{loanDetails.guarantorDetails.guarantormortgageDetails}</td>
              <td>{loanDetails.guarantorDetails.guarantorJobDetails}</td>
              <td>{loanDetails.guarantorDetails.guarantorLocalAddress}</td>
              <td>{loanDetails.guarantorDetails.guarantorPermanentAddress}</td>
             </tr> 
        </tbody>
      </table>
    </div>

    <div className='py-2 px-4'>
      <table className="table table-hover  table-bordered rounded-3  border-dark text-center">
        <thead>
          <tr>
            <th colSpan={8}>Documents</th>
            </tr>
          <tr>
            <th>Address Proof</th>
            <th>Pancard</th>
            <th>Income Tax</th>
            <th>Addhar Card</th>
            <th>Photo</th>
            <th>Signature</th>
            <th>Bank Cheque</th>
            <th>Salary Slips</th>
            </tr>
        </thead>
        <tbody>
         <tr>
               <td>
                 <img src={`data:image/jpeg;base64,${loanDetails.documents.addressProof}`}
                      alt="Address Proof"
                      style={{ width: "100px", height: "auto" }}/>
                </td>
         
              <td><img src={`data:image/jpeg;base64,${loanDetails.documents.panCard}`}
                      alt="PanCard"
                      style={{ width: "100px", height: "auto" }}/>
              </td>
               <td><img src={`data:image/jpeg;base64,${loanDetails.documents.incomeTax}`}
                      alt="Incometax"
                      style={{ width: "100px", height: "auto" }}/>
              </td>
               <td><img src={`data:image/jpeg;base64,${loanDetails.documents.addharCard}`}
                      alt="AddharCard"
                      style={{ width: "100px", height: "auto" }}/>
              </td>
               <td><img src={`data:image/jpeg;base64,${loanDetails.documents.photo}`}
                      alt="Photo"
                      style={{ width: "100px", height: "auto" }}/>
              </td>
               <td><img src={`data:image/jpeg;base64,${loanDetails.documents.signature}`}
                      alt="Signature"
                      style={{ width: "100px", height: "auto" }}/>
              </td>
               <td><img src={`data:image/jpeg;base64,${loanDetails.documents.bankCheque}`}
                      alt="BankCheque"
                      style={{ width: "100px", height: "auto" }}/>
              </td>
               <td><img src={`data:image/jpeg;base64,${loanDetails.documents.salarySlips}`}
                      alt="SalarySlips"
                      style={{ width: "100px", height: "auto" }}/>
              </td>
              
             </tr> 
        </tbody>
      </table>
    </div>
        <div className='py-2 px-5'>
      <table className="table table-hover  table-bordered rounded-3  border-dark text-center">
        <thead>
          <tr>
            <th colSpan={2}>Action</th>
          </tr>
         </thead>
        <tbody>
         <tr>
              <td><button className='btn btn-primary'>Verify Documents</button></td>
              <td><button className='btn btn-primary'>Reject Documents</button></td>
             
         </tr> 
        </tbody>
      </table>
    </div>

    
</>
       
  )
}


export default ViewLoanApplicationDetails
