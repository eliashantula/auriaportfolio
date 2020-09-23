import React from 'react';
import logo from './logo.svg';
import './App.css';
import pattern from './pattern.jpg'
import Nav from './Nav.js'
import About from './About.js'
import Projects from './Projects.js'
import Home from './Home.js'
import ProjectDetails from './ProjectDetails.js'
import Flip from './flip.js'
import {Switch,
  BrowserRouter as Router,
  Route,Link, withRouter
} from 'react-router-dom'

/*
*/

function App() {



    
    return (
      <Router>
   
    <div className="App">

    <Nav/>

    <Switch>
    <Route exact path="/" component = {Home}/>
    <Route exact path = "/specific/about" component = {About}/>
    <Route exact path = "/Projects" component = {Projects}/>
    <Route exact path = '/specific/:project' component = {ProjectDetails}/>
        <Route exact path = '/portfolio' component = {Flip}/>

</Switch>

    </div>
  
    </Router>
  );
}

export default App;
