import React from 'react';

import HookCard from '../UI/Card/HookCard';
import classes from './HookHome.module.css';

const HookHome = (props) => {
  return (
    <HookCard className={classes.home}>
      <h1>Welcome back!</h1>
    </HookCard>
  );
};

export default HookHome;
