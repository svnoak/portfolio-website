function ProjectCard(props) {
    return(
        <div>
            <img src="" alt="Project thumbnail"/>
            <div className="project-heading">
                <h2>{props.title}</h2>
                <a href={"https://github.com/svnoak/" + props.name} ><img src="githubImage" alt="Github Logo"/></a>
            </div>
            <p>{props.description}</p>
            <a href={"/" + props.name}>Read more</a>
        </div>
    )
}

export default ProjectCard;