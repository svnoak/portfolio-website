import ProjectCard from "./ProjectCard";
import projects from "./data/projects.json";
import "../assets/css/Project.css";

function ProjectList(props) {
    return(
        <section id="project-list" ref={props.refs}>
            <h1>Projects</h1>
            {projects.map( project => <ProjectCard key={project.id} data={project} /> )}
        </section>
    )
}

export default ProjectList;