import React from 'react';

import ContextApiAuthContext from '../store/ContextApi-auth-context'
import classes from './ContextApiNavigation.module.css';

const ContextApiNavigation = (props) => {
  return (
    <ContextApiAuthContext.Consumer>
      {(ctx) => {
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
      }}
    </ContextApiAuthContext.Consumer>
  );
};

export default ContextApiNavigation;
