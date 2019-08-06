import React from "react";

const FormDetails = ({ ifSubmitted, userDetails, inputSubmitHandler }) => {
  const { name, phone, email } = userDetails;
  return (
    <div className="details-container">
      <div>
        <h1>Confirm Details</h1>
      </div>
      <div>Name: {name}</div>
      <div>Phone: {phone}</div>
      <div>Email: {email}</div>
      <button className="btn btn-primary mt-4" onClick={inputSubmitHandler}>
        submit
      </button>
      {ifSubmitted && <h2 className="text-danger mt-3">Submitted!</h2>}
    </div>
  );
};

export default FormDetails;
