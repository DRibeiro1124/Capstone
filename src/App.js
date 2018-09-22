import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import NavBar from './components/NavBar.jsx';
import HomePage from './components/HomePage.jsx';


class App extends Component {

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
