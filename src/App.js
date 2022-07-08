import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact'
import Projects from './components/Projects'

import './App.css';

function App() {
  return (
    <Router>
    <div className="page-wrapper">
    <nav className="nav-bar">
      <Link to="/">HOME</Link>
      <Link to="/about">ABOUT</Link>
      </nav>
    <div className="content-wrapper">
    <div className="header"><h1>Ryan J Collins</h1><h2>Software Development Portfolio</h2></div>
  
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
    

    <footer><Link to="/contact">Contact</Link><div>LinkedIn I guess</div></footer>
    </div>  
    <div id="project-div">
      <Link  to="/projects"><h1>PROJECTS</h1></Link>
      </div>
    </div>
    </Router>
  );
}

export default App;
