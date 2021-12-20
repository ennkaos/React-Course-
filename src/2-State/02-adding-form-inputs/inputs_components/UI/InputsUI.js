import React from 'react';


const InputsUI = (props) => {
  const classes = 'card ' + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default InputsUI;
