import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "../styles/main.scss";
import FileTable from "../components/FileTable";
import FormUser from "../components/FormUser";
import FormDetails from "../components/Formdetails";
import Header from "../components/Header";
import AppProvider from "./AppProvider";
import Steps from "../components/Steps";
import { files } from "../temp/data";

export default class App extends Component {
  componentDidMount() {
    localStorage.setItem("db", JSON.stringify(files));
  }
  render() {
    return (
      <React.Fragment>
        <AppProvider>
          <Header />
          <BrowserRouter>
            <div className="container">
              <Route path="/" component={FileTable} exact={true} />
              <Route path="/userForm" component={FormUser} />
              <Route path="/formDetails" component={FormDetails} />
              <Steps />
            </div>
          </BrowserRouter>
        </AppProvider>
      </React.Fragment>
    );
  }
}
