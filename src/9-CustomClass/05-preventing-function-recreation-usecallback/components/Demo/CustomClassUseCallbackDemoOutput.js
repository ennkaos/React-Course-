import React from 'react';

import CustomClassUseCallbackMyParagraph from './CustomClassUseCallbackMyParagraph';

const CustomClassUseCallbackDemoOutput = (props) => {
  console.log('DemoOutput RUNNING');
  return <CustomClassUseCallbackMyParagraph>{props.show ? 'This is new!' : ''}</CustomClassUseCallbackMyParagraph>;
};

export default React.memo(CustomClassUseCallbackDemoOutput);
