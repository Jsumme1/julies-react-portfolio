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
            <p className="title">Project Name:</p><p className="project">{props.name}</p>
          </li>
          <li>
            <p className="title">Description:</p> {props.description}
          </li>
          <li>
            <a href= {props.github}>GitHub Link</a>
          </li>
          <li>
            <a href= {props.deployed}>Deployed Link</a> 
          </li>
        </ul>
      </div>
      </div>
    </div>
    
  );
}

export default ProjectCard;
