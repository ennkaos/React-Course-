import { useState } from 'react';

import classes from './RouterRCodeComments.module.css';
import RouterRCodeNewCommentForm from './RouterRCodeNewCommentForm';

const RouterRCodeComments = () => {
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
      {isAddingComment && <RouterRCodeNewCommentForm />}
      <p>Comments...</p>
    </section>
  );
};

export default RouterRCodeComments;
