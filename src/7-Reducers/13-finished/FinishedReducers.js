import React, { useContext } from 'react';

import FinishedReducersLogin from './components/Login/FinishedReducersLogin';
import FinishedReducersHome from './components/Home/FinishedReducersHome';
import FinishedReducersMainHeader from './components/MainHeader/FinishedReducersMainHeader';
import FinishedReducersAuthContext from './store/FinishedReducers-auth-context';

function FinishedReducers() {
  const ctx = useContext(FinishedReducersAuthContext);

  return (
    <React.Fragment>
      <FinishedReducersMainHeader />
      <main>
        {!ctx.isLoggedIn && <FinishedReducersLogin />}
        {ctx.isLoggedIn && <FinishedReducersHome />}
      </main>
    </React.Fragment>
  );
}

export default FinishedReducers;
