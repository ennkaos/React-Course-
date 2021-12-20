import React from 'react';

import UseEffectNavigation from './UseEffectNavigation';
import classes from './UseEffectMainHeader.module.css';

const UseEffectMainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <UseEffectNavigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
    </header>
  );
};

export default UseEffectMainHeader;
