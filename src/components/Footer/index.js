import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Foot() {
  return (
    <div class="container">
      <div class="topnav">
    <footer>
      <Link to="/about">About</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/resume">Resume</Link>
    </footer>
    </div>
  </div>
  );
}

export default Foot;
