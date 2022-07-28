import React, {useState, useEffect} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import homeLinkImg from "./assets/home-link.png"

import "./App.css";

function App() {
  const [mainDisplayClass, setMainDisplayClass] = useState('show')
  const [projDisplayClass, setProjDisplayClass] = useState('hide')
  const [isProj, setIsProj] = useState(false)

  useEffect(()=>{
    if (!isProj){
      setMainDisplayClass('show')
      setProjDisplayClass('hide')
    } else {
      setMainDisplayClass('hide')
      setProjDisplayClass('show')
    }

  }, [isProj])
  //ensure that the projects nav shows up on every page except projects

  return (
    <Router>
      <div className="page-wrapper">
        <nav className="nav-bar">
          <Link id="home-wrapper" to="/" >
            <img
              id="home-link"
              src={homeLinkImg}
              alt="text reads 'RYAN J COLLINS`"
            />
          </Link>
          <Link to="/about" >
            ABOUT
          </Link>
        </nav>
        <div className="content-wrapper">
          <div className={mainDisplayClass}>
            <h1>Software Development Portfolio</h1>
          </div>
          <div className={projDisplayClass} id="project-header">
            <h3 >PROJECTS</h3>
          </div>

          <Routes>
            <Route path="/" element={<Home setIsProj={setIsProj}/>} />
            <Route path="/about" element={<About  setIsProj={setIsProj}/>} />
            <Route path="/contact" element={<Contact setIsProj={setIsProj}/>} />
            <Route path="/projects" element={<Projects setIsProj={setIsProj} />}></Route>
            <Route path="/resume" element={<Resume setIsProj={setIsProj}/>}></Route>
          </Routes>

          <footer>
            <Link to="/contact" >
              CONTACT
            </Link>
            <Link to="/resume" >
              RESUME
            </Link>
          </footer>
        </div>
        <div id="project-div" >
          <Link className={mainDisplayClass}
            to="/projects"
            onClick={() => {
              setMainDisplayClass('hide')
              setProjDisplayClass('show')
            // get rid of projects nav and header on projects page; add project header
            }} >
            <h1>PROJECTS</h1>
          </Link>
          </div>
        </div>
    </Router>
  );
}

export default App;
