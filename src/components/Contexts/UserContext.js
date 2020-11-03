import React, {useState} from 'react';

export const UserContext = React.createContext();

export const UserProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginChange = () => {
        setIsLoggedIn(isLoggedIn => !isLoggedIn);
    }
    return(
        <UserContext.Provider value={[isLoggedIn, handleLoginChange]}>
            {props.children}
        </UserContext.Provider>
    )
}


