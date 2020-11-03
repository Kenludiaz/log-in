import React, { useContext } from 'react';
import LoginForm from './components/LoginForm/LoginForm';
import Header from './components/Header/Header';
import {UserContext, UserProvider} from './components/Contexts/UserContext';

function App() {
  const data = useContext(UserContext);

  return (
    <div className="App">
      <UserProvider value={data}>
        <Header />
        <LoginForm />  
      </UserProvider>
    </div>
  );
}

export default App;
