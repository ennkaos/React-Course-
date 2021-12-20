import React, { useState, useRef } from 'react';

import FinishedFragmentCard from '../UI/FinishedFragmentCard';
import FinishedFragmentButton from '../UI/FinishedFragmentButton';
import FinishedFragmentErrorModal from '../UI/FinishedFragmentErrorModal';
import FinishedFragmentWrapper from '../Helpers/FinishedFragmentWrapper';
import classes from './FinishedFragmentAddUser.module.css';

const FinishedFragmentAddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <FinishedFragmentWrapper>
      {error && (
        <FinishedFragmentErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <FinishedFragmentCard className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <FinishedFragmentButton type="submit">Add User</FinishedFragmentButton>
        </form>
      </FinishedFragmentCard>
    </FinishedFragmentWrapper>
  );
};

export default FinishedFragmentAddUser;
