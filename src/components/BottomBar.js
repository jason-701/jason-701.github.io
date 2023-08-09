import React from "react";
import "./styles.css";

const BottomBar = () => {
  return (
    <div className="sideBar">
      <a
        href="https://sg.linkedin.com/in/chieh-hsiang-chang-b080ab250"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={require("../images/linkedin.png")}
          alt="linkedin"
          className="logo"
        />
      </a>
      <a href="https://github.com/jason-701/" target="_blank" rel="noreferrer">
        <img
          src={require("../images/githubdark.png")}
          alt="github"
          className="logo"
        />
      </a>
      <a
        href="https://www.instagram.com/jason.chang1/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={require("../images/instagramgradient.png")}
          alt="Logo 3"
          className="logo"
        />
      </a>
    </div>
  );
};

export default BottomBar;
