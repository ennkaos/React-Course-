import classes from './RouterAddNFoundCommentItem.module.css';

const RouterAddNFoundCommentItem = (props) => {
  return (
    <li className={classes.item}>
      <p>{props.text}</p>
    </li>
  );
};

export default RouterAddNFoundCommentItem;
