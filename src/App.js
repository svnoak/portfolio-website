import React from "react";
import { useInView } from "react-intersection-observer";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './assets/css/App.css';

import Main from "./components/Main";
import AboutDetails from "./components/AboutDetail";
import Project from "./components/Project";

function App() {
  
  /**
   * *InView variable holds bool for if component is in view or not
   * Thresholds in decimal for when component is considered in view
   * Used for focusing on correct navigation-circle scrolling down
   */
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
  const refs = [welcomeRef, aboutRef, projectRef, skillRef, contactRef];

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main views={views} refs={refs}/>} />
          <Route path="/about" element={<AboutDetails />} />
          <Route path="/project/">
            <Route path=":id" element={<Project />} />
          </Route>
        </Routes>
      </Router>
      <footer>Kim Siebeneicher</footer>
  </div>
  );
}

export default App;
