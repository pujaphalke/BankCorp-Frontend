import React from 'react'
import img from '../assets/images/home1.jpg'
import { useForm } from 'react-hook-form'
import axios from 'axios';

function Enquiry() {

    const{register, handleSubmit,reset}=useForm();

    function EnquiryDetails(data)
    {
     axios.post("http://localhost:9091/enquiry/post",data);
     console.log(data);
     
     alert("data saved");
    }

  return (
    <>
    <section className="min-vh-100" style={{backgroundColor: '#ced4da'}}>
  <div className="container  py-5 " >
    <div className="row d-flex justify-content-center align-items-center h-50">
      <div className="col col-xl-10 " >
        <div className="card h-50" style={{borderradius: '1rem'}}>
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img src={img}
                alt="home" className="img-fluid" style={{borderRadius: '1rem 0 0 1rem',height:'750px',}} />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black fw-semibold">

                <form onSubmit={handleSubmit(EnquiryDetails)}>

                  <div className="d-flex align-items-center mb-3 pb-1">
                    <i className="fas fa-cubes fa-2x me-3" style={{color: '#ff6219'}}></i>
                    <span className="h1 fw-bold mb-0">Enquiry Form</span>
                  </div>

                  
                  <div data-mdb-input-init className="form-outline mb-2">
                     <label className="form-label" htmlFor="fname">First Name</label>
                    <input type="text" id="fname"{...register("firstName")} className="form-control form-control" />
                   </div>
                   <div data-mdb-input-init className="form-outline mb-2">
                    <label className="form-label" htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" {...register("lastName")} className="form-control form-control" />
                    </div>
                  

                  <div data-mdb-input-init className="form-outline mb-2">
                    <label className="form-label" htmlFor="age">Age</label>
                    <input type="text" id="age"{...register("age")} className="form-control form-control" />
                    </div> 
                 

                  <div data-mdb-input-init className="form-outline mb-2">
                    <label className="form-label me-5" htmlFor="gender">Gender</label>
                   
                    <input type="radio" id="male" {...register("customerGender")}  value="male" />
                    <label className="form-label me-5" htmlFor="male">Male</label>
                     <input type="radio" id="female" {...register("customerGender")}  value="female" />
                    <label className="form-label me-5" htmlFor="female">Female</label>
                      <input type="radio" id="other" {...register("customerGender")} value="other" />
                     <label className="form-label me-5" htmlFor="other">Other</label>
                   </div>

                   <div data-mdb-input-init className="form-outline mb-2">
                    <label className="form-label" htmlFor="mail">Email</label>
                    <input type="email" id="mail"{...register("email")} className="form-control form-control" placeholder='abc@gmail.com'/>
                     </div>
                 

                  <div data-mdb-input-init className="form-outline mb-2">
                     <label className="form-label" htmlFor="mno">Mobile Number</label>
                    <input type="text" id="mno"{...register("mobileNo")} className="form-control form-control" />
                   </div> 
                 

                  <div data-mdb-input-init className="form-outline mb-2">
                    <label className="form-label" htmlFor="pno">PAN Card Number</label>
                    <input type="text" id="pno"{...register("pancardNo")} className="form-control form-control" />
                  </div>  
                  
                   
                   <div data-mdb-input-init className="form-outline mb-2">
                    <label className="form-label" htmlFor="tenure">Loan Tenure</label>
                    <input type="number" id="tenure"{...register("loanTenure")} className="form-control form-control" />
                  </div>  
                  
                  
                  <div data-mdb-input-init className="form-outline mb-2">
                    <label className="form-label" htmlFor="amount">Loan Required</label>
                    <input type="number" id="amount"{...register("loanRequired")} className="form-control form-control" />
                    </div> 
                 


                  <div className="pt-1 mb-4">
                    <button  className="btn btn-dark btn-lg btn-block" type="submit">Submit</button>
                  </div>

                  
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Enquiry
