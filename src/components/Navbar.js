import React, { useEffect } from "react";
import "./styles.css";

const Navbar = () => {
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

      // You can perform any desired action with the current active section here
      console.log("Active Section:", currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleClick = (section, event) => {
    event.preventDefault();

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
        {sectionIds.map((sectionId) => (
          <li key={sectionId}>
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
