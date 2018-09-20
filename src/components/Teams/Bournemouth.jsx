import React, { Component } from 'react';
import BournemouthLogo from '../../images/BournemouthLogo.svg'
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
    background: #B52F2B;
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



class Bournemouth extends Component {
    render() {
        return (

            <TeamWrapper>
                <div className="main">
                    <p>Bournemouth</p>
                    <img src={BournemouthLogo} className="team-logo" alt="logo" />
                </div>
            </TeamWrapper>
        );
    }
}

export default Bournemouth;

