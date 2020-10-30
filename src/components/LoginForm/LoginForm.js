import React from 'react';
import Inputs from './Inputs';
import ContinueAsGuestBtn from './ContinueAsGuestBtn';

function LoginForm(props) {
    if (props.isLoggedIn) {
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
            <ContinueAsGuestBtn onLoginChange= {() => props.onLoginChange()}/>
        </div>

    )

}

export default LoginForm;