import React from 'react'
import "./Home.css"

function Home() {
  return (
<div id="home-div">
  <img id="profile-pic" src={require ("./images/profile-image.JPG")}/>
  <p id="home-p">A passionate developer looking to make a difference and/or some bread in this crazy, crazy world.</p>
</div>
  )
}

export default Home