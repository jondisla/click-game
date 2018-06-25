import React from "react";
import "./Box.css";

const Box = () => (
  <div className="card bg bg-primary|secondary|success|danger|warning|info|light|dark|link">
    <img className="card-img-top" src="holder.js/100px180/" alt="" />
    <div className="card-body">
      {/* <h4 className="card-title">Title</h4>
      <p className="card-text">Text</p> */}
    </div>
  </div>
);

export default Box;
