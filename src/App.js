import { useInView } from "react-intersection-observer";
import './assets/css/App.css';
import Welcome from './components/Welcome';
import About from './components/About';
import ProjectList from './components/ProjectsList';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  window.addEventListener("scroll", () => {
    
    if( window.scrollY >= 46 ){
      document.querySelector("nav").classList.add("fixed");
    } else {
      document.querySelector("nav").classList.remove("fixed");
    }

  });
  
  const [ welcomeRef, welcomeInView ] = useInView({
    threshold: 0.6
  });
  const [ aboutRef, aboutInView ] = useInView({
    threshold: 0.6
  });
  const [ projectRef, projectInView ] = useInView({
    threshold: 0.6
  });
  const [ skillRef, skillInView ] = useInView({
    threshold: 0.6
  });
  const [ contactRef, contactInView ] = useInView({
    threshold: 0.6
  });

  const views = [welcomeInView, aboutInView, projectInView, skillInView, contactInView];

  return (
    <div className="App">
      <Welcome refs={welcomeRef} inView={welcomeInView} views={views}/>
      <About refs={aboutRef} inView={aboutInView}/>
      <ProjectList refs={projectRef} inView={projectInView}/>
      <Skills refs={skillRef} inView={skillInView}/>
      <Contact refs={contactRef} inView={contactInView}/>
      <footer>Kim Siebeneicher</footer>
    </div>
  );
}

export default App;
