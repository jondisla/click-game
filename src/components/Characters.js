import React from "react";
import "../styles/Characters.css";

const Characters = () => (
  <div className="container">
    <div className="containCard card bg-primary|secondary|success|danger|warning|info|light|dark|link">
      <img className="card-img-top" src="holder.js/100px180/" alt="" />
      <div className="card-body">
        {/* <h4 className="card-title">Title</h4>
      <p className="card-text">Text</p> */}
      </div>
    </div>
  </div>
);

export default Characters;
