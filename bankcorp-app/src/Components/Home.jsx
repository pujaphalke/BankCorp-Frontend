import React from 'react'
import '../Components/Home.css'
function Home() {

  return (
    <div>
    <section className="hero-section text-center">
    <div className="container">
      <h1 className="fw-bold display-5">Your Dream Home Starts Here</h1>
      <p className="lead mt-3">
        Get fast & affordable home loans with flexible EMIs and low interest rates.
      </p>

      <div className="mt-4">
        <a href="#" className="btn btn-primary btn-lg me-2">Check Eligibility</a>
        <a href="#" className="btn btn-outline-light btn-lg">Calculate EMI</a>
      </div>
    </div>
  </section>



  <section className="py-5">
    <div className="container text-center">
      <h2 className="fw-bold mb-4">Why Choose Our Home Loans?</h2>

      <div className="row g-4 mt-2">

        <div className="col-md-4">
          <div className="card feature-card p-3">
            <h4 className="fw-semibold mt-2">Low Interest Rates</h4>
            <p className="text-muted">
              Enjoy market-best interest rates with zero hidden charges.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card feature-card p-3">
            <h4 className="fw-semibold mt-2">Quick Approval</h4>
            <p className="text-muted">
              Minimal documentation and instant application processing.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card feature-card p-3">
            <h4 className="fw-semibold mt-2">Flexible EMI Plans</h4>
            <p className="text-muted">
              Choose repayment options that fit your financial goals.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>


  
  <section className="py-5 bg-light">
    <div className="container">
      <h2 className="fw-bold text-center">Basic Eligibility Criteria</h2>

      <div className="row justify-content-center mt-4">
        <div className="col-md-8">
          <ul className="list-group list-group-flush fs-5">
            <li className="list-group-item">✔ Minimum age: 21 years</li>
            <li className="list-group-item">✔ Stable income / employment proof</li>
            <li className="list-group-item">✔ Good credit history</li>
            <li className="list-group-item">✔ Valid KYC documents</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-4">
        <a href="#" className="btn btn-primary btn-lg">Apply for Loan</a>
      </div>
    </div>
  </section>


  
  <footer className="py-4 mt-4">
    <div className="container text-center">
      <p className="mb-1">© 2025 HomeLoan App — All Rights Reserved</p>
      <small>Terms & Conditions | Privacy Policy</small>
    </div>
  </footer>



      

      
    </div>
  )
}

export default Home
