import React from 'react';



const StateUpUI = (props) => {
  const classes = 'card ' + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default StateUpUI ;
