import React, { useState, useEffect } from 'react';

import ContextApiLogin from './context_api_components/Login/ContextApiLogin';
import ContextApiHome from './context_api_components/Home/ContextApiHome';
import ContextApiMainHeader from './context_api_components/MainHeader/ContextApiMainHeader';
import ContextApiAuthContext from './store/ContextApiauth-context';

function ContextApi() {
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
    <ContextApiAuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
      }}
    >
      <ContextApiMainHeader onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <ContextApiLogin onLogin={loginHandler} />}
        {isLoggedIn && <ContextApiHome onLogout={logoutHandler} />}
      </main>
    </ContextApiAuthContext.Provider>
  );
}

export default ContextApi;
