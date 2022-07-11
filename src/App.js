import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

import "./App.css";

function App() {
  function handleLink() {
    document.getElementById("project-div").style.display = "block";
    document.querySelector(".header").style.display = "block";
    document.getElementById("project-header").style.display = "none";
  }
  //ensure that the projects nav shows up on every page except projects

  return (
    <Router>
      <div className="page-wrapper">
        <nav className="nav-bar">
          <Link id="home-wrapper" to="/" onClick={() => handleLink()}>
            <img
              id="home-link"
              src={require("./components/images/home-link.png")}
              alt="image text reads 'RYAN J COLLINS"
            />
          </Link>
          <Link to="/about" onClick={() => handleLink()}>
            ABOUT
          </Link>
        </nav>
        <div className="content-wrapper">
          <div className="header">
            <h1>Software Development Portfolio</h1>
          </div>
          <div id="project-header">
            <h3>PROJECTS</h3>
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/resume" element={<Resume />}></Route>
          </Routes>

          <footer>
            <Link to="/contact" onClick={() => handleLink()}>
              CONTACT
            </Link>
            <Link to="/resume" onClick={() => handleLink()}>
              RESUME
            </Link>
          </footer>
        </div>
        <div id="project-div">
          <Link
            to="/projects"
            onClick={() => {
              document.getElementById("project-div").style.display = "none";
              document.querySelector(".header").style.display = "none";
              document.getElementById("project-header").style.display = "block";
            }}
            // get rid of projects nav and header on projects page; add project header
          >
            <h1>PROJECTS</h1>
          </Link>
        </div>
      </div>
    </Router>
  );
}

export default App;
