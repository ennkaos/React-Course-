import React, { useContext } from 'react';

import ContextDynamicAuthContext from '../../store/ContextDynamic-auth-context';
import classes from './ContextDynamicNavigation.module.css';

const ContextDynamicNavigation = () => {
  const ctx = useContext(ContextDynamicAuthContext);

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

export default ContextDynamicNavigation;
