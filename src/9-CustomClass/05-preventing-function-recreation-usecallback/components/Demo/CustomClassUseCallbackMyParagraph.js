import React from 'react';

const CustomClassUseCallbackMyParagraph = (props) => {
  console.log('MyParagraph RUNNING');
  return <p>{props.children}</p>;
};

export default CustomClassUseCallbackMyParagraph;
