import React from "react";
import { Link } from "react-router-dom";

const FileItem = ({ fileProp }) => {
  const { fileName, date, time } = fileProp;
  return (
    <Link
      to="/userForm"
      className="files-link"
      style={{ textDecoration: "none" }}
    >
      <div>
        <h1>{fileName}</h1>
        <div>
          <h6>{date}</h6>
          <h6>{time}</h6>
        </div>
      </div>
    </Link>
  );
};

export default FileItem;
