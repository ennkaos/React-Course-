import { useState } from 'react';

import classes from './RouterDetailsPageComments.module.css';
import RouterDetailsPageNewCommentForm from './RouterDetailsPageNewCommentForm';

const RouterDetailsPageComments = () => {
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
      {isAddingComment && <RouterDetailsPageNewCommentForm />}
      <p>Comments...</p>
    </section>
  );
};

export default RouterDetailsPageComments;
