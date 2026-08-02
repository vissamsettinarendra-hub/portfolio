import "./Hero.css";

import profile from "../../assets/images/profile/narendra.jpeg";

import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaArrowRight,
  FaDownload,
  FaReact,
  FaJava,
  FaPython,
  FaAws,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";

import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="container hero-grid">

        {/* Left Side */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="chip">
            <span className="dot"></span>
            Available for New Opportunities
          </div>

          <h1 className="hero-title">
            <span className="line">
              Hi, I'm{" "}
              <span className="grad">
                Vissamsetti Narendra
              </span>
            </span>

            <span className="line">
              A{" "}
              <span className="typed">
                Full Stack Developer
              </span>
            </span>
          </h1>

          <p className="hero-sub">
            Passionate Full Stack Developer skilled in React.js,
            Node.js, JavaScript, Python, MongoDB and AWS Cloud.
            I enjoy building modern, responsive and scalable web
            applications while continuously learning new
            technologies and solving real-world problems.
          </p>

          {/* Tech Stack */}
          <div className="hero-tech">
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
            <span>AWS</span>
            <span>Python</span>
          </div>

          {/* Buttons */}
          <div className="hero-buttons">

            <a href="#projects" className="btn btn-primary">
              <span>View Projects</span>
              <FaArrowRight />
            </a>

            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download="Vissamsetti-Narendra-Resume.pdf"
              className="btn btn-outline"
            >
              <FaDownload />
              <span>Download Resume</span>
            </a>

            <a href="#contact" className="btn btn-ghost">
              <FaEnvelope />
              <span>Contact Me</span>
            </a>

          </div>

          {/* Social Links */}
          <div className="hero-socials">

            <a
              href="https://github.com/vissamsettinarendra-hub"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/visssamsettinarendra"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>

            <a href="mailto:vissamsettinarendra@gmail.com">
              <FaEnvelope />
            </a>

          </div>

          {/* Stats */}
          <div className="hero-stats">

            <div>
              <h3>3+</h3>
              <p>Projects</p>
            </div>

            <div>
              <h3>2+</h3>
              <p>Certifications</p>
            </div>

            <div>
              <h3>8.31</h3>
              <p>CGPA</p>
            </div>

          </div>

        </motion.div>

        {/* Right Side */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="avatar-ring">

            <div className="profile-container">
              <img
                src={profile}
                alt="Vissamsetti Narendra"
                className="profile-image"
              />
            </div>

            <FaReact className="float-icon fi-1" />
            <FaJava className="float-icon fi-2" />
            <FaPython className="float-icon fi-3" />
            <FaAws className="float-icon fi-4" />
            <FaNodeJs className="float-icon fi-5" />
            <FaDatabase className="float-icon fi-6" />

          </div>
        </motion.div>

      </div>

      <a href="#about" className="scroll-hint">
        <span></span>
      </a>
    </section>
  );
}

export default Hero;