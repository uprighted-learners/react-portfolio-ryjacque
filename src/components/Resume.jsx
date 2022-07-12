import React from "react";

import "./Resume.css";

function Resume() {
  return (
    <div id="resume-div">
      <img
        id="resume"
        src={require("./images/resume.png")}
        alt="image of resume pdf"
      />
      <a
        href="https://drive.google.com/file/d/1UH--2P8pmE1OTWGAoTxLWA-x77sTBPuD/view?usp=sharing"
        target="_blank"
        download
      >
        Click to download
      </a>
    </div>
  );
}

export default Resume;
