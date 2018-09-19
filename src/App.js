import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import NavBar from './components/NavBar.jsx';
import HomePage from './components/HomePage.jsx';

class App extends Component {

  componentDidMount() {
    fetch(`http://api.football-api.com/2.0/competitions/1204?Authorization=565ec012251f932ea4000001fa542ae9d994470e73fdb314a8a56d76`)
      .then(resp => resp.json())
      .then(data => {
        console.log("works?", data);
      })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <NavBar />
        <section>
          <HomePage />
        </section>
      </div>
    );
  }
}

export default App;
