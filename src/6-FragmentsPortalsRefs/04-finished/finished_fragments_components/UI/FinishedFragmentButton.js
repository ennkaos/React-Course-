import React from 'react';

import classes from './FinishedFragmentButton.module.css';

const FinishedFragmentButton = (props) => {
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

export default FinishedFragmentButton;
