import React from 'react';
import CustomRHooksBackwardCounter from './components/CustomRHooksBackwardCounter';
import CustomRHooksForwardCounter from './components/CustomRHooksForwardCounter';

function CustomRHooks() {
  return (
    <React.Fragment>
      <CustomRHooksForwardCounter />
      <CustomRHooksBackwardCounter />
    </React.Fragment>
  );
}

export default CustomRHooks;
