import "./Education.css";

function Education() {
  return (
    <section className="education section" id="education">

      <div className="container">

        <div className="section-head">

          <span className="eyebrow">
            05 — Education
          </span>

          <h2>Education</h2>

          <p>
            My academic journey that built my technical foundation and
            prepared me for a career in software development.
          </p>

        </div>

        <div className="education-grid">

          {/* B.Tech */}

          <div className="education-card">

            <span className="edu-year">
              2023 - Present
            </span>

            <h3>
              Bachelor of Technology
            </h3>

            <h4>
              Computer Science & Engineering
            </h4>

            <p>
              <strong>Chalapathi Institute of Technology</strong>
            </p>

            <p>
              Currently Pursuing Final Year B.Tech
            </p>

            <p>
              <strong>CGPA:</strong> 8.31 / 10
            </p>

          </div>

          {/* Intermediate */}

          <div className="education-card">

            <span className="edu-year">
              2021 - 2023
            </span>

            <h3>
              Intermediate (MPC)
            </h3>

            <h4>
              Sri Chaitanya Junior College
            </h4>

            <p>
              Vijayawada
            </p>

            <p>
              <strong>Percentage:</strong> 79%
            </p>

          </div>

          {/* SSC */}

          <div className="education-card">

            <span className="edu-year">
              2020 - 2021
            </span>

            <h3>
              Secondary School Certificate (SSC)
            </h3>

            <h4>
              Lakshya (E.M) High School
            </h4>

            <p>
              Koduru
            </p>

            <p>
              <strong>Percentage:</strong> 87%
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Education;