import React from "react";
import "./styles.css";

const Homepage = () => {
  return (
    <section className="homepage">
      <div className="content-wrapper">
        <div className="text-wrapper">
          <h1 className="name">
            Chang Chieh Hsiang <br />
          </h1>
          <h1 className="about">
            Computer Engineering, NTU
            <br />
            <em>Software Engineer</em>
          </h1>
        </div>
        <img
          src={require("../images/selfie2.JPG")}
          alt="Jason"
          className="right-image"
        />
      </div>
    </section>
  );
};

export default Homepage;
