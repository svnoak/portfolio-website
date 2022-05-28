function ProjectCard(props) {
    const p = props.data;
    return(
        <div className="project-card">
            <img src="" alt="Project thumbnail"/>
            <div className="project-heading">
                <h2>{p.title}</h2>
                <a href={"https://github.com/svnoak/" + p.name} ><img src="githubImage" alt="Github Logo"/></a>
            </div>
            <p>{p.description}</p>
            <button>Read more</button>
        </div>
    )
}

export default ProjectCard;