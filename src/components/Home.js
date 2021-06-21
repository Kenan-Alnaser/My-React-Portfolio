import React from "react";

const Home = () => {
  return (
    <React.Fragment>
      <div className="mainContainer">
        <h2>
          <u>About me:</u>
          <br /> My Name is Kenan, A programmer with skills in:
          <ul>
            <li className="listPoint">Web Development: </li>
            <li>HTML ✔️</li>
            <li>CSS ✔️</li>
            <li>JavaScript ✔️</li>
            <li>React ✔️</li>
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
