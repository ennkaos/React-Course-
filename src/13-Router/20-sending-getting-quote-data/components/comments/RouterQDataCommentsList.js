import RouterQDataCommentItem from './RouterQDataCommentItem';
import classes from './RouterQDataCommentsList.module.css';

const RouterQDataCommentsList = (props) => {
  return (
    <ul className={classes.comments}>
      {props.comments.map((comment) => (
        <RouterQDataCommentItem key={comment.id} text={comment.text} />
      ))}
    </ul>
  );
};

export default RouterQDataCommentsList;
