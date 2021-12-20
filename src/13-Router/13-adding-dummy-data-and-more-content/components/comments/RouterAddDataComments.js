import { useState } from 'react';

import classes from './RouterAddDataComments.module.css';
import RouterAddDataNewCommentForm from './RouterAddDataNewCommentForm';

const RouterAddDataComments = () => {
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
      {isAddingComment && <RouterAddDataNewCommentForm />}
      <p>Comments...</p>
    </section>
  );
};

export default RouterAddDataComments;
