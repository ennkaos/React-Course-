import { useState } from 'react';

import classes from './RouterQDataComments.module.css';
import RouterQDataNewCommentForm from './RouterQDataNewCommentForm';

const RouterQDataComments = () => {
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
      {isAddingComment && <RouterQDataNewCommentForm />}
      <p>Comments...</p>
    </section>
  );
};

export default RouterQDataComments;
