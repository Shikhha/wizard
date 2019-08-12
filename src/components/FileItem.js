import React from "react";
import { Link } from "react-router-dom";

const FileItem = ({ reset, fileProp }) => {
  const { date, time } = fileProp;
  return (
    <Link onClick={reset} to="/userForm" style={{ textDecoration: "none" }}>
      <div className="box">
        <div className="box-content">
          <i className="material-icons box-content_image mb-3">description</i>
          <p className="box-content_items">
            <h6>{date}</h6>
            <h6>{time}</h6>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default FileItem;
