import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faJsSquare } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <React.Fragment>
      <div className="mainContainer">
        <h2>
          <u>About me:</u>
          <br /> My Name is Kenan, A programmer with skills in:
          <ul>
            <li className="listPoint">Web Development: </li>
            <li>
              HTML <FontAwesomeIcon icon={faHtml5} />
            </li>
            <li>
              CSS <FontAwesomeIcon icon={faCss3Alt} />
            </li>
            <li>
              JavaScript <FontAwesomeIcon icon={faJsSquare} />
            </li>
            <li>
              React <FontAwesomeIcon icon={faReact} />
            </li>
            <li className="listPoint">Android App development 🤖 </li>
          </ul>
          I also enjoy Animations, and games. Which is why I also have a YouTube
          channel.
        </h2>
      </div>
    </React.Fragment>
  );
};

export default Home;
