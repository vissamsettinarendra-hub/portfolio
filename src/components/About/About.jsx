import "./About.css";

import { motion } from "framer-motion";

import {
  FaUserGraduate,
  FaCode,
  FaCloud,
  FaLaptopCode,
} from "react-icons/fa";

function About() {
  return (
    <section id="about" className="about section">
      <div className="container">

        <div className="section-head">
          <span className="eyebrow">
            01 — About Me
          </span>

          <h2>
            Passionate about building scalable software and solving real-world problems.
          </h2>

          <p>
            I love transforming ideas into modern, responsive and user-friendly
            applications using the latest web technologies.
          </p>
        </div>

        <div className="about-grid">

          <motion.div
            className="about-card"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
          >

            <h3>Who Am I?</h3>

            <p>
              Hello! I'm <strong>Vissamsetti Narendra</strong>, a passionate
              Computer Science Engineering student at
              <strong> Chalapathi Institute of Technology.</strong>

              I enjoy developing responsive web applications using
              React.js, Node.js, JavaScript, Python, MongoDB and AWS Cloud.

              My goal is to become a highly skilled Full Stack Developer
              and Cloud Engineer while continuously learning modern
              technologies and building impactful software.
            </p>

            <div className="about-highlights">

              <div className="highlight">
                <FaLaptopCode />
                <span>Full Stack Developer</span>
              </div>

              <div className="highlight">
                <FaCloud />
                <span>AWS Cloud Learner</span>
              </div>

              <div className="highlight">
                <FaCode />
                <span>Problem Solver</span>
              </div>

              <div className="highlight">
                <FaUserGraduate />
                <span>B.Tech CSE Student</span>
              </div>

            </div>

            <div className="about-info">

              <div className="info-box">
                <h4>Mission</h4>

                <p>
                  Build scalable software that improves people's lives
                  through innovation and technology.
                </p>
              </div>

              <div className="info-box">
                <h4>Vision</h4>

                <p>
                  Become an experienced Software Engineer specializing
                  in Full Stack Development and Cloud Computing.
                </p>
              </div>

              <div className="info-box">
                <h4>Strengths</h4>

                <p>
                  Problem Solving • Leadership • Teamwork • Communication • Continuous Learning
                </p>
              </div>

            </div>

          </motion.div>

          <motion.div
            className="timeline"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
          >

            <h3>Learning Journey</h3>

            <div className="timeline-item">
              <span>2023</span>

              <div>
                <h4>B.Tech Journey Started</h4>

                <p>
                  Joined Chalapathi Institute of Technology in Computer Science Engineering.
                </p>
              </div>

            </div>

            <div className="timeline-item">
              <span>2024</span>

              <div>
                <h4>Programming Foundation</h4>

                <p>
                  Learned C, Java, Python, HTML, CSS and JavaScript while building mini projects.
                </p>
              </div>

            </div>

            <div className="timeline-item">
              <span>2025</span>

              <div>
                <h4>Full Stack Development</h4>

                <p>
                  Started MERN Stack development, React.js, Node.js,
                  MongoDB and AWS Cloud.
                </p>
              </div>

            </div>

            <div className="timeline-item">
              <span>2026</span>

              <div>
                <h4>Real World Projects</h4>

                <p>
                  Built CropBridge, Portfolio Website and Placement
                  Management System while preparing for placements.
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;