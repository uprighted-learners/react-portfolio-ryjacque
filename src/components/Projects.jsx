import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div id="projects-content">
      <figure>
        <figcaption>
          <a
            href="https://github.com/burlingtoncodeacademy-students/jeopardy-board-ryjacque.git"
            target="_blank"
          >
            Jeopardy Game
          </a>
        </figcaption>
        <video controls="controls">
          <source
            src={require("./Jeopardy.mov")}
            title="video demonstration of Jeopardy Project"
          />
        </video>
      </figure>
      <figure>
        <figcaption>
          <a
            href="https://github.com/burlingtoncodeacademy-students/zorkington-ryjacque-1.git"
            target="_blank"
          >
            Zorkington
          </a>
        </figcaption>
        <video controls="controls">
          <source
            src={require("./zorkington.mov")}
            title="video demonstration of Zorkington project"
          />
        </video>
      </figure>

      <figure></figure>
      <figcaption>
        <a
          href="https://github.com/burlingtoncodeacademy-students/guess-the-number-ryjacque-1.git"
          target="_blank"
        >
          Guess The Number
        </a>
      </figcaption>
      <figure>
        <video controls="controls">
          <source
            src={require("./guess-the-number.mov")}
            title="video demonstration of Guess-the-Number project"
          />
        </video>
      </figure>
      <figure>
        <figcaption>
          <a
            href="https://github.com/burlingtoncodeacademy-students/react-portfolio-ryjacque.git"
            target="_blank"
          >
            React Portfolio
          </a>
        </figcaption>
        <img
          id="portfolio-img"
          src={require("./images/react-portfolio.png")}
          alt="Screenshot of React Portfolio project"
        />
      </figure>
    </div>
  );
}

export default Projects;
