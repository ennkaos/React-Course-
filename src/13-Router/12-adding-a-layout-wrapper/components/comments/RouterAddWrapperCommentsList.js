import RouterAddWrapperCommentItem from './RouterAddWrapperCommentItem';
import classes from './RouterAddWrapperCommentsList.module.css';

const RouterAddWrapperCommentsList = (props) => {
  return (
    <ul className={classes.comments}>
      {props.comments.map((comment) => (
        <RouterAddWrapperCommentItem key={comment.id} text={comment.text} />
      ))}
    </ul>
  );
};

export default RouterAddWrapperCommentsList;
