import React, { Component } from 'react';
import styled from 'styled-components'


const base_URL = "http://api.football-api.com/2.0/"
const api_key = "Authorization=565ec012251f932ea4000001fa542ae9d994470e73fdb314a8a56d76"



const HomePageWrapper = styled.div`

.all-teams {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
}

th, td {
    padding: 5px;
}

table,th {
    width: 100%;
}

th {
    text-align: left;
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
                <div>
                    <h1>2018/19 English Premier League Standings</h1>
                    <table className="table">
                        <thead className="head">
                            <tr>
                                <th>Club</th>
                                <th>Position</th>
                                <th>MP</th>
                                <th>Wins</th>
                                <th>Draws</th>
                                <th>Losses</th>
                                <th>GF</th>
                                <th>GA</th>
                                <th>GD</th>
                                <th>Points</th>
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




