import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <React.Fragment>
      <div className="contactContainer">
        <h2>
          Contact Me:
          <br />
          <a
            href="https://www.linkedin.com/in/kenan-alnaser/"
            className="contactBtn"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="contactBtn linkedin"
            />
          </a>
          <a href="https://github.com/Kenan-Alnaser" className="contactBtn">
            <FontAwesomeIcon icon={faGithub} className="contactBtn github" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCPSKMkfLmi16mXfVyQnOLvA"
            className="contactBtn"
          >
            <FontAwesomeIcon icon={faYoutube} className="contactBtn youtube" />
          </a>
          <a
            href="https://www.facebook.com/VorAnsirtGaming"
            className="contactBtn"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="contactBtn facebook"
            />
          </a>
        </h2>
      </div>
    </React.Fragment>
  );
};

export default Contact;
