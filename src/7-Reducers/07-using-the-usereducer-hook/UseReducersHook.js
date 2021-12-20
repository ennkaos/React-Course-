import React, { useState, useEffect } from 'react';

import UseReducersHookLogin from './usereducers_hook_components/Login/UseReducersHookLogin';
import UseReducersHookHome from './usereducers_hook_components/Home/UseReducersHookHome';
import UseReducersHookMainHeader from './usereducers_hook_components/MainHeader/UseReducersHookMainHeader';

function UseReducersHook() {
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
      <UseReducersHookMainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <UseReducersHookLogin onLogin={loginHandler} />}
        {isLoggedIn && <UseReducersHookHome onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default UseReducersHook;
