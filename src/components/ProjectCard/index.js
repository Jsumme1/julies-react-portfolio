import React from "react";
import "./style.css";

// Props are passed through our functional component.
function ProjectCard(props) {
  
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <div>
          <ul>
            <li>
              <p className="title">Project Name:</p>
              <p className="project">{props.name}</p>
            </li>
            <br></br>
            <li>
              <p className="title">Description:</p> {props.description}
            </li>
            <br></br>
            <li>
              <p className="title">Tools Used</p> {props.tools}
            </li>
            <br></br>
            <li>
              <a href={props.github}>GitHub Link: </a> {props.github}
            </li>
            <li>
              <a href={props.deployed}>Deployed Link: </a>
              {props.deployed}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
