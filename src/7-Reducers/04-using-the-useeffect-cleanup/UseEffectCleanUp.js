import React, { useState, useEffect } from 'react';

import UseEffectCleanUpLogin from './useeffect_cleanup_components/Login/UseEffectCleanUpLogin';
import UseEffectCleanUpHome from './useeffect_cleanup_components/Home/UseEffectCleanUpHome'
import UseEffectCleanUpMainHeader from './useeffect_cleanup_components/MainHeader/UseEffectCleanUpMainHeader';

function UseEffectCleanUp() {
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
      <UseEffectCleanUpMainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <UseEffectCleanUpLogin onLogin={loginHandler} />}
        {isLoggedIn && <UseEffectCleanUpHome onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default UseEffectCleanUp;
