import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div id="contact-div">
      <h3>Contact Me:</h3>
      <h3>
        Send me an{" "}
        <a id="email" href="mailto: 09rcollins@gmail.com">
          email
        </a>
        ,{" "}
      </h3>
      <h3>
        Or give me a{" "}
        <a id="tel" href="tel:8026243417">
          call
        </a>
      </h3>
    </div>
  );
}

export default Contact;
