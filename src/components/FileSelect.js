import React, { Component } from "react";

import FileItem from "./FileItem";

export default class FileSelect extends Component {
  render() {
    const { files } = this.props;
    return (
      <div className="files-container py-2">
        {files.map(file => {
          return <FileItem key={file.id} fileProp={file} />;
        })}
      </div>
    );
  }
}
