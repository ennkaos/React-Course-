import React, { useContext } from 'react';

import FinishedReducersAuthContext from '../../store/FinishedReducers-auth-context';
import classes from './FinishedReducersNavigation.module.css';

const FinishedReducersNavigation = () => {
  const ctx = useContext(FinishedReducersAuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default FinishedReducersNavigation;
