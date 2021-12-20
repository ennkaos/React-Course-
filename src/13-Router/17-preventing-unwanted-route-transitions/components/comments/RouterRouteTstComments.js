import { useState } from 'react';

import classes from './RouterRouteTstComments.module.css';
import RouterRouteTstNewCommentForm from './RouterRouteTstNewCommentForm';

const RouterRouteTstComments = () => {
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
      {isAddingComment && <RouterRouteTstNewCommentForm />}
      <p>Comments...</p>
    </section>
  );
};

export default RouterRouteTstComments;
