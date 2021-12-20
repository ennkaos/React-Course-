import classes from './RouterPracticeNRoutesHighlightedQuote.module.css';

const RouterPracticeNRoutesHighlightedQuote = (props) => {
  return (
    <figure className={classes.quote}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </figure>
  );
};

export default RouterPracticeNRoutesHighlightedQuote;
