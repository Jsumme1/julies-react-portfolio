import React, { useState } from "react";
import ProjectCard from "../ProjectCard";
import Wrapper from "../Wrapper";

  const portfolios = [
    {
      id: 1,
      name: "Barge Nomination CCI",
      description:
        "A functional web app that allows multiple users to enter nominations into a terminal interface",
      image:
        "https://github.com/Jsumme1/julies-react-portfolio/blob/main/src/assets/images/1.JPG?raw=true",
      github: "https://github.com/Jsumme1/barge-nomination",
      deployed: "https://barge-nomination-cci.herokuapp.com",
    },
    {
      id: 2,
      name: "Texas Stargazing",
      description:
        "A functional web app that allows users to find information on Dark Sky Parks in Texas and retrieve the current moonphase",
      image:
        "https://github.com/Jsumme1/julies-react-portfolio/blob/main/src/assets/images/2.JPG?raw=true",
      github: "https://github.com/rprice000/texas-stargazing",
      deployed: "https://rprice000.github.io/texas-stargazing/",
    },
    {
      id: 3,
      name: "You Can Blog It",
      description:
        "A functional web app that allows users to create and comment on blog posts",
      image:
        "https://github.com/Jsumme1/julies-react-portfolio/blob/main/src/assets/images/3.JPG?raw=true",
      github: "https://github.com/Jsumme1/you-can-blogit",
      deployed: "https://you-can-blogit.herokuapp.com/",
    },
    {
      id: 4,
      name: "Note Taker",
      description: "A functional web app that allows a to enter and edit notes",
      image:
        "https://github.com/Jsumme1/julies-react-portfolio/blob/main/src/assets/images/4.JPG?raw=true",
      github: "https://github.com/Jsumme1/Note-Taker",
      deployed: "https://warm-sands-24704.herokuapp.com/",
    },
    {
      id: 5,
      name: "Budget Fun",
      description:
        "A functional web app that allows a user to keep track of financial transactions even when on unstable network connections",
      image:
        "https://github.com/Jsumme1/julies-react-portfolio/blob/main/src/assets/images/5.JPG?raw=true",
      github: "https://github.com/Jsumme1/budget-fun",
      deployed: "https://shielded-spire-62008.herokuapp.com/",
    },
    {
      id: 6,
      name: "Random Password Generator",
      description:
        "A website that allows the user to enter desired options (symbols, numbers, letters, etc) to generate a random password using JavaScript",
      image:
        "https://github.com/Jsumme1/julies-react-portfolio/blob/main/src/assets/images/6.JPG?raw=true",
      github: "https://github.com/Jsumme1/Random-Password-Generator",
      deployed: "https://jsumme1.github.io/Random-Password-Generator/",
    },
  ];



function Portfolio(props) {
  const [portfolioList, setPortfolioList] = useState(portfolios);


  return (
    <Wrapper>
      <div className="wrapper">
        {props.childern}
        {/* Map through 'portfolioList' and render a 'ProjectCard' for each project */}
        {portfolioList.map((project) => (
          <ProjectCard
            id={project.id}
            key={project.id}
            name={project.name}
            image={project.image}
            description={project.description}
            github={project.github}
            deployed={project.deployed}
          />
        ))}
        {/* <ProjectCard/> */}
      </div>
    </Wrapper>
  );
}

export default Portfolio;
