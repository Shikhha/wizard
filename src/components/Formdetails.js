import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../container/AppProvider";

const FormDetails = () => {
  return (
    <AppContext.Consumer>
      {({ userDetails, inputSubmitHandler, ifSubmitted, prevStep }) => {
        const { name, phone, address, email } = userDetails;

        return (
          <div className="details-container p-3">
            <div className="details-container__heading mb-5">
              Confirm Details
            </div>
            <div className="details-container__info">
              <div>
                Name: <span className="text-muted">{name}</span>
              </div>
              <div>
                Phone: <span className="text-muted">{phone}</span>
              </div>
              <div>
                Address: <span className="text-muted">{address}</span>
              </div>
              <div>
                Email: <span className="text-muted">{email}</span>
              </div>
            </div>
            <div className="mt-5">
              <Link
                to="/userForm"
                className="btn btn-success"
                onClick={prevStep}
              >
                Back
              </Link>
              <button
                className="btn btn-success ml-2"
                onClick={inputSubmitHandler}
              >
                submit
              </button>
            </div>
            {ifSubmitted && (
              <h2 className="text-danger text-center mt-3">Submitted!</h2>
            )}
          </div>
        );
      }}
    </AppContext.Consumer>
  );
};

export default FormDetails;
