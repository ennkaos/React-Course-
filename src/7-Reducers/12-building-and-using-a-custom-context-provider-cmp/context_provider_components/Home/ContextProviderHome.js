import React, { useContext } from 'react';

import ContextProviderCard from '../UI/Card/ContextProviderCard';
import ContextProviderButton from '../UI/Button/ContextProviderButton';
import classes from './ContextProviderHome.module.css';
import ContextProviderAuthContext from '../../store/ContextProvider-auth-context';

const ContextProviderHome = (props) => {
  const authCtx = useContext(ContextProviderAuthContext);

  return (
    <ContextProviderCard className={classes.home}>
      <h1>Welcome back!</h1>
      <ContextProviderButton onClick={authCtx.onLogout}>Logout</ContextProviderButton>
    </ContextProviderCard>
  );
};

export default ContextProviderHome;
