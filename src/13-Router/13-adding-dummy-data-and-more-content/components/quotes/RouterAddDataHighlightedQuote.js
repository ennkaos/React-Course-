import classes from './RouterAddDataHighlightedQuote.module.css';

const RouterAddDataHighlightedQuote = (props) => {
  return (
    <figure className={classes.quote}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </figure>
  );
};

export default RouterAddDataHighlightedQuote;
