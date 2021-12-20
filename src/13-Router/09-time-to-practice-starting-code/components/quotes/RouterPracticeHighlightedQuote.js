import classes from './RouterPracticeHighlightedQuote.module.css';

const RouterPracticeHighlightedQuote = (props) => {
  return (
    <figure className={classes.quote}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </figure>
  );
};

export default RouterPracticeHighlightedQuote;
