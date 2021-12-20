import React from 'react';


const UpdateStateUI = (props) => {
  const classes = 'card ' + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default UpdateStateUI;
