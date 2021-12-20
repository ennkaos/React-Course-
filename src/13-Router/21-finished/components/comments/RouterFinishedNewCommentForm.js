import { useRef, useEffect } from 'react';

import RouterFinishedUseHttp from '../../hooks/RouterFinished-use-http';
import { addComment } from '../../lib/RouterFinished-api';
import RouterFinishedLoadingSpinner from '../UI/RouterFinishedLoadingSpinner';
import classes from './RouterFinishedNewCommentForm.module.css';

const RouterFinishedNewCommentForm = (props) => {
  const commentTextRef = useRef();

  const { sendRequest, status, error } = RouterFinishedUseHttp(addComment);

  const { onAddedComment } = props;

  useEffect(() => {
    if (status === 'completed' && !error) {
      onAddedComment();
    }
  }, [status, error, onAddedComment]);

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredText = commentTextRef.current.value;

    // optional: Could validate here

    sendRequest({ commentData: { text: enteredText }, quoteId: props.quoteId });
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === 'pending' && (
        <div className='centered'>
          <RouterFinishedLoadingSpinner />
        </div>
      )}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  );
};

export default RouterFinishedNewCommentForm;
