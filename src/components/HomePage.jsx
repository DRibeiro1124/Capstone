import React, { Component } from 'react';
import styled from 'styled-components'
// import logo from '../images/EPL-Logo1.png'



const base_URL = "http://api.football-api.com/2.0/"
const api_key = "Authorization=565ec012251f932ea4000001fa542ae9d994470e73fdb314a8a56d76"



const HomePageWrapper = styled.div`

.league-table {
    border: 2px solid black;
}

.main-container {
    display: flex;
    flex-direction: column;
    margin: 0 25px 0 25px;
    padding: 5px;

}

.main-container th {
    background-color: #32063A;
    color: #D62E55;
    font-family: 'Comfortaa', cursive;
}

td {
    background-color: #D62E55;
    color: white;
    font-family: 'Comfortaa', cursive;
}

.logo {
    
}

h1 {
    font-family: 'Comfortaa', cursive;
}

.glossary {
    display: flex;
    flex-direction: column;
}
`

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            teams: []
        }
    };

    componentDidMount() {
        fetch(`${base_URL}standings/1204?${api_key}`)
            .then(resp => resp.json())
            .then(teams => {
                console.log("works?", teams);
                this.setState({
                    teams: teams
                })

            })
    }


    render() {
        return (
            <HomePageWrapper>
                <div className="main-container">
                    <h1>2018/19 English Premier League Standings</h1>
                    {/* <img src={logo} className="logo" alt="logo" /> */}
                    <table className="league-table">
                        <thead className="table-header">
                            <tr>
                                <th>Club</th>
                                <th>Pos</th>
                                <th>GP</th>
                                <th>W</th>
                                <th>D</th>
                                <th>L</th>
                                <th>GF</th>
                                <th>GA</th>
                                <th>GD</th>
                                <th>P</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.teams.sort(function (a, b) { return a.position - b.position }).map((teams, i) => {
                                console.log(teams)
                                return (
                                    <tr key={i}>
                                        <td>{teams.team_name}</td>
                                        <td>{teams.position}</td>
                                        <td>{teams.overall_gp}</td>
                                        <td>{teams.overall_w}</td>
                                        <td>{teams.overall_d}</td>
                                        <td>{teams.overall_l}</td>
                                        <td>{teams.overall_gs}</td>
                                        <td>{teams.overall_ga}</td>
                                        <td>{teams.gd}</td>
                                        <td>{teams.points}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </HomePageWrapper>
        );
    }
}

export default HomePage;



// save this for later as well and refactor
{/* <div className="all-teams">
    <Arsenal /> <Bournemouth /> <Brighton /> <Burnley /> <CardiffCity />
    <Chelsea /> <CrystalPalace /> <Everton /> <Fulham /> <HuddersfieldTown />
    <LeicesterCity /> <Liverpool /> <ManchesterCity /> <ManchesterUnited /> <NewcastleUnited />
    <Southampton /> <Tottenham /> <Watford /> <WestHam /> <Wolverhampton />
</div> */}


// import Arsenal from './Teams/Arsenal.jsx';
// import Bournemouth from './Teams/Bournemouth.jsx';
// import Brighton from './Teams/Brighton.jsx';
// import Burnley from './Teams/Burnley.jsx';
// import CardiffCity from './Teams/CardiffCity.jsx';
// import Chelsea from './Teams/Chelsea.jsx';
// import CrystalPalace from './Teams/CrystalPalace.jsx';
// import Everton from './Teams/Everton.jsx';
// import Fulham from './Teams/Fulham.jsx';
// import HuddersfieldTown from './Teams/HuddersfieldTown.jsx';
// import LeicesterCity from './Teams/LeicesterCity.jsx';
// import Liverpool from './Teams/Liverpool.jsx';
// import ManchesterCity from './Teams/ManchesterCity';
// import ManchesterUnited from './Teams/ManchesterUnited';
// import NewcastleUnited from './Teams/NewcastleUnited';
// import Southampton from './Teams/Southampton';
// import Tottenham from './Teams/Tottenham';
// import Watford from './Teams/Watford';
// import WestHam from './Teams/WestHam';
// import Wolverhampton from './Teams/Wolverhampton';




