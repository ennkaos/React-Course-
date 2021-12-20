import RouterPracticeRedirectCommentItem from './RouterPracticeRedirectCommentItem';
import classes from './RouterPracticeRedirectCommentsList.module.css';

const RouterPracticeRedirectCommentsList = (props) => {
  return (
    <ul className={classes.comments}>
      {props.comments.map((comment) => (
        <RouterPracticeRedirectCommentItem key={comment.id} text={comment.text} />
      ))}
    </ul>
  );
};

export default RouterPracticeRedirectCommentsList;
