import React, { useState, useEffect } from 'react';

import UseContextLogin from './usecontext_components/Login/UseContextLogin';
import UseContextHome from './usecontext_components/Home/UseContextHome';
import UseContextMainHeader from './usecontext_components/MainHeader/UseContextMainHeader';
import UseContextAuthContext from './store/UseContext-auth-context';

function UseContext() {
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
    <UseContextAuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
      }}
    >
      <UseContextMainHeader onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <UseContextLogin onLogin={loginHandler} />}
        {isLoggedIn && <UseContextHome onLogout={logoutHandler} />}
      </main>
    </UseContextAuthContext.Provider>
  );
}

export default UseContext;
