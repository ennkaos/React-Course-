import RouterPracticeNRoutesCommentItem from './RouterPracticeNRoutesCommentItem';
import classes from './RouterPracticeNRoutesCommentsList.module.css';

const RouterPracticeNRoutesCommentsList = (props) => {
  return (
    <ul className={classes.comments}>
      {props.comments.map((comment) => (
        <RouterPracticeNRoutesCommentItem key={comment.id} text={comment.text} />
      ))}
    </ul>
  );
};

export default RouterPracticeNRoutesCommentsList;
