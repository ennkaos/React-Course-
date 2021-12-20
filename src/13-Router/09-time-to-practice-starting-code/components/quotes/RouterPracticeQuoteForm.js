import { useRef } from 'react';

import RouterPracticeCard from '../UI/RouterPracticeCard';
import RouterPracticeLoadingSpinner from '../UI/RouterPracticeLoadingSpinner';
import classes from './RouterPracticeQuoteForm.module.css';

const RouterPracticeQuoteForm = (props) => {
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
    <RouterPracticeCard>
      <form className={classes.form} onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <RouterPracticeLoadingSpinner />
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
    </RouterPracticeCard>
  );
};

export default RouterPracticeQuoteForm;
