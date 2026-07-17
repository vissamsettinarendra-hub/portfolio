import "./About.css";

function About() {
  return (
    <section id="about" className="about section">
      <div className="container">

        {/* Section Heading */}
        <div className="section-head">
          <span className="eyebrow">01 — About Me</span>

          <h2>Building scalable applications with modern technologies.</h2>

          <p>
            Passionate about Full Stack Development, Cloud Computing and
            solving real-world problems through innovative software solutions.
          </p>
        </div>

        <div className="about-grid">

          {/* Left Side */}
          <div className="about-card">

            <h3>Who Am I?</h3>

            <p>
              Hello! I'm <strong>Vissamsetti Narendra</strong>, a Final Year
              B.Tech Computer Science Engineering student at
              <strong> Chalapathi Institute of Technology.</strong>

              I enjoy designing and developing responsive web applications
              using Java, Python, React, JavaScript, SQL and AWS Cloud.

              My goal is to become a successful Full Stack Developer and
              Cloud Engineer by building impactful software that solves
              real-world problems.
            </p>

            <div className="about-info">

              <div className="info-box">
                <h4>Mission</h4>
                <p>
                  Build reliable software that improves people's everyday
                  lives.
                </p>
              </div>

              <div className="info-box">
                <h4>Vision</h4>
                <p>
                  Become a highly skilled Software Engineer specializing
                  in Full Stack Development and Cloud Technologies.
                </p>
              </div>

              <div className="info-box">
                <h4>Strengths</h4>
                <p>
                  Problem Solving • Teamwork • Leadership • Communication •
                  Continuous Learning
                </p>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="timeline">

            <h3>Learning Journey</h3>

            <div className="timeline-item">
              <span>2023</span>

              <div>
                <h4>Started B.Tech</h4>

                <p>
                  Joined Chalapathi Institute of Technology in Computer
                  Science Engineering.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <span>2024</span>

              <div>
                <h4>Programming Journey</h4>

                <p>
                  Learned Java, Python, HTML, CSS and JavaScript while
                  developing academic and personal projects.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <span>2025</span>

              <div>
                <h4>Full Stack Development</h4>

                <p>
                  Worked on MERN Stack applications and AWS Cloud while
                  building real-world projects.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <span>2026</span>

              <div>
                <h4>Major Projects</h4>

                <p>
                  Developing CropBridge, Portfolio Website and Placement
                  Management System while preparing for placements.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;