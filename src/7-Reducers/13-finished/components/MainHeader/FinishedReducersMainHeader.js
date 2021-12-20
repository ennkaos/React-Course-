import React from 'react';

import FinishedReducersNavigation from './FinishedReducersNavigation';
import classes from './FinishedReducersMainHeader.module.css';

const FinishedReducersMainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <FinishedReducersNavigation />
    </header>
  );
};

export default FinishedReducersMainHeader;
