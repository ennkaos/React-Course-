import { useState } from 'react';

import classes from './RouterNavComments.module.css';
import RouterNavNewCommentForm from './RouterNavNewCommentForm';

const RouterNavComments = () => {
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
      {isAddingComment && <RouterNavNewCommentForm />}
      <p>Comments...</p>
    </section>
  );
};

export default RouterNavComments;
