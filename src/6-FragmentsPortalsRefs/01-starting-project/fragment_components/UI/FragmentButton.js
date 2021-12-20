import React from 'react';

import classes from './FragmentButton.module.css';

const FragmentButton = (props) => {
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

export default FragmentButton;
