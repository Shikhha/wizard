import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "../styles/main.scss";
import FileTable from "../components/FileTable";
import FormUser from "../components/FormUser";
import FormDetails from "../components/Formdetails";
import Header from "../components/Header";
import AppProvider from "./AppProvider";
import Steps from "../components/Steps";

export default class App extends Component {
  componentDidMount() {
    let files = [
      {
        id: "dhjedhj23",
        date: "9th July, 2019",
        time: "1.55 PM"
      },
      {
        id: "dhjedhj24",
        date: "8th July 2019",
        time: "2.00 PM"
      },
      {
        id: "dhjedhj25",
        date: "7th July 2019",
        time: "10.06 PM"
      },
      {
        id: "dhjedhj26",
        date: "6th July 2019",
        time: "1.00 PM"
      }
    ];
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
