import React, { useState } from "react";


function EmiCalculator() {

  const [loanAmount, setLoanAmount] = useState();
  const [interestRate, setInterestRate] = useState();
  const [tenure, setTenure] = useState();
  const [emi, setEmi] = useState();

  function handleCalculateEmi() {

    const P = Number(loanAmount);
    const R = Number(interestRate) / 12 / 100;
    const N = Number(tenure);

    const emiAmount =
      (P * R * (1 + R) ** N) /
      ((1 + R) ** N - 1);

    setEmi(emiAmount);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">

          {/* Card Wrapper Added */}
          <div className="card shadow-lg border-0">
            <div className="card-body p-4">

              <h4 className="text-center fw-bold mb-4">
                EMI Calculator
              </h4>

              <div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Loan Amount
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter loan amount"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Interest Rate (%)
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter interest rate"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Tenure (Months)
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter tenure"
                    value={tenure}
                    onChange={(e) => setTenure(e.target.value)}
                  />
                </div>

                <button
                  type="button"
                  className="btn btn-primary w-100 fw-semibold"
                  onClick={handleCalculateEmi}
                >
                  Calculate EMI
                </button>

              </div>

              <div className="alert alert-success mt-4 text-center mb-0">
                <div className="small text-muted">
                  Monthly EMI
                </div>
                <strong className="fs-5">
                  ₹ {emi}
                </strong>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default EmiCalculator;