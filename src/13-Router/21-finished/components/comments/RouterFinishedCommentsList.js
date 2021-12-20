import RouterFinishedCommentItem from './RouterFinishedCommentItem';
import classes from './RouterFinishedCommentsList.module.css';

const RouterFinishedCommentsList = (props) => {
  return (
    <ul className={classes.comments}>
      {props.comments.map((comment) => (
        <RouterFinishedCommentItem key={comment.id} text={comment.text} />
      ))}
    </ul>
  );
};

export default RouterFinishedCommentsList;
