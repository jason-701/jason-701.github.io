import React from "react";
import "./homepage.css";

const Homepage = () => {
  return (
    <section className="homepage">
      <div className="picture-container">
        <img className="picture" src="/images/profile_nobg.png" alt="profile" />
      </div>
      <div className="content">
        <div className="content-header">ABOUT ME</div>
        <hr />
        <div className="name">Chang Chieh Hsiang</div>
        <div className="description-container">
          <div className="description">
            Computer Engineering Graduate from NTU.
          </div>
          <div className="description">I'm a Software Engineer.</div>
        </div>
        <div className="contacts">
          <a href="https://github.com/jason-701/">
            <img src="/images/githubdark.png" alt="github" />
          </a>
          <a href="https://www.instagram.com/jason.chang1/">
            <img src="/images/instagramdark.png" alt="instagram" />
          </a>
          <a href="https://www.linkedin.com/in/chieh-hsiang-chang">
            <img src="/images/linkedin.png" alt="linkedin" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
