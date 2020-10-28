import React from 'react';
import Inputs from './Inputs';
import ContinueAsGuestBtn from './ContinueAsGuestBtn';

function LoginForm(Props) {
    return (
        <div className="container">
            <Inputs />
            <div className="container__div">--OR--</div>
            <ContinueAsGuestBtn />
        </div>

    )

}

export default LoginForm;