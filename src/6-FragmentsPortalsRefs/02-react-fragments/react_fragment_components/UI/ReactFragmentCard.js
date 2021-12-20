import React from 'react';

import classes from './ReactFragmentCard.module.css';

const ReactFragmentCard = (props) => {
  return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
};

export default ReactFragmentCard;
