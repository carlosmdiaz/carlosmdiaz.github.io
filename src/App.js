import React from 'react';
import './App.css';
import Home from './components/Home';
import ContactMe from './components/ContactMe';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Navigation from './components/Navigation';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Route path="/" component={Home}/>
        <Route path="/aboutme" component={AboutMe}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/contactme" component={ContactMe}/>
      </div>
    </Router>
  );
}

export default App;
