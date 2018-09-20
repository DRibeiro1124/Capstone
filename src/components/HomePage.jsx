import React, { Component } from 'react';
import styled from 'styled-components'
import Arsenal from './Teams/Arsenal.jsx';
import Bournemouth from './Teams/Bournemouth.jsx';
import Brighton from './Teams/Brighton.jsx';
import Burnley from './Teams/Burnley.jsx';
import CardiffCity from './Teams/CardiffCity.jsx';
import Chelsea from './Teams/Chelsea.jsx';
import CrystalPalace from './Teams/CrystalPalace.jsx';
import Everton from './Teams/Everton.jsx';
import Fulham from './Teams/Fulham.jsx';
import HuddersfieldTown from './Teams/HuddersfieldTown.jsx';
import LeicesterCity from './Teams/LeicesterCity.jsx';
import Liverpool from './Teams/Liverpool.jsx';
import ManchesterCity from './Teams/ManchesterCity';

const HomePageWrapper = styled.div `

.all-teams {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
`


class HomePage extends Component {
    render() {
        return (
            <HomePageWrapper> 
            <div>
                <div className="all-teams">
                    <Arsenal /> <Bournemouth /> <Brighton /> <Burnley /> <CardiffCity />
                    <Chelsea /> <CrystalPalace /> <Everton /> <Fulham /> <HuddersfieldTown />
                    <LeicesterCity /> <Liverpool /> <ManchesterCity />

                </div>
                
            </div>
            </HomePageWrapper>
        );
    }
}

export default HomePage;
