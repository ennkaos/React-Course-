import React from 'react';

import FragmentCard from './FragmentCard';
import FragmentButton from './FragmentButton';
import classes from './FragmentErrorModal.module.css';

const FragmentErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <FragmentCard className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <FragmentButton onClick={props.onConfirm}>Okay</FragmentButton>
        </footer>
      </FragmentCard>
    </div>
  );
};

export default FragmentErrorModal;
