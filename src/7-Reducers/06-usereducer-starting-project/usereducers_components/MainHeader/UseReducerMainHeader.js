import React from 'react';

import UseReducerNavigation from './UseReducerNavigation';
import classes from './UseReducerMainHeader.module.css';

const UseReducerMainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <UseReducerNavigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
    </header>
  );
};

export default UseReducerMainHeader;
