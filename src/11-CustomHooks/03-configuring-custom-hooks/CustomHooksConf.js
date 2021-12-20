import React from 'react';
import CustomHooksConfBackwardCounter from './components/CustomHooksConfBackwardCounter';
import CustomHooksConfForwardCounter from './components/CustomHooksConfForwardCounter';

function CustomHooksConf() {
  return (
    <React.Fragment>
      <CustomHooksConfForwardCounter />
      <CustomHooksConfBackwardCounter />
    </React.Fragment>
  );
}

export default CustomHooksConf;
