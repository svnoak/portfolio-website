import skills from "./data/skills.json";
import "../assets/css/Skill.css";

function Skills(props) {
    return(
        <section id="skills" ref={props.refs}>
            <h1>Skills</h1>
            <div>
                <div id="skill-lists">
                 {skills.map( section => {
                     return(
                     <div key={section.heading}>
                        <h2>{section.heading}</h2>
                        <ul>
                            {section.list.map( skill => {
                               return <li key={skill.name}>{skill.name}</li>
                            } )}
                        </ul>
                     </div>
                     )
                 } )}   
                </div>
            </div>
        </section>
    )
}

export default Skills;