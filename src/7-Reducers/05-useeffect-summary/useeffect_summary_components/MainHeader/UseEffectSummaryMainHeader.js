import React from 'react';

import UseEffectSummaryNavigation from './UseEffectSummaryNavigation';
import classes from './UseEffectSummaryMainHeader.module.css';

const UseEffectSummaryMainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <UseEffectSummaryNavigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
    </header>
  );
};

export default UseEffectSummaryMainHeader;
