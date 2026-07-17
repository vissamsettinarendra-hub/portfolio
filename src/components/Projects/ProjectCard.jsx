import "./ProjectCard.css";


function ProjectCard({ project }) {

    return (

        <div className="project-card">


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



                <h3>
                    {project.title}
                </h3>



                <p>
                    {project.description}
                </p>



                <div className="project-tech">

                    {project.technologies?.map((item, index) => (

                        <span key={index}>
                            {item}
                        </span>

                    ))}

                </div>




                <div className="project-links">


                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>



                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Live Demo
                    </a>


                </div>


            </div>


        </div>

    );

}


export default ProjectCard;