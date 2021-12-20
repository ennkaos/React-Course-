import React from 'react';

import UseEffectCleanUpNavigation from './UseEffectCleanUpNavigation';
import classes from './UseEffectCleanUpMainHeader.module.css';

const UseEffectCleanUpMainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <UseEffectCleanUpNavigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
    </header>
  );
};

export default UseEffectCleanUpMainHeader;
