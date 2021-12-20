import React from 'react';

import './StylingClassesButton.css';

const StylingClassesButton = props => {
  return (
    <button type={props.type} className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default StylingClassesButton;
