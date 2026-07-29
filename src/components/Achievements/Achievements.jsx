import "./Achievements.css";

function Achievements() {
  return (
    <section className="achievements section" id="achievements">

      <div className="container">

        <div className="section-head">

          <span className="eyebrow">
            07 — Achievements
          </span>

          <h2>Achievements</h2>

          <p>
            Recognitions and accomplishments that reflect my dedication,
            continuous learning, and teamwork.
          </p>

        </div>

        <div className="achievement-grid">

          <div className="achievement-card">

            <div className="achievement-icon">
              🏆
            </div>

            <div className="achievement-content">

              <h3>
                AWS Certified Cloud Practitioner
              </h3>

              <p>
                Successfully earned the AWS Certified Cloud Practitioner
                certification, demonstrating knowledge of cloud computing,
                AWS services, security, pricing, and architecture.
              </p>

            </div>

          </div>

          <div className="achievement-card">

            <div className="achievement-icon">
              🏐
            </div>

            <div className="achievement-content">

              <h3>
                Best Player Award – Volleyball
              </h3>

              <p>
                Awarded Best Player for outstanding performance,
                leadership, teamwork, and dedication during
                volleyball competitions.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Achievements;