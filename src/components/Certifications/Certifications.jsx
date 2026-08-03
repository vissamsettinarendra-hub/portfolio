import "./Certifications.css";
import certifications from "../../data/certifications";

import { motion } from "framer-motion";
import {
  FaAward,
  FaExternalLinkAlt,
} from "react-icons/fa";

function Certifications() {
  return (
    <section
      className="certifications section"
      id="certifications"
    >
      <div className="container">

        <div className="section-head">

          <span className="eyebrow">
            06 — Certifications
          </span>

          <h2>
            Professional Certifications
          </h2>

          <p>
            Certifications that demonstrate my commitment to
            continuous learning and professional growth.
          </p>

        </div>

        <div className="cert-grid">

          {certifications.map((cert) => (

            <motion.div
              key={cert.id}
              className="cert-card"
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
            >

              <img
                src={cert.image}
                alt={cert.title}
              />

              <div className="cert-content">

                <div className="cert-icon">
                  <FaAward />
                </div>

                <h3>
                  {cert.title}
                </h3>

                <h4>
                  {cert.issuer}
                </h4>

                <p>
                  {cert.description}
                </p>

                <a
                  href={cert.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-btn"
                >
                  <FaExternalLinkAlt />
                  View Certificate
                </a>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;