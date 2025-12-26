import React from 'react'
import { Link } from 'react-router-dom';

function SideNav() {

    const userJson = localStorage.getItem('user');
    const {username, usertype}=JSON.parse(userJson);

    const options={
        ADMIN:[
            {},
            {}
        ],
        CRM:[
            {label:'Add-Enquiry', to:'/dashboard/enquiry'},
            {label:'View-Enquiry', to:'/dashboard/viewenquiry'}
        ]
    }

  return (
    <div>
      <div style={{display:"flex", flexDirection:"column", padding:"50px"}}>
        <h4>SideNav</h4>
        {
          options[usertype].map((btn,index)=> 
          <Link className='btn btn-success rounded-5 my-2' key={index} to={btn.to}>{btn.label}</Link>)
        }

    </div>
    </div>
  )
}

export default SideNav
