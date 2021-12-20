import React from 'react';

import ContextApiNavigation from './ContextApiNavigation';
import classes from './ContextApiMainHeader.module.css';

const ContextApiMainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <ContextApiNavigation onLogout={props.onLogout} />
    </header>
  );
};

export default ContextApiMainHeader;
