import React from 'react';

import styles from './DebugButton.module.css';

const DebugButton = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default DebugButton;
