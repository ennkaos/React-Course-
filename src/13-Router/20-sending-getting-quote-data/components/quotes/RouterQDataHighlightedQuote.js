import classes from './RouterQDataHighlightedQuote.module.css';

const RouterQDataHighlightedQuote = (props) => {
  return (
    <figure className={classes.quote}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </figure>
  );
};

export default RouterQDataHighlightedQuote;
