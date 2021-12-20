import classes from './RouterAddWrapperHighlightedQuote.module.css';

const RouterAddWrapperHighlightedQuote = (props) => {
  return (
    <figure className={classes.quote}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </figure>
  );
};

export default RouterAddWrapperHighlightedQuote;
