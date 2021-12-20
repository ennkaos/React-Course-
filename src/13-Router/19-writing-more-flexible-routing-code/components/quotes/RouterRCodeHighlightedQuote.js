import classes from './RouterRCodeHighlightedQuote.module.css';

const RouterRCodeHighlightedQuote = (props) => {
  return (
    <figure className={classes.quote}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </figure>
  );
};

export default RouterRCodeHighlightedQuote;
