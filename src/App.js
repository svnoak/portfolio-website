import './assets/css/App.css';
import Navigation from './components/Navigation';
import Welcome from './components/Welcome';
import ProjectList from './components/ProjectsList';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Welcome />
      <ProjectList />
    </div>
  );
}

export default App;
