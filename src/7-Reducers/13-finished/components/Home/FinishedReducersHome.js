import React, { useContext } from 'react';

import FinishedReducersCard from '../UI/Card/FinishedReducersCard';
import FinishedReducersButton from '../UI/Button/FinishedReducersButton';
import classes from './FinishedReducersHome.module.css';
import FinishedReducersAuthContext from '../../store/FinishedReducers-auth-context';

const FinishedReducersHome = (props) => {
  const authCtx = useContext(FinishedReducersAuthContext);

  return (
    <FinishedReducersCard className={classes.home}>
      <h1>Welcome back!</h1>
      <FinishedReducersButton onClick={authCtx.onLogout}>Logout</FinishedReducersButton>
    </FinishedReducersCard>
  );
};

export default FinishedReducersHome;
