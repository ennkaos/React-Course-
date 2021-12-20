import React from 'react';


const StateSolutionUI = (props) => {
  const classes = 'card ' + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default StateSolutionUI;
