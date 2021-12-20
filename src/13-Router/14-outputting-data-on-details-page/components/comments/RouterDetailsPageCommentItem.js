import classes from './RouterDetailsPageCommentItem.module.css';

const RouterDetailsPageCommentItem = (props) => {
  return (
    <li className={classes.item}>
      <p>{props.text}</p>
    </li>
  );
};

export default RouterDetailsPageCommentItem;
