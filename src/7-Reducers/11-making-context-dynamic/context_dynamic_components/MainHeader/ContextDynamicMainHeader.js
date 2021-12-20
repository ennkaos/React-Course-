import React from 'react';

import ContextDynamicNavigation from './ContextDynamicNavigation';
import classes from './ContextDynamicMainHeader.module.css';

const ContextDynamicMainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <ContextDynamicNavigation />
    </header>
  );
};

export default ContextDynamicMainHeader;
