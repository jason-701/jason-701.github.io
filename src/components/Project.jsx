import React from "react";
import "./project.css";

const Project = () => {
  return (
    <div className="project-main-container" id="project">
      <div className="line-container">
        <div className="project-line"></div>
        <span className="project">WORK</span>
        <div className="project-line"></div>
      </div>
      <div className="project-main-content">
        <div className="content-container">
          <div className="content-text">
            <div className="title">LLM Research Assistant</div>
            <div className="company">
              National Institute of Education, Singapore
            </div>
            <div className="date">Jan - June 2025</div>
          </div>
          <img
            className="content-img"
            src="./images/chatbot.jpg"
            alt="Continental"
          />
        </div>
        <div className="content-container">
          <div className="content-text">
            <div className="title">Embedded Software Developer (Intern)</div>
            <div className="company">Continental Automotives, Singapore</div>
            <div className="date">Jan - May 2024</div>
          </div>
          <img
            className="content-img"
            src="./images/continental.jpg"
            alt="Continental"
          />
        </div>
      </div>
      <div className="line-container">
        <div className="project-line"></div>
        <span className="project black">PROJECTS</span>
        <div className="project-line"></div>
      </div>
      <div className="project-main-content">
        <div className="one">ONE</div>
        <div className="two">TWO</div>
      </div>
    </div>
  );
};

export default Project;
