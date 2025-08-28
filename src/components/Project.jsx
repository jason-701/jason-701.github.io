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
        <div className="content-container white">
          <div className="content-text">
            <div className="title">LLM Research Assistant</div>
            <div className="company">
              National Institute of Education, Singapore
            </div>
            <div className="date">Jan - June 2025</div>
            <div className="description">
              <div>
                Created an AI-powered coding assistant that helps students with
                programming while adapting to their emotions in real time,
                offering supportive and personalized guidance.
              </div>
              <div>
                A combination of advanced language models with an intelligent
                knowledge base to provide accurate answers quickly and
                efficiently.
              </div>
            </div>
            <div className="skills-container">
              <div className="skills">Python</div>
              <div className="skills">Prompt Engineering</div>
              <div className="skills">RAG</div>
            </div>
          </div>
          <img
            className="content-img"
            src="./images/chatbot.jpg"
            alt="chatbot"
          />
        </div>
        <div className="content-container black">
          <img
            className="content-img"
            src="./images/continental2.jpg"
            alt="Continental"
          />
          <div className="content-text">
            <div className="title">Embedded Software Developer (Intern)</div>
            <div className="company">Continental Automotives, Singapore</div>
            <div className="date">Jan - May 2024</div>
            <div className="description">
              <div>
                Developed a secure Firmware-Over-The-Air (FOTA) system,
                establishing a reliable pipeline between a cloud server and
                Raspberry Pi for safe software updates.
              </div>
              <div>
                Improved the user interface of a live hot-patching demonstrator,
                enabling smoother real-time updates and clearer visualizations
                of system behavior.
              </div>
            </div>
            <div className="skills-container">
              <div className="skills">Python</div>
              <div className="skills">PyQt</div>
              <div className="skills">C++</div>
              <div className="skills">Raspberry Pi</div>
              <div className="skills">Linux</div>
            </div>
          </div>
        </div>
      </div>
      <div className="line-container">
        <div className="project-line"></div>
        <span className="project">PROJECTS</span>
        <div className="project-line"></div>
      </div>
      <div className="project-main-content">
        <div className="content-container white">
          <div className="content-text">
            <div className="title">
              FYP - Error Correction Using Autoencoders
            </div>
            <div className="company">
              Nanyang Technological University, Singapore
            </div>
            <div className="description">
              <div>
                Developed a neural network model that improved stock price
                prediction accuracy by over 22% through error correction with
                autoencoders.
              </div>
              <div>
                Designed and tested multiple correction strategies, including
                one that uses feature importance to dynamically adjust inputs,
                leading to more stable forecasts.
              </div>
            </div>
            <div className="skills-container">
              <div className="skills">Python</div>
              <div className="skills">PyTorch</div>
              <div className="skills">Neural Networks</div>
            </div>
          </div>
          <img className="content-img" src="./images/fyp.png" alt="FYP" />
        </div>
        <div className="content-container black">
          <img className="content-img" src="./images/mdp.jpg" alt="MDP" />
          <div className="content-text">
            <div className="title">
              Multidisciplinary Design Project - Autonomous Robot Car
            </div>
            <div className="company">
              Nanyang Technological University, Singapore
            </div>
            <div className="description">
              <div>
                An autonomous robot car built on an STM32 microcontroller
                running FreeRTOS, with the ultimate goal of self-navigating
                around a 2m x 2m maze while capturing images of obstacles.
              </div>
              <div>
                The project was part of a team-based competition.
                <br />
                Final placement: <strong>Top 10</strong>
              </div>
            </div>
            <div className="skills-container">
              <div className="skills">STM32</div>
              <div className="skills">FreeRTOS</div>
              <div className="skills">C</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
