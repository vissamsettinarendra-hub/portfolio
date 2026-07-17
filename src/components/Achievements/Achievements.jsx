import "./Achievements.css";

function Achievements() {
  return (
    <section className="achievements section" id="achievements">

      <div className="container">

        <div className="section-head">

          <span className="eyebrow">
            10 — Achievements
          </span>

          <h2>Achievements</h2>

          <p>
            Recognitions and accomplishments that reflect my dedication and teamwork.
          </p>

        </div>


        <div className="achievement-card">

          <div className="achievement-icon">
            🏆
          </div>


          <div className="achievement-content">

            <h3>
              Best Player Award — Volleyball
            </h3>

            <p>
              Recognized as the Best Player for outstanding performance,
              teamwork, leadership, and dedication in volleyball.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Achievements;