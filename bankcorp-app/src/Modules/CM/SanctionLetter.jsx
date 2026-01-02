import React, { useEffect } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import img from '/sanction.jpg'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function SanctionLetter() {

    const{register, handleSubmit,reset,setValue, control}=useForm();
    const {customerId}=useParams();
    const navigate=useNavigate();
    const loanAmount = useWatch({ control, name: "loanAmountSanctioned" })
    const interestRate = useWatch({ control, name: "rateOfInterest" })
    const tenure = useWatch({ control, name: "loanTenure" })

    function sanctionDetails(data)
    {
      const sdata ={
            firstName: data.firstName,
            lastName: data.lastName,
            mobileNo: data.mobileNo,
            loanAmountSanctioned:data.loanAmountSanctioned,
            rateOfInterest:data.rateOfInterest,
            loanTenure:data.loanTenure,
            monthlyEmiAmount:data.monthlyEmiAmount
      }
      
     axios.put(`http://localhost:9093/application/updateSanctionData/${customerId}`,sdata, {headers: {
      'Content-Type': 'application/json'}
    }).then(res=>{
        console.log(res.data);
        }).catch(error=>console.log(error)
        )
        reset();
        navigate('/dashboard/viewverified');
    }

    function getLoanApplicationData()
    {
        axios.get(`http://localhost:9093/application/getbyId/${customerId}`)
        .then(response=>{
         for(const loandata in response.data)
         {
          setValue(loandata, response.data[loandata]);
         }

        })
    }
    useEffect(getLoanApplicationData, []);

    useEffect(() => {
  if (loanAmount && interestRate && tenure) {
    const P = Number(loanAmount)
    const R = Number(interestRate) / 12 / 100
    const N = Number(tenure)

    const emi =
      (P * R * Math.pow(1 + R, N)) /
      (Math.pow(1 + R, N) - 1)

    setValue("monthlyEmiAmount", emi.toFixed(2))
  }
}, [loanAmount, interestRate, tenure, setValue])
  return (
    <>
      <div className="container  py-2 " >
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col col-xl-10 " >
              <div className="card shadow-lg rounded-4 bg-light">
                <div className="row g-0">
                  {/* Image */}
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img src={img}
                      alt="home" 
                      // className="img-fluid" style={{borderRadius: '1rem 0 0 1rem',height:'750px',}} 
                       className="img-fluid w-100 rounded-start"/>
                  </div>
                  {/* Form */}
                  <div className="col-md-6 col-lg-7 d-flex ">
                    <div className="card-body p-4 p-lg-5 text-black fw-semibold">
      
                      <form onSubmit={handleSubmit(sanctionDetails)}>
      
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-3" style={{color: '#ff6219'}}></i>
                          <span className="h1 fw-bold mb-0">Sanction Letter</span>
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
                           <label className="form-label" htmlFor="mno">Mobile Number</label>
                          <input type="text" id="mno"{...register("mobileNo")} className="form-control form-control" />
                         </div> 
      
                        <div data-mdb-input-init className="form-outline mb-2">
                          <label className="form-label" htmlFor="amount">Loan Amount Sanctioned</label>
                          <input type="text" id="amount"{...register("loanAmountSanctioned", { valueAsNumber: true })} className="form-control form-control" />
                          </div> 
                       
                          {/* <div data-mdb-input-init className="form-outline mb-2">
                          <label className="form-label" htmlFor="mail">Email</label>
                          <input type="email" id="mail"{...register("email")} className="form-control form-control" placeholder='abc@gmail.com'/>
                           </div> */}
                       
                         <div data-mdb-input-init className="form-outline mb-2">
                          <label className="form-label" htmlFor="interest">Rate Of Interest</label>
                          <input type="number" id="interest"{...register("rateOfInterest",{ valueAsNumber: true })} className="form-control form-control" />
                          </div> 

                           <div data-mdb-input-init className="form-outline mb-2">
                          <label className="form-label" htmlFor="tenure">Loan Tenure</label>
                          <input type="number" id="tenure"{...register("loanTenure", { valueAsNumber: true })} className="form-control form-control" />
                        </div>  
                        
                        
                        <div data-mdb-input-init className="form-outline mb-2">
                          <label className="form-label" htmlFor="mEmi">Monthly EMI Amount</label>
                          <input type="text" id="mEmi"{...register("monthlyEmiAmount")} className="form-control form-control" readOnly />
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
    </>
  )
}

export default SanctionLetter
