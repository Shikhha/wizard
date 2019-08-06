import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "../styles/main.scss";
import FileSelect from "../components/FileSelect";
import FormUser from "../components/FormUser";
import FormDetails from "../components/Formdetails";
import Header from "../components/Header";

export default class App extends Component {
  state = {
    files: [
      {
        id: "dhjedhj23",
        fileName: "File-1",
        date: "9th July, 2019",
        time: "1.55 PM"
      },
      {
        id: "dhjedhj24",

        fileName: "File-2",
        date: "8th July 2019",
        time: "2.00 PM"
      },
      {
        id: "dhjedhj25",
        fileName: "File-3",
        date: "7th July 2019",
        time: "10.06 PM"
      },
      {
        id: "dhjedhj26",
        fileName: "File-4",
        date: "6th July 2019",
        time: "1.00 PM"
      }
    ],
    userDetails: {
      name: "",
      phone: "",
      email: ""
    },
    ifSubmitted: false,
    isEmailValid: false,
    isPhoneValid: false,
    emailError: "",
    phoneError: ""
  };

  inputChangeHandler = event => {
    event.preventDefault();

    const name = event.target.name;
    const value = event.target.value;
    const details = { ...this.state.userDetails };
    details[name] = value;
    this.isInputValid(name, value);
    this.setState({ userDetails: details });
  };

  isInputValid = (name, value) => {
    if (name === "email") {
      if (!value.includes("@")) {
        this.setState({ isEmailValid: false });
        this.setState({ emailError: "*email should contain '@'*" });
      } else {
        this.setState({ isEmailValid: true });
        this.setState({ emailError: "" });
      }
    }
    if (name === "phone") {
      if (value.length !== 10) {
        this.setState({ isPhoneValid: false });
        this.setState({ phoneError: "*phone no should be 10-digits*" });
      } else {
        this.setState({ isPhoneValid: true });
        this.setState({ phoneError: "" });
      }
    }
  };
  inputSubmitHandler = event => {
    event.preventDefault();
    this.setState({ ifSubmitted: true });
  };

  render() {
    const files = [...this.state.files];
    return (
      <React.Fragment>
        <Header />
        <BrowserRouter>
          <div className="container">
            <Route
              path="/"
              render={() => <FileSelect files={files} />}
              exact={true}
            />
            <Route
              path="/userForm"
              render={() => (
                <FormUser
                  phoneError={this.state.phoneError}
                  emailError={this.state.emailError}
                  isEmailValid={this.state.isEmailValid}
                  userDetails={this.state.userDetails}
                  inputChangeHandler={this.inputChangeHandler}
                />
              )}
            />
            <Route
              path="/formDetails"
              render={() => (
                <FormDetails
                  userDetails={this.state.userDetails}
                  ifSubmitted={this.state.ifSubmitted}
                  inputSubmitHandler={this.inputSubmitHandler}
                />
              )}
            />
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}
