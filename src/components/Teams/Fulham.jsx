import React, { Component } from 'react';
import FulhamLogo from '../../images/FulhamLogo.svg'
import styled from 'styled-components'

const TeamWrapper = styled.div`

.main {
    border: 1px solid black;
    // margin: 1em;
    margin-top: 8px;
    margin-left: 8px;
    display: flex;
    flex-direction: column;
    border-radius: 1em;
    height: 14em;
    width: 12em;
    background: #000;
    color: #F7F9FC;
    
}

.main p {
    font-size: 18px;
    font-family: 'Cinzel', serif;

}


.team-logo {
    height: 6em;
    background: #F7F9FC;
    padding: 5px;
}

`



class Fulham extends Component {
    render() {
        return (

            <TeamWrapper>
                <div className="main">
                    <p>Fulham</p>
                    <img src={FulhamLogo} className="team-logo" alt="logo" />
                    <p>Football Club</p>
                </div>
            </TeamWrapper>
        );
    }
}

export default Fulham;
