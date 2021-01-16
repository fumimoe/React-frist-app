import logo from './logo.svg';
import './App.css';
import React from 'react';
import {HashRouter as Router,Route,Link} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';



const App = ()=>{
  return(
    <div>
      <h1>hello world</h1>
    
    <Router>
    <ul>
        <li><Link to = "/">Home</Link></li>
        <li><Link to= "/about">About</Link></li>
      </ul>
      <Route path="/" exact component={Home}/>
      <Route path="/about/:id" exact component={About}/>
      <Route/>
    </Router>
    </div>
  )
}


export default App;
