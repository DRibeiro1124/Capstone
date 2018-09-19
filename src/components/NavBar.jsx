import React, { Component } from 'react';
import styled from 'styled-components';

const NavBarWrapper = styled.div `
ul {
    display: flex;
    justify-content: space-around;
    background: #32063A;
    color: white;
    list-style-type: none;
    padding: 2em;
    margin: 0;
}

li {
    // font-family: 'Work Sans', sans-serif;
    // font-family: 'Josefin Sans', sans-serif;
    font-family: 'Comfortaa', cursive;
    // font-family: 'Cinzel', serif;
}

`

class NavBar extends Component {
    render() {
        return (
            <NavBarWrapper>
                <div>
                    <ul>
                        <li>Home</li>
                        <li>Fixtures</li>
                        <li>Current Stats</li>
                        <li>Table</li>
                        <li>Players</li>
                        <li>Managers</li>
                    </ul>
                </div>
                
            </NavBarWrapper>
        );
    }
}

export default NavBar;
