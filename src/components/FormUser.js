import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class FormUser extends Component {
  render() {
    let linkStyle = "";
    const { name, phone, email } = this.props.userDetails;
    const inputChangeHandler = this.props.inputChangeHandler;
    const isEmailValid = this.props.isEmailValid;
    const emailError = this.props.emailError;
    const phoneError = this.props.phoneError;
    isEmailValid || name || phone.length === 10
      ? (linkStyle = "btn btn-outline-primary mt-2 text-light bg-primary")
      : (linkStyle = "link-visibility mt-2 btn btn-outline-secondary");
    return (
      <div>
        <form className="user-form p-3">
          <h1 className="user-form_head">Enter Details</h1>
          <input
            type="text"
            value={name}
            name="name"
            placeholder="Name..."
            onChange={inputChangeHandler}
            className="user-form_input form-control"
          />

          <input
            type="number"
            value={phone}
            name="phone"
            placeholder="Phone..."
            onChange={inputChangeHandler}
            className=" user-form_input form-control"
          />
          {phoneError && <h6 className="user-form_required">{phoneError}</h6>}
          <input
            type="text"
            value={email}
            name="email"
            placeholder="Email..."
            onChange={inputChangeHandler}
            className=" user-form_input form-control"
          />
          {emailError && <h6 className="user-form_required">{emailError}</h6>}

          <div className="user-form_button">
            <Link to="/formDetails" className={linkStyle}>
              Next
            </Link>
          </div>
          {(!name || !phone || !email) && (
            <h6 className="user-form_required">*enter all the fields*</h6>
          )}
        </form>
      </div>
    );
  }
}
