import classes from './RouterRouteTstCommentItem.module.css';

const RouterRouteTstCommentItem = (props) => {
  return (
    <li className={classes.item}>
      <p>{props.text}</p>
    </li>
  );
};

export default RouterRouteTstCommentItem;
