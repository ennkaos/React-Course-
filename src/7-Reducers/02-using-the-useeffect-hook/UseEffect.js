import React, { useState, useEffect } from 'react';

import UseEffectLogin from './useeffect_components/Login/UseEffectLogin';
import UseEffectHome from './useeffect_components/Home/UseEffectHome';
import UseEffectMainHeader from './useeffect_components/MainHeader/UseEffectMainHeader';

function UseEffect() {
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
      <UseEffectMainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <UseEffectLogin onLogin={loginHandler} />}
        {isLoggedIn && <UseEffectHome onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default UseEffect;
