import React from 'react';
import CustomHooksStartBackwardCounter from './components/CustomHooksStartBackwardCounter';
import CustomHooksStartForwardCounter from './components/CustomHooksStartForwardCounter';

function CustomHooksStart() {
  return (
    <React.Fragment>
      <CustomHooksStartForwardCounter />
      <CustomHooksStartBackwardCounter />
    </React.Fragment>
  );
}

export default CustomHooksStart;
