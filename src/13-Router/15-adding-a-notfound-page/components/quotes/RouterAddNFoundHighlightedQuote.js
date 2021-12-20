import classes from './RouterAddNFoundHighlightedQuote.module.css';

const RouterAddNFoundHighlightedQuote = (props) => {
  return (
    <figure className={classes.quote}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </figure>
  );
};

export default RouterAddNFoundHighlightedQuote;
