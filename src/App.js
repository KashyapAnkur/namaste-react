import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import UserContext from './utils/UserContext';
import { useState } from 'react';


function App() {
  const [userName, setUserName] = useState("Default User");

  return (
    <div className="app">
      <UserContext.Provider value={{ loggedInUser: userName, setUserName: setUserName}}>
        <Header />
        <Outlet />
      </UserContext.Provider>
    </div>
  );
}

export default App;