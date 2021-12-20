import classes from './RouterQParamsHighlightedQuote.module.css';

const RouterQParamsHighlightedQuote = (props) => {
  return (
    <figure className={classes.quote}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </figure>
  );
};

export default RouterQParamsHighlightedQuote;
