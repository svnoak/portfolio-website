import ProjectCard from "./ProjectCard";
import projects from "./data/projects.json";

function ProjectList() {
    return(
        <section id="project-list">
            <h1>Projects</h1>
            {projects.map( project => <ProjectCard key={project.name} data={project} /> )}
        </section>
    )
}

export default ProjectList;