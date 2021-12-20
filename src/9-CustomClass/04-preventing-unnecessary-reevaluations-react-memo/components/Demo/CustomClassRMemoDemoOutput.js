import React from 'react';

import CustomClassRMemoMyParagraph from './CustomClassRMemoMyParagraph';

const CustomClassRMemoDemoOutput = (props) => {
  console.log('DemoOutput RUNNING');
  return <CustomClassRMemoMyParagraph>{props.show ? 'This is new!' : ''}</CustomClassRMemoMyParagraph>;
};

export default React.memo(CustomClassRMemoDemoOutput);
