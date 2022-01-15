import React from "react";
import "./style.css";

function Foot() {
  return (
    <div class="container">
      <div class="footer">
        <footer>
          <div class="footerlinks">
            <ul>
              <li align="left">Social Media Links:</li>
              <li>
                <a href="https://github.com/Jsumme1">GitHub</a>
              </li>
              <li>
                <a href="www.linkedin.com/in/julie-summers-velazquez-2512671">
                  linkedin
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/julie.s.velazquez/">
                  FaceBook
                </a>
              </li>
            </ul>
          </div>
          <div class="name">
            <li>Julie Summers</li>
          </div>
          <div class="copyright">
            Copyright 2022
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Foot;

