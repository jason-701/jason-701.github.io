import React, { useState, useEffect } from "react";
import "./homepage.css";

const Homepage = () => {
  const [nameText, setNameText] = useState("");
  const [descriptionText, setDescriptionText] = useState("");
  const [showEducation, setShowEducation] = useState(false);
  const [nameComplete, setNameComplete] = useState(false);
  const [descComplete, setDescComplete] = useState(false);

  const fullName = "I'm Jason";
  const fullDescription =
    "Fresh Graduate from Nanyang Technological University.\nI major in Computer Engineering with a specialization in Artificial Intelligence.";

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
    }, 5);

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

  return (
    <section className="home">
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
        <div className={`education-container fade-in`} id="education">
          <span className="education">EDUCATION</span>
          <div className="education-line"></div>
        </div>
      )}
    </section>
  );
};

export default Homepage;
