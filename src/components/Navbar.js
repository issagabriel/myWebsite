import React from "react";
import logo from "../images/personal-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="menu-icon">
        <i className="fa fa-bars fa-2x"></i>
      </div>
      <img className="logo" src={logo}></img>
      <div className="menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
