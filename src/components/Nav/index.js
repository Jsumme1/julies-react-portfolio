import React from "react";
import {Link} from "react-router-dom";

function Nav() {
 

  return (
    <div>
      <Link to="/about">About</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/resume">Resume</Link>
    </div>
  );
}

export default Nav;
