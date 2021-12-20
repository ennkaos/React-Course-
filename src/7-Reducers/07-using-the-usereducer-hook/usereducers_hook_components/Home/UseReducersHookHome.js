import React from 'react';

import UseReducersHookCard from '../UI/Card/UseReducersHookCard';
import classes from './UseReducersHookHome.module.css';

const UseReducersHookHome = (props) => {
  return (
    <UseReducersHookCard className={classes.home}>
      <h1>Welcome back!</h1>
    </UseReducersHookCard>
  );
};

export default UseReducersHookHome;
