import React from 'react';

import classes from './ReactFragmentButton.module.css';

const ReactFragmentButton = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default ReactFragmentButton;
