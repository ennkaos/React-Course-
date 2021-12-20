import React, { useState } from 'react';

import ReducersLogin from './reducers_components/Login/ReducersLogin';
import ReducersHome from './reducers_components/Home/ReducersHome';
import ReducersMainHeader from './reducers_components/MainHeader/ReducersMainHeader';

function Reducers() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <ReducersMainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <ReducersLogin onLogin={loginHandler} />}
        {isLoggedIn && <ReducersHome onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default Reducers;
