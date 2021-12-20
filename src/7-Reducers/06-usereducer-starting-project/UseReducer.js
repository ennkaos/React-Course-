import React, { useState, useEffect } from 'react';

import UseReducerLogin from './usereducers_components/Login/UseReducerLogin'
   import UseReducerHome from './usereducers_components/Home/UseReducerHome'
import UseReducerMainHeader from './usereducers_components/MainHeader/UseReducerMainHeader'

function UseReducer() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <UseReducerMainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <UseReducerLogin onLogin={loginHandler} />}
        {isLoggedIn && <UseReducerHome onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default UseReducer;
