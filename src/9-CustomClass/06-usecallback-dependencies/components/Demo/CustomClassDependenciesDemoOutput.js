import React from 'react';

import CustomClassDependenciesMyParagraph from './CustomClassDependenciesMyParagraph';

const CustomClassDependenciesDemoOutput = (props) => {
  console.log('DemoOutput RUNNING');
  return <CustomClassDependenciesMyParagraph>{props.show ? 'This is new!' : ''}</CustomClassDependenciesMyParagraph>;
};

export default React.memo(CustomClassDependenciesDemoOutput);
