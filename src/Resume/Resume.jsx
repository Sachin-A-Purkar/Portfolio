import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle, faInstagram, faLinkedin, faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./Resume.css"; // Import external CSS file

const Resume = () => {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="social-container">
          <section className="social-links">
            <a className="social-btn" href="https://www.facebook.com/share/1BaWxoBf95/">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a className="social-btn" href="mailto:sachinpurkar0001@gmail.com">
              <FontAwesomeIcon icon={faGoogle} />
            </a>
            <a className="social-btn" href="https://wa.me/9021551522">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a className="social-btn" href="https://www.instagram.com/sachin_.96k._?utm_source=qr">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a className="social-btn" href="https://www.linkedin.com/in/sachin-purkar-131566289/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a className="social-btn" href="https://github.com/Sachin-A-Purkar">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </section>
        </div>

        <div className="copyright">
          © {new Date().getFullYear()} Copyright:{" "}
        </div>
      </footer>
    </div>
  );
};

export default Resume;
