import React, { Component } from 'react';
import ArsenalLogo from '../../images/ArsenalLogo.svg'
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
    background: #DD2F21;
    color: #FFF;
    
}

.main p {
    font-size: 18px;
    font-family: 'Cinzel', serif;
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



class Arsenal extends Component {
    render() {
        return (

            <TeamWrapper>
                <div className="main">
                    <p>Arsenal</p>
                    <img src={ArsenalLogo} className="team-logo" alt="logo" />
                </div>
            </TeamWrapper>
        );
    }
}

export default Arsenal;
