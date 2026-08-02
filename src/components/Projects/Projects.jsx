import "./Projects.css";
import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">

        <div className="section-head">

          <span className="eyebrow">
            03 — Projects
          </span>

          <h2>
            Featured Projects
          </h2>

          <p>
            A collection of projects demonstrating my experience in
            Full Stack Development, Cloud Computing and modern web technologies.
          </p>

        </div>

        <motion.div
          className="projects-grid"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Projects;