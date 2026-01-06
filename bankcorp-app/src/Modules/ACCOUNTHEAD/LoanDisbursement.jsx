import React, { useEffect } from 'react'
import { useForm, useWatch } from 'react-hook-form';
import img from '/dis.jpg'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
function LoanDisbursement() {

    const {register,handleSubmit,reset,setValue,control}=useForm();
    const {customerId} = useParams();
    const navigate = useNavigate();

    const sanctionAmount = useWatch({ control, name: "loanAmountSanctioned" })
    const transferAmount = useWatch({ control, name: "transferAmount" })
    function loanDisbursementDetails(data)
    {
      const sdata ={
            amountPayType: data.amountPayType,
            bankName: data.bankName,
            accountNumber: data.accountNumber,
            transferAmount:data.transferAmount,
            accountType:data.accountType,
            paymentStatus:data.paymentStatus,
            IFSCCode:data.IFSCCode,
            remainingAmount:data.remainingAmount,
            loanAmountSanctioned:data.loanAmountSanctioned
      }
    axios.put(`http://localhost:9093/application/updateDisbursementData/${customerId}`,sdata, {headers: {
      'Content-Type': 'application/json'}
    })
    .then(res=>{
      console.log(res.data); 
    }).catch(error=>console.log(error)
    )
    navigate('/dashboard/viewsanctionaccepted');
  }

  function getSanctionData()
    {
   axios.get(`http://localhost:9093/application/getbyId/${customerId}`)
  .then(response => {
    setValue("loanAmountSanctioned", response.data.sanction.loanAmountSanctioned);
  });

    }
    useEffect(getSanctionData,[]);

    useEffect(() => {
      if (sanctionAmount && transferAmount) {
        const S = Number(sanctionAmount)
        
        const T = Number(transferAmount)
    
        const R = S - T;
          
    
        setValue("remainingAmount", R.toFixed(2))
      }
    }, [sanctionAmount, transferAmount, setValue])

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
            
                            <form onSubmit={handleSubmit(loanDisbursementDetails)}>
            
                              <div className="d-flex align-items-center mb-3 pb-1">
                                <i className="fas fa-cubes fa-2x me-3" style={{color: '#ff6219'}}></i>
                                <span className="h1 fw-bold mb-0">Loan Disbursement</span>
                              </div>
            
                              
                              <div data-mdb-input-init className="form-outline mb-2">
                                 <label className="form-label" htmlFor="apt">Amount Pay Type</label>
                                <input type="text" id="apt" {...register("amountPayType")} className="form-control form-control" />
                               </div>
                               <div data-mdb-input-init className="form-outline mb-2">
                                <label className="form-label" htmlFor="bname">Bank Name</label>
                                <input type="text" id="bname" {...register("bankName")} className="form-control form-control" />
                                </div>
                              
                              <div data-mdb-input-init className="form-outline mb-2">
                                 <label className="form-label" htmlFor="ano">Account Number</label>
                                <input type="text" id="ano" {...register("accountNumber")} className="form-control form-control" />
                               </div> 

                               <div data-mdb-input-init className="form-outline mb-2">
                                 <label className="form-label" htmlFor="las">Loan Amount Sanctioned</label>
                                <input type="text" id="las" {...register("loanAmountSanctioned", { valueAsNumber: true })} className="form-control form-control" />
                               </div> 

                              <div data-mdb-input-init className="form-outline mb-2">
                                <label className="form-label" htmlFor="amount">Transfer Amount </label>
                                <input type="text" id="amount" {...register("transferAmount")} className="form-control form-control" />
                                </div> 

                                <div data-mdb-input-init className="form-outline mb-2">
                                <label className="form-label" htmlFor="ramount">Remaining Amount </label>
                                <input type="text" id="ramount" {...register("remainingAmount")} className="form-control form-control" />
                                </div> 
                             
                                
                             
                               <div data-mdb-input-init className="form-outline mb-2">
                                <label className="form-label" htmlFor="atype">Account Type</label>
                                <input type="text" id="atype" {...register("accountType")} className="form-control form-control" />
                                </div> 
      
                                 <div data-mdb-input-init className="form-outline mb-2">
                                <label className="form-label" htmlFor="pstatus">Payment Status</label>
                                <input type="text" id="pstatus" {...register("paymentStatus")} className="form-control form-control" />
                              </div>  
                              
                              
                              <div data-mdb-input-init className="form-outline mb-2">
                                <label className="form-label" htmlFor="icode">IFSC Code</label>
                                <input type="text" id="icode" {...register("IFSCCode")} className="form-control form-control" />
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

export default LoanDisbursement
