import RouterQParamsCommentItem from './RouterQParamsCommentItem';
import classes from './RouterQParamsCommentsList.module.css';

const RouterQParamsCommentsList = (props) => {
  return (
    <ul className={classes.comments}>
      {props.comments.map((comment) => (
        <RouterQParamsCommentItem key={comment.id} text={comment.text} />
      ))}
    </ul>
  );
};

export default RouterQParamsCommentsList;
