import React from 'react';

const CustomClassCloserDemoOutput = (props) => {
  console.log('DemoOutput RUNNING');
  return <p>{props.show ? 'This is new!' : ''}</p>;
};

export default CustomClassCloserDemoOutput;
