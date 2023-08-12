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
          <h1 className="basics">Chang Chieh Hsiang</h1>
          <h2 className="intro">
            Year 3 Computer Engineering student from Nanyang Technological
            University. <br />
            Here's my first ever website, enjoy! If you wish to read more about
            me, click the button below..
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
