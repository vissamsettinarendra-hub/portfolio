import "./Education.css";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaUniversity,
  FaSchool
} from "react-icons/fa";

function Education() {
  return (
    <section className="education section" id="education">

      <div className="container">

        <div className="section-head">

          <span className="eyebrow">
            05 — Education
          </span>

          <h2>Academic Journey</h2>

          <p>
            My educational background that laid the foundation for my
            technical skills and software development career.
          </p>

        </div>

        <div className="education-timeline">

          <motion.div
            className="education-card"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
          >

            <div className="edu-icon">
              <FaGraduationCap />
            </div>

            <div>

              <span className="edu-year">
                2023 – Present
              </span>

              <h3>
                Bachelor of Technology
              </h3>

              <h4>
                Computer Science & Engineering
              </h4>

              <p>
                Chalapathi Institute of Technology
              </p>

              <div className="edu-badge">
                CGPA : 8.31 / 10
              </div>

            </div>

          </motion.div>

          <motion.div
            className="education-card"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
          >

            <div className="edu-icon">
              <FaUniversity />
            </div>

            <div>

              <span className="edu-year">
                2021 – 2023
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

              <div className="edu-badge">
                79%
              </div>

            </div>

          </motion.div>

          <motion.div
            className="education-card"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
          >

            <div className="edu-icon">
              <FaSchool />
            </div>

            <div>

              <span className="edu-year">
                2021
              </span>

              <h3>
                SSC
              </h3>

              <h4>
                Lakshya (E.M) High School
              </h4>

              <p>
                Koduru
              </p>

              <div className="edu-badge">
                87%
              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Education;