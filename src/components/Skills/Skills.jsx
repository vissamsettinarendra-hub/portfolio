import "./Skills.css";
import skills from "../../data/skills";
import { motion } from "framer-motion";

function Skills() {
  return (
    <section className="skills section" id="skills">

      <div className="container">

        <div className="section-head">

          <span className="eyebrow">
            02 — Skills
          </span>

          <h2>
            Technologies I Work With
          </h2>

          <p>
            My technical skills include programming languages,
            frontend and backend development, databases,
            cloud technologies, and development tools.
          </p>

        </div>

        <motion.div
          className="skills-grid"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          {skills.map((skill, index) => (

            <motion.div
              className="skill-card"
              key={index}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >

              <h3>{skill.category}</h3>

              <div className="skill-items">

                {skill.items.map((item, i) => (

                  <span key={i}>
                    {item}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>
  );
}

export default Skills;