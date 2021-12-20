import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import classes from './RouterFinishedComments.module.css';
import RouterFinishedNewCommentForm from './RouterFinishedNewCommentForm';
import RouterFinishedUseHttp from '../../hooks/RouterFinished-use-http';
import { getAllComments } from '../../lib/RouterFinished-api';
import RouterFinishedLoadingSpinner from '../UI/RouterFinishedLoadingSpinner';
import RouterFinishedCommentsList from './RouterFinishedCommentsList';

const RouterFinishedComments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();

  const { quoteId } = params;

  const { sendRequest, status, data: loadedComments } = RouterFinishedUseHttp(getAllComments);

  useEffect(() => {
    sendRequest(quoteId);
  }, [quoteId, sendRequest]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addedCommentHandler = useCallback(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  let comments;

  if (status === 'pending') {
    comments = (
      <div className='centered'>
        <RouterFinishedLoadingSpinner />
      </div>
    );
  }

  if (status === 'completed' && loadedComments && loadedComments.length > 0) {
    comments = <RouterFinishedCommentsList comments={loadedComments} />;
  }

  if (
    status === 'completed' &&
    (!loadedComments || loadedComments.length === 0)
  ) {
    comments = <p className='centered'>No comments were added yet!</p>;
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <RouterFinishedNewCommentForm
          quoteId={quoteId}
          onAddedComment={addedCommentHandler}
        />
      )}
      {comments}
    </section>
  );
};

export default RouterFinishedComments;
