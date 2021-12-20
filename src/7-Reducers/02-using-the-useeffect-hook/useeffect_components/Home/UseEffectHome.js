import React from 'react';

import UseEffectCard from '../UI/Card/UseEffectCard';
import classes from './UseEffectHome.module.css';

const UseEffectHome = (props) => {
  return (
    <UseEffectCard className={classes.home}>
      <h1>Welcome back!</h1>
    </UseEffectCard>
  );
};

export default UseEffectHome;
