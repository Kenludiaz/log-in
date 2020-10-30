import React from 'react';

function LogInOutBtn(props) {
    return (
        <button className="header__btn"
        onClick={ () => {
            if (props.isLoggedIn) {
                props.onLoginChange()
            }
        }}> 
            Log {props.isLoggedIn? "out": 'in'}    
        </button>
    )
}
export default LogInOutBtn;