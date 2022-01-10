import React from "react";
import Wrapper from "../Wrapper";

function Resume() {
  return (
    <Wrapper>
      <section className="my-5">
        <h1 id="about">Resume</h1>
        <h3 id="about">Scroll Down for downloadable PDF Full Style Resume</h3>
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
            <li>Servers, databases and other back end technologies to connect with front end</li>
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
        </div>
          <a href = "./JCS 2021.doc">Resume</a>
      </section>
    </Wrapper>
  );
}

export default Resume;
