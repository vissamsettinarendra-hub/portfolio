import "./Github.css";
import repositories from "../../data/github";

function Github() {
  return (
    <section className="github section" id="github">

      <div className="container">

        <div className="section-head">

          <span className="eyebrow">
            08 — GitHub
          </span>

          <h2>GitHub Projects</h2>

          <p>
            Some of my open-source projects and development work.
          </p>

        </div>

        <div className="github-profile">

          <h3>GitHub Profile</h3>

          <a
            href="https://github.com/vissamsettinarendra-hub"
            target="_blank"
            rel="noreferrer"
            className="github-btn"
          >
            Visit GitHub Profile
          </a>

        </div>

        <div className="repo-grid">

          {repositories.map((repo) => (

            <div className="repo-card" key={repo.id}>

              <h3>{repo.name}</h3>

              <p>{repo.description}</p>

              <span>{repo.tech}</span>

              <a
                href={repo.github}
                target="_blank"
                rel="noreferrer"
              >
                View Repository →
              </a>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Github;