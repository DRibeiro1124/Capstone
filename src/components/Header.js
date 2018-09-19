import React, { Component } from 'react';
import styled from 'styled-components'

const HeaderWrapper = styled.div`
    margin: auto;
    background-color: purple;

    h1 {
        font-size: 1.5em;
        color: palevioletred;    
    }
`

class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <h1>Hi, this is a header from HeaderJS</h1>
            </HeaderWrapper>
        );
    }
}

export default Header;
