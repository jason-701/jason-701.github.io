import React from "react";
import "./contact.css";
import { FaPhoneAlt, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="contact">
      <div className="content">
        <div className="content-header-container">
          <div>Contact</div>
          <hr />
        </div>
        <div className="description-container">
          <div className="contact-description">
            <FaPhoneAlt />
            <div>+65 8884 8675</div>
          </div>
          <div className="contact-description">
            <MdEmail />
            <div> jason.chang0701@gmail.com</div>
          </div>
          <div className="contact-description">
            <FaLocationDot />
            <div> Singapore</div>
          </div>
        </div>
        <div className="contacts">
          <a
            className="icon"
            href="https://github.com/jason-701/"
            target="_blank"
          >
            <FaGithub size={30} />
          </a>
          <a
            className="icon"
            href="https://www.instagram.com/jason.chang1/"
            target="_blank"
          >
            <FaInstagram size={30} />
          </a>
          <a
            className="icon"
            href="https://www.linkedin.com/in/chieh-hsiang-chang"
            target="_blank"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
