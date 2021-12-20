import React from 'react';

import classes from './CustomClassRMemoButton.module.css';

const CustomClassRMemoButton = (props) => {
  console.log('Button RUNNING');
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

export default CustomClassRMemoButton;
