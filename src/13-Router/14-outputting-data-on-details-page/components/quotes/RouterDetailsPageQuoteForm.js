import { useRef } from 'react';

import RouterDetailsPageCard from '../UI/RouterDetailsPageCard';
import RouterDetailsPageLoadingSpinner from '../UI/RouterDetailsPageLoadingSpinner';
import classes from './RouterDetailsPageQuoteForm.module.css';

const RouterDetailsPageQuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  return (
    <RouterDetailsPageCard>
      <form className={classes.form} onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <RouterDetailsPageLoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor='author'>Author</label>
          <input type='text' id='author' ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='text'>Text</label>
          <textarea id='text' rows='5' ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button className='btn'>Add Quote</button>
        </div>
      </form>
    </RouterDetailsPageCard>
  );
};

export default RouterDetailsPageQuoteForm;
