import React from 'react'

import './Resume.css'

function Resume() {
  return (
      <div id="resume-div">
          <img id="resume" src={require("./images/resume.jpg")}/>
          <a href='https://drive.google.com/file/d/1J7AzASU9ZqIvXS8g7e3K8Gz8V8eRtSLP/view?usp=sharing' download>Click to download</a>
    </div>
  )
}

export default Resume