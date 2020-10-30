import React, { useState } from 'react';
import LoginForm from './components/LoginForm/LoginForm';
import Header from './components/Header/Header';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLoginChange = () => {
    setIsLoggedIn(isLoggedIn => !isLoggedIn);
  }

  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} onLoginChange={ () => handleLoginChange()}/>
      <LoginForm isLoggedIn={isLoggedIn} onLoginChange={ () => handleLoginChange()}/>
    </div>
  );
}

export default App;
