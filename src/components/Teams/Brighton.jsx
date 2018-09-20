import React, { Component } from 'react';
import BrightonLogo from '../../images/BrightonLogo.svg'
import styled from 'styled-components'

const TeamWrapper = styled.div`

.main {
    border: 2px solid black;
    margin-top: 8px;
    margin-left: 8px;
    display: flex;
    flex-direction: column;
    border-radius: 2em;
    height: 14em;
    width: 10em;
    background: #1E54A0;
    color: #FFF;
    
}

.main p {
    font-size: 12.75px;
    font-family: 'Cinzel', serif;
    display: flex;
}

.team {
    display: flex;
    flex-direction: column;
}

.team-logo {
    height: 6em;
    background: #FFF;
    padding: 2px;
}




`



class Bournemouth extends Component {
    render() {
        return (

            <TeamWrapper>
                <div className="main">
                    <p>Brighton & Hove Albion</p>
                    <img src={BrightonLogo} className="team-logo" alt="logo" />
                </div>
            </TeamWrapper>
        );
    }
}

export default Bournemouth;

