import React from 'react';

import classes from './PortalsButton.module.css';

const PortalsButton = (props) => {
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

export default PortalsButton;
