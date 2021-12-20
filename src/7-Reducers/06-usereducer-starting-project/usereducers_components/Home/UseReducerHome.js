import React from 'react';

import UseReducerCard from '../UI/Card/UseReducerCard';
import classes from './UseReducerHome.module.css';

const UseReducerHome = (props) => {
  return (
    <UseReducerCard className={classes.home}>
      <h1>Welcome back!</h1>
    </UseReducerCard>
  );
};

export default UseReducerHome;
