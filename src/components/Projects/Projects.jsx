import "./Projects.css";
import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

function Projects() {
  return (
    <motion.section
      className="projects section"
      id="projects"
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">
            03 — Projects
          </span>

          <h2>
            Featured Projects
          </h2>

          <p>
            Here are some of my recent projects showcasing
            Full Stack Development, Cloud Computing,
            and modern web technologies..
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;