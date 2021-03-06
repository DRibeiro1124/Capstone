import React, { Component } from 'react';
import styled from 'styled-components';


const NavBarWrapper = styled.div`
ul {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: auto;
    background: #32063A;
    color: white;
    list-style-type: none;
    padding: 2em;
    margin: 0;
}

li {
    font-family: 'Comfortaa', cursive;
    font-weight: 900;
    
}

li:hover {
    // background: yellow;
    color: yellow;
}

`

class NavBar extends Component {
    render() {
        return (
            <NavBarWrapper>
                <div>
                    <ul>
                        <li>Home</li>
                        <li>Teams</li>
                        {/* <li>Fixtures</li> */}
                        {/* <li>Current Stats</li> */}
                        {/* <li>Table</li> */}
                        {/* <li>Players</li> */}
                        {/* <li>Managers</li> */}
                    </ul>
                </div>

            </NavBarWrapper>
        );
    }
}

export default NavBar;
