import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Resume.css"; // Import external CSS file

const Resume = () => {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="social-container">
          <section className="social-links">
            <a className="social-btn" href="#!">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a className="social-btn" href="#!">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a className="social-btn" href="#!">
              <FontAwesomeIcon icon={faGoogle} />
            </a>
            <a className="social-btn" href="#!">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a className="social-btn" href="#!">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a className="social-btn" href="#!">
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
