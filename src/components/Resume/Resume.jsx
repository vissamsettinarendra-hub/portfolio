import "./Resume.css";

function Resume() {
  return (
    <section className="resume section" id="resume">

      <div className="container">

        <div className="section-head">
          <span className="eyebrow">12 — Resume</span>

          <h2>My Resume</h2>

          <p>
            View or download my latest resume.
          </p>
        </div>

        <div className="resume-container">

          <iframe
            src="/resume.pdf"
            title="Resume"
            className="resume-viewer"
          ></iframe>

          <div className="resume-buttons">

            <a
              href="/resume.pdf"
              target="_blank"
              className="btn btn-primary"
            >
              View Resume
            </a>

            <a
              href="/resume.pdf"
              download
              className="btn btn-outline"
            >
              Download Resume
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Resume;