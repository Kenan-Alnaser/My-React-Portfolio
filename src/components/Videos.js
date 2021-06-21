import React from "react";

const Videos = () => {
  return (
    <React.Fragment>
      <div className="videoContainer">
        <h1>Some of my Videos:</h1>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Py60zucuIYQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/9yfbOrvEAfE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/IgYHnbtw2N4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </React.Fragment>
  );
};

export default Videos;
