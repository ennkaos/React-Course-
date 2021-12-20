import RouterAddNFoundCommentItem from './RouterAddNFoundCommentItem';
import classes from './RouterAddNFoundCommentsList.module.css';

const RouterAddNFoundCommentsList = (props) => {
  return (
    <ul className={classes.comments}>
      {props.comments.map((comment) => (
        <RouterAddNFoundCommentItem key={comment.id} text={comment.text} />
      ))}
    </ul>
  );
};

export default RouterAddNFoundCommentsList;
