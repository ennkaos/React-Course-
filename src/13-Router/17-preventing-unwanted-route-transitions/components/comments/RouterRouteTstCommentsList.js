import RouterRouteTstCommentItem from './RouterRouteTstCommentItem';
import classes from './RouterRouteTstCommentsList.module.css';

const RouterRouteTstCommentsList = (props) => {
  return (
    <ul className={classes.comments}>
      {props.comments.map((comment) => (
        <RouterRouteTstCommentItem key={comment.id} text={comment.text} />
      ))}
    </ul>
  );
};

export default RouterRouteTstCommentsList;
