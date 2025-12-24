import React from 'react'
import { Link } from 'react-router-dom'

function Header() {


  return (
    <>
    <div className='bg-info p-2 d-flex justify-content-between'>
         <h1 className="text-dark">logo</h1>
        <div >
         <Link className='fw-semibold fs-5 text-light me-3' to={'home'}>Home</Link>
         <Link className='fw-semibold fs-5 text-light me-3' to={'enquiry'}>Enquiry</Link>
         <Link className='fw-semibold fs-5 text-light me-3' to={'emicheck'}>EMI-Check</Link>
         <Link className='fw-semibold fs-5 text-light me-3' to={'login'}>Login</Link>
        </div>
    </div>
    </>
  )
}

export default Header
