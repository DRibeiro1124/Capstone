import React, { Component } from 'react';

import styled from 'styled-components'
import EPL_logo from '../images/EPL_Logo1.png'
import Arsenal from '../images/ArsenalLogo.svg'
import Bournemouth from '../images/BournemouthLogo.svg'
import Brighton from '../images/BrightonLogo.svg'
import Burnley from '../images/BurnleyLogo.svg'
import CardiffCity from '../images/CardiffCityLogo.svg'
import Chelsea from '../images/ChelseaLogo.svg'
import CrystalPalace from '../images/CrystalPalaceLogo.svg'
import Everton from '../images/EvertonLogo.svg'
import Fulham from '../images/FulhamLogo.svg'
import HuddersfieldTown from '../images/HuddersfieldTownLogo.svg'
import LeicesterCity from '../images/LeicesterCityLogo.svg'
import Liverpool from '../images/LiverpoolLogo.svg'
import ManchesterCity from '../images/ManchesterCityLogo.svg'
import ManchesterUnited from '../images/ManchesterUnitedLogo.svg'
import NewcastleUnited from '../images/NewcastleUnitedLogo.svg'
import Southampton from '../images/SouthamptonLogo.svg'
import TottenhamSpurs from '../images/TottenhamSpursLogo.svg'
import Watford from '../images/WatfordLogo.svg'
import WestHamUnited from '../images/WestHamUnitedLogo.svg'
import Wolverhampton from '../images/WolverhamptonLogo.svg'


const HeaderWrapper = styled.div`
    margin: auto;
    // these are the 4 main colors that are going to be used
    background-color: #75fa93;
    // background-color: #32063A;
    // background-color: #D62E55;
    // background-color: #6CEEFC;

    
    
    h1 {
        font-size: 1.5em;
        color: palevioletred;    
    }
    
    .EPL-logo {
        height: 9em;
        display: flex;
        // background-color: #D62E55;
    }
    
    .team-logo {
        height: 3em;
        display: flex;
        justify-content: space-around;
    }
    
    a {
        justify-content: center;
        align-self: center;
    }

    .teams {
        display: flex;
        justify-content: space-around;
    }

`

class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <section className="teams">
                    <img src={EPL_logo} className="EPL-logo" alt="logo" />
                    <a href="https://www.arsenal.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"><img src={Arsenal} className="team-logo" alt="logo" /></a>
                    <a href="https://www.afcb.co.uk/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"><img src={Bournemouth} className="team-logo" alt="logo" /></a>
                    <a href="https://www.brightonandhovealbion.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"><img src={Brighton} className="team-logo" alt="logo" /></a>
                    <a href="http://www.burnleyfootballclub.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"><img src={Burnley} className="team-logo" alt="logo" /></a>
                    <a href="https://www.cardiffcityfc.co.uk/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"><img src={CardiffCity} className="team-logo" alt="logo" /></a>
                    <a href="https://www.chelseafc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"><img src={Chelsea} className="team-logo" alt="logo" /></a>
                    <a href="http://www.cpfc.co.uk/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"><img src={CrystalPalace} className="team-logo" alt="logo" /></a>
                    <a href="http://www.evertonfc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"><img src={Everton} className="team-logo" alt="logo" /></a>
                    <a href="http://www.fulhamfc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"><img src={Fulham} className="team-logo" alt="logo" /></a>
                    <a href="https://www.htafc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"><img src={HuddersfieldTown} className="team-logo" alt="logo" /></a>
                    <a href="https://www.lcfc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"><img src={LeicesterCity} className="team-logo" alt="logo" /></a>
                    <a href="https://www.liverpoolfc.com/welcome-to-liverpool-fc"><img src={Liverpool} className="team-logo" alt="logo" /></a>
                    <a href="https://www.mancity.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"><img src={ManchesterCity} className="team-logo" alt="logo" /></a>
                    <a href="http://www.manutd.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"><img src={ManchesterUnited} className="team-logo" alt="logo" /></a>
                    <a href="https://www.nufc.co.uk/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"><img src={NewcastleUnited} className="team-logo" alt="logo" /></a>
                    <a href="https://southamptonfc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"><img src={Southampton} className="team-logo" alt="logo" /></a>
                    <a href="http://www.tottenhamhotspur.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"><img src={TottenhamSpurs} className="team-logo" alt="logo" /></a>
                    <a href="https://www.watfordfc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"><img src={Watford} className="team-logo" alt="logo" /></a>
                    <a href="https://www.whufc.com/"><img src={WestHamUnited} className="team-logo" alt="logo" /></a>
                    <a href="https://www.wolves.co.uk/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"><img src={Wolverhampton} className="team-logo" alt="logo" /></a>
                </section>

            </HeaderWrapper>
        );
    }
}

export default Header;
