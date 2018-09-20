import React, { Component } from 'react';
import styled from 'styled-components'
import Arsenal from './Teams/Arsenal.jsx';
import Bournemouth from './Teams/Bournemouth.jsx';
import Brighton from './Teams/Brighton.jsx';

const HomePageWrapper = styled.div `

.all-teams {
    display: flex;
}
`


class HomePage extends Component {
    render() {
        return (
            <HomePageWrapper> 
            <div>
                <div className="all-teams">
                    <Arsenal />
                    <Bournemouth />
                    <Brighton />
                </div>
                
            </div>
            </HomePageWrapper>
        );
    }
}

export default HomePage;
