import React from 'react';
import styled from 'styled-components';
import { LogInBtn } from '../Styles/CommonStyles'

const GuestBtn = styled(LogInBtn)`
    padding: 1rem 5rem;
` 

function ContinueAsGuestBtn(props) {
    return(
        <GuestBtn className="loginform_btn" onClick={props.onClick}>
            Continue as Guest
        </GuestBtn>
    )
}
export default ContinueAsGuestBtn;