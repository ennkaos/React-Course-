import classes from './RouterPracticeNRoutesCommentItem.module.css';

const RouterPracticeNRoutesCommentItem = (props) => {
  return (
    <li className={classes.item}>
      <p>{props.text}</p>
    </li>
  );
};

export default RouterPracticeNRoutesCommentItem;
