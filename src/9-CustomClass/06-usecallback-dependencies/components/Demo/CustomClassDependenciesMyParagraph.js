import React from 'react';

const CustomClassDependenciesMyParagraph = (props) => {
  console.log('MyParagraph RUNNING');
  return <p>{props.children}</p>;
};

export default CustomClassDependenciesMyParagraph;
