import React, { useState } from "react";
import ProjectCard from "../ProjectCard";
import portfolios from "../../portfolios.json";

function Portfolio(props) {
  const [portfolioList, setPortfolioList] = useState(portfolios);

  return (
    <div className="wrapper">
      {props.childern}
      <h1 className="title">Portfolio List</h1>
      {/* Map through 'portfolioList' and render a 'ProjectCard' for each portfolio */}
      {portfolioList.map((portfolio) => (
        <ProjectCard
          id={portfolio.id}
          key={portfolio.id}
          name={portfolio.name}
          image={portfolio.image}
          description={portfolio.description}
          github={portfolio.github}
          deployed={portfolio.deployed}
        />
      ))}
      {/* <ProjectCard/> */}
    </div>
  );
}

export default Portfolio;
