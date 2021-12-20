import React from 'react';

import './KeysFinishedUI.css'

const KeysFinishedUI = (props) => {
  const classes = 'card ' + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default  KeysFinishedUI;
