import classes from './RouterAddDataCommentItem.module.css';

const RouterAddDataCommentItem = (props) => {
  return (
    <li className={classes.item}>
      <p>{props.text}</p>
    </li>
  );
};

export default RouterAddDataCommentItem;
