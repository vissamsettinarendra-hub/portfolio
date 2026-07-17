import "./Skills.css";
import skills from "../../data/skills";

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
            frameworks, cloud technologies and development tools..
          </p>

        </div>

        <div className="skills-grid">

          {skills.map((skill, index) => (

            <div className="skill-card" key={index}>

              <h3>{skill.category}</h3>

              <div className="skill-items">

                {skill.items.map((item, i) => (

                  <span key={i}>
                    {item}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;