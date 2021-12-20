import React from 'react';
import ReactDOM from 'react-dom';

import FinishedFragmentCard from './FinishedFragmentCard';
import FinishedFragmentButton from './FinishedFragmentButton';
import classes from './FinishedFragmentErrorModal.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
    <FinishedFragmentCard className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <FinishedFragmentButton onClick={props.onConfirm}>Okay</FinishedFragmentButton>
      </footer>
    </FinishedFragmentCard>
  );
};

const FinishedFragmentErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
};

export default FinishedFragmentErrorModal;
