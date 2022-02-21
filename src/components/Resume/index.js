import React from "react";
import Wrapper from "../Wrapper";



function Resume() {
  return (
    <Wrapper>
      <section className="my-5">
        <h2 id="about">Resume - Coding Applications</h2>
        <h6>Scroll Down for downloadable Full Style Resume</h6>
        <div className="my-2">
          <p>
            Front End technologies, command-line fundamentals and APIs
            <ul>
              <li>HTML and CSS</li>
              <li>Git</li>
              <li>JavaScript</li>
              <li>3rd Party APIs (jQuery, Bootstrap)</li>
              <li>Server-side APIs AJAX and JSON</li>
            </ul>
            Full Stack web application
            <ul>
              <li>
                Servers, databases and other back end technologies to connect
                with front end
              </li>
              <li>Node.js</li>
              <li>Object-oriented programming (OOP)</li>
              <li>Express Servers</li>
              <li>MySQL</li>
              <li>Object-relational mapper or ORM (Sequelize)</li>
              <li>Model-view-controller (MVC) framework (handlebars.js)</li>
              <li>Unit Testing</li>
              <li>Agile methodology </li>
              <li>Heroku</li>
              <li>MongoDB and NoSQL</li>
              <li>Progressive web apps (PWAs)</li>
              <li>React</li>
              <li>MERN</li>
            </ul>
          </p>

          <a href="../../JCS_Technical.doc">
            <p className="resume">Click to download resume</p>
            
          </a>
        </div>
      </section>
    </Wrapper>
  );
}

export default Resume;
