import React from 'react'

import './Resume.css'

function Resume() {
  return (
      <div id="resume-div">
          <img id="resume" src={require("./images/resume.png")}/>
          <a href='https://drive.google.com/file/d/1UH--2P8pmE1OTWGAoTxLWA-x77sTBPuD/view?usp=sharing' download>Click to download</a>
    </div>
  )
}

export default Resume