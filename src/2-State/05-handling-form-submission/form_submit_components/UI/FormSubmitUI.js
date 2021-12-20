import React from 'react';



const FormSubmitUI = (props) => {
  const classes = 'card ' + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default FormSubmitUI;
