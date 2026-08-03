import "./Footer.css";

import {
  FaGithub,
  FaLinkedin,
  FaArrowUp,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-container">

        <h3>
          Vissamsetti <span>Narendra</span>
        </h3>

        <p>
          Full Stack Developer • React.js • Node.js • MongoDB • AWS Cloud
        </p>

        <div className="footer-social">

          <a
            href="https://github.com/vissamsettinarendra-hub"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/visssamsettinarendra"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:vissamsettinarendra@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>

        </div>

        <a
          href="#home"
          className="back-top"
          aria-label="Back To Top"
        >
          <FaArrowUp />
        </a>

        <div className="copyright">
          © {new Date().getFullYear()} Vissamsetti Narendra. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
}

export default Footer;