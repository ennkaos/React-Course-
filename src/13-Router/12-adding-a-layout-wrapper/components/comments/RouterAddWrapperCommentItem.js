import classes from './RouterAddWrapperCommentItem.module.css';

const RouterAddWrapperCommentItem = (props) => {
  return (
    <li className={classes.item}>
      <p>{props.text}</p>
    </li>
  );
};

export default RouterAddWrapperCommentItem;
