import React, { Component } from 'react';
import styled from 'styled-components'
// 

const base_URL = "http://api.football-api.com/2.0/"
const api_key = "Authorization=565ec012251f932ea4000001fa542ae9d994470e73fdb314a8a56d76"



const HomePageWrapper = styled.div`

.all-teams {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.main-table {
    border: 2px solid red;
    display: flex;
}

.main-table th {
    border: 1px solid blue;
    justify-content: center;
}




.results td {
    display: flex;
    justify-content: space-between;
}

.results {
    display: flex;
    justify-content: center;
    margin: 2em;
}

`

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    };

    componentDidMount() {
        fetch(`${base_URL}standings/1204?${api_key}`)
            .then(resp => resp.json())
            .then(data => {
                console.log("works?", data);
                this.setState({
                    data: data
                })

            })
    }


    render() {
        return (
            <HomePageWrapper>
                <div>
                    <h1>2018/19 English Premier League Standings</h1>
                    <table className="main-table">
                        <tbody className="main-body">
                            <thead className="main-head"> 
                                <tr>
                                    <th>Position</th>
                                    <th>Club</th>
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
                        </tbody>
                    </table>
                    {this.state.data.map((data, i) => {
                        console.log(data)
                        return (
                            <table key={i} className="results">
                                {/* <td>{data.position}</td>
                                <td>{data.team_name}</td>
                                <td>{data.overall_gp}</td>
                                <td>{data.overall_w}</td>
                                <td>{data.overall_d}</td>
                                <td>{data.overall_l}</td>
                                <td>{data.overall_gs}</td>
                                <td>{data.overall_ga}</td>
                                <td>{data.gd}</td>
                                <td>{data.points}</td> */}
                            </table>
                        )
                    })}
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