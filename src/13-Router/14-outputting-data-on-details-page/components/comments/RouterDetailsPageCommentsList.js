import RouterDetailsPageCommentItem from './RouterDetailsPageCommentItem';
import classes from './RouterDetailsPageCommentsList.module.css';

const RouterDetailsPageCommentsList = (props) => {
  return (
    <ul className={classes.comments}>
      {props.comments.map((comment) => (
        <RouterDetailsPageCommentItem key={comment.id} text={comment.text} />
      ))}
    </ul>
  );
};

export default RouterDetailsPageCommentsList;
