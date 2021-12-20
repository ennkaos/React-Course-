import React from 'react';

import HookNavigation from './HookNavigation';
import classes from './HookMainHeader.module.css';

const HookMainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <HookNavigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
    </header>
  );
};

export default HookMainHeader;
