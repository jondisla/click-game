import React from "react";
import "./Box.css";

const Box = props => {
  // console.log(props)
  return (
    <div
      className="cardStyle card bg-light"
      onClick={() => props.randomcharacter()}
    >
      <img
        className=" imgs  card-img-top img-fluid"
        src={props.image}
        alt={props.name}
      />

      <div className="card-body">
        <h6 className="card-title">
          {props.name}
          {props.id}
        </h6>
      </div>
    </div>
  );
};
export default Box;
