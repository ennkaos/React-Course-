import RouterNavCommentItem from './CommentItem';
import classes from './RouterNavCommentsList.module.css';

const RouterNavCommentsList = (props) => {
  return (
    <ul className={classes.comments}>
      {props.comments.map((comment) => (
        <RouterNavCommentItem key={comment.id} text={comment.text} />
      ))}
    </ul>
  );
};

export default RouterNavCommentsList;
