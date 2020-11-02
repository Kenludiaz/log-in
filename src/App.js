import React, { useState } from 'react';
import LoginForm from './components/LoginForm/LoginForm';
import Header from './components/Header/Header';
import UserContext from './components/Contexts/UserContext';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLoginChange = () => {
    setIsLoggedIn(isLoggedIn => !isLoggedIn);
  }

  return (
    <div className="App">
      <UserContext.Provider value={{isLoggedIn, handleLoginChange}}>
        <Header />
        <LoginForm isLoggedIn={isLoggedIn} onLoginChange={ () => handleLoginChange()}/>  
      </UserContext.Provider>
    </div>
  );
}

export default App;
