import classes from './RouterFinishedCommentItem.module.css';

const RouterFinishedCommentItem = (props) => {
  return (
    <li className={classes.item}>
      <p>{props.text}</p>
    </li>
  );
};

export default RouterFinishedCommentItem;
