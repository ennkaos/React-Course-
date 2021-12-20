import React from 'react';


const  StateFinishedUI = (props) => {
  const classes = 'card ' + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default StateFinishedUI;
