import React from 'react';

import ContextProviderNavigation from './ContextProviderNavigation';
import classes from './ContextProviderMainHeader.module.css';

const ContextProviderMainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <ContextProviderNavigation />
    </header>
  );
};

export default ContextProviderMainHeader;
