import classes from './RouterNavHighlightedQuote.module.css';

const RouterNavHighlightedQuote = (props) => {
  return (
    <figure className={classes.quote}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </figure>
  );
};

export default RouterNavHighlightedQuote;
