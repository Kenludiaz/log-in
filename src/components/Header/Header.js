import React from 'react';
import LogInOutBtn from './LogInOutBtn';
import styled from 'styled-components';

const Navigation = styled.header`
    display: flex;
`

function Header(props) {

    return (
        <Navigation className="header">
            <LogInOutBtn />
        </Navigation>
    )
}

export default Header;