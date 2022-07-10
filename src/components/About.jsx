import React, {useState} from 'react';
import "./About.css"

function About() {
  let isAbout = true;
  const handleClick = ()=>{
   isAbout = !isAbout;
   console.log(isAbout)
   handleState();
  }
  function handleState(){
    let hobbieDiv = document.getElementById("hobbie-div");
    let aboutDiv = document.getElementById("about-div");
    let toggleButton = document.getElementById("toggle-button")
  if (isAbout){
  hobbieDiv.style.display = "none";
  aboutDiv.style.display = "flex"
  toggleButton.textContent = "Interests"
  } else{
    hobbieDiv.style.display = "flex";
    aboutDiv.style.display = "none";
    toggleButton.textContent = "About Ryan"
  }
}
  
return (
  <div id="about-wrapper">
  <button id="toggle-button" onClick={()=>handleClick()}>Interests</button>
  <div id="hobbie-div">
    <h2>Interests</h2>
    <div id="hobbie-one">
      <img src={require("./images/bread.png")}/>
      <p>Ryan is an amateur baker of sourdough bread. Though she has chosen to pursue another career, she is still baking under the alias "Sisyphus". Here is part of the elements song: There's antimony arsenic aluminum selenium and hydrogen and oxygen and nitrogen and rhemium, and........</p>
      </div>
    <div id="hobbie-two">
      
      <p>Before venturing into software development, Ryan made a her living farming in Vermont. She still gardens, and works as a "ringer" at Pitchfork farm when the workload is too heavy for the current farm crew. Nickel, neodymium, neptunium germanium and iron, americium, ruthenium, uranium...</p>
      <img src={require("./images/farm.jpeg")} />
      </div>
  </div>

  <div id="about-div">
    <h2>About Ryan</h2>
    <div>
    <img id="about-img" src={require("./images/michigan.png")}/>
    <p id="about-info">Ryan grew up on Lake Michigan near the Sleeping Bear Dunes. She she earned a bachelor's degree in philosophy, and since then she has pursued various tracks, from non-profit education and farming to serving in restaurants and making tortillas. She will now be coding, and that will be good because hey, it's not as hard on the knees. Europium, zirconium, lutetium, vanadium, lanthanum, osmium, astatine, radium, gold, protactinium, indium, gallium... and iodine and thorium and thulium and thallium</p>
    </div>
  </div>
  </div>
)
}

export default About