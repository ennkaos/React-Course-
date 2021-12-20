import React from 'react';

import ReducersNavigation from './ReducersNavigation';
import classes from './ReducersMainHeader.module.css';

const ReducersMainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <ReducersNavigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
    </header>
  );
};

export default ReducersMainHeader;
