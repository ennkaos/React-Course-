import classes from './RouterQParamsCommentItem.module.css';

const RouterQParamsCommentItem = (props) => {
  return (
    <li className={classes.item}>
      <p>{props.text}</p>
    </li>
  );
};

export default RouterQParamsCommentItem;
