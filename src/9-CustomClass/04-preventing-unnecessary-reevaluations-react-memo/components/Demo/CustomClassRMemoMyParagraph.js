import React from 'react';

const CustomClassRMemoMyParagraph = (props) => {
  console.log('MyParagraph RUNNING');
  return <p>{props.children}</p>;
};

export default CustomClassRMemoMyParagraph;
