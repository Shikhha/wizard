import React, { Component } from "react";
import { AppContext } from "../container/AppProvider";

import FileItem from "./FileItem";

export default class FileTable extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {({ files, nextStep }) => {
          return (
            <div className="box-container py-2">
              {files.map(file => {
                return (
                  <FileItem key={file.id} nextStep={nextStep} fileProp={file} />
                );
              })}
            </div>
          );
        }}
      </AppContext.Consumer>
    );
  }
}
