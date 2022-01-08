import React from "react";
import {Link} from "react-router-dom";

function Nav() {
 

  return (
    <div>
      <Link to="/about">About</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/contact">Contact</Link>
      <a href = "./JCS 2021.doc">Resume</a>
    </div>
  );
}

export default Nav;
