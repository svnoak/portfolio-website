import { Link } from "react-router-dom";

function ProjectCard(props) {
    const p = props.data;
    const navClass = p.link ? "project-navigation between" : "project-navigation";
    return(
        <div className="project-card">
            <img src={require("../assets/images/"+p.image)} alt="Project thumbnail"/>
            <div className="project-heading">
                <h2>{p.title}</h2>
                <a href={"https://github.com/svnoak/" + p.name} ><img src={require("../assets/images/github-light.png")} alt="Github Logo"/></a>
            </div>
            <div className="project-description">
                <p>{p.description}</p>
                <div className={navClass}>
                {p.link && <a href={p.link}>To project site</a>}
                <Link to={ "/project/" + p.id } state={{ id: p.id }}>Read more</Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;