import "./Experience.css";

function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">

        <div className="section-head">
          <span className="eyebrow">04 — Experience</span>

          <h2>Experience</h2>

          <p>
            My learning journey through projects, certifications and
            practical software development.
          </p>
        </div>

        <div className="timeline">

          <div className="timeline-card">
            <span>2025 - Present</span>

            <h3>Full Stack Developer</h3>

            <h4>Personal Projects</h4>

            <p>
              Building MERN Stack applications including CropBridge,
              Placement Management System and Portfolio Website using
              React, Node.js, MongoDB and AWS.
            </p>

          </div>

          <div className="timeline-card">

            <span>2025</span>

            <h3>AWS Cloud Practitioner</h3>

            <h4>Cloud Learning</h4>

            <p>
              Gained practical knowledge of AWS services including EC2,
              IAM, S3 and Cloud fundamentals.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;