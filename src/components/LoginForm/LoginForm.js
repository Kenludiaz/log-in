import React, { useContext } from 'react';
import Inputs from './Inputs';
import ContinueAsGuestBtn from './ContinueAsGuestBtn';
import {UserContext } from '../Contexts/UserContext';

function LoginForm(props) {
    const [loggedIn, toggleLogIn] = useContext(UserContext);
    if (loggedIn) {
        return(
            <div className="container">
                You are now logged in.    
            </div>
        )
    }
    return (
        <div className="container">
            <Inputs />
            <div className="container__div">--OR--</div>
            <ContinueAsGuestBtn onClick= { () => toggleLogIn() }/>
        </div>

    )

}

export default LoginForm;