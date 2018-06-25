import React from "react";
import "./NavBar.css";

const NavBar = () => (
  <nav className="navbar navbar-expand nav" style={{ background: "black" }}>
    <ul className="nav navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="home">
          Home <span className="sr-only">(current)</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="link2">
          About
        </a>
      </li>
      <li className="nav-item scoreboard">
        <div className="nav-link">Score:</div>
      </li>
    </ul>
  </nav>
);

export default NavBar;
