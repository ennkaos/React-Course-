import React from 'react';


const KeysSolutionUI = (props) => {
  const classes = 'card ' + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default KeysSolutionUI;
