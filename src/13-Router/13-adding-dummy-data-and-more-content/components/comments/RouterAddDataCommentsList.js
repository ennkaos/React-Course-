import RouterAddDataCommentItem from './RouterAddDataCommentItem';
import classes from './RouterAddDataCommentsList.module.css';

const RouterAddDataCommentsList = (props) => {
  return (
    <ul className={classes.comments}>
      {props.comments.map((comment) => (
        <RouterAddDataCommentItem key={comment.id} text={comment.text} />
      ))}
    </ul>
  );
};

export default RouterAddDataCommentsList;
