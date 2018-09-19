import React, { Component } from 'react';
import styled from 'styled-components'
import EPL_logo from '../images/EPL_logo.svg'
import Arsenal from '../images/ArsenalLogo.svg'
import Bournemouth from '../images/BournemouthLogo.svg'
import Brighton from '../images/BrightonLogo.svg'
import Burnley from '../images/BurnleyLogo.svg'
import CardiffCity from '../images/CardiffCityLogo.svg'
import Chelsea from '../images/ChelseaLogo.svg'


const HeaderWrapper = styled.div`
    margin: auto;
    // background-color: #75fa93;
    background-color: #32063A;
    display: flex;
    justify-content: space-between;
    
    h1 {
        font-size: 1.5em;
        color: palevioletred;    
    }
    
    .EPL-logo {
        height: 7em;
        display: flex;
        background-color: #75fa93
    }

    .team-logo {
        height: 2em;
        display: flex;
        justify-content: space-around;
    }
`

class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <img src={EPL_logo} className="EPL-logo" alt="logo" />
                <a href="https://www.arsenal.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"><img src={Arsenal} className="team-logo" alt="logo" /></a>
                <a href="https://www.afcb.co.uk/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"><img src={Bournemouth} className="team-logo" alt="logo" /></a>
                <a href="https://www.brightonandhovealbion.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"><img src={Brighton} className="team-logo" alt="logo" /></a>
                <a href="http://www.burnleyfootballclub.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"><img src={Burnley} className="team-logo" alt="logo" /></a>
                <a href="https://www.cardiffcityfc.co.uk/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"><img src={CardiffCity} className="team-logo" alt="logo" /></a>
                <a href="https://www.chelseafc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"><img src={Chelsea} className="team-logo" alt="logo" /></a>
                
            </HeaderWrapper>
        );
    }
}

export default Header;
