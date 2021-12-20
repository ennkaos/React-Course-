import React from 'react';

import UseContextNavigation from './UseContextNavigation';
import classes from './UseContextMainHeader.module.css';

const UseContextMainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <UseContextNavigation onLogout={props.onLogout} />
    </header>
  );
};

export default UseContextMainHeader;
