import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Login() {
 const { register, handleSubmit } = useForm();
 const navigate = useNavigate();

 
  function loginCheck(data)
  {
   localStorage.setItem('user', JSON.stringify(data));
   
   console.log("Login: "+data.usertype);
   alert("loginCheck function call....!")
   console.log(data);
   if(data.usertype === "CUSTOMER")
   { 
     navigate('/customerdashboard');
   }else{
     navigate('/dashboard');
   }
  
  }

  return (
    <>
      
    <section className="vh-100 d-flex align-items-center" style={{ backgroundColor: "#ced4da" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card shadow-lg" style={{ borderRadius: "1rem" }}>
              <div className="card-body p-4">

                <h3 className="text-center mb-4 fw-bold">Home Loan Login</h3>

                <form onSubmit={handleSubmit(loginCheck)}>
                  
                  {/* Email */}
                  <div className="mb-3">
                    <label className="form-label">UserId</label>
                    <input
                      type="text"className="form-control"placeholder="UID"
                      {...register("userId", { required: true })}
                    />
                  </div>

                  {/* Password */}
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"className="form-control"
                      {...register("password", { required: true })}
                    />
                  </div>
                   {/* User type */}
                  <div className="mb-3">
                    <label className="form-label">UserType </label>
                    <select {...register("usertype")}>
                          <option>ADMIN</option>
                          <option>CRM</option>
                          <option>OE</option>
                          <option>CM</option>
                          <option>CUSTOMER</option>
                          <option>ACCOUNTHEAD</option>
                    </select>
                  </div>

                  {/* Login Button */}
                  <div className="d-grid mb-3">
                    <button type="submit" className="btn btn-dark btn-lg"> Login</button>
                  </div>

                  

                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Login
