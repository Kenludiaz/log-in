import React from 'react';

function ContinueAsGuestBtn(props) {
    return(
        <button className="loginform_btn" onClick={props.onClick}>
            Continue as Guest
        </button>
    )
}
export default ContinueAsGuestBtn;