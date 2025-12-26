

 import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

export function LoanApplication()
{
  
 const steps = [
    "Personal Details",
    "Loan Details",
    "Local Address",
    "Permanent Address",
    "Dependant Info",
    "Account Details",
    "Submit"
  ];

  const [step, setStep] = useState(0);

  // only register + handleSubmit (no watch / setValue)
  const { register, handleSubmit } = useForm();

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const onSubmit = (data) => {
    const customerData ={
        firstName:data.firstName,
        lastName:data.lastName,
        age:data.age,
        email:data.email,
        mobileNo:data.mobileNo,
        pancardNo:data.pancardNo,
        customerGender:data.customerGender,
        loanTenure:data.loanTenure,
        loanRequired:data.loanRequired,
        
   
    customerAddress: {
        localAddress: {
            areaName:data.areaName,
            cityName:data.cityName,
            district:data.district,
            state:data.state,
            pincode:data.pincode,
            houseNumber:data.houseNumber,
            streetName:data.streetName
        },

        permanentAddress: {
             areaName:data.areaName,
            cityName:data.cityName,
            district:data.district,
            state:data.state,
            pincode:data.pincode,
            houseNumber:data.houseNumber,
            streetName:data.streetName
        }
    },

    dependantInfo: {
        noOfFamilyMembers:data.noOfFamilyMembers,
        noOfChild:data.noOfChild,
        maritalStatus:data.maritalStatus,
        dependantMember:data.dependantMember,
        familyIncome:data.familyIncome
    },

    accountDetails: {
        accountType:data.accountType,
        accountBalance:data.accountBalance,
        accountHolderName:data.accountHolderName,
        accountStatus:data.accountStatus,
        accountNumber:data.accountNumber
    },

    guarantorDetails: {
        guarantorName:data.guarantorName,
        guarantorDateOfBirth:data.guarantorDateOfBirth,
        guarantorRelationwithCustomer:data.guarantorRelationwithCustomer,
        guarantorMobileNo:data.guarantorMobileNo,
        guarantoraadharNo:data.guarantoraadharNo,
        guarantormortgageDetails:data.guarantormortgageDetails,
        guarantorJobDetails:data.guarantorJobDetails,
        guarantorLocalAddress:data.guarantorLocalAddress,
        guarantorPermanentAddress:data.guarantorPermanentAddress
    }
};
    const  formData = new FormData();
    formData.append('loanApplicationData',JSON.stringify(customerData));
    axios.post("http://localhost:9093/application/post",formData);
    console.log("Submitted form", data);
    alert("Form submitted. Check console for payload");
    
  };

  const StepHeader = () => (
    <div className="mb-3">
      <div className="d-flex justify-content-between align-items-center mb-1">
        <h5 className="fw-semibold m-0">{steps[step]}</h5>
        <small>Step {step + 1} / {steps.length}</small>
      </div>
      <div className="progress" style={{ height: 8 }}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${((step + 1) / steps.length) * 100}%` }}
         />
      </div>
    </div>
  );

  const Field = ({ label, name, type = "text", inputMode }) => (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input
        className="form-control"
        type={type}
        inputMode={inputMode}
        {...register(name)}
        defaultValue=""
      />
    </div>
  );

 
  const Personal = () => (
    <div className="row">
      <div className="col-md-6"><Field label="First Name" name="firstName" /></div>
      <div className="col-md-6"><Field label="Last Name" name="lastName" /></div>
      <div className="col-md-4"><Field label="Age" name="age" type="text" inputMode="numeric" /></div>
      <div className="col-md-4"><Field label="customerGender" name="customerGender" /></div>
      <div className="col-md-4"><Field label="Email" name="email" /></div>
      <div className="col-md-6"><Field label="Mobile" name="mobileNo" /></div>
      <div className="col-md-6"><Field label="PAN" name="pancardNo" /></div>
    </div>
  );

  const Loan = () => (
    <div className="row">
      <div className="col-md-6"><Field label="Loan Required" name="loanRequired" type="text" inputMode="numeric" /></div>
      <div className="col-md-6"><Field label="Loan Tenure (months)" name="loanTenure" type="text" inputMode="numeric" /></div>
    </div>
  );

   const Address = ({ prefix }) => (
    <div className="row">
      <div className="col-md-6"><Field label="House Number" name={`${prefix}.houseNumber`} /></div>
      <div className="col-md-6"><Field label="Street Name" name={`${prefix}.streetName`} /></div>
      <div className="col-md-6"><Field label="Area" name={`${prefix}.areaName`} /></div>
      <div className="col-md-6"><Field label="City" name={`${prefix}.cityName`} /></div>
      <div className="col-md-6"><Field label="District" name={`${prefix}.district`} /></div>
      <div className="col-md-6"><Field label="State" name={`${prefix}.state`} /></div>
      <div className="col-md-6"><Field label="Pincode" name={`${prefix}.pincode`} type="text" inputMode="numeric" /></div>
    </div>
  );

  const LocalAddress = () => <Address prefix="customerAddress.localAddress" />;
  const PermanentAddress = () => <Address prefix="customerAddress.permanentAddress" />;

  

  const Dependant = () => (
    <div className="row">
      <div className="col-md-6"><Field label="Family Members" name="dependantInfo.noOfFamilyMembers" type="text" inputMode="numeric" /></div>
      <div className="col-md-6"><Field label="Children" name="dependantInfo.noOfChild" type="text" inputMode="numeric" /></div>
      <div className="col-md-6"><Field label="Marital Status" name="dependantInfo.maritalStatus" /></div>
      <div className="col-md-6"><Field label="Family Income" name="dependantInfo.familyIncome" type="text" inputMode="numeric" /></div>
    </div>
  );

  const Account = () => (
    <div className="row">
      <div className="col-md-6"><Field label="Account Type" name="accountDetails.accountType" /></div>
      <div className="col-md-6"><Field label="Account Holder" name="accountDetails.accountHolderName" /></div>
      <div className="col-md-6"><Field label="Account Number" name="accountDetails.accountNumber" /></div>
      <div className="col-md-6"><Field label="Account Balance" name="accountDetails.accountBalance" type="text" inputMode="numeric" /></div>
      <div className="col-md-6"><Field label="Status" name="accountDetails.accountStatus" /></div>
    </div>
  );

  const renderStep = () => {
    switch (step) {
      case 0: return <Personal />;
      case 1: return <Loan />;
      case 2: return <LocalAddress />;
      case 3: return <PermanentAddress />;
      case 4: return <Dependant />;
      case 5: return <Account />;
      default: return (
        <div className="alert alert-info">
          Click Submit to send the form data.
        </div>
      );
    }
  };

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm">
            <div className="card-body">
              <h4 className="card-title mb-3">Loan Application</h4>

              <form onSubmit={handleSubmit(onSubmit)}>
                <StepHeader />
                {renderStep()}

                <div className="d-flex justify-content-between mt-3">
                  <button type="button" className="btn btn-secondary"
                    onClick={back}
                    disabled={step === 0} > Back </button>

                  {step < steps.length - 1 ? (
                    <button type="button" className="btn btn-primary" onClick={next}>Next</button>
                  ) : (
                    <button type="submit" className="btn btn-success">Submit</button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

         

