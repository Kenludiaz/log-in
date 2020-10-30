import React from 'react';
import LogInOutBtn from './LogInOutBtn';

function Header(props) {

    return (
        <header className="header">
            <LogInOutBtn isLoggedIn={props.isLoggedIn} onLoginChange={ () => props.onLoginChange() }/>
        </header>
    )
}

export default Header;