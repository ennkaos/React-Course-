import React from 'react';

import ContextApiCard from '../UI/Card/ContextApiCard';
import ContextApiButton from '../UI/Button/ContextApiButton';
import classes from './ContextApiHome.module.css';

const ContextApiHome = (props) => {
  return (
    <ContextApiCard className={classes.home}>
      <h1>Welcome back!</h1>
      <ContextApiButton onClick={props.onLogout}>Logout</ContextApiButton>
    </ContextApiCard>
  );
};

export default ContextApiHome;
