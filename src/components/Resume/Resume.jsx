import React from "react";
import "./Resume.css";
import resume from "./assets/resume.pdf"

function Resume(props) {
  props.setIsProj(false)
  
  return (
    <div id="resume-div">
      <iframe src={resume} id='resume' />
      <a
        href="https://drive.google.com/file/d/1nPYHfrPYC_X5mxMtuNkk7ajRiERj1jNq/view?usp=sharing"
        target="_blank"
        download
      >
        Click to download
      </a>
    </div>
  );
}

export default Resume;
