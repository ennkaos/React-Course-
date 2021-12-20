import classes from './RouterNavCommentItem.module.css';

const RouterNavCommentItem = (props) => {
  return (
    <li className={classes.item}>
      <p>{props.text}</p>
    </li>
  );
};

export default RouterNavCommentItem;
