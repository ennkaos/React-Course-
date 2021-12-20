import React from 'react';

import UseReducerUseEffectNavigation from './UseReducerUseEffectNavigation';
import classes from './UseReducerUseEffectMainHeader.module.css';

const UseReducerUseEffectMainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <UseReducerUseEffectNavigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
    </header>
  );
};

export default UseReducerUseEffectMainHeader;
