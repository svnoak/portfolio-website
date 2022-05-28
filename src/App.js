import './assets/css/App.css';
import Navigation from './components/Navigation';
import Welcome from './components/Welcome';
import ProjectList from './components/ProjectsList';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Welcome />
      <ProjectList />
      <Skills />
    </div>
  );
}

export default App;
