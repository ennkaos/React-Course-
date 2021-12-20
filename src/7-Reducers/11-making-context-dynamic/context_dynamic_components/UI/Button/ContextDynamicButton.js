import React from 'react';

import classes from './ContextDynamicButton.module.css';

const ContextDynamicButton = (props) => {
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default ContextDynamicButton;
