import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useNavigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  const handleHomeClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      const homepageSection = document.getElementById("homepage");
      if (homepageSection) {
        homepageSection.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveSection("home");
      }
    }
  };

  const handleAboutClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveSection("about");
      }
    }
  };

  const handleProjectClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      const projectSection = document.getElementById("project");
      if (projectSection) {
        projectSection.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveSection("project");
      }
    }
  };

  const handleContactClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveSection("contact");
      }
    }
  };

  // Set active section to home when pathname changes
  useEffect(() => {
    if (location.pathname === "/") {
      setActiveSection("home");
    }
  }, [location.pathname]);

  // Scroll listener to update active section
  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      const homepageSection = document.getElementById("homepage");
      const aboutSection = document.getElementById("about");
      const projectSection = document.getElementById("project");
      const contactSection = document.getElementById("contact");

      if (
        !homepageSection ||
        !aboutSection ||
        !projectSection ||
        !contactSection
      )
        return;

      const scrollPosition = window.scrollY + 150;
      const homepageTop = homepageSection.offsetTop;
      const aboutTop = aboutSection.offsetTop;
      const projectTop = projectSection.offsetTop;
      const contactTop = contactSection.offsetTop;

      const isNearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

      if (isNearBottom || scrollPosition >= contactTop) {
        setActiveSection("contact");
      } else if (scrollPosition >= projectTop) {
        setActiveSection("project");
      } else if (scrollPosition >= aboutTop) {
        setActiveSection("about");
      } else if (scrollPosition >= homepageTop) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return {
    activeSection,
    setActiveSection,
    handleHomeClick,
    handleAboutClick,
    handleProjectClick,
    handleContactClick,
  };
};
