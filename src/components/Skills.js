import skills from "./data/skills.json";
function Skills() {
    return(
        <section id="Skills">
            <h1>Skills</h1>
            <div>
                <div>
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