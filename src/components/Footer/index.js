import React from "react";
import { Link } from "react-router-dom";

function Foot() {
  return (
    <footer>
      <Link to="/about">About</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/resume">Resume</Link>
    </footer>
  );
}

export default Foot;
