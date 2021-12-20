import React from 'react';

import './StylingInlineButton.css';

const StylingInlineButton = props => {
  return (
    <button type={props.type} className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default StylingInlineButton;
