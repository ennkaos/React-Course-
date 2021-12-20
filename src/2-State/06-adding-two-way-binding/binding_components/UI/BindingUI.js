import React from 'react';


const BindingUI = (props) => {
  const classes = 'card ' + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default BindingUI;
