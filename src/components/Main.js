import Welcome from './Welcome';
import About from './About';
import ProjectList from './ProjectsList';
import Skills from './Skills';
import Contact from './Contact';

function Main(props){
    const refs = props.refs;
    const views = props.views;
    return(
    <>
        <Welcome refs={refs[0]} inView={views[0]} views={views}/>
        <About refs={refs[1]} inView={views[1]}/>
        <ProjectList refs={refs[2]} inView={views[2]}/>
        <Skills refs={refs[3]} inView={views[3]}/>
        <Contact refs={refs[4]} inView={views[4]}/>
    </>
    )
    
}

export default Main;