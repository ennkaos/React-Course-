import React from 'react';

import UseContextCard from '../UI/Card/UseContextCard';
import UseContextButton from '../UI/Button/UseContextButton';
import classes from './UseContextHome.module.css';

const UseContextHome = (props) => {
  return (
    <UseContextCard className={classes.home}>
      <h1>Welcome back!</h1>
      <UseContextButton onClick={props.onLogout}>Logout</UseContextButton>
    </UseContextCard>
  );
};

export default UseContextHome;
