import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import NavBar from './components/NavBar.jsx';
import HomePage from './components/HomePage.jsx';



import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Southampton from './components/Teams/Southampton';


class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <section>
            <Header />
          </section>
          <section>
            <NavBar />
          </section>
          <section>
          <Switch>
              <Route path="/" exact component={HomePage} />
              
            </Switch>
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
