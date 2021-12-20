import React, { useState, useEffect } from 'react';

import HookLogin from './hook_dependencies_components/Login/HookLogin';
import HookHome from './hook_dependencies_components/Home/HookHome';
import HookMainHeader from './hook_dependencies_components/MainHeader/HookMainHeader';

function Hook() {
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
      <HookMainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <HookLogin onLogin={loginHandler} />}
        {isLoggedIn && <HookHome onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default Hook;
