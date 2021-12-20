import classes from './RouterPracticeRedirectCommentItem.module.css';

const RouterPracticeRedirectCommentItem = (props) => {
  return (
    <li className={classes.item}>
      <p>{props.text}</p>
    </li>
  );
};

export default RouterPracticeRedirectCommentItem;
