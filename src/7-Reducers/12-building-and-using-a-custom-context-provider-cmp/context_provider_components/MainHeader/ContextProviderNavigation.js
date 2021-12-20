import React, { useContext } from 'react';

import ContextProviderAuthContext from '../../store/ContextProvider-auth-context';
import classes from './ContextProviderNavigation.module.css';

const ContextProviderNavigation = () => {
  const ctx = useContext(ContextProviderAuthContext);

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

export default ContextProviderNavigation;
