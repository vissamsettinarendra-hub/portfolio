import "./Certifications.css";
import certifications from "../../data/certifications";

function Certifications() {
  return (
    <section className="certifications section" id="certifications">

      <div className="container">

        <div className="section-head">

          <span className="eyebrow">
            06 — Certifications
          </span>

          <h2>Certifications</h2>

          <p>
            Professional certifications that validate my technical
            knowledge and continuous learning.
          </p>

        </div>

        <div className="cert-grid">

          {certifications.map((cert) => (

            <div className="cert-card" key={cert.id}>

              <div className="cert-icon">
                🏆
              </div>

              <h3>{cert.title}</h3>

              <h4>{cert.issuer}</h4>

              <p>{cert.year}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Certifications;