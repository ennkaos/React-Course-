import { useState } from 'react';

import classes from './RouterPracticeRedirectComments.module.css';
import RouterPracticeRedirectNewCommentForm from './RouterPracticeRedirectNewCommentForm';

const RouterPracticeRedirectComments = () => {
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
      {isAddingComment && <RouterPracticeRedirectNewCommentForm />}
      <p>Comments...</p>
    </section>
  );
};

export default RouterPracticeRedirectComments;
