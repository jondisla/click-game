import React from "react";
import "./NavBar.css";

const NavBar = () => (
  <nav className="navbar navbar-expand nav" style={{ background: "black" }}>
    <img
      src="https://vignette.wikia.nocookie.net/marvelcomicsfanon/images/2/21/Marvel-comics-logo-vector.png/revision/latest?cb=20170417155426"
      className="logo"
    />
    <ul className="nav navbar-nav">
      <li className="nav-item active">
        <h3>SUPERHERO MEMORY GAME</h3>
      </li>
      <li className="nav-item scoreboard">
        <div className="nav-link">Score:</div>
      </li>
    </ul>
  </nav>
);

export default NavBar;
