import React, { useState, useEffect } from "react";
import "./About.css";
import breadImage from "./assets/bread.png";
import farmImage from "./assets/farm.jpeg";
import duneImage from "./assets/michigan.png";

function About(props) {
  props.setIsProj(false)
  const [hobbieDisplayClass, setHobbieDisplayClass] = useState("no-display");
  const [aboutDisplayClass, setAboutDisplayClass] = useState("yes-display");
  const [toggleText, setToggleText] = useState("Interests");
  const [isAbout, setIsAbout] = useState(true);
useEffect(()=>
{
  if (isAbout) {
    setHobbieDisplayClass("no-display");
    setAboutDisplayClass("yes-display");
    setToggleText("Interests");
  } else {
    setHobbieDisplayClass("yes-display");
    setAboutDisplayClass("no-display");
    setToggleText("About");
  }
},
[isAbout])
  

  return (
    <div id="about-wrapper">
      <button id="toggle-button" onClick={() => {
    isAbout ? setIsAbout(false) : setIsAbout(true);
  }}>
        {toggleText}
      </button>
      {/* toggle between "About" and "Interests" */}
      <div id="hobbie-div" className={hobbieDisplayClass}>
        <h2>Interests</h2>
        <div className="hobbie">
          <img src={breadImage} alt="two loaves of bread" />
          <p>
            Ryan is an amateur baker of sourdough bread. Though she has chosen
            to pursue another career, she is still baking under the alias
            "Sisyphus". Here is part of the elements song: There's antimony
            arsenic aluminum selenium and hydrogen and oxygen and nitrogen and
            rhemium, and........
          </p>
        </div>
        <div className="hobbie">
          <p>
            Before venturing into software development, Ryan made a her living
            farming in Vermont. She still gardens, and works as a "ringer" at
            Pitchfork farm when the workload is too heavy for the current farm
            crew. Nickel, neodymium, neptunium germanium and iron, americium,
            ruthenium, uranium...
          </p>
          <img src={farmImage} alt="radish harvest" />
        </div>
      </div>

      <div id="about-div" className={aboutDisplayClass}>
        <h2>About Ryan</h2>
        <div>
          <img
            id="about-img"
            src={duneImage}
            alt="Sleeping Bear Dunes near Traverse City, MI"
          />
          <p id="about-info">
            Ryan grew up on Lake Michigan near the Sleeping Bear Dunes. She
            earned a bachelor's degree in philosophy, and since then she has
            pursued various tracks, from non-profit education and farming to
            serving in restaurants and making tortillas. She will now be coding,
            and that will be good because hey, it's not as hard on the knees.
            Europium, zirconium, lutetium, vanadium, lanthanum, osmium,
            astatine, radium, gold, protactinium, indium, gallium... and iodine
            and thorium and thulium and thallium
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
