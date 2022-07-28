import React, {useState} from "react";
import "./Home.css";
import profileImage from "./assets/profile-image.JPG"

function Home(props) {
  props.setIsProj(false)
  return (
    <div id="home-div">
      <img id="profile-pic" src={profileImage} alt="profile image of Ryan Collins" />
      <p id="home-p">
        Full-stack software developer seeking engagement and excitement in this crazy tech world.
      </p>
    </div>
  );
}

export default Home;
