import React, { Component } from 'react'
import ProfileNav from './ProfileNav'
import Enquiry from '../Modules/CRM/Enquiry';
import ViewEnquiry from '../Modules/CRM/ViewEnquiry';
import SideNav from './SideNav';
import { Route, Routes } from 'react-router-dom';
import CibilCheck from '../Modules/OE/CibilCheck';
import { ViewApproved } from '../Modules/CRM/ViewApproved';
import { ViewRejected } from '../Modules/CRM/ViewRejected';
import { LoanApplication } from '../Modules/CRM/LoanAppliction';
import ViewSanction from '../Modules/Customer/ViewSanction';
import ViewSubmitted from '../Modules/OE/ViewSubmitted';
import ViewLoanApplicationDetails from '../Modules/OE/ViewLoanApplicationDetails';
import ViewDocVerified from '../Modules/CM/ViewDocVerified';
import SanctionLetter from '../Modules/CM/SanctionLetter';
import ViewSanctionAccepted from '../Modules/ACCOUNTHEAD/ViewSanctionAccepted';
import LoanDisbursement from '../Modules/ACCOUNTHEAD/LoanDisbursement';

function Dashboard() {

   const userJson=localStorage.getItem('user');
   const{username, usertype}=JSON.parse(userJson);

   const appRoute={
     ADMIN:[
      {},
      {}
     ],
     CUSTOMER:[
     {path:'/viewSanction', component:<ViewSanction/>}
     ],
     CRM:[
      {path:'/enquiry', component:<Enquiry/>},
      {path:'/viewenquiry', component:<ViewEnquiry/>},
      {path:'/viewapproved', component:<ViewApproved/>},
      {path:'/viewrejected', component:<ViewRejected/>},
      {path:'/loanapplication/:customerId', component:<LoanApplication/>}
     ],
     OE:[
      {path:'/cibilcheck' , component:<CibilCheck/>},
      {path:'/viewsubmitted', component:<ViewSubmitted/>},
      {path:'/viewloanapplicationdetails/:customerId', component:<ViewLoanApplicationDetails/>}
     ],
     CM:[
      {path:'/viewverified' , component:<ViewDocVerified/>},
      {path:'/sanctionletter/:customerId', component:<SanctionLetter/>}
     ],
     ACCOUNTHEAD:[
          {path:'/viewsanctionaccepted',component:<ViewSanctionAccepted/>},
          {path:'/loandisbursement/:customerId',component:<LoanDisbursement/>}
        ]
   }
  return (
    <div>
    
      <nav className="navbar justify-content-center bg-secondary bg-opacity-10 py-2">
        <span className="navbar-brand mb-0 h5"><ProfileNav></ProfileNav></span>
      </nav>

      <div className="d-flex min-vh-100 w-100">
          <div className="border  bg-secondary-subtle" style={{ width: "20%" , minHeight:'100vh'}}>
          <SideNav />
      </div>

     <div className="bg-secondary bg-opacity-25 p-3" style={{ width: "80%" , minHeight:'100vh'}}>
      <Routes>
       {appRoute[usertype].map((mapping, index) => (
         <Route
        key={index}
        path={mapping.path}
        element={mapping.component}
        />
       ))}
      </Routes>
      </div>


     </div>

    </div>
  )
}

export default Dashboard
