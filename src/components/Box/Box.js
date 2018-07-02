import React from "react";
import "./Box.css";

const Box = props => {
  return (
    <div className="cardStyle card bg-light" onClick={e => props.id}>
      {/* <Characters
        name={characters[0].name}
        image={characters[0].image}
        occupation={characters[0].occupation}
        location={characters[0].location}
      /> */}
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
