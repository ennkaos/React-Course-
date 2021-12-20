import { useState } from 'react';

import classes from './RouterQParamsComments.module.css';
import RouterQParamsNewCommentForm from './RouterQParamsNewCommentForm';

const RouterQParamsComments = () => {
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
      {isAddingComment && <RouterQParamsNewCommentForm />}
      <p>Comments...</p>
    </section>
  );
};

export default RouterQParamsComments;
