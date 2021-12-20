import React from 'react';
import UseEffectCleanUpCard from '../UI/Card/UseEffectCleanUpCard';



import classes from './UseEffectCleanUpHome.module.css';

const UseEffectCleanUpHome = (props) => {
  return (
    <UseEffectCleanUpCard className={classes.home}>
      <h1>Welcome back!</h1>
    </UseEffectCleanUpCard>
  );
};

export default UseEffectCleanUpHome;
