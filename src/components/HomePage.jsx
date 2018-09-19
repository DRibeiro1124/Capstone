import React, { Component } from 'react';
import styled from 'styled-components'

const HomePageWrapper = styled.div `

.team-logo {
    border: 1px solid black;
    border-radius: 5em;
    padding: 1em;
    height: 4em;
    // background: #75FA93;
}


.all-teams {
    margin-top: 8px;
    margin-left: 8px;
    display: flex;
    flex-wrap: wrap;
}

.team {
    border: 1px solid black;
    width: 300px;
}

`


class HomePage extends Component {
    render() {
        return (
            <HomePageWrapper> 
            <div className="all-teams">
                <div className="team">
                    
                </div>
                
            </div>
            </HomePageWrapper>
        );
    }
}

export default HomePage;
