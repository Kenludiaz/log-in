import React, { useContext } from 'react';
import {UserContext} from '../Contexts/UserContext';

function LogInOutBtn(props) {
    const [value, setValue] = useContext(UserContext);
    return (
        <button className="header__btn"
        onClick={ () => {
            if (value) {
                setValue()
            }
        }}> 
            Log {value? "out": 'in'}    
        </button>
    )
}
export default LogInOutBtn;