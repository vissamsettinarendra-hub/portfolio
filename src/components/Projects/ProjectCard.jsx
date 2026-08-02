import "./ProjectCard.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

function ProjectCard({ project }) {
  return (
    <motion.div
      className="project-card"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >

      <div className="project-image">

        <img
          src={project.image}
          alt={project.title}
        />

      </div>

      <div className="project-content">

        <span className="project-category">
          {project.category}
        </span>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-tech">

          {project.technologies.map((tech, index) => (

            <span key={index}>
              {tech}
            </span>

          ))}

        </div>

        <div className="project-links">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>

        </div>

      </div>

    </motion.div>
  );
}

export default ProjectCard;