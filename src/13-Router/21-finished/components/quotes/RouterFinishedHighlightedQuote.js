import classes from './RouterFinishedHighlightedQuote.module.css';

const RouterFinishedHighlightedQuote = (props) => {
  return (
    <figure className={classes.quote}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </figure>
  );
};

export default RouterFinishedHighlightedQuote;
