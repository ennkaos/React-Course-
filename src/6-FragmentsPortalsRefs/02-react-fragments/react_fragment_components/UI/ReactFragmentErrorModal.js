import React from 'react';

import ReactFragmentCard from './ReactFragmentCard';
import ReactFragmentButton from './ReactFragmentButton';
import classes from './ReactFragmentErrorModal.module.css';

const ReactFragmentErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <ReactFragmentCard className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <ReactFragmentButton onClick={props.onConfirm}>Okay</ReactFragmentButton>
        </footer>
      </ReactFragmentCard>
    </div>
  );
};

export default ReactFragmentErrorModal;
