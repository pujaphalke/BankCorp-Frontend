
import React from 'react'
import ViewSanction from '../Modules/Customer/ViewSanction';
import ProfileNav from './ProfileNav';
import SideNav from './SideNav';
import { Route, Routes } from 'react-router-dom';

function CustomerDashboard() {

    const userJson=localStorage.getItem('user');
   const{username, usertype}=JSON.parse(userJson);
   const appRoute={
    
     CUSTOMER:[
     {path:'/viewSanction', component:<ViewSanction/>}
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


export default CustomerDashboard