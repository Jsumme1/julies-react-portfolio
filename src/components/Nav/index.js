import React from "react";
import {Link} from "react-router-dom";
import "./style.css";



function Nav() {
 

  return (
    <div class="bg-img">
      <div class="container">
        <div class="topnav">
      <Link to="/about">About</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/resume">Resume</Link>
    </div>
    </div>
    </div>

  );
}

export default Nav;
