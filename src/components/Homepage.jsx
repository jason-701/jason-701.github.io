import React from "react";
import "./styles.css";

const Homepage = () => {
  const handleLearnMoreClick = () => {
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="homepage">
      <div class="content-wrapper">
        <div class="text-wrapper">
          <h1 className="basics">
            Chang Chieh Hsiang, Y3 Computer Engineering, NTU
          </h1>
          <h2 className="intro">
            PLACEHOLDER PLACEHOLDER PLACEHOLDER PLACEHOLDER PLACEHOLDER
            PLACEHOLDER PLACEHOLDER PLACEHOLDER PLACEHOLDER PLACEHOLDER
            PLACEHOLDER PLACEHOLDER PLACEHOLDER
          </h2>
          <button className="learn-more-btn" onClick={handleLearnMoreClick}>
            Learn More
          </button>
        </div>
        <img
          src={require("../images/selfie.PNG")}
          alt="doge"
          class="right-image"
        />
      </div>
    </section>
  );
};

export default Homepage;
