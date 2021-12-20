import React, { useContext } from 'react';

import ContextProviderLogin from './context_provider_components/Login/ContextProviderLogin';
import ContextProviderHome from './context_provider_components/Home/ContextProviderHome';
import ContextProviderMainHeader from './context_provider_components/MainHeader/ContextProviderMainHeader';
import ContextProviderAuthContext from './store/ContextProvider-auth-context';

function ContextProvider() {
  const ctx = useContext(ContextProviderAuthContext);

  return (
    <React.Fragment>
      <ContextProviderMainHeader />
      <main>
        {!ctx.isLoggedIn && <ContextProviderLogin />}
        {ctx.isLoggedIn && <ContextProviderHome />}
      </main>
    </React.Fragment>
  );
}

export default ContextProvider;
