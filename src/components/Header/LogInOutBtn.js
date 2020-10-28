import React from 'react';

function LogInOutBtn(props) {
    return (
        <button className="header__btn"> 
            Log {props.isLoggedIn? "out": 'in'}    
        </button>
    )
}
export default LogInOutBtn;