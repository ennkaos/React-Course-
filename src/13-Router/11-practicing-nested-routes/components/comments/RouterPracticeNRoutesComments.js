import { useState } from 'react';

import classes from './RouterPracticeNRoutesComments.module.css';
import RouterPracticeNRoutesNewCommentForm from './RouterPracticeNRoutesNewCommentForm';

const RouterPracticeNRoutesComments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <RouterPracticeNRoutesNewCommentForm />}
      <p>Comments...</p>
    </section>
  );
};

export default RouterPracticeNRoutesComments;
