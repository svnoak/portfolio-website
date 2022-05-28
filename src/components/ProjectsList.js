import ProjectCard from "./ProjectCard";
import projects from "./data/projects.json";

function ProjectList() {
    return(
        <div id="projectList">
            <h1>Projects</h1>
            {projects.map( project => <ProjectCard data={project} /> )}
        </div>
    )
}

export default ProjectList;