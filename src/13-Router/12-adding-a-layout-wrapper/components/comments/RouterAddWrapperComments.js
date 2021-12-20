import { useState } from 'react';

import classes from './RouterAddWrapperComments.module.css';
import RouterAddWrapperNewCommentForm from './RouterAddWrapperNewCommentForm';

const RouterAddWrapperComments = () => {
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
      {isAddingComment && <RouterAddWrapperNewCommentForm />}
      <p>Comments...</p>
    </section>
  );
};

export default RouterAddWrapperComments;
