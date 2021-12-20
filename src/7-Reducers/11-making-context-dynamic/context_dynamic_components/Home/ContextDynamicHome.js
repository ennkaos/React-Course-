import React from 'react';

import ContextDynamicCard from '../UI/Card/ContextDynamicCard';
import ContextDynamicButton from '../UI/Button/ContextDynamicButton';
import classes from './ContextDynamicHome.module.css';

const ContextDynamicHome = (props) => {
  return (
    <ContextDynamicCard className={classes.home}>
      <h1>Welcome back!</h1>
      <ContextDynamicButton onClick={props.onLogout}>Logout</ContextDynamicButton>
    </ContextDynamicCard>
  );
};

export default ContextDynamicHome;
