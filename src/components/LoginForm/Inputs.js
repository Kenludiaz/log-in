import React from 'react';

function Inputs() {
    return (
        <form className='form'>
            <div className="email">
                <label htmlFor="email" className="email__label">Email</label>
                <input type="email" className="email__input"/>
            </div>
            <div className="password">
                <label htmlFor="password" className='password__label'>Password</label>
                <input type="password" className="password__input"/>
            </div>
            <button type='submit' className='form__btn' disabled="disabled">Log In</button>
        </form>

    )
}
export default Inputs;