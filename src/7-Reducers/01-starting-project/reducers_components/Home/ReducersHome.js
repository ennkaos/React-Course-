import React from 'react';

import ReducersCard from '../UI/Card/ReducersCard';
import classes from './ReducersHome.module.css';

const ReducersHome = (props) => {
  return (
    <ReducersCard className={classes.home}>
      <h1>Welcome back!</h1>
    </ReducersCard>
  );
};

export default ReducersHome;
