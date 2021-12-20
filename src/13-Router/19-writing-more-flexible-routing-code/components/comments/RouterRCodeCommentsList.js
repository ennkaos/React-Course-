import RouterRCodeCommentItem from './RouterRCodeCommentItem';
import classes from './RouterRCodeCommentsList.module.css';

const RouterRCodeCommentsList = (props) => {
  return (
    <ul className={classes.comments}>
      {props.comments.map((comment) => (
        <RouterRCodeCommentItem key={comment.id} text={comment.text} />
      ))}
    </ul>
  );
};

export default RouterRCodeCommentsList;
