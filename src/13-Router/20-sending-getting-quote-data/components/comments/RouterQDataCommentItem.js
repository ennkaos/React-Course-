import classes from './RouterQDataCommentItem.module.css';

const RouterQDataCommentItem = (props) => {
  return (
    <li className={classes.item}>
      <p>{props.text}</p>
    </li>
  );
};

export default RouterQDataCommentItem;
