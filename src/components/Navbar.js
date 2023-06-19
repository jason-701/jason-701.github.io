import React, { useEffect, useState } from "react";
import "./styles.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      const aboutSection = document.getElementById("about");
      const portfolioSection = document.getElementById("project");
      const contactSection = document.getElementById("contact");
      const sections = [
        homeSection,
        aboutSection,
        portfolioSection,
        contactSection,
      ];

      const currentPosition = window.pageYOffset + window.innerHeight / 2;
      let currentSection = "home";

      sections.forEach((section) => {
        if (section && currentPosition >= section.offsetTop) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (section) => {
    setActiveSection(section);

    const element = document.getElementById(section);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="navbar">
      <ul>
        <li className={activeSection === "home" ? "active" : ""}>
          <button onClick={() => handleClick("home")}>Home</button>
        </li>
        <li className={activeSection === "about" ? "active" : ""}>
          <button onClick={() => handleClick("about")}>About</button>
        </li>
        <li className={activeSection === "project" ? "active" : ""}>
          <button onClick={() => handleClick("project")}>Projects</button>
        </li>
        <li className={activeSection === "contact" ? "active" : ""}>
          <button onClick={() => handleClick("contact")}>Contact</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
