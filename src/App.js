import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import NavBar from './components/NavBar.jsx';
import HomePage from './components/HomePage.jsx';

const base_URL = "http://api.football-api.com/2.0/"
const api_key = "Authorization=565ec012251f932ea4000001fa542ae9d994470e73fdb314a8a56d76"
// http://api.football-api.com/2.0/standings/1204?Authorization=565ec012251f932ea4000001fa542ae9d994470e73fdb314a8a56d76

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  

  componentDidMount() {
    fetch(`${base_URL}standings/1204?${api_key}`)
      .then(resp => resp.json())
      .then(data => {
        // console.log("works?", data);
        this.setState ({ 
          data: data
        })
        
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
        
        <section>
          {this.state.data.map((data, i) => {
            console.log(data)
            return (
              <div key={i}>
                <h6>{data.team_name}</h6>
                
              </div>
            )
          })
        }
        </section>
      </div>
    );
  }
}

export default App;
