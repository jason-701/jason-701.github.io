import React, { useEffect, useState } from "react";
import "./styles.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const sectionIds = ["home", "about", "project", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset + window.innerHeight / 2;
      let currentSection = "home";

      sectionIds.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section && currentPosition >= section.offsetTop) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (section, event) => {
    event.preventDefault();

    const element = document.getElementById(section);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });

      // Update the active section after the scrolling animation finishes
      const scrollTimeout = setTimeout(() => {
        setActiveSection(section);
        clearTimeout(scrollTimeout);
      }, 1000); // Adjust the timeout value as needed
    }
  };

  return (
    <nav className="navbar">
      <ul>
        {sectionIds.map((sectionId) => (
          <li
            key={sectionId}
            className={activeSection === sectionId ? "active" : ""}
          >
            <a
              href={`#${sectionId}`}
              onClick={(e) => handleClick(sectionId, e)}
            >
              {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
