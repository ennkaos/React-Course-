import React from 'react';

import UseEffectSummaryCard from '../UI/Card/UseEffectSummaryCard';
import classes from './UseEffectSummaryHome.module.css';

const UseEffectSummaryHome = (props) => {
  return (
    <UseEffectSummaryCard className={classes.home}>
      <h1>Welcome back!</h1>
    </UseEffectSummaryCard>
  );
};

export default UseEffectSummaryHome;
