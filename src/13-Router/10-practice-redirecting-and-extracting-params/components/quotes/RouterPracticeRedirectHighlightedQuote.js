import classes from './RouterPracticeRedirectHighlightedQuote.module.css';

const RouterPracticeRedirectHighlightedQuote = (props) => {
  return (
    <figure className={classes.quote}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </figure>
  );
};

export default RouterPracticeRedirectHighlightedQuote;
