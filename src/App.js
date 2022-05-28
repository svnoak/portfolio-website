import './assets/css/App.css';
import Navigation from './components/Navigation';
import Welcome from './components/Welcome';
import About from './components/About';
import ProjectList from './components/ProjectsList';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  window.addEventListener("scroll", () => {
    if( window.scrollY < 500 ){
      document.querySelector(".App > nav").style.opacity = 0;
    } else {
      document.querySelector(".App > nav").style.opacity = 1;
    }
  });
  return (
    <div className="App">
      <Welcome />
      <About />
      <ProjectList />
      <Skills />
      <Contact />
      <footer>Kim Siebeneicher</footer>
    </div>
  );
}

export default App;
