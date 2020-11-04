import React, { useContext } from 'react';
import {UserContext} from '../Contexts/UserContext';
import styled from 'styled-components';
import { LogInBtn as LogBtn } from '../Styles/CommonStyles';

const LogOutBtn = styled(LogBtn)`
    background-color: #FF4500;
    padding: .66rem 1.33rem;
`
const LogInBtn = styled(LogBtn)`
    background-color: #FF4500;
    padding: .66rem 1.33rem;
`   

function LogInOutBtn(props) {
    const [value, setValue] = useContext(UserContext);
    if (value) {
        return (
            <LogOutBtn className="header__btn"
            onClick={ () => setValue()}> 
                Log Out    
            </LogOutBtn>
        )
    }
    return (
        <LogInBtn className="header__btn">
            Log In
        </LogInBtn>
    )

}
export default LogInOutBtn;