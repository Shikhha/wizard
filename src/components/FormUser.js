import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../container/AppProvider";

export default class FormUser extends Component {
  render() {
    let linkStyle = "";
    return (
      <AppContext.Consumer>
        {({
          userDetails,
          inputChangeHandler,
          formErrors,
          showErrors,
          nextHandler,
          prevStep
        }) => {
          const { name, phone, email, address } = userDetails;
          const {
            nameError,
            addressError,
            phoneError,
            emailError
          } = formErrors;

          return (
            <div>
              <form className="user-form p-md-3">
                <div className="user-form_heading mb-md-3">Enter Details</div>
                <div class="form-row">
                  <div class="col-md-6 mb-3">
                    <input
                      type="text"
                      value={name}
                      name="name"
                      placeholder="name"
                      onChange={inputChangeHandler}
                      className="user-form_input form-control"
                      required
                    />
                    {showErrors && nameError && (
                      <h6 className="user-form_required">{nameError}</h6>
                    )}
                  </div>
                  <div class="col-md-6 mb-2 mb-md-3">
                    <input
                      type="number"
                      value={phone}
                      name="phone"
                      placeholder="phone"
                      onChange={inputChangeHandler}
                      className=" user-form_input form-control"
                    />
                    {showErrors && phoneError && (
                      <h6 className="user-form_required">{phoneError}</h6>
                    )}
                  </div>
                </div>
                <div class="form-row">
                  <div class="col-12 mb-2 mb-md-3">
                    <input
                      type="text"
                      value={address}
                      name="address"
                      placeholder="address"
                      onChange={inputChangeHandler}
                      className=" user-form_input form-control"
                    />
                    {showErrors && addressError && (
                      <h6 className="user-form_required">{addressError}</h6>
                    )}
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-12 mb-2 mb-md-3">
                    <input
                      type="email"
                      value={email}
                      name="email"
                      placeholder="email"
                      onChange={inputChangeHandler}
                      className=" user-form_input form-control"
                    />
                    {showErrors && emailError && (
                      <h6 className="user-form_required">{emailError}</h6>
                    )}
                  </div>
                </div>
                <div className="user-form_button mt-3">
                  <Link to="/" className="btn btn-success" onClick={prevStep}>
                    Back
                  </Link>
                  <button
                    type="submit"
                    onClick={e => {
                      nextHandler(e, this.props.history);
                    }}
                    className="btn btn-success ml-2"
                  >
                    Next
                  </button>
                </div>
              </form>
            </div>
          );
        }}
      </AppContext.Consumer>
    );
  }
}
