import React, { useState, useEffect, useRef } from "react";
import "./homepage.css";
import HorizontalScroll from "./HorizontalScroll";
import Lottie from "lottie-react";
import codingAnimation from "./coding2.json";
import Project from "./Project";

const Homepage = () => {
  const [nameText, setNameText] = useState("");
  const [descriptionText, setDescriptionText] = useState("");
  const [showEducation, setShowEducation] = useState(false);
  const [nameComplete, setNameComplete] = useState(false);
  const [descComplete, setDescComplete] = useState(false);
  const [showProject, setShowProject] = useState(false);

  const projectRef = useRef(null);

  const fullName = "I'm Jason.";
  const fullDescription =
    // "Fresh Graduate from Nanyang Technological University\nWith a major in Computer Engineering and a specialization in Artificial Intelligence.";
    "Fresh Graduate from Nanyang Technological University\nMajor in Computer Engineering\nSpecialization in Artificial Intelligence.";

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

  useEffect(() => {
    // Only set up observer after showEducation is true and projectRef exists
    if (!showEducation || !projectRef.current) return;

    // Capture the current ref value in a variable
    const currentRef = projectRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setShowProject(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "100px 0px 0px 0px", // Optional: trigger early
      }
    );

    observer.observe(currentRef);

    return () => {
      // Use the captured variable instead of projectRef.current
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [showEducation]);

  // Scroll to the top when page refreshes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const aboutItems = [
    {
      content: (
        <div className="horizontalscroll-container">
          <div className="horizontalscroll-img">
            <img src="./images/chiayi.jpg" alt="chiayi" />
            {/* <div className="overlay">Chiayi, Taiwan</div> */}
          </div>
          <div className="horizontalscroll-title">Overview</div>
          <div className="horizontalscroll-text">
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
          <div className="horizontalscroll-img">
            <img src="./images/grad.jpg" alt="grad" />
            {/* <div className="overlay">The day I'm not a student anymore</div> */}
          </div>
          <div className="horizontalscroll-title">Education</div>
          <div className="horizontalscroll-text">
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
        <div className="horizontalscroll-container">
          <div className="horizontalscroll-img">
            <img src="./images/embedded-and-ai.png" alt="Embedded and AI" />
            {/* <div className="overlay">
              <div className="overlay-row">
                <div className="overlay-1"> Artificial Intelligence</div>
                <div className="overlay-2">Car with microcontroller</div>
              </div>
            </div> */}
          </div>
          <div className="horizontalscroll-title">Expertise</div>
          <div className="horizontalscroll-text">
            I work with <strong>AI</strong>, especially{" "}
            <strong>neural networks, LLMs, and model fine-tuning</strong>. I
            also have experience in <strong>embedded systems</strong>, building
            things that connect hardware and software in practical ways.
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className="horizontalscroll-container">
          <div className="horizontalscroll-img">
            <img src="./images/photography.png" alt="my photos" />
            {/* <div className="overlay">My favorite sport!!</div> */}
          </div>
          <div className="horizontalscroll-title">Photography</div>
          <div className="horizontalscroll-text">
            <div>
              After finding an ancient DSLR in my grandparent's house, I fell
              down the rabbit hole of photography. Here's some of my favorite
              shots from 2025.
            </div>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className="horizontalscroll-container">
          <div className="horizontalscroll-img">
            <img
              src="./images/badminton.jpg"
              className="img-fill"
              alt="badminton"
            />
            {/* <div className="overlay">My favorite sport!!</div> */}
          </div>
          <div className="horizontalscroll-title">Badminton</div>
          <div className="horizontalscroll-text">
            <div>
              When I'm not doing tech stuff, I'm chasing shuttles on court. And
              when I'm not, I'm probably watching someone else do it better.
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="home" id="homepage">
      <Lottie
        animationData={codingAnimation}
        loop={true}
        className="animation"
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
      <div
        className={`about-container ${
          showEducation ? "fade-in" : "fade-hidden"
        }`}
        id="about"
      >
        <div className="about-line"></div>
        <span className="about">ABOUT ME</span>
        <div className="about-line"></div>
      </div>

      <div className={showEducation ? "fade-in" : "fade-hidden"}>
        <div className="horizontalscroll-wrapping-container">
          <HorizontalScroll items={aboutItems} />
        </div>
      </div>

      <div
        ref={projectRef}
        id="project"
        className="project-background" // Always visible background
      >
        <div
          className={`project-content ${
            showProject ? "fade-in" : "fade-hidden"
          }`}
        >
          <Project />
        </div>
      </div>
    </section>
  );
};

export default Homepage;
