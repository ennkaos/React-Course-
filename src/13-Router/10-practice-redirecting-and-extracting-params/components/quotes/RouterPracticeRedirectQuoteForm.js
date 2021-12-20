import { useRef } from 'react';

import RouterPracticeRedirectCard from '../UI/RouterPracticeRedirectCard';
import RouterPracticeRedirectLoadingSpinner from '../UI/RouterPracticeRedirectLoadingSpinner';
import classes from './RouterPracticeRedirectQuoteForm.module.css';

const RouterPracticeRedirectQuoteForm = (props) => {
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
    <RouterPracticeRedirectCard>
      <form className={classes.form} onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <RouterPracticeRedirectLoadingSpinner />
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
    </RouterPracticeRedirectCard>
  );
};

export default RouterPracticeRedirectQuoteForm;
