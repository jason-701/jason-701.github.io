import React, { useState, useEffect } from "react";
import "./homepage.css";
import HorizontalScroll from "./HorizontalScroll";
import Lottie from "lottie-react";
import codingAnimation from "./coding2.json";

const Homepage = () => {
  const [nameText, setNameText] = useState("");
  const [descriptionText, setDescriptionText] = useState("");
  const [showEducation, setShowEducation] = useState(false);
  const [nameComplete, setNameComplete] = useState(false);
  const [descComplete, setDescComplete] = useState(false);

  const fullName = "I'm Jason";
  const fullDescription =
    "Fresh Graduate from Nanyang Technological University\nWith a major in Computer Engineering and a specialization in Artificial Intelligence.";

  useEffect(() => {
    // Type both name and description simultaneously
    let nameIndex = 0;
    let descIndex = 0;

    const nameTimer = setInterval(() => {
      if (nameIndex <= fullName.length) {
        setNameText(fullName.slice(0, nameIndex));
        nameIndex++;
      } else {
        clearInterval(nameTimer);
        setNameComplete(true);
      }
    }, 50);

    const descTimer = setInterval(() => {
      if (descIndex <= fullDescription.length) {
        setDescriptionText(fullDescription.slice(0, descIndex));
        descIndex++;
      } else {
        clearInterval(descTimer);
        setDescComplete(true);
      }
    }, 15);

    return () => {
      clearInterval(nameTimer);
      clearInterval(descTimer);
    };
  }, []);

  // Show education when both are complete
  useEffect(() => {
    if (nameComplete && descComplete) {
      setTimeout(() => {
        setShowEducation(true);
      }, 100);
    }
  }, [nameComplete, descComplete]);

  const aboutItems = [
    {
      content: (
        <div className="horizontalscroll-container">
          <div className="horizontalscroll-title black">Overview</div>
          <div className="horizontalscroll-img">
            <img src="./images/chiayi.jpg" alt="chiayi" />
            <div className="overlay-black">Chiayi, Taiwan</div>
          </div>
          <div className="horizontalscroll-text black">
            I'm from <strong>Chiayi, Taiwan</strong> — a smaller city you might
            not have heard of, but if you know Alishan and its stunning
            sunrises, that’s right next door!
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className="horizontalscroll-container">
          <div className="horizontalscroll-title white">Education</div>
          <div className="horizontalscroll-img">
            <img src="./images/grad.jpg" alt="grad" />
            <div className="overlay-white">
              The day I'm not a student anymore
            </div>
          </div>
          <div className="horizontalscroll-text white">
            <div>
              I graduated from NTU with a{" "}
              <strong>Bachelor of Engineering (Computer Engineering)</strong>,
              earning <strong>Honours (Distinction)</strong>.
            </div>
            <br />
            <div>
              Before that, I completed the <strong>IB Diploma</strong> in
              Jakarta, Indonesia, where I scored <strong>43/45</strong>.
            </div>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div>
          <div>Expertise</div>
          <div>I am focusing on...</div>
          <div>WORK IN PROGRESS</div>
        </div>
      ),
    },
    {
      content: (
        <div>
          <div>Hobbies</div>
          <div>Outside of tech, you'll find me...</div>
          <div>WORK IN PROGRESS</div>
        </div>
      ),
    },
  ];

  return (
    <section className="home" id="homepage">
      <Lottie
        animationData={codingAnimation}
        loop={true}
        className="animation" // Tailwind for size
      />
      <div className="home-name">
        {nameText}
        {nameText !== fullName && <span className="cursor">|</span>}
      </div>
      <div className="home-description">
        {descriptionText.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            {index < descriptionText.split("\n").length - 1 && <br />}
          </span>
        ))}
        {descriptionText !== fullDescription && (
          <span className="cursor">|</span>
        )}
      </div>
      {showEducation && (
        <>
          <div className={`about-container fade-in`} id="about">
            <div className="about-line"></div>
            <span className="about">ABOUT ME</span>
            <div className="about-line"></div>
          </div>
          <HorizontalScroll items={aboutItems} />
        </>
      )}
    </section>
  );
};

export default Homepage;
