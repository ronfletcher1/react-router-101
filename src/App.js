import React, { Component } from 'react';
import './App.css';
// add the React Router module
// the main thing we need is BrowserRouter
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import About from './About';
import Home from './Home';
import MovieList from './MovieList';

class App extends Component {
  render() {
    // the Router goes around EVERYTHING it needs to control
    return (
      <Router>
        {/* in react router, we dont use <a>. Thats so 2015 */}
      <div className="App">
        <ul>
              {/* <li><a href="/home">Home</a></li>
              <li><a href="/about">About</a></li> */}                     
          <Link to= "/">||Home ||</Link>
          <Link to= "/about">About ||</Link>
          <Link to= "/movies">Movies||</Link>

          
        </ul>

      {/* Use the Route component to set up a path match  */}
      {/* if the path matches the browser path, it will render */}
      {/* whatever is given as component prop */}
      {/* Route is self closing */}
      {/* If you have path by itself, it will look for that path ANYWHERE */}
      {/* in the URL. To resetrict to exact, use exact*/}
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/movies" component={MovieList} />
      </div>
      </Router>
    );
  }
}

export default App;
