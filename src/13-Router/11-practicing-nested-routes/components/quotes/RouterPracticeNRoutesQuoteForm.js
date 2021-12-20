import { useRef } from 'react';

import RouterPracticeNRoutesCard from '../UI/RouterPracticeNRoutesCard';
import RouterPracticeNRoutesLoadingSpinner from '../UI/RouterPracticeNRoutesLoadingSpinner';
import classes from './RouterPracticeNRoutesQuoteForm.module.css';

const RouterPracticeNRoutesQuoteForm = (props) => {
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
    <RouterPracticeNRoutesCard>
      <form className={classes.form} onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <RouterPracticeNRoutesLoadingSpinner />
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
    </RouterPracticeNRoutesCard>
  );
};

export default RouterPracticeNRoutesQuoteForm;
