import React from 'react';

import './StylingButton.css';

const StylingButton = props => {
  return (
    <button type={props.type} className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default StylingButton;
