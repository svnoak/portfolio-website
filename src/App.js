import './assets/css/App.css';
import ProjectCard from './components/ProjectCard';

function App() {
  return (
    <div className="App">


      <h1>Projects</h1>
      <ProjectCard title="FiRe Client"  description="File Renaming client is a small program to rename files in batches. Front-end part of the project" name="FiRE-CLIENT"/>
      <ProjectCard title="FiRe Backend"  description="File Renaming client is a small program to rename files in batches. Back-end part of the project" name="filrenaming-server"/>
    </div>
  );
}

export default App;
