import React, { Component } from "react";

export const AppContext = React.createContext();
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

export default class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      userDetails: {
        name: "",
        phone: "",
        address: "",
        email: ""
      },
      formErrors: {
        nameError: "",
        addressError: "",
        emailError: "",
        phoneError: ""
      },
      inputChangeHandler: this.inputChangeHandler,
      isInputValid: this.isInputValid,
      inputSubmitHandler: this.inputSubmitHandler,
      nextHandler: this.nextHandler,
      nextStep: this.nextStep,
      prevStep: this.prevStep,
      ifSubmitted: false,
      showErrors: false,
      step: 1
    };
  }

  componentDidMount() {
    this.setState({ files: JSON.parse(localStorage.getItem("db")) });
  }
  setStep = num => {
    this.setState({ step: num });
  };

  isFormValid = formErrors => {
    let valid = true;
    Object.values(formErrors).forEach(
      error => error.length > 0 && (valid = false)
    );
    return valid;
  };

  isFormEmpty = userDetails => {
    let empty = false;
    let errors = { ...this.state.formErrors };
    Object.keys(userDetails).forEach(item => {
      if (userDetails[item].length === 0) {
        empty = true;
        errors[item + "Error"] = "Please provide a valid " + item;
      }
    });
    this.setState({ formErrors: errors });
    return empty;
  };

  nextHandler = (e, history) => {
    e.preventDefault();
    const step = this.state.step;
    if (
      !this.isFormEmpty(this.state.userDetails) &&
      this.isFormValid(this.state.formErrors)
    ) {
      this.setState({ showErrors: false });
      history.push("/formDetails");
      this.setState({ step: 3 });
    } else {
      this.setState({ showErrors: true });
    }
  };
  inputChangeHandler = e => {
    e.preventDefault();
    const { name, value } = e.target;
    const details = { ...this.state.userDetails };
    details[name] = value;
    this.isInputValid(name, value);
    this.setState({ userDetails: details });
  };
  isInputValid = (name, value) => {
    let error = "";
    switch (name) {
      case "name":
        error =
          value.length < 3 && value.length >= 0
            ? "name should be minimum 3 characters"
            : "";
        break;
      case "address":
        error =
          value.length < 7 && value.length >= 0
            ? "name should be minimum 7 characters"
            : "";
        break;
      case "email":
        error =
          emailRegex.test(value) && value.length > 0
            ? ""
            : "invalid email address";
        break;
      case "phone":
        error =
          value.length < 10 && value.length >= 0
            ? "phone number should be 10 digits"
            : "";
        break;
    }
    let formErrors = { ...this.state.formErrors };
    formErrors[name + "Error"] = error;
    this.setState({ formErrors });
  };
  inputSubmitHandler = event => {
    event.preventDefault();
    this.setState({ ifSubmitted: true });
    this.setState({ step: 3 });
  };
  nextStep = () => {
    this.setState(prevState => ({
      step: prevState.step + 1
    }));
  };
  prevStep = () => {
    this.setState({ ifSubmitted: false });
    this.setState(prevState => ({
      step: prevState.step - 1
    }));
  };
  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
