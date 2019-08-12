import React, { Component } from "react";
import { AppContext } from "../container/AppProvider";

import FileItem from "./FileItem";

export default class FileTable extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {({ files, reset }) => {
          return (
            <div className="box-container py-2">
              {files.map(file => {
                return <FileItem key={file.id} reset={reset} fileProp={file} />;
              })}
            </div>
          );
        }}
      </AppContext.Consumer>
    );
  }
}
