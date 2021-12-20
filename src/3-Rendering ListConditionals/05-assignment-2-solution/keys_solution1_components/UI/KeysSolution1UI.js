import React from 'react';



const KeysSolution1UI = (props) => {
  const classes = 'card ' + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default KeysSolution1UI;
