import React, { useState, useEffect } from 'react';

import ContextDynamicLogin from './context_dynamic_components/Login/ContextDynamicLogin';
import ContextDynamicHome from './context_dynamic_components/Home/ContextDynamicHome';
import ContextDynamicMainHeader from './context_dynamic_components/MainHeader/ContextDynamicMainHeader';
import ContextDynamicAuthContext from './store/ContextDynamic-auth-context';

function ContextDynamic() {
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
    <ContextDynamicAuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler
      }}
    >
      <ContextDynamicMainHeader />
      <main>
        {!isLoggedIn && <ContextDynamicLogin onLogin={loginHandler} />}
        {isLoggedIn && <ContextDynamicHome onLogout={logoutHandler} />}
      </main>
    </ContextDynamicAuthContext.Provider>
  );
}

export default ContextDynamic;
