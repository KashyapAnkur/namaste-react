import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import UserContext from './utils/UserContext';
import { useState } from 'react';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

function App() {
  const [userName, setUserName] = useState("Default User");

  return (
    <Provider store={appStore}>
      <div className="app">
        <UserContext.Provider value={{ loggedInUser: userName, setUserName: setUserName}}>
          <Header />
          <Outlet />
        </UserContext.Provider>
      </div>
    </Provider>
  );
}

export default App;