import React from 'react';


const StatefulUI = (props) => {
  const classes = 'card ' + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default StatefulUI;
