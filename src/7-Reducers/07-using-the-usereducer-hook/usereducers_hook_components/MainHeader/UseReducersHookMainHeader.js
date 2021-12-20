import React from 'react';

import UseReducersHookNavigation from './UseReducersHookNavigation';
import classes from './UseReducersHookMainHeader.module.css';

const UseReducersHookMainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <UseReducersHookNavigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
    </header>
  );
};

export default UseReducersHookMainHeader;
