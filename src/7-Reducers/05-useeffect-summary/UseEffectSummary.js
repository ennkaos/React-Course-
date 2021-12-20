import React, { useState, useEffect } from 'react';

import UseEffectSummaryLogin from './useeffect_summary_components/Login/UseEffectSummaryLogin';
import UseEffectSummaryHome from './useeffect_summary_components/Home/UseEffectSummaryHome';
import UseEffectSummaryMainHeader from './useeffect_summary_components/MainHeader/UseEffectSummaryMainHeader';

function UseEffectSummary() {
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
      <UseEffectSummaryMainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <UseEffectSummaryLogin onLogin={loginHandler} />}
        {isLoggedIn && <UseEffectSummaryHome onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default UseEffectSummary;
