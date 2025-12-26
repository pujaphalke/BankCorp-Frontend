import React, { Component } from 'react'
import ProfileNav from './ProfileNav'
import Enquiry from '../Modules/CRM/Enquiry';
import ViewEnquiry from '../Modules/CRM/ViewEnquiry';
import SideNav from './SideNav';
import { Route, Routes } from 'react-router-dom';

function Dashboard() {

   const userJson=localStorage.getItem('user');
   const{username, usertype}=JSON.parse(userJson);

   const appRoute={
     ADMIN:[
      {},
      {}
     ],
     CRM:[
      {path:'/enquiry', component:<Enquiry/>},
      {path:'/viewenquiry', component:<ViewEnquiry/>}
     ]
   }
  return (
    <div>
    
      <nav className="navbar justify-content-center bg-secondary bg-opacity-10 py-2">
        <span className="navbar-brand mb-0 h5"><ProfileNav></ProfileNav></span>
      </nav>

      <div className="d-flex" style={{ height: "150vh" }}>
          <div className="border  bg-secondary-subtle" style={{ width: "25%" }}>
          <SideNav />
      </div>

     <div className=" w-75  bg-secondary bg-opacity-25 p-3">
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
