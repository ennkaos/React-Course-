import React from 'react';

import styles from './FinishedDebugButton.module.css';

const FinishedDebugButton = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default FinishedDebugButton;
