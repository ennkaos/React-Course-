import React, { useContext } from 'react';

import UseContextAuthContext from '../../store/UseContext-auth-context';
import classes from './UseContextNavigation.module.css';

const UseContextNavigation = (props) => {
  const ctx = useContext(UseContextAuthContext);

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
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default UseContextNavigation;
